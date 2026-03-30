import React from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  ArrowUpRight, 
  Activity,
  BarChart3
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart,
  Area
} from 'recharts';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 900 },
  { name: 'Jul', value: 1100 },
];

const DashboardMockup: React.FC = () => {
  return (
    <div className="relative w-full max-w-[600px] mx-auto lg:ml-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10"
      >
        {/* Main Dashboard Window */}
        <div className="bg-[#0D0D0D] border border-white/[0.08] rounded-2xl shadow-[0_32px_64px_rgba(0,0,0,0.5)] overflow-hidden">
          {/* Header */}
          <div className="px-6 py-3 border-b border-white/[0.05] flex items-center justify-between bg-[#0D0D0D]">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
            </div>
            <div className="text-[9px] font-sans font-semibold text-brand-text-secondary/60 uppercase tracking-[0.2em]">
              Growth Analytics v2.4
            </div>
            <div className="flex gap-2">
              <div className="w-4 h-1 rounded-full bg-white/[0.08]" />
              <div className="w-2 h-1 rounded-full bg-[#F26E22]/40" />
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#121212] border border-white/[0.08] shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[9px] text-brand-text-secondary/60 uppercase font-sans font-semibold tracking-wider">MRR Growth</span>
                  <div className="p-1.5 rounded-lg bg-[#F26E22]/10">
                    <TrendingUp className="w-3.5 h-3.5 text-[#F26E22]" />
                  </div>
                </div>
                <div className="text-2xl font-display font-semibold text-brand-text-heading tracking-tight">$84,200</div>
                <div className="text-[10px] text-[#22c55e] font-sans font-semibold flex items-center gap-1 mt-1.5">
                  <ArrowUpRight className="w-3 h-3" /> +14.2%
                </div>
              </div>
              <div className="p-5 rounded-xl bg-[#121212] border border-white/[0.08] shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[9px] text-brand-text-secondary/60 uppercase font-sans font-semibold tracking-wider">Conversion</span>
                  <div className="p-1.5 rounded-lg bg-[#F26E22]/10">
                    <Activity className="w-3.5 h-3.5 text-[#F26E22]" />
                  </div>
                </div>
                <div className="text-2xl font-display font-semibold text-brand-text-heading tracking-tight">3.84%</div>
                <div className="text-[10px] text-[#22c55e] font-sans font-semibold flex items-center gap-1 mt-1.5">
                  <ArrowUpRight className="w-3 h-3" /> +2.1%
                </div>
              </div>
            </div>

            {/* Chart Area */}
            <div className="h-[200px] w-full mt-4 relative">
              <div className="absolute top-0 left-0 text-[8px] text-brand-text-secondary/30 font-mono">1.2k</div>
              <div className="absolute bottom-0 left-0 text-[8px] text-brand-text-secondary/30 font-mono">0</div>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 10, right: 10, left: 20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#F26E22" stopOpacity={0.15}/>
                      <stop offset="95%" stopColor="#F26E22" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#F26E22" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#colorValue)" 
                      animationDuration={2000}
                      isAnimationActive={true}
                    />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Floating KPI Card */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 -right-6 p-4 bg-[#121212] border border-white/[0.08] rounded-xl shadow-[0_16px_32px_rgba(0,0,0,0.4)] z-20"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#F26E22]/10 flex items-center justify-center">
              <Users className="w-5 h-5 text-[#F26E22]" />
            </div>
            <div>
              <div className="text-[9px] text-brand-text-secondary/60 font-sans font-semibold uppercase tracking-wider">New Leads</div>
              <div className="text-base font-display font-semibold text-brand-text-heading tracking-tight">1,420</div>
            </div>
          </div>
        </motion.div>

        {/* Floating Small Widget */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-6 -left-4 p-3.5 bg-[#121212] border border-white/[0.08] rounded-xl shadow-[0_16px_32px_rgba(0,0,0,0.4)] z-20"
        >
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-[#22c55e]/10 flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-[#22c55e]" />
            </div>
            <div className="text-[11px] font-display font-semibold text-brand-text-heading tracking-tight">ROI +340%</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Subtle Shadow - Base - Removed blur */}
      <div className="absolute inset-x-10 bottom-0 h-12 bg-black/50 -z-10 translate-y-8 rounded-full" />
    </div>
  );
};

export default DashboardMockup;
