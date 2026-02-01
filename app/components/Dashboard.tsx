import { useState, useEffect, JSX } from 'react';
import { Menu, Trophy, User, Bell, TrendingUp, Users, Zap, Circle, Clock, MapPin, Calendar, BarChart3, Activity, Target, TrendingDown, Medal } from 'lucide-react';


interface DashboardProps {
  onNavigate: (tab: string) => void;
  onLogoClick: () => void;
  userRole?: string;
}

export default function Dashboard({ onNavigate, onLogoClick, userRole }: DashboardProps): JSX.Element {
  return (
    <div className="min-h-screen dark">
      {/* Background gradient overlay */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 20% 20%, rgba(212, 255, 0, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(212, 255, 0, 0.02) 0%, transparent 50%)',
        }}
      />
      
      {/* Main content */}
      <div className="relative z-10">
        <Header onLogoClick={onLogoClick} />
        <HeroStats />
        <LiveMatches />
        <QuickStats />
        <UpcomingMatches />
        <PlayerLeaderboard />
        
        {/* Footer */}
        <footer className="mx-4 mb-8 mt-16">
          <div className="max-w-[2000px] mx-auto">
            <div 
              className="rounded-2xl p-8 backdrop-blur-xl border"
              style={{
                background: 'rgba(26, 26, 26, 0.4)',
                borderColor: 'rgba(212, 255, 0, 0.15)',
              }}
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                  <h3 className="text-white mb-2">SUMMA PADEL</h3>
                  <p className="text-white/60 text-sm">
                    Professional Padel Management System
                  </p>
                </div>
                
                <div className="flex items-center gap-6 text-sm text-white/60">
                  <a href="#" className="hover:text-[#d4ff00] transition-colors duration-300">Privacy</a>
                  <a href="#" className="hover:text-[#d4ff00] transition-colors duration-300">Terms</a>
                  <a href="#" className="hover:text-[#d4ff00] transition-colors duration-300">Support</a>
                  <a href="#" className="hover:text-[#d4ff00] transition-colors duration-300">Contact</a>
                </div>
                
                <div className="text-sm text-white/60">
                  © 2026 Summa Padel. All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

// Header Component
function Header({ onLogoClick }: { onLogoClick: () => void }) {
  function onNavigate(tab: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-[2000px]">
        <div 
          className="m-4 rounded-2xl px-6 py-4 backdrop-blur-xl border"
          style={{
            background: 'rgba(26, 26, 26, 0.4)',
            borderColor: 'rgba(212, 255, 0, 0.15)',
          }}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div onClick={onLogoClick} className="flex items-center gap-3 cursor-pointer" 
            
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #d4ff00 0%, #a8cc00 100%)' }}>
                <Trophy className="w-6 h-6 text-black" />
              </div>
              <h1 className="text-2xl tracking-tight" style={{ color: '#d4ff00' }}>
                SUMMA PADEL
              </h1>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-white hover:text-[#d4ff00] transition-colors duration-300">Dashboard</a>
              <a href="#" className="text-white/70 hover:text-[#d4ff00] transition-colors duration-300">Matches</a>
              <a href="#" className="text-white/70 hover:text-[#d4ff00] transition-colors duration-300">Rankings</a>
              <a href="#" className="text-white/70 hover:text-[#d4ff00] transition-colors duration-300">Players</a>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button 
                className="relative p-2 rounded-lg hover:bg-white/5 transition-colors duration-300"
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5 text-white" />
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full" style={{ background: '#d4ff00' }}></span>
              </button>
              <button onClick={() => onNavigate('profile')}
                className="p-2 rounded-lg hover:bg-white/5 transition-colors duration-300"
                aria-label="User profile"
              >
                <User className="w-5 h-5 text-white" />
              </button>
              <button 
                className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors duration-300"
                aria-label="Menu"
              >
                <Menu className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

// Hero Stats Component
function HeroStats() {
  const stats = [
    {
      icon: Trophy,
      label: 'Active Matches',
      value: '12',
      trend: '+3 today',
      trendUp: true,
    },
    {
      icon: Users,
      label: 'Players Online',
      value: '847',
      trend: '+127',
      trendUp: true,
    },
    {
      icon: Zap,
      label: 'Avg Match Time',
      value: '42min',
      trend: '-5min',
      trendUp: false,
    },
    {
      icon: TrendingUp,
      label: 'Win Rate',
      value: '68%',
      trend: '+12%',
      trendUp: true,
    },
  ];

  return (
    <div className="mt-28 mb-8 mx-4">
      <div className="max-w-[2000px] mx-auto">
        <div className="mb-6">
          <h2 className="text-white mb-2">Dashboard Overview</h2>
          <p className="text-white/60">Real-time statistics and match insights</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 backdrop-blur-xl border transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              style={{
                background: 'rgba(26, 26, 26, 0.4)',
                borderColor: 'rgba(212, 255, 0, 0.15)',
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div 
                  className="p-3 rounded-xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(212, 255, 0, 0.1) 0%, rgba(212, 255, 0, 0.05) 100%)',
                  }}
                >
                  <stat.icon className="w-6 h-6" style={{ color: '#d4ff00' }} />
                </div>
                <div className={`px-2 py-1 rounded-lg text-xs ${stat.trendUp ? 'bg-green-500/10 text-green-400' : 'bg-blue-500/10 text-blue-400'}`}>
                  {stat.trend}
                </div>
              </div>
              
              <div>
                <p className="text-white/60 text-sm mb-1">{stat.label}</p>
                <p className="text-3xl text-white" style={{ fontStyle: 'italic' }}>
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Live Match Card Component
interface TeamScore {
  name: string;
  player1: string;
  player2: string;
  score: number;
  sets: number[];
}

interface Match {
  id: string;
  status: 'live' | 'upcoming' | 'finished';
  court: string;
  time: string;
  duration?: string;
  team1: TeamScore;
  team2: TeamScore;
}

interface LiveMatchCardProps {
  match: Match;
}

function LiveMatchCard({ match }: LiveMatchCardProps) {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    if (match.status === 'live') {
      const interval = setInterval(() => {
        setPulse(prev => !prev);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [match.status]);

  const isLive = match.status === 'live';
  const team1Winning = match.team1.score > match.team2.score;
  const team2Winning = match.team2.score > match.team1.score;

  return (
    <div
      className="rounded-2xl p-6 backdrop-blur-xl border transition-all duration-300 hover:scale-[1.02] cursor-pointer relative overflow-hidden"
      style={{
        background: 'rgba(26, 26, 26, 0.4)',
        borderColor: isLive ? 'rgba(212, 255, 0, 0.3)' : 'rgba(212, 255, 0, 0.15)',
      }}
    >
      {/* Live indicator gradient overlay */}
      {isLive && (
        <div 
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, #d4ff00 0%, transparent 100%)',
          }}
        />
      )}

      {/* Header */}
      <div className="flex items-center justify-between mb-6 relative z-10">
        <div className="flex items-center gap-3">
          {isLive ? (
            <div className="flex items-center gap-2 px-3 py-1 rounded-full" style={{ background: 'rgba(212, 255, 0, 0.1)' }}>
              <Circle 
                className={`w-2 h-2 fill-current transition-opacity duration-500 ${pulse ? 'opacity-100' : 'opacity-50'}`}
                style={{ color: '#d4ff00' }}
              />
              <span className="text-xs uppercase tracking-wider" style={{ color: '#d4ff00' }}>Live</span>
            </div>
          ) : (
            <div className="px-3 py-1 rounded-full bg-white/5">
              <span className="text-xs text-white/60 uppercase tracking-wider">{match.status}</span>
            </div>
          )}
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <MapPin className="w-4 h-4" />
            <span>{match.court}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-white/60 text-sm">
          <Clock className="w-4 h-4" />
          <span>{isLive && match.duration ? match.duration : match.time}</span>
        </div>
      </div>

      {/* Teams and Scores */}
      <div className="space-y-4 relative z-10">
        {/* Team 1 */}
        <div className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${team1Winning && isLive ? 'bg-white/5' : 'bg-transparent'}`}>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4" style={{ color: team1Winning && isLive ? '#d4ff00' : '#8a8a8a' }} />
              <h4 className="text-white" style={{ fontStyle: 'italic' }}>{match.team1.name}</h4>
            </div>
            <div className="text-sm text-white/60 space-y-1">
              <p>{match.team1.player1}</p>
              <p>{match.team1.player2}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Set scores */}
            <div className="flex gap-2">
              {match.team1.sets.map((setScore, idx) => (
                <div 
                  key={idx}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: team1Winning && isLive ? '#d4ff00' : 'white'
                  }}
                >
                  {setScore}
                </div>
              ))}
            </div>
            
            {/* Total score */}
            <div 
              className="text-4xl min-w-[60px] text-right"
              style={{ 
                fontStyle: 'italic',
                color: team1Winning && isLive ? '#d4ff00' : 'white'
              }}
            >
              {match.team1.score}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Team 2 */}
        <div className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${team2Winning && isLive ? 'bg-white/5' : 'bg-transparent'}`}>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4" style={{ color: team2Winning && isLive ? '#d4ff00' : '#8a8a8a' }} />
              <h4 className="text-white" style={{ fontStyle: 'italic' }}>{match.team2.name}</h4>
            </div>
            <div className="text-sm text-white/60 space-y-1">
              <p>{match.team2.player1}</p>
              <p>{match.team2.player2}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Set scores */}
            <div className="flex gap-2">
              {match.team2.sets.map((setScore, idx) => (
                <div 
                  key={idx}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: team2Winning && isLive ? '#d4ff00' : 'white'
                  }}
                >
                  {setScore}
                </div>
              ))}
            </div>
            
            {/* Total score */}
            <div 
              className="text-4xl min-w-[60px] text-right"
              style={{ 
                fontStyle: 'italic',
                color: team2Winning && isLive ? '#d4ff00' : 'white'
              }}
            >
              {match.team2.score}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Live Matches Component
function LiveMatches() {
  const matches = [
    {
      id: '1',
      status: 'live' as const,
      court: 'Court 1',
      time: '14:30',
      duration: '42:18',
      team1: {
        name: 'Thunder Strike',
        player1: 'Carlos Martinez',
        player2: 'Diego Fernandez',
        score: 6,
        sets: [6, 4],
      },
      team2: {
        name: 'Ace Breakers',
        player1: 'Juan Rodriguez',
        player2: 'Pablo Sanchez',
        score: 3,
        sets: [4, 3],
      },
    },
    {
      id: '2',
      status: 'live' as const,
      court: 'Court 2',
      time: '15:00',
      duration: '28:45',
      team1: {
        name: 'Net Warriors',
        player1: 'Miguel Torres',
        player2: 'Javier Lopez',
        score: 4,
        sets: [6, 4],
      },
      team2: {
        name: 'Smash Kings',
        player1: 'Antonio Garcia',
        player2: 'Rafael Perez',
        score: 5,
        sets: [4, 5],
      },
    },
    {
      id: '3',
      status: 'live' as const,
      court: 'Court 3',
      time: '15:30',
      duration: '15:22',
      team1: {
        name: 'Power Duo',
        player1: 'Fernando Gomez',
        player2: 'Luis Morales',
        score: 2,
        sets: [6, 2],
      },
      team2: {
        name: 'Elite Force',
        player1: 'David Ruiz',
        player2: 'Sergio Diaz',
        score: 1,
        sets: [3, 1],
      },
    },
    {
      id: '4',
      status: 'upcoming' as const,
      court: 'Court 4',
      time: '16:00',
      team1: {
        name: 'Victory Squad',
        player1: 'Alberto Jimenez',
        player2: 'Manuel Castro',
        score: 0,
        sets: [0, 0],
      },
      team2: {
        name: 'Champions',
        player1: 'Ricardo Vargas',
        player2: 'Jorge Romero',
        score: 0,
        sets: [0, 0],
      },
    },
  ];

  return (
    <div className="mx-4 mb-8">
      <div className="max-w-[2000px] mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-white mb-2">Live Matches</h2>
            <p className="text-white/60">Real-time match updates and scoring</p>
          </div>
          <button 
            className="px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#d4ff00]/20"
            style={{
              background: 'linear-gradient(135deg, #d4ff00 0%, #a8cc00 100%)',
              color: '#0a0a0a',
            }}
          >
            <span style={{ fontStyle: 'italic' }}>View All Matches</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {matches.map((match) => (
            <LiveMatchCard key={match.id} match={match} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Quick Stats Component
function QuickStats() {
  return (
    <div className="mx-4 mb-8">
      <div className="max-w-[2000px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Performance Chart */}
          <div
            className="rounded-2xl p-6 backdrop-blur-xl border"
            style={{
              background: 'rgba(26, 26, 26, 0.4)',
              borderColor: 'rgba(212, 255, 0, 0.15)',
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div 
                className="p-3 rounded-xl"
                style={{ background: 'rgba(212, 255, 0, 0.1)' }}
              >
                <BarChart3 className="w-6 h-6" style={{ color: '#d4ff00' }} />
              </div>
              <div>
                <h4 className="text-white">Weekly Performance</h4>
                <p className="text-white/60 text-sm">Last 7 days</p>
              </div>
            </div>
            
            <div className="space-y-3">
              {[
                { day: 'Mon', value: 75 },
                { day: 'Tue', value: 60 },
                { day: 'Wed', value: 85 },
                { day: 'Thu', value: 70 },
                { day: 'Fri', value: 90 },
                { day: 'Sat', value: 65 },
                { day: 'Sun', value: 80 },
              ].map((item) => (
                <div key={item.day} className="flex items-center gap-3">
                  <span className="text-white/60 text-sm w-10">{item.day}</span>
                  <div className="flex-1 h-2 rounded-full bg-white/5 overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-500"
                      style={{ 
                        width: `${item.value}%`,
                        background: 'linear-gradient(90deg, #d4ff00 0%, #a8cc00 100%)'
                      }}
                    />
                  </div>
                  <span className="text-white text-sm w-10 text-right">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Stats */}
          <div
            className="rounded-2xl p-6 backdrop-blur-xl border"
            style={{
              background: 'rgba(26, 26, 26, 0.4)',
              borderColor: 'rgba(212, 255, 0, 0.15)',
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div 
                className="p-3 rounded-xl"
                style={{ background: 'rgba(212, 255, 0, 0.1)' }}
              >
                <Activity className="w-6 h-6" style={{ color: '#d4ff00' }} />
              </div>
              <div>
                <h4 className="text-white">Activity Overview</h4>
                <p className="text-white/60 text-sm">This month</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white/60 text-sm">Matches Played</span>
                  <span className="text-white" style={{ fontStyle: 'italic' }}>28</span>
                </div>
                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <div 
                    className="h-full rounded-full"
                    style={{ 
                      width: '70%',
                      background: 'linear-gradient(90deg, #d4ff00 0%, #a8cc00 100%)'
                    }}
                  />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white/60 text-sm">Hours Played</span>
                  <span className="text-white" style={{ fontStyle: 'italic' }}>42h</span>
                </div>
                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <div 
                    className="h-full rounded-full"
                    style={{ 
                      width: '85%',
                      background: 'linear-gradient(90deg, #00ff88 0%, #00cc6a 100%)'
                    }}
                  />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white/60 text-sm">Win Streak</span>
                  <span className="text-white" style={{ fontStyle: 'italic' }}>7</span>
                </div>
                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <div 
                    className="h-full rounded-full"
                    style={{ 
                      width: '60%',
                      background: 'linear-gradient(90deg, #00d4ff 0%, #0099bb 100%)'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Badge */}
          <div
            className="rounded-2xl p-6 backdrop-blur-xl border relative overflow-hidden"
            style={{
              background: 'rgba(26, 26, 26, 0.4)',
              borderColor: 'rgba(212, 255, 0, 0.15)',
            }}
          >
            <div 
              className="absolute inset-0 opacity-5"
              style={{
                background: 'radial-gradient(circle at 50% 50%, #d4ff00 0%, transparent 70%)',
              }}
            />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="p-3 rounded-xl"
                  style={{ background: 'rgba(212, 255, 0, 0.1)' }}
                >
                  <Target className="w-6 h-6" style={{ color: '#d4ff00' }} />
                </div>
                <div>
                  <h4 className="text-white">Latest Achievement</h4>
                  <p className="text-white/60 text-sm">Unlocked today</p>
                </div>
              </div>
              
              <div className="text-center py-8">
                <div 
                  className="w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4"
                  style={{
                    background: 'linear-gradient(135deg, rgba(212, 255, 0, 0.2) 0%, rgba(212, 255, 0, 0.05) 100%)',
                    border: '3px solid rgba(212, 255, 0, 0.3)',
                  }}
                >
                  <span className="text-5xl">🏆</span>
                </div>
                <h3 className="text-white mb-2">Perfect Week</h3>
                <p className="text-white/60 text-sm">
                  Won all matches this week
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Upcoming Matches Component
function UpcomingMatches() {
  const upcomingMatches = [
    {
      id: '1',
      date: 'Today',
      time: '16:00',
      court: 'Court 1',
      team1: 'Victory Squad',
      team2: 'Champions',
      players1: ['Alberto Jimenez', 'Manuel Castro'],
      players2: ['Ricardo Vargas', 'Jorge Romero'],
    },
    {
      id: '2',
      date: 'Today',
      time: '17:30',
      court: 'Court 2',
      team1: 'Rising Stars',
      team2: 'Pro Masters',
      players1: ['Eduardo Silva', 'Marcos Herrera'],
      players2: ['Pedro Alvarez', 'Oscar Mendez'],
    },
    {
      id: '3',
      date: 'Tomorrow',
      time: '14:00',
      court: 'Court 1',
      team1: 'Thunder Strike',
      team2: 'Elite Force',
      players1: ['Carlos Martinez', 'Diego Fernandez'],
      players2: ['David Ruiz', 'Sergio Diaz'],
    },
    {
      id: '4',
      date: 'Tomorrow',
      time: '15:30',
      court: 'Court 3',
      team1: 'Net Warriors',
      team2: 'Power Duo',
      players1: ['Miguel Torres', 'Javier Lopez'],
      players2: ['Fernando Gomez', 'Luis Morales'],
    },
  ];

  return (
    <div className="mx-4 mb-8">
      <div className="max-w-[2000px] mx-auto">
        <div className="mb-6">
          <h2 className="text-white mb-2">Upcoming Matches</h2>
          <p className="text-white/60">Scheduled matches for the next 48 hours</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {upcomingMatches.map((match) => (
            <div
              key={match.id}
              className="rounded-2xl p-6 backdrop-blur-xl border transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              style={{
                background: 'rgba(26, 26, 26, 0.4)',
                borderColor: 'rgba(212, 255, 0, 0.15)',
              }}
            >
              {/* Time and Location */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div 
                    className="p-2 rounded-lg"
                    style={{ background: 'rgba(212, 255, 0, 0.1)' }}
                  >
                    <Calendar className="w-5 h-5" style={{ color: '#d4ff00' }} />
                  </div>
                  <div>
                    <div className="text-white text-sm">{match.date}</div>
                    <div className="text-white/60 text-xs flex items-center gap-2 mt-1">
                      <Clock className="w-3 h-3" />
                      {match.time}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5">
                  <MapPin className="w-4 h-4 text-white/60" />
                  <span className="text-white/60 text-sm">{match.court}</span>
                </div>
              </div>

              {/* Teams */}
              <div className="space-y-3">
                {/* Team 1 */}
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(212, 255, 0, 0.1)' }}
                  >
                    <Users className="w-5 h-5" style={{ color: '#d4ff00' }} />
                  </div>
                  <div className="flex-1">
                    <div className="text-white" style={{ fontStyle: 'italic' }}>{match.team1}</div>
                    <div className="text-white/60 text-xs mt-1">
                      {match.players1.join(' • ')}
                    </div>
                  </div>
                </div>

                {/* VS Divider */}
                <div className="flex items-center gap-3 px-3">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <span className="text-white/40 text-xs uppercase tracking-wider">vs</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>

                {/* Team 2 */}
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(212, 255, 0, 0.1)' }}
                  >
                    <Users className="w-5 h-5" style={{ color: '#d4ff00' }} />
                  </div>
                  <div className="flex-1">
                    <div className="text-white" style={{ fontStyle: 'italic' }}>{match.team2}</div>
                    <div className="text-white/60 text-xs mt-1">
                      {match.players2.join(' • ')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Player Leaderboard Component
function PlayerLeaderboard() {
  const players = [
    {
      rank: 1,
      name: 'Carlos Martinez',
      points: 2847,
      wins: 42,
      losses: 8,
      trend: 'up' as const,
      change: '+3',
    },
    {
      rank: 2,
      name: 'Diego Fernandez',
      points: 2734,
      wins: 38,
      losses: 12,
      trend: 'up' as const,
      change: '+1',
    },
    {
      rank: 3,
      name: 'Juan Rodriguez',
      points: 2621,
      wins: 35,
      losses: 15,
      trend: 'down' as const,
      change: '-2',
    },
    {
      rank: 4,
      name: 'Miguel Torres',
      points: 2518,
      wins: 33,
      losses: 17,
      trend: 'up' as const,
      change: '+4',
    },
    {
      rank: 5,
      name: 'Pablo Sanchez',
      points: 2445,
      wins: 31,
      losses: 19,
      trend: 'same' as const,
      change: '0',
    },
    {
      rank: 6,
      name: 'Antonio Garcia',
      points: 2389,
      wins: 29,
      losses: 21,
      trend: 'up' as const,
      change: '+2',
    },
  ];

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Medal className="w-5 h-5" style={{ color: '#FFD700' }} />;
    if (rank === 2) return <Medal className="w-5 h-5" style={{ color: '#C0C0C0' }} />;
    if (rank === 3) return <Medal className="w-5 h-5" style={{ color: '#CD7F32' }} />;
    return null;
  };

  return (
    <div className="mx-4 mb-8">
      <div className="max-w-[2000px] mx-auto">
        <div className="mb-6">
          <h2 className="text-white mb-2">Player Rankings</h2>
          <p className="text-white/60">Top performing players this season</p>
        </div>
        
        <div
          className="rounded-2xl backdrop-blur-xl border overflow-hidden"
          style={{
            background: 'rgba(26, 26, 26, 0.4)',
            borderColor: 'rgba(212, 255, 0, 0.15)',
          }}
        >
          {/* Header - Desktop */}
          <div className="hidden lg:grid grid-cols-[80px_1fr_120px_100px_100px_80px] gap-4 px-6 py-4 border-b border-white/10">
            <div className="text-white/60 text-sm">Rank</div>
            <div className="text-white/60 text-sm">Player</div>
            <div className="text-white/60 text-sm">Points</div>
            <div className="text-white/60 text-sm">Wins</div>
            <div className="text-white/60 text-sm">Losses</div>
            <div className="text-white/60 text-sm">Trend</div>
          </div>

          {/* Players - Desktop */}
          <div className="hidden lg:block">
            {players.map((player, idx) => (
              <div
                key={player.rank}
                className={`grid grid-cols-[80px_1fr_120px_100px_100px_80px] gap-4 px-6 py-5 transition-all duration-300 hover:bg-white/5 cursor-pointer ${
                  idx !== players.length - 1 ? 'border-b border-white/5' : ''
                }`}
              >
                {/* Rank */}
                <div className="flex items-center gap-2">
                  {getRankIcon(player.rank) || (
                    <span 
                      className="text-xl"
                      style={{ 
                        fontStyle: 'italic',
                        color: player.rank <= 3 ? '#d4ff00' : 'white'
                      }}
                    >
                      #{player.rank}
                    </span>
                  )}
                </div>

                {/* Name */}
                <div className="flex items-center">
                  <span className="text-white">{player.name}</span>
                </div>

                {/* Points */}
                <div className="flex items-center">
                  <span 
                    className="text-lg"
                    style={{ 
                      fontStyle: 'italic',
                      color: '#d4ff00'
                    }}
                  >
                    {player.points.toLocaleString()}
                  </span>
                </div>

                {/* Wins */}
                <div className="flex items-center">
                  <span className="text-white">{player.wins}</span>
                </div>

                {/* Losses */}
                <div className="flex items-center">
                  <span className="text-white/60">{player.losses}</span>
                </div>

                {/* Trend */}
                <div className="flex items-center justify-center">
                  {player.trend === 'up' && (
                    <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-green-500/10">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-xs text-green-400">{player.change}</span>
                    </div>
                  )}
                  {player.trend === 'down' && (
                    <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-red-500/10">
                      <TrendingDown className="w-4 h-4 text-red-400" />
                      <span className="text-xs text-red-400">{player.change}</span>
                    </div>
                  )}
                  {player.trend === 'same' && (
                    <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-white/5">
                      <span className="text-xs text-white/60">{player.change}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Players - Mobile */}
          <div className="lg:hidden">
            {players.map((player, idx) => (
              <div
                key={player.rank}
                className={`p-4 transition-all duration-300 hover:bg-white/5 cursor-pointer ${
                  idx !== players.length - 1 ? 'border-b border-white/5' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      {getRankIcon(player.rank) || (
                        <span 
                          className="text-xl"
                          style={{ 
                            fontStyle: 'italic',
                            color: player.rank <= 3 ? '#d4ff00' : 'white'
                          }}
                        >
                          #{player.rank}
                        </span>
                      )}
                    </div>
                    <div>
                      <div className="text-white">{player.name}</div>
                      <div 
                        className="text-sm mt-1"
                        style={{ 
                          fontStyle: 'italic',
                          color: '#d4ff00'
                        }}
                      >
                        {player.points.toLocaleString()} pts
                      </div>
                    </div>
                  </div>
                  
                  {player.trend === 'up' && (
                    <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-green-500/10">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-xs text-green-400">{player.change}</span>
                    </div>
                  )}
                  {player.trend === 'down' && (
                    <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-red-500/10">
                      <TrendingDown className="w-4 h-4 text-red-400" />
                      <span className="text-xs text-red-400">{player.change}</span>
                    </div>
                  )}
                  {player.trend === 'same' && (
                    <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-white/5">
                      <span className="text-xs text-white/60">{player.change}</span>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center gap-6 text-sm">
                  <div>
                    <span className="text-white/60">Wins: </span>
                    <span className="text-white">{player.wins}</span>
                  </div>
                  <div>
                    <span className="text-white/60">Losses: </span>
                    <span className="text-white/60">{player.losses}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
