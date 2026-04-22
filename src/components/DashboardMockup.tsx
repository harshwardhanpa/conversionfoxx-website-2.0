import React from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  Users, 
  ArrowUpRight, 
  Activity,
  BarChart3,
  MousePointer2,
  PieChart,
  Layout
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';

const data = [
  { name: 'Mon', value: 420 },
  { name: 'Tue', value: 380 },
  { name: 'Wed', value: 650 },
  { name: 'Thu', value: 890 },
  { name: 'Fri', value: 720 },
  { name: 'Sat', value: 1100 },
  { name: 'Sun', value: 1250 },
];

const DashboardMockup: React.FC = () => {
  return (
    <div className="relative w-full max-w-[540px] mx-auto lg:ml-auto group">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10"
      >
        {/* Main Dashboard Window */}
        <div className="bg-[#0A0A0A] border border-white/[0.12] rounded-2xl shadow-[0_40px_80px_-15px_rgba(0,0,0,0.8)] overflow-hidden">
          {/* Header */}
          <div className="px-6 py-4 border-b border-white/[0.08] flex items-center justify-between bg-[#0F0F0F]">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-lg shadow-[#FF5F57]/20" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-lg shadow-[#FFBD2E]/20" />
                <div className="w-3 h-3 rounded-full bg-[#28C840] shadow-lg shadow-[#28C840]/20" />
              </div>
              <div className="ml-4 h-6 w-px bg-white/10" />
              <div className="ml-4 flex items-center gap-2 text-[10px] font-sans font-bold text-white/40 uppercase tracking-[0.2em]">
                <Layout className="w-3 h-3" />
                Revenue OS
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-8 w-[120px] rounded-lg bg-white/5 border border-white/10 flex items-center px-3">
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '65%' }}
                    transition={{ duration: 2, delay: 1 }}
                    className="h-full bg-brand-primary" 
                  />
                </div>
              </div>
              <div className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center text-brand-dark font-bold text-xs ring-2 ring-brand-primary/20">
                JD
              </div>
            </div>
          </div>

          <div className="flex">
            {/* Sidebar Left */}
            <div className="w-16 border-r border-white/5 bg-[#0D0D0D] hidden sm:flex flex-col items-center py-6 gap-6">
              {[Activity, BarChart3, Users, PieChart].map((Icon, i) => (
                <div key={i} className={`p-2 rounded-lg transition-colors ${i === 1 ? 'bg-brand-primary/10 text-brand-primary' : 'text-white/20 hover:text-white/40 hover:bg-white/5'}`}>
                  <Icon className="w-5 h-5" />
                </div>
              ))}
            </div>

            {/* Content Area */}
            <div className="flex-1 p-6 md:p-8 space-y-8 bg-[#0A0A0A]">
              {/* Top Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <div className="text-[10px] text-white/30 uppercase font-sans font-bold tracking-widest">Active Revenue</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-display font-bold text-white tracking-tighter">$142,850</span>
                    <span className="text-[11px] text-[#22c55e] font-sans font-bold flex items-center">
                      <TrendingUp className="w-3 h-3 mr-0.5" /> +24%
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] text-white/30 uppercase font-sans font-bold tracking-widest">Conversion Rate</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-display font-bold text-white tracking-tighter">4.82%</span>
                    <span className="text-[11px] text-[#22c55e] font-sans font-bold flex items-center">
                      <ArrowUpRight className="w-3 h-3 mr-0.5" /> +1.2%
                    </span>
                  </div>
                </div>
              </div>

              {/* Chart Section */}
              <div className="h-[220px] w-full rounded-2xl bg-[#0D0D0D] border border-white/[0.05] p-4 relative">
                <div className="absolute top-4 left-6 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-primary" />
                  <span className="text-[10px] text-white/40 font-bold uppercase tracking-wider">Revenue Forecast</span>
                </div>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data} margin={{ top: 40, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="saasGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#F26E22" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#F26E22" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#F26E22" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#saasGradient)" 
                      animationDuration={2500}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Recent Activity List */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-white/30 uppercase font-sans font-bold tracking-widest">Live Feed</span>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-[#22c55e] animate-pulse" />
                    <span className="text-[9px] text-[#22c55e] font-sans font-bold uppercase">System Online</span>
                  </div>
                </div>
                <div className="space-y-3">
                  {[1, 2].map((i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] group/item hover:bg-white/[0.04] transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                          <MousePointer2 className="w-4 h-4 text-brand-primary" />
                        </div>
                        <div>
                          <div className="text-xs font-display font-medium text-white">Conversion Triggered</div>
                          <div className="text-[10px] text-white/30 font-sans">Funnel B → Checkout</div>
                        </div>
                      </div>
                      <div className="text-xs font-mono text-brand-primary">+$850</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating KPI Badges */}
        <motion.div
          animate={{ x: [0, 10, 0], y: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-12 -right-8 p-5 bg-[#121212] border border-white/[0.15] rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] z-20 backdrop-blur-xl hidden md:block"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#22c55e]/20 flex items-center justify-center ring-1 ring-[#22c55e]/30">
              <TrendingUp className="w-6 h-6 text-[#22c55e]" />
            </div>
            <div>
              <div className="text-[10px] text-white/40 font-bold uppercase tracking-wider">Growth Delta</div>
              <div className="text-2xl font-display font-bold text-white tracking-tight">+428%</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ x: [0, -8, 0], y: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-10 -left-12 p-4 bg-[#121212] border border-white/[0.15] rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] z-20 backdrop-blur-xl hidden md:block"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-primary/20 flex items-center justify-center ring-1 ring-brand-primary/30">
              <Users className="w-5 h-5 text-brand-primary" />
            </div>
            <div>
              <div className="text-[10px] text-white/40 font-bold uppercase tracking-wider">Active Users</div>
              <div className="text-xl font-display font-bold text-white tracking-tight">2,840</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Extreme Visual Depth Shadow */}
      <div className="absolute inset-0 bg-brand-primary/10 blur-[120px] rounded-full -z-10 group-hover:bg-brand-primary/15 transition-colors duration-1000" />
    </div>
  );
};

export default DashboardMockup;
