import React, { useEffect, useState } from 'react';

type TeamState = {
  points: number; // 0..3 where 0=>0,1=>15,2=>30,3=>40
  games: number;
  sets: number;
};

type Snapshot = {
  teamA: TeamState;
  teamB: TeamState;
  advantage: 'A' | 'B' | null;
};

const POINT_LABELS = ['0', '15', '30', '40'];

function clone(s: Snapshot): Snapshot {
  return {
    teamA: { ...s.teamA },
    teamB: { ...s.teamB },
    advantage: s.advantage,
  };
}

export default function Scoreboard() {
  const initial: Snapshot = {
    teamA: { points: 0, games: 0, sets: 0 },
    teamB: { points: 0, games: 0, sets: 0 },
    advantage: null,
  };

  const [state, setState] = useState<Snapshot>(() => {
    try {
      const raw = localStorage.getItem('padel_score');
      return raw ? JSON.parse(raw) : initial;
    } catch {
      return initial;
    }
  });

  const [history, setHistory] = useState<Snapshot[]>([]);

  useEffect(() => {
    localStorage.setItem('padel_score', JSON.stringify(state));
  }, [state]);

  const pushHistory = (s: Snapshot) => setHistory(h => [...h, clone(s)]);

  const winGame = (s: Snapshot, winner: 'A' | 'B') => {
    const next = clone(s);
    if (winner === 'A') {
      next.teamA.games += 1;
    } else {
      next.teamB.games += 1;
    }
    // reset points and advantage
    next.teamA.points = 0;
    next.teamB.points = 0;
    next.advantage = null;

    // check for set
    const a = next.teamA.games;
    const b = next.teamB.games;
    if ((a >= 6 || b >= 6) && Math.abs(a - b) >= 2) {
      if (a > b) { next.teamA.sets += 1; } else { next.teamB.sets += 1; }
      next.teamA.games = 0; next.teamB.games = 0;
    }

    return next;
  };

  const pointWon = (which: 'A' | 'B') => {
    pushHistory(state);
    setState(s => {
      const next = clone(s);
      const A = next.teamA;
      const B = next.teamB;

      if (which === 'A') {
        // advantage handling
        if (next.advantage === 'A') {
          return winGame(next, 'A');
        }
        if (next.advantage === 'B') {
          next.advantage = null; return next;
        }

        if (A.points >= 3 && B.points >= 3) {
          // deuce -> give advantage
          next.advantage = 'A';
          return next;
        }

        if (A.points < 3) { A.points += 1; return next; }

        // A.points ===3 and B.points <3 -> win game
        if (A.points === 3 && B.points < 3) {
          return winGame(next, 'A');
        }
      } else {
        if (next.advantage === 'B') {
          return winGame(next, 'B');
        }
        if (next.advantage === 'A') { next.advantage = null; return next; }
        if (A.points >= 3 && B.points >= 3) { next.advantage = 'B'; return next; }
        if (B.points < 3) { B.points += 1; return next; }
        if (B.points === 3 && A.points < 3) { return winGame(next, 'B'); }
      }

      return next;
    });
  };

  const undo = () => {
    setHistory(h => {
      if (h.length === 0) return h;
      const prev = h[h.length - 1];
      setState(clone(prev));
      return h.slice(0, -1);
    });
  };

  const reset = () => {
    pushHistory(state);
    setState(initial);
  };

  const label = (team: TeamState, other: TeamState, adv: 'A' | 'B' | null, isA: boolean) => {
    if (adv && ((adv === 'A' && isA) || (adv === 'B' && !isA))) return 'A';
    if (adv && ((adv === 'A' && !isA) || (adv === 'B' && isA))) return '-';
    return POINT_LABELS[team.points] ?? '0';
  };

  return (
    <div className="max-w-3xl mx-auto text-white">
      <div className="mb-8 flex justify-center">
        <div className="px-6 py-3 rounded-xl bg-zinc-900 border border-white/10 shadow-sm">
          <div className="text-center font-black italic uppercase text-3xl">Scoreboard</div>
          <div className="text-zinc-400 text-xs mt-1">Padel / Tennis style scoring</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-6 bg-white/3 rounded-2xl text-center">
          <div className="text-zinc-400 text-xs uppercase">Team A</div>
          <div className="text-6xl font-extrabold mt-2">{label(state.teamA, state.teamB, state.advantage, true)}</div>
          <div className="text-sm text-zinc-300 mt-2">Games: {state.teamA.games} • Sets: {state.teamA.sets}</div>
        </div>
        <div className="p-6 bg-white/3 rounded-2xl text-center">
          <div className="text-zinc-400 text-xs uppercase">Team B</div>
          <div className="text-6xl font-extrabold mt-2">{label(state.teamB, state.teamA, state.advantage, false)}</div>
          <div className="text-sm text-zinc-300 mt-2">Games: {state.teamB.games} • Sets: {state.teamB.sets}</div>
        </div>
      </div>

      <div className="flex gap-4 justify-center mb-6">
        <button onClick={() => pointWon('A')} className="px-6 py-3 bg-[#d4ff00] rounded-lg font-bold text-black">Point A</button>
        <button onClick={() => pointWon('B')} className="px-6 py-3 bg-white/10 rounded-lg font-bold text-white">Point B</button>
      </div>

      <div className="flex gap-4 justify-center">
        <button onClick={undo} disabled={history.length === 0} className="px-4 py-2 rounded-lg border border-white/10 text-zinc-300 disabled:opacity-40">Undo</button>
        <button onClick={reset} className="px-4 py-2 rounded-lg border border-white/10 text-zinc-300">Reset</button>
      </div>
    </div>
  );
}
