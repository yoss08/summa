import React, { useState, JSX } from 'react';
import { supabase } from "../lib/supabaseClient";
import { 
  LayoutDashboard, 
  Calendar, 
  Trophy, 
  User, 
  LogOut, 
  Settings,
  X 
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLogout: () => void;
  goToSumma: () => void;
}

export const Sidebar = ({ activeTab, setActiveTab, onLogout, goToSumma }: SidebarProps): React.ReactElement => {
  // État pour gérer l'affichage de la modale personnalisée
  const [showLogoutModal, setShowLogoutModal] = useState<boolean>(false);

  const handleLogoClick = () => {
    setActiveTab('overview');
  };

  const menuItems = [
    { id: 'overview', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'booking', label: 'Bookings', icon: <Calendar size={20} /> },
    { id: 'matches', label: 'My Matches', icon: <Trophy size={20} /> },
    { id: 'profile', label: 'My Profile', icon: <User size={20} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
  ];

  return (
    <>
      <aside className="w-64 bg-zinc-950 border-r border-white/5 flex flex-col h-screen sticky top-0">
        {/* Logo Section */}
        <div onClick={goToSumma} className="p-8 cursor-pointer group">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#EEFF00] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-black font-black text-xl">S</span>
            </div>
            <span className="text-white font-bold tracking-tighter text-xl group-hover:text-[#EEFF00] transition-colors">
              SUMMA
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group ${
                activeTab === item.id 
                ? 'bg-[#EEFF00] text-black font-bold' 
                : 'text-zinc-500 hover:bg-white/5 hover:text-white'
              }`}
            >
              <span className={activeTab === item.id ? 'text-black' : 'group-hover:text-[#EEFF00]'}>
                {item.icon}
              </span>
              <span className="text-sm tracking-wide">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Logout Section */}
        <div className="p-4 border-t border-white/5">
          <button 
            onClick={() => setShowLogoutModal(true)} // Déclenche la modale au lieu du confirm
            className="w-full flex items-center gap-4 px-4 py-3 text-zinc-500 hover:text-red-400 hover:bg-red-500/5 rounded-xl transition-all"
          >
            <LogOut size={20} />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Ajout de la modale personnalisée */}
      <LogoutModal 
        isOpen={showLogoutModal} 
        onClose={() => setShowLogoutModal(false)} 
        onConfirm={async () => {
          await supabase.auth.signOut();
          onLogout();
        }} 
      />
    </>
  );
};

// --- Composant Interne pour la Modale de Déconnexion ---

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const LogoutModal = ({ isOpen, onClose, onConfirm }: LogoutModalProps): JSX.Element | null => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Overlay flouté */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md" 
        onClick={onClose} 
      />
      
      {/* Contenu de l'alerte */}
      <div className="relative bg-zinc-900 border border-white/10 w-full max-w-sm rounded-[2rem] p-8 shadow-2xl animate-in fade-in zoom-in duration-200">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-[#EEFF00]/10 rounded-2xl flex items-center justify-center mb-6">
            <LogOut className="text-[#EEFF00] w-8 h-8" />
          </div>
          
          <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter">
            Logout
          </h3>
          <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
            Are you sure you want to logout from <span className="text-white font-bold">SUMMA PADEL</span>?
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={onConfirm}
            className="w-full py-4 bg-[#EEFF00] text-black font-black uppercase text-xs rounded-2xl hover:bg-[#d4ff00] transition-all active:scale-95"
          >
            Yes, Logout
          </button>
          
          <button
            onClick={onClose}
            className="w-full py-4 text-zinc-500 font-bold text-xs rounded-2xl hover:text-white hover:bg-white/5 transition-all"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}; 