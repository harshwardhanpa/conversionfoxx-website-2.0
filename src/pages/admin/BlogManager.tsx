import React, { useState } from 'react';
import { PenTool, Edit3, Eye, Search, Plus, Filter, ChevronRight, MoreVertical, CheckCircle2, Clock, X, Trash2, Share2, Calendar, User, Tag, Image } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  status: 'published' | 'draft';
  publishDate: string;
  author: string;
  views: number;
}

const BlogManager: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'draft'>('all');

  const blogs: BlogPost[] = [
    { id: '1', title: 'The Future of Digital Marketing in 2026', slug: '/blog/future-of-digital-marketing', category: 'Marketing', status: 'published', publishDate: 'Mar 15, 2026', author: 'Harsh Parmar', views: 1245 },
    { id: '2', title: 'Why Your Business Needs a Custom CRM', slug: '/blog/why-custom-crm', category: 'Business', status: 'published', publishDate: 'Mar 10, 2026', author: 'Harsh Parmar', views: 892 },
    { id: '3', title: '10 Tips for Better Social Media Engagement', slug: '/blog/social-media-tips', category: 'Social Media', status: 'published', publishDate: 'Mar 05, 2026', author: 'Harsh Parmar', views: 2156 },
    { id: '4', title: 'Building Scalable Apps with React and Tailwind', slug: '/blog/scalable-apps-react', category: 'Development', status: 'draft', publishDate: 'Not Published', author: 'Harsh Parmar', views: 0 },
    { id: '5', title: 'The Power of Paid Advertising for Startups', slug: '/blog/paid-ads-startups', category: 'Marketing', status: 'published', publishDate: 'Feb 28, 2026', author: 'Harsh Parmar', views: 1567 },
    { id: '6', title: 'How to Optimize Your Website for SEO', slug: '/blog/website-seo-optimization', category: 'SEO', status: 'draft', publishDate: 'Not Published', author: 'Harsh Parmar', views: 0 },
  ];

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          blog.slug.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || blog.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-2">Blog Manager</h2>
          <p className="text-white/40">Create, edit, and publish blog posts for your website.</p>
        </div>
        <button className="flex items-center gap-2 px-8 py-4 bg-brand-orange text-white rounded-2xl font-bold shadow-lg shadow-brand-orange/20 hover:bg-brand-orange/90 transition-all group">
          <Plus size={20} className="group-hover:rotate-90 transition-transform" />
          Create New Post
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Posts', value: 24, icon: <PenTool size={20} /> },
          { label: 'Published', value: 21, icon: <CheckCircle2 size={20} /> },
          { label: 'Drafts', value: 3, icon: <Clock size={20} /> },
          { label: 'Total Views', value: '45.2k', icon: <Eye size={20} /> },
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

      {/* Filters & Search */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-brand-orange transition-colors" />
          <input
            type="text"
            placeholder="Search blogs by title or slug..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#111] border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-brand-orange/50 transition-all"
          />
        </div>
        <div className="flex items-center gap-3 bg-[#111] border border-white/5 p-2 rounded-2xl">
          {(['all', 'published', 'draft'] as const).map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-6 py-2 rounded-xl text-sm font-bold capitalize transition-all ${
                statusFilter === status 
                  ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/20' 
                  : 'text-white/40 hover:text-white hover:bg-white/5'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Blogs List */}
      <div className="bg-[#111] border border-white/5 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 bg-white/[0.02]">
                <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-white/30">Post Title</th>
                <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-white/30">Category</th>
                <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-white/30">Status</th>
                <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-white/30">Date</th>
                <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-white/30 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredBlogs.map((blog) => (
                <tr key={blog.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/5 rounded-xl overflow-hidden flex items-center justify-center text-white/20">
                        <Image size={24} />
                      </div>
                      <div>
                        <p className="font-bold text-white group-hover:text-brand-orange transition-colors line-clamp-1">{blog.title}</p>
                        <p className="text-xs text-white/30 mt-0.5 flex items-center gap-2">
                          <User size={10} />
                          {blog.author}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2 text-xs font-bold text-white/60">
                      <Tag size={12} className="text-brand-orange" />
                      {blog.category}
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                      blog.status === 'published' 
                        ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' 
                        : 'bg-brand-orange/10 text-brand-orange border border-brand-orange/20'
                    }`}>
                      {blog.status === 'published' ? <CheckCircle2 size={12} /> : <Clock size={12} />}
                      {blog.status}
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="text-xs text-white/40 flex items-center gap-2">
                      <Calendar size={12} />
                      {blog.publishDate}
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-white/40 hover:text-white hover:bg-white/5 rounded-lg transition-all" title="Preview">
                        <Eye size={18} />
                      </button>
                      <Link to={`/admin/blogs/${blog.id}`} className="p-2 text-white/40 hover:text-brand-orange hover:bg-brand-orange/10 rounded-lg transition-all" title="Edit Post">
                        <Edit3 size={18} />
                      </Link>
                      <button className="p-2 text-white/40 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all" title="Delete">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredBlogs.length === 0 && (
          <div className="p-20 text-center space-y-4">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto text-white/20">
              <Search size={40} />
            </div>
            <p className="text-white/40 font-medium">No blog posts found matching your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogManager;
