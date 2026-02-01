import React, { JSX, useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { User, ShieldCheck } from 'lucide-react'; // Ajout de ShieldCheck pour l'icône admin

interface UserNavProps {
  onNavigate?: (tab: string) => void;
}

export const UserNav = ({ onNavigate }: UserNavProps): JSX.Element => {
  const [userData, setUserData] = useState<{ name: string; role: string }>({
    name: '',
    role: 'player', // Valeur par défaut
  });

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data, error } = await (supabase
          .from('profiles') as any)
          .select('full_name, role') // On récupère aussi le rôle ici
          .eq('id', user.id)
          .single();

        if (data && !error) {
          setUserData({
            name: data.full_name,
            role: data.role || 'player',
          });
        }
      }
    };
    fetchUser();
  }, []);

  const isAdmin = userData.role === 'admin';

  return (
    <div
      onClick={() => onNavigate?.('profile')}
      className="fixed top-6 right-10 z-50 flex items-center gap-4 bg-zinc-900/80 backdrop-blur-md border border-white/5 p-2 pr-6 rounded-full shadow-2xl cursor-pointer hover:border-[#EEFF00]/30 transition-all duration-300 group"
    >
      {/* Avatar avec badge de notification si admin */}
      <div className="relative">
        <div className="w-9 h-9 bg-[#EEFF00] rounded-full flex items-center justify-center text-black shadow-lg group-hover:scale-110 transition-transform">
          <User size={18} strokeWidth={3} />
        </div>
        {isAdmin && (
          <div className="absolute -top-1 -right-1 bg-red-600 rounded-full p-0.5 border-2 border-zinc-900">
            <ShieldCheck size={10} className="text-white" />
          </div>
        )}
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest leading-none">
            Account
          </span>
          {/* Badge textuel Admin */}
          {isAdmin && (
            <span className="text-[8px] bg-red-600/10 text-red-500 px-1.5 py-0.5 rounded border border-red-600/20 font-black tracking-tighter">
              ADMIN
            </span>
          )}
        </div>
        <span className="text-white font-black text-xs uppercase tracking-tight leading-none mt-1">
          {userData.name || 'User'}
        </span>
      </div>
    </div>
  );
};