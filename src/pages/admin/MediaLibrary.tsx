import React, { useState } from 'react';
import { Image, Upload, Search, Filter, Grid, List, MoreVertical, Trash2, Download, Info, Plus, X, FileText, FileCode, FileVideo } from 'lucide-react';

interface MediaItem {
  id: string;
  name: string;
  type: 'image' | 'video' | 'document' | 'code';
  size: string;
  date: string;
  url: string;
  dimensions?: string;
}

const MediaLibrary: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  const mediaItems: MediaItem[] = [
    { id: '1', name: 'hero-banner.jpg', type: 'image', size: '1.2 MB', date: 'Mar 15, 2026', url: 'https://picsum.photos/seed/hero/800/450', dimensions: '1920x1080' },
    { id: '2', name: 'brand-logo-dark.svg', type: 'code', size: '45 KB', date: 'Mar 14, 2026', url: '#' },
    { id: '3', name: 'service-web-dev.png', type: 'image', size: '850 KB', date: 'Mar 12, 2026', url: 'https://picsum.photos/seed/web/800/450', dimensions: '1200x800' },
    { id: '4', name: 'blog-future-marketing.jpg', type: 'image', size: '2.1 MB', date: 'Mar 10, 2026', url: 'https://picsum.photos/seed/marketing/800/450', dimensions: '1600x900' },
    { id: '5', name: 'client-testimonial-video.mp4', type: 'video', size: '15.4 MB', date: 'Mar 08, 2026', url: '#' },
    { id: '6', name: 'company-profile.pdf', type: 'document', size: '4.2 MB', date: 'Mar 05, 2026', url: '#' },
    { id: '7', name: 'favicon.ico', type: 'image', size: '12 KB', date: 'Mar 01, 2026', url: 'https://picsum.photos/seed/favicon/32/32', dimensions: '32x32' },
    { id: '8', name: 'about-team-photo.jpg', type: 'image', size: '3.5 MB', date: 'Feb 28, 2026', url: 'https://picsum.photos/seed/team/800/450', dimensions: '2400x1600' },
  ];

  const filteredMedia = mediaItems.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getIcon = (type: MediaItem['type']) => {
    switch (type) {
      case 'image': return <Image size={24} />;
      case 'video': return <FileVideo size={24} />;
      case 'document': return <FileText size={24} />;
      case 'code': return <FileCode size={24} />;
    }
  };

  return (
    <div className="space-y-10 h-full flex flex-col min-h-[calc(100vh-12rem)]">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-2">Media Library</h2>
          <p className="text-white/40">Manage and organize your website assets and media files.</p>
        </div>
        <button className="flex items-center gap-2 px-8 py-4 bg-brand-orange text-white rounded-2xl font-bold shadow-lg shadow-brand-orange/20 hover:bg-brand-orange/90 transition-all group">
          <Upload size={20} className="group-hover:-translate-y-1 transition-transform" />
          Upload Files
        </button>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-brand-orange transition-colors" />
          <input
            type="text"
            placeholder="Search media by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#111] border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-brand-orange/50 transition-all"
          />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-[#111] border border-white/5 p-2 rounded-2xl">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/20' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
            >
              <Grid size={20} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-xl transition-all ${viewMode === 'list' ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/20' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
            >
              <List size={20} />
            </button>
          </div>
          <button className="flex items-center gap-2 px-6 py-4 bg-[#111] border border-white/5 rounded-2xl text-white/60 hover:text-white hover:bg-white/5 transition-all font-bold">
            <Filter size={18} />
            Filter
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row gap-10 min-h-0">
        {/* Media Grid/List */}
        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
              {filteredMedia.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className={`group relative aspect-square bg-[#111] border rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 ${
                    selectedItem?.id === item.id ? 'border-brand-orange ring-2 ring-brand-orange/20' : 'border-white/5 hover:border-brand-orange/30 shadow-xl'
                  }`}
                >
                  {item.type === 'image' ? (
                    <img src={item.url} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-white/20 group-hover:text-brand-orange transition-colors">
                      {getIcon(item.type)}
                      <span className="text-[10px] font-bold uppercase tracking-widest">{item.type}</span>
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-xs font-bold text-white truncate">{item.name}</p>
                    <p className="text-[10px] text-white/40">{item.size}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-[#111] border border-white/5 rounded-3xl overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/5 bg-white/[0.02]">
                    <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-white/30">Name</th>
                    <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-white/30">Type</th>
                    <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-white/30">Size</th>
                    <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-white/30">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredMedia.map((item) => (
                    <tr 
                      key={item.id} 
                      onClick={() => setSelectedItem(item)}
                      className={`hover:bg-white/[0.02] transition-colors cursor-pointer ${selectedItem?.id === item.id ? 'bg-brand-orange/5' : ''}`}
                    >
                      <td className="px-8 py-4">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white/20">
                            {getIcon(item.type)}
                          </div>
                          <p className="font-bold text-sm text-white">{item.name}</p>
                        </div>
                      </td>
                      <td className="px-8 py-4">
                        <span className="text-xs font-bold uppercase tracking-widest text-white/40">{item.type}</span>
                      </td>
                      <td className="px-8 py-4 text-xs text-white/40">{item.size}</td>
                      <td className="px-8 py-4 text-xs text-white/40">{item.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Detail Panel */}
        {selectedItem && (
          <div className="w-full lg:w-80 space-y-6 animate-in slide-in-from-right duration-300">
            <div className="bg-[#111] border border-white/5 rounded-3xl p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold tracking-tight">File Details</h3>
                <button onClick={() => setSelectedItem(null)} className="text-white/20 hover:text-white">
                  <X size={20} />
                </button>
              </div>

              <div className="aspect-square bg-white/5 rounded-2xl overflow-hidden flex items-center justify-center text-white/10 border border-white/5">
                {selectedItem.type === 'image' ? (
                  <img src={selectedItem.url} alt={selectedItem.name} className="w-full h-full object-contain" />
                ) : (
                  getIcon(selectedItem.type)
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-[10px] text-white/30 uppercase font-bold tracking-widest mb-1">File Name</p>
                  <p className="text-sm font-bold break-all">{selectedItem.name}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] text-white/30 uppercase font-bold tracking-widest mb-1">File Type</p>
                    <p className="text-sm font-bold capitalize">{selectedItem.type}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-white/30 uppercase font-bold tracking-widest mb-1">File Size</p>
                    <p className="text-sm font-bold">{selectedItem.size}</p>
                  </div>
                </div>
                {selectedItem.dimensions && (
                  <div>
                    <p className="text-[10px] text-white/30 uppercase font-bold tracking-widest mb-1">Dimensions</p>
                    <p className="text-sm font-bold">{selectedItem.dimensions}</p>
                  </div>
                )}
                <div>
                  <p className="text-[10px] text-white/30 uppercase font-bold tracking-widest mb-1">Uploaded On</p>
                  <p className="text-sm font-bold">{selectedItem.date}</p>
                </div>
              </div>

              <div className="pt-4 flex flex-col gap-3">
                <button className="w-full py-3 bg-brand-orange text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-orange/90 transition-all shadow-lg shadow-brand-orange/20">
                  <Download size={16} />
                  Download File
                </button>
                <div className="grid grid-cols-2 gap-3">
                  <button className="py-3 bg-white/5 text-white/60 rounded-xl font-bold flex items-center justify-center gap-2 hover:text-white hover:bg-white/10 transition-all">
                    <Info size={16} />
                    Edit Info
                  </button>
                  <button className="py-3 bg-red-500/10 text-red-500 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-red-500/20 transition-all">
                    <Trash2 size={16} />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaLibrary;
