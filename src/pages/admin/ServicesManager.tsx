import React, { useState } from 'react';
import { Briefcase, Edit3, Eye, Search, Plus, Filter, ChevronRight, MoreVertical, CheckCircle2, Clock, X, Layout, Layers, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  status: 'published' | 'draft';
  lastUpdated: string;
  icon: string;
}

const ServicesManager: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const services: ServiceItem[] = [
    { id: '1', title: 'Social Media Management', slug: '/services/social-media-management', status: 'published', lastUpdated: '2 hours ago', icon: 'Share2' },
    { id: '2', title: 'Web Development', slug: '/services/web-development', status: 'published', lastUpdated: '1 day ago', icon: 'Code' },
    { id: '3', title: 'App Development', slug: '/services/app-development', status: 'published', lastUpdated: '3 days ago', icon: 'Smartphone' },
    { id: '4', title: 'Paid Advertising', slug: '/services/paid-advertising', status: 'published', lastUpdated: '1 week ago', icon: 'Megaphone' },
    { id: '5', title: 'CRM Solutions', slug: '/services/crm-solutions', status: 'published', lastUpdated: '2 weeks ago', icon: 'Database' },
  ];

  const filteredServices = services.filter(service => 
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    service.slug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-2">Services Content Manager</h2>
          <p className="text-white/40">Manage and edit the content of your individual service pages.</p>
        </div>
        <button className="flex items-center gap-2 px-8 py-4 bg-brand-orange text-white rounded-2xl font-bold shadow-lg shadow-brand-orange/20 hover:bg-brand-orange/90 transition-all group">
          <Plus size={20} className="group-hover:rotate-90 transition-transform" />
          Add New Service
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total Services', value: 5, icon: <Briefcase size={20} /> },
          { label: 'Published', value: 5, icon: <CheckCircle2 size={20} /> },
          { label: 'Drafts', value: 0, icon: <Clock size={20} /> },
        ].map((stat) => (
          <div key={stat.label} className="bg-[#111] border border-white/5 p-6 rounded-3xl flex items-center gap-6">
            <div className="w-12 h-12 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange">
              {stat.icon}
            </div>
            <div>
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
              <h3 className="text-2xl font-bold tracking-tight">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-brand-orange transition-colors" />
          <input
            type="text"
            placeholder="Search services by title or slug..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#111] border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-brand-orange/50 transition-all"
          />
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredServices.map((service) => (
          <div key={service.id} className="bg-[#111] border border-white/5 rounded-[2.5rem] p-8 space-y-8 hover:border-brand-orange/30 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 blur-[40px] rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="flex items-center justify-between relative z-10">
              <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                <Briefcase size={24} />
              </div>
              <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                service.status === 'published' 
                  ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' 
                  : 'bg-brand-orange/10 text-brand-orange border border-brand-orange/20'
              }`}>
                {service.status}
              </div>
            </div>

            <div className="space-y-2 relative z-10">
              <h3 className="text-2xl font-bold tracking-tight group-hover:text-brand-orange transition-colors">{service.title}</h3>
              <p className="text-xs font-mono text-white/30">{service.slug}</p>
            </div>

            <div className="grid grid-cols-3 gap-4 relative z-10">
              <div className="text-center p-3 bg-white/5 rounded-2xl">
                <Layout size={16} className="mx-auto mb-2 text-white/20" />
                <p className="text-[10px] text-white/40 uppercase font-bold">Content</p>
                <p className="text-sm font-bold">12</p>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-2xl">
                <Layers size={16} className="mx-auto mb-2 text-white/20" />
                <p className="text-[10px] text-white/40 uppercase font-bold">Cards</p>
                <p className="text-sm font-bold">6</p>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-2xl">
                <HelpCircle size={16} className="mx-auto mb-2 text-white/20" />
                <p className="text-[10px] text-white/40 uppercase font-bold">FAQs</p>
                <p className="text-sm font-bold">4</p>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between relative z-10">
              <span className="text-xs text-white/20 flex items-center gap-2">
                <Clock size={12} />
                Updated {service.lastUpdated}
              </span>
              <div className="flex items-center gap-2">
                <button className="p-2 text-white/20 hover:text-white hover:bg-white/5 rounded-lg transition-all" title="Preview">
                  <Eye size={18} />
                </button>
                <Link to={`/admin/services/${service.id}`} className="p-2 text-white/20 hover:text-brand-orange hover:bg-brand-orange/10 rounded-lg transition-all" title="Edit Service">
                  <Edit3 size={18} />
                </Link>
              </div>
            </div>

            <Link to={`/admin/services/${service.id}`} className="absolute inset-0 z-0" />
          </div>
        ))}
      </div>

      {filteredServices.length === 0 && (
        <div className="p-20 text-center space-y-4">
          <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto text-white/20">
            <Search size={40} />
          </div>
          <p className="text-white/40 font-medium">No services found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
};

export default ServicesManager;
