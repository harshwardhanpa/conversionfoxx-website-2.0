import React, { useState } from 'react';
import { Layout as LayoutIcon, Save, RotateCcw, Info, Share2, Mail, Phone, Globe, ChevronRight, Plus, Trash2, Edit3 } from 'lucide-react';

const FooterManager: React.FC = () => {
  const [footerData, setFooterData] = useState({
    brandText: 'ConversionFoxx',
    description: 'Precision digital marketing and web solutions for high-growth businesses. We build the systems that drive measurable results.',
    email: 'hello@conversionfoxx.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    copyright: '© 2026 ConversionFoxx. All rights reserved.',
  });

  const handleChange = (field: string, value: string) => {
    setFooterData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-10 max-w-5xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-2">Footer Manager</h2>
          <p className="text-white/40">Manage and edit the content of your website's footer section.</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-8 py-3 bg-brand-orange text-white rounded-xl font-bold shadow-lg shadow-brand-orange/20 hover:bg-brand-orange/90 transition-all">
            <Save size={18} />
            Save Changes
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {/* Brand Section */}
        <div className="bg-[#111] border border-white/5 rounded-3xl overflow-hidden">
          <div className="p-6 border-b border-white/5 flex items-center gap-4 bg-white/[0.02]">
            <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange">
              <LayoutIcon size={20} />
            </div>
            <div>
              <h3 className="text-lg font-bold tracking-tight">Footer Brand Section</h3>
              <p className="text-sm text-white/40">The main branding area in your footer.</p>
            </div>
          </div>
          <div className="p-8 space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-white/60 ml-1">Brand Name</label>
              <input
                type="text"
                value={footerData.brandText}
                onChange={(e) => handleChange('brandText', e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-4 text-white focus:outline-none focus:border-brand-orange/50 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-white/60 ml-1">Brand Description</label>
              <textarea
                rows={3}
                value={footerData.description}
                onChange={(e) => handleChange('description', e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-4 text-white focus:outline-none focus:border-brand-orange/50 transition-all resize-none"
              />
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-[#111] border border-white/5 rounded-3xl overflow-hidden">
          <div className="p-6 border-b border-white/5 flex items-center gap-4 bg-white/[0.02]">
            <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange">
              <Mail size={20} />
            </div>
            <div>
              <h3 className="text-lg font-bold tracking-tight">Footer Contact Info</h3>
              <p className="text-sm text-white/40">Contact details displayed in the footer.</p>
            </div>
          </div>
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-white/60 ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-brand-orange transition-colors" />
                <input
                  type="email"
                  value={footerData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-brand-orange/50 transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-white/60 ml-1">Phone Number</label>
              <div className="relative group">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-brand-orange transition-colors" />
                <input
                  type="text"
                  value={footerData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-brand-orange/50 transition-all"
                />
              </div>
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-bold text-white/60 ml-1">Location Text</label>
              <div className="relative group">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-brand-orange transition-colors" />
                <input
                  type="text"
                  value={footerData.location}
                  onChange={(e) => handleChange('location', e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-brand-orange/50 transition-all"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links (Placeholder for structure) */}
        <div className="bg-[#111] border border-white/5 rounded-3xl overflow-hidden">
          <div className="p-6 border-b border-white/5 flex items-center gap-4 bg-white/[0.02]">
            <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange">
              <Share2 size={20} />
            </div>
            <div>
              <h3 className="text-lg font-bold tracking-tight">Footer Link Columns</h3>
              <p className="text-sm text-white/40">Manage the link columns in your footer.</p>
            </div>
          </div>
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Column 1 */}
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-bold uppercase tracking-widest text-white/30">Quick Links</h4>
                <button className="text-brand-orange hover:text-white transition-colors">
                  <Plus size={16} />
                </button>
              </div>
              <div className="space-y-2">
                {['Home', 'About', 'Services', 'Blog'].map(link => (
                  <div key={link} className="flex items-center justify-between p-3 bg-white/5 rounded-xl group">
                    <span className="text-sm font-medium">{link}</span>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-white/20 hover:text-brand-orange transition-colors"><Edit3 size={14} /></button>
                      <button className="text-white/20 hover:text-red-500 transition-colors"><Trash2 size={14} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Column 2 */}
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-bold uppercase tracking-widest text-white/30">Our Services</h4>
                <button className="text-brand-orange hover:text-white transition-colors">
                  <Plus size={16} />
                </button>
              </div>
              <div className="space-y-2">
                {['Web Dev', 'Social Media', 'CRM', 'Paid Ads'].map(link => (
                  <div key={link} className="flex items-center justify-between p-3 bg-white/5 rounded-xl group">
                    <span className="text-sm font-medium">{link}</span>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-white/20 hover:text-brand-orange transition-colors"><Edit3 size={14} /></button>
                      <button className="text-white/20 hover:text-red-500 transition-colors"><Trash2 size={14} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Legal Section */}
        <div className="bg-[#111] border border-white/5 rounded-3xl overflow-hidden">
          <div className="p-6 border-b border-white/5 flex items-center gap-4 bg-white/[0.02]">
            <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange">
              <Info size={20} />
            </div>
            <div>
              <h3 className="text-lg font-bold tracking-tight">Legal & Copyright</h3>
              <p className="text-sm text-white/40">The very bottom section of your footer.</p>
            </div>
          </div>
          <div className="p-8 space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-white/60 ml-1">Copyright Line</label>
              <input
                type="text"
                value={footerData.copyright}
                onChange={(e) => handleChange('copyright', e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-4 text-white focus:outline-none focus:border-brand-orange/50 transition-all"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterManager;
