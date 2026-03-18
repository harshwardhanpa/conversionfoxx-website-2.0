import React, { useState } from 'react';
import { Palette, Save, RotateCcw, Type, Layout, Sliders, Check, Eye } from 'lucide-react';

interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ label, value, onChange }) => (
  <div className="space-y-3">
    <label className="text-sm font-bold text-white/60 ml-1">{label}</label>
    <div className="flex items-center gap-4">
      <div 
        className="w-12 h-12 rounded-xl border border-white/10 shadow-lg cursor-pointer transition-transform hover:scale-105"
        style={{ backgroundColor: value }}
        onClick={() => {}} // In a real app, this would open a color picker
      />
      <div className="flex-1 relative group">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-white font-mono text-sm focus:outline-none focus:border-brand-orange/50 transition-all uppercase"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-brand-orange transition-colors">
          #
        </div>
      </div>
    </div>
  </div>
);

const Branding: React.FC = () => {
  const [branding, setBranding] = useState({
    primaryColor: '#F27D26',
    secondaryColor: '#0A0A0A',
    accentColor: '#10B981',
    backgroundColor: '#000000',
    textColor: '#FFFFFF',
    headingFont: 'Inter',
    bodyFont: 'Inter',
    borderRadius: '1.5rem',
    glassIntensity: 20,
    buttonStyle: 'rounded',
  });

  const handleChange = (field: string, value: any) => {
    setBranding(prev => ({ ...prev, [field]: value }));
  };

  const fonts = ['Inter', 'Space Grotesk', 'Outfit', 'Playfair Display', 'JetBrains Mono'];
  const borderRadii = [
    { label: 'Sharp', value: '0' },
    { label: 'Slight', value: '0.5rem' },
    { label: 'Medium', value: '1rem' },
    { label: 'Rounded', value: '1.5rem' },
    { label: 'Full', value: '9999px' },
  ];

  return (
    <div className="space-y-10 max-w-6xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-2">Branding & Design</h2>
          <p className="text-white/40">Customize the visual identity and theme of your website.</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-all font-bold">
            <RotateCcw size={18} />
            Reset
          </button>
          <button className="flex items-center gap-2 px-8 py-3 bg-brand-orange text-white rounded-xl font-bold shadow-lg shadow-brand-orange/20 hover:bg-brand-orange/90 transition-all">
            <Save size={18} />
            Save Changes
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Controls */}
        <div className="lg:col-span-2 space-y-8">
          {/* Colors */}
          <div className="bg-[#111] border border-white/5 rounded-3xl p-8 space-y-8">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange">
                <Palette size={20} />
              </div>
              <h3 className="text-xl font-bold tracking-tight">Color Palette</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ColorPicker label="Primary Color" value={branding.primaryColor} onChange={(v) => handleChange('primaryColor', v)} />
              <ColorPicker label="Secondary Color" value={branding.secondaryColor} onChange={(v) => handleChange('secondaryColor', v)} />
              <ColorPicker label="Accent Color" value={branding.accentColor} onChange={(v) => handleChange('accentColor', v)} />
              <ColorPicker label="Background Color" value={branding.backgroundColor} onChange={(v) => handleChange('backgroundColor', v)} />
              <ColorPicker label="Text Color" value={branding.textColor} onChange={(v) => handleChange('textColor', v)} />
            </div>
          </div>

          {/* Typography */}
          <div className="bg-[#111] border border-white/5 rounded-3xl p-8 space-y-8">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange">
                <Type size={20} />
              </div>
              <h3 className="text-xl font-bold tracking-tight">Typography</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-sm font-bold text-white/60 ml-1">Heading Font</label>
                <select 
                  value={branding.headingFont}
                  onChange={(e) => handleChange('headingFont', e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-4 text-white focus:outline-none focus:border-brand-orange/50 transition-all appearance-none"
                >
                  {fonts.map(font => <option key={font} value={font}>{font}</option>)}
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold text-white/60 ml-1">Body Font</label>
                <select 
                  value={branding.bodyFont}
                  onChange={(e) => handleChange('bodyFont', e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-4 text-white focus:outline-none focus:border-brand-orange/50 transition-all appearance-none"
                >
                  {fonts.map(font => <option key={font} value={font}>{font}</option>)}
                </select>
              </div>
            </div>
          </div>

          {/* UI Elements */}
          <div className="bg-[#111] border border-white/5 rounded-3xl p-8 space-y-8">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange">
                <Sliders size={20} />
              </div>
              <h3 className="text-xl font-bold tracking-tight">UI Elements</h3>
            </div>
            <div className="space-y-6">
              <div className="space-y-4">
                <label className="text-sm font-bold text-white/60 ml-1">Border Radius</label>
                <div className="flex flex-wrap gap-4">
                  {borderRadii.map((radius) => (
                    <button
                      key={radius.label}
                      onClick={() => handleChange('borderRadius', radius.value)}
                      className={`px-6 py-3 rounded-xl border transition-all font-medium ${
                        branding.borderRadius === radius.value 
                          ? 'bg-brand-orange border-brand-orange text-white shadow-lg shadow-brand-orange/20' 
                          : 'bg-white/5 border-white/10 text-white/60 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {radius.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold text-white/60 ml-1">Glassmorphism Intensity</label>
                  <span className="text-brand-orange font-bold font-mono">{branding.glassIntensity}%</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={branding.glassIntensity}
                  onChange={(e) => handleChange('glassIntensity', parseInt(e.target.value))}
                  className="w-full h-2 bg-white/5 rounded-lg appearance-none cursor-pointer accent-brand-orange"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Preview */}
        <div className="lg:col-span-1 space-y-6 sticky top-24 h-fit">
          <h3 className="text-xl font-bold tracking-tight flex items-center gap-2">
            Live Preview
            <div className="h-[1px] flex-1 bg-white/5" />
          </h3>
          <div className="bg-[#050505] border border-white/10 rounded-[2.5rem] p-8 space-y-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 blur-[40px] rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 bg-brand-orange rounded-2xl flex items-center justify-center font-bold text-black text-xl">C</div>
              <h4 className="text-2xl font-bold tracking-tight" style={{ color: branding.textColor, fontFamily: branding.headingFont }}>
                Design <span style={{ color: branding.primaryColor }}>Preview</span>
              </h4>
              <p className="text-sm leading-relaxed opacity-60" style={{ color: branding.textColor, fontFamily: branding.bodyFont }}>
                This is how your branding elements will look on the live website. Adjust the colors and fonts to match your vision.
              </p>
            </div>

            <div 
              className="p-6 border border-white/10 shadow-xl space-y-4"
              style={{ 
                borderRadius: branding.borderRadius,
                backgroundColor: `rgba(255, 255, 255, ${branding.glassIntensity / 500})`,
                backdropFilter: `blur(${branding.glassIntensity / 2}px)`
              }}
            >
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4" style={{ color: branding.accentColor }} />
                <span className="text-xs font-bold uppercase tracking-widest opacity-40">Feature Item</span>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full" style={{ backgroundColor: branding.primaryColor, width: '70%' }} />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <button 
                className="w-full py-4 font-bold text-white shadow-lg transition-all hover:scale-[1.02]"
                style={{ backgroundColor: branding.primaryColor, borderRadius: branding.borderRadius }}
              >
                Primary Action
              </button>
              <button 
                className="w-full py-4 font-bold text-white/60 border border-white/10 transition-all hover:text-white hover:bg-white/5"
                style={{ borderRadius: branding.borderRadius }}
              >
                Secondary Action
              </button>
            </div>
          </div>
          <p className="text-center text-xs text-white/20 italic">
            Preview is an approximation of the live theme.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Branding;
