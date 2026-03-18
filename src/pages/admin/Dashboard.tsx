import React from 'react';
import { 
  FileText, 
  PenTool, 
  Search, 
  Image, 
  TrendingUp, 
  Clock, 
  ArrowUpRight, 
  Plus, 
  Edit3, 
  Palette, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface StatCardProps {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: string;
  trendUp?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, icon, trend, trendUp }) => (
  <div className="bg-[#111] border border-white/5 p-6 rounded-3xl hover:border-brand-orange/30 transition-all duration-500 group">
    <div className="flex items-center justify-between mb-4">
      <div className="w-12 h-12 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
        {icon}
      </div>
      {trend && (
        <div className={`flex items-center gap-1 text-xs font-bold ${trendUp ? 'text-emerald-500' : 'text-red-500'}`}>
          {trendUp ? <TrendingUp size={14} /> : <TrendingUp size={14} className="rotate-180" />}
          {trend}
        </div>
      )}
    </div>
    <p className="text-white/40 text-sm font-medium mb-1 uppercase tracking-widest">{label}</p>
    <h3 className="text-3xl font-bold tracking-tight">{value}</h3>
  </div>
);

const AdminDashboard: React.FC = () => {
  const stats = [
    { label: 'Total Pages', value: 12, icon: <FileText size={20} />, trend: '+2 this month', trendUp: true },
    { label: 'Published Blogs', value: 24, icon: <PenTool size={20} />, trend: '+4 this month', trendUp: true },
    { label: 'Draft Blogs', value: 3, icon: <Clock size={20} />, trend: '-1 this week', trendUp: false },
    { label: 'SEO Score', value: '94%', icon: <Search size={20} />, trend: '+2% improvement', trendUp: true },
    { label: 'Media Files', value: 156, icon: <Image size={20} />, trend: '+12 new', trendUp: true },
  ];

  const recentActivity = [
    { action: 'Homepage content updated', time: '2 hours ago', status: 'success' },
    { action: 'New blog post published: "The Future of AI"', time: '5 hours ago', status: 'success' },
    { action: 'SEO meta description updated for "Services"', time: '1 day ago', status: 'pending' },
    { action: 'New logo variant uploaded', time: '2 days ago', status: 'success' },
    { action: 'Contact form recipient changed', time: '3 days ago', status: 'alert' },
  ];

  const quickActions = [
    { label: 'Create New Blog', icon: <Plus size={18} />, to: '/admin/blogs/new', color: 'bg-brand-orange' },
    { label: 'Edit Homepage', icon: <Edit3 size={18} />, to: '/admin/pages/homepage', color: 'bg-white/5' },
    { label: 'Update Branding', icon: <Palette size={18} />, to: '/admin/branding', color: 'bg-white/5' },
    { label: 'Manage SEO', icon: <Search size={18} />, to: '/admin/seo', color: 'bg-white/5' },
  ];

  return (
    <div className="space-y-10">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-2">Welcome back, <span className="text-brand-orange">Harsh</span></h2>
          <p className="text-white/40">Here's what's happening with ConversionFoxx today.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            System Online
          </div>
          <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium">
            March 18, 2026
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Quick Actions */}
        <div className="lg:col-span-1 space-y-6">
          <h3 className="text-xl font-bold tracking-tight flex items-center gap-2">
            Quick Actions
            <div className="h-[1px] flex-1 bg-white/5" />
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {quickActions.map((action) => (
              <Link
                key={action.label}
                to={action.to}
                className={`flex items-center justify-between p-5 rounded-2xl border border-white/5 transition-all duration-300 hover:border-brand-orange/50 hover:translate-x-1 ${
                  action.color === 'bg-brand-orange' ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/20' : 'bg-[#111] text-white/80 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-4 font-bold">
                  {action.icon}
                  {action.label}
                </div>
                <ArrowUpRight size={18} className="opacity-40" />
              </Link>
            ))}
          </div>

          {/* System Status */}
          <div className="bg-[#111] border border-white/5 p-6 rounded-3xl space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/30">System Status</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/60">Database</span>
                <span className="text-emerald-500 font-bold">Healthy</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/60">Storage</span>
                <span className="text-emerald-500 font-bold">92% Free</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/60">Last Backup</span>
                <span className="text-white/40">4 hours ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-xl font-bold tracking-tight flex items-center gap-2">
            Recent Activity
            <div className="h-[1px] flex-1 bg-white/5" />
          </h3>
          <div className="bg-[#111] border border-white/5 rounded-3xl overflow-hidden">
            <div className="divide-y divide-white/5">
              {recentActivity.map((activity, index) => (
                <div key={index} className="p-6 flex items-start gap-4 hover:bg-white/5 transition-colors group">
                  <div className={`mt-1 w-2 h-2 rounded-full ${
                    activity.status === 'success' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 
                    activity.status === 'pending' ? 'bg-brand-orange shadow-[0_0_8px_rgba(242,125,38,0.5)]' : 
                    'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]'
                  }`} />
                  <div className="flex-1">
                    <p className="font-medium text-white/90 group-hover:text-white transition-colors">{activity.action}</p>
                    <p className="text-sm text-white/40 mt-1 flex items-center gap-2">
                      <Clock size={14} />
                      {activity.time}
                    </p>
                  </div>
                  <button className="p-2 text-white/20 hover:text-brand-orange transition-colors">
                    <Edit3 size={18} />
                  </button>
                </div>
              ))}
            </div>
            <div className="p-6 bg-white/5 border-t border-white/5 text-center">
              <button className="text-sm font-bold text-brand-orange hover:text-white transition-colors">
                View All Activity
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
