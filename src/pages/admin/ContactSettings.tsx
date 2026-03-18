import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, Save, RotateCcw, CheckCircle2, AlertCircle, Info, MessageSquare, User, Calendar, DollarSign, ExternalLink, MoreVertical, Search, Filter, Eye } from 'lucide-react';

interface Inquiry {
  id: string;
  name: string;
  email: string;
  service: string;
  budget: string;
  status: 'new' | 'contacted' | 'closed';
  date: string;
}

const ContactSettings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'settings' | 'inquiries'>('settings');
  const [settings, setSettings] = useState({
    recipientEmail: 'leads@conversionfoxx.com',
    successMessage: 'Thank you for your inquiry! Our team will get back to you within 24 hours.',
    errorMessage: 'Something went wrong. Please try again or contact us directly at hello@conversionfoxx.com.',
    consultationCTA: 'Book Your Free Strategy Session',
    consultationLink: '/contact',
  });

  const inquiries: Inquiry[] = [
    { id: '1', name: 'John Smith', email: 'john@example.com', service: 'Web Development', budget: '$5k - $10k', status: 'new', date: '2 hours ago' },
    { id: '2', name: 'Sarah Johnson', email: 'sarah@techcorp.com', service: 'Social Media', budget: '$2k - $5k', status: 'contacted', date: '5 hours ago' },
    { id: '3', name: 'Mike Wilson', email: 'mike@startup.io', service: 'App Development', budget: '$10k+', status: 'new', date: '1 day ago' },
    { id: '4', name: 'Emily Davis', email: 'emily@boutique.com', service: 'Paid Advertising', budget: '$1k - $2k', status: 'closed', date: '3 days ago' },
    { id: '5', name: 'David Brown', email: 'david@agency.net', service: 'CRM Solutions', budget: '$5k - $10k', status: 'contacted', date: '1 week ago' },
  ];

  const handleChange = (field: string, value: string) => {
    setSettings(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-10 max-w-6xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-2">Contact & Inquiry Settings</h2>
          <p className="text-white/40">Manage how you receive and handle inquiries from your website.</p>
        </div>
        {activeTab === 'settings' && (
          <button className="flex items-center gap-2 px-8 py-3 bg-brand-orange text-white rounded-xl font-bold shadow-lg shadow-brand-orange/20 hover:bg-brand-orange/90 transition-all">
            <Save size={18} />
            Save Changes
          </button>
        )}
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 bg-[#111] border border-white/5 p-2 rounded-2xl w-fit">
        <button
          onClick={() => setActiveTab('settings')}
          className={`px-8 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
            activeTab === 'settings' 
              ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/20' 
              : 'text-white/40 hover:text-white hover:bg-white/5'
          }`}
        >
          <Phone size={18} />
          Contact Settings
        </button>
        <button
          onClick={() => setActiveTab('inquiries')}
          className={`px-8 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
            activeTab === 'inquiries' 
              ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/20' 
              : 'text-white/40 hover:text-white hover:bg-white/5'
          }`}
        >
          <MessageSquare size={18} />
          Recent Inquiries
          <span className="bg-brand-orange/20 text-brand-orange px-2 py-0.5 rounded-full text-[10px]">2 New</span>
        </button>
      </div>

      {activeTab === 'settings' ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            {/* Form Settings */}
            <div className="bg-[#111] border border-white/5 rounded-3xl p-8 space-y-8">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange">
                  <Mail size={20} />
                </div>
                <h3 className="text-xl font-bold tracking-tight">Form Configuration</h3>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/60 ml-1">Inquiry Recipient Email</label>
                  <input
                    type="email"
                    value={settings.recipientEmail}
                    onChange={(e) => handleChange('recipientEmail', e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-4 text-white focus:outline-none focus:border-brand-orange/50 transition-all"
                  />
                  <p className="text-[10px] text-white/30 px-1">All website inquiries will be sent to this address.</p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/60 ml-1">Success Message</label>
                  <textarea
                    rows={3}
                    value={settings.successMessage}
                    onChange={(e) => handleChange('successMessage', e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-4 text-white focus:outline-none focus:border-brand-orange/50 transition-all resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/60 ml-1">Error Message</label>
                  <textarea
                    rows={3}
                    value={settings.errorMessage}
                    onChange={(e) => handleChange('errorMessage', e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-4 text-white focus:outline-none focus:border-brand-orange/50 transition-all resize-none"
                  />
                </div>
              </div>
            </div>

            {/* CTA Settings */}
            <div className="bg-[#111] border border-white/5 rounded-3xl p-8 space-y-8">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange">
                  <ExternalLink size={20} />
                </div>
                <h3 className="text-xl font-bold tracking-tight">Consultation CTA</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/60 ml-1">CTA Button Text</label>
                  <input
                    type="text"
                    value={settings.consultationCTA}
                    onChange={(e) => handleChange('consultationCTA', e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-4 text-white focus:outline-none focus:border-brand-orange/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/60 ml-1">CTA Link / Route</label>
                  <input
                    type="text"
                    value={settings.consultationLink}
                    onChange={(e) => handleChange('consultationLink', e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-4 text-white focus:outline-none focus:border-brand-orange/50 transition-all"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Business Info Preview */}
          <div className="lg:col-span-1 space-y-6 sticky top-24 h-fit">
            <h3 className="text-xl font-bold tracking-tight flex items-center gap-2">
              Contact Card Preview
              <div className="h-[1px] flex-1 bg-white/5" />
            </h3>
            <div className="bg-[#111] border border-white/10 rounded-[2.5rem] p-8 space-y-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 blur-[40px] rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <div className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold tracking-tight">Let's Build <span className="text-brand-orange">Something.</span></h4>
                  <p className="text-sm text-white/40 leading-relaxed">Have a project in mind? We'd love to hear from you.</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-brand-orange">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/30 uppercase font-bold tracking-widest">Email Us</p>
                      <p className="text-sm font-bold">hello@conversionfoxx.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-brand-orange">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/30 uppercase font-bold tracking-widest">Call Us</p>
                      <p className="text-sm font-bold">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>

                <button className="w-full py-4 bg-brand-orange text-white rounded-2xl font-bold shadow-lg shadow-brand-orange/20">
                  {settings.consultationCTA}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Inquiry Toolbar */}
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-brand-orange transition-colors" />
              <input
                type="text"
                placeholder="Search inquiries by name or email..."
                className="w-full bg-[#111] border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-brand-orange/50 transition-all"
              />
            </div>
            <button className="flex items-center gap-2 px-6 py-4 bg-[#111] border border-white/5 rounded-2xl text-white/60 hover:text-white hover:bg-white/5 transition-all font-bold">
              <Filter size={18} />
              Filter Status
            </button>
          </div>

          {/* Inquiries Table */}
          <div className="bg-[#111] border border-white/5 rounded-3xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/5 bg-white/[0.02]">
                    <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-white/30">Client</th>
                    <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-white/30">Service & Budget</th>
                    <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-white/30">Status</th>
                    <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-white/30">Date</th>
                    <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-white/30 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {inquiries.map((inquiry) => (
                    <tr key={inquiry.id} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange font-bold text-xs uppercase">
                            {inquiry.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="font-bold text-white group-hover:text-brand-orange transition-colors">{inquiry.name}</p>
                            <p className="text-xs text-white/30 mt-0.5">{inquiry.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="space-y-1">
                          <p className="text-sm font-bold text-white/80">{inquiry.service}</p>
                          <p className="text-[10px] text-white/30 flex items-center gap-1">
                            <DollarSign size={10} />
                            {inquiry.budget}
                          </p>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                          inquiry.status === 'new' 
                            ? 'bg-brand-orange/10 text-brand-orange border border-brand-orange/20' 
                            : inquiry.status === 'contacted'
                            ? 'bg-blue-500/10 text-blue-500 border border-blue-500/20'
                            : 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                        }`}>
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            inquiry.status === 'new' ? 'bg-brand-orange' : inquiry.status === 'contacted' ? 'bg-blue-500' : 'bg-emerald-500'
                          }`} />
                          {inquiry.status}
                        </div>
                      </td>
                      <td className="px-8 py-6 text-xs text-white/40">
                        {inquiry.date}
                      </td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 text-white/40 hover:text-brand-orange hover:bg-brand-orange/10 rounded-lg transition-all" title="View Details">
                            <Eye size={18} />
                          </button>
                          <button className="p-2 text-white/40 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                            <MoreVertical size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactSettings;
