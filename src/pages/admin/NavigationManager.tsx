import React, { useState } from 'react';
import { Menu, Plus, Save, RotateCcw, GripVertical, Edit3, Trash2, ExternalLink, ChevronRight, CheckCircle2, X } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  route: string;
  status: 'active' | 'disabled';
  type: 'internal' | 'external';
}

const NavigationManager: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<'header' | 'footer'>('header');
  const [navItems, setNavItems] = useState<NavItem[]>([
    { id: '1', label: 'Home', route: '/', status: 'active', type: 'internal' },
    { id: '2', label: 'About', route: '/about', status: 'active', type: 'internal' },
    { id: '3', label: 'Services', route: '/services', status: 'active', type: 'internal' },
    { id: '4', label: 'Blog', route: '/blog', status: 'active', type: 'internal' },
    { id: '5', label: 'Contact', route: '/contact', status: 'active', type: 'internal' },
  ]);

  const toggleStatus = (id: string) => {
    setNavItems(prev => prev.map(item => 
      item.id === id ? { ...item, status: item.status === 'active' ? 'disabled' : 'active' } : item
    ));
  };

  const removeItem = (id: string) => {
    setNavItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="space-y-10 max-w-5xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-2">Navigation Manager</h2>
          <p className="text-white/40">Manage your website's header and footer navigation menus.</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-8 py-3 bg-brand-orange text-white rounded-xl font-bold shadow-lg shadow-brand-orange/20 hover:bg-brand-orange/90 transition-all">
            <Save size={18} />
            Save Changes
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 bg-[#111] border border-white/5 p-2 rounded-2xl w-fit">
        <button
          onClick={() => setActiveMenu('header')}
          className={`px-8 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
            activeMenu === 'header' 
              ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/20' 
              : 'text-white/40 hover:text-white hover:bg-white/5'
          }`}
        >
          <Menu size={18} />
          Header Menu
        </button>
        <button
          onClick={() => setActiveMenu('footer')}
          className={`px-8 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
            activeMenu === 'footer' 
              ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/20' 
              : 'text-white/40 hover:text-white hover:bg-white/5'
          }`}
        >
          <ChevronRight size={18} />
          Footer Links
        </button>
      </div>

      <div className="bg-[#111] border border-white/5 rounded-3xl overflow-hidden">
        <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
          <h3 className="text-lg font-bold tracking-tight capitalize">{activeMenu} Navigation Items</h3>
          <button className="flex items-center gap-2 px-4 py-2 bg-brand-orange/10 text-brand-orange rounded-xl text-xs font-bold hover:bg-brand-orange hover:text-white transition-all">
            <Plus size={14} />
            Add Menu Item
          </button>
        </div>

        <div className="divide-y divide-white/5">
          {navItems.map((item, index) => (
            <div key={item.id} className="p-6 flex items-center gap-6 hover:bg-white/[0.01] transition-colors group">
              <div className="text-white/20 cursor-grab active:cursor-grabbing hover:text-brand-orange transition-colors">
                <GripVertical size={20} />
              </div>
              
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <p className="text-[10px] text-white/30 uppercase font-bold tracking-widest">Link Label</p>
                  <input
                    type="text"
                    value={item.label}
                    onChange={() => {}}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-4 text-sm text-white focus:outline-none focus:border-brand-orange/50 transition-all font-bold"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] text-white/30 uppercase font-bold tracking-widest">Route / URL</p>
                  <div className="relative">
                    <input
                      type="text"
                      value={item.route}
                      onChange={() => {}}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-4 text-sm text-white focus:outline-none focus:border-brand-orange/50 transition-all font-mono"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20">
                      {item.type === 'internal' ? <ChevronRight size={14} /> : <ExternalLink size={14} />}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button 
                  onClick={() => toggleStatus(item.id)}
                  className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest border transition-all ${
                    item.status === 'active' 
                      ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' 
                      : 'bg-white/5 text-white/20 border-white/10 hover:text-white/40'
                  }`}
                >
                  {item.status}
                </button>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 text-white/20 hover:text-brand-orange hover:bg-brand-orange/10 rounded-lg transition-all">
                    <Edit3 size={18} />
                  </button>
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="p-2 text-white/20 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 bg-white/[0.02] border-t border-white/5">
          <div className="bg-brand-orange/5 border border-brand-orange/20 rounded-2xl p-6 flex items-start gap-4">
            <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange shrink-0">
              <CheckCircle2 size={20} />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-sm">Navigation Best Practice</h4>
              <p className="text-xs text-white/40 leading-relaxed">
                Keep your primary navigation to 5-7 items for optimal user experience. Use clear, descriptive labels that help users find what they're looking for quickly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationManager;
