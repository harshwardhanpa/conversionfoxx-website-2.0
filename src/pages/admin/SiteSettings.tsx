import React from 'react';
import { Save, RotateCcw, Globe, Mail, Phone, Clock, Share2, Info } from 'lucide-react';

interface FormSectionProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const FormSection: React.FC<FormSectionProps> = ({ title, description, icon, children }) => (
  <div className="bg-[#111] border border-white/5 rounded-3xl overflow-hidden">
    <div className="p-6 border-b border-white/5 flex items-center gap-4">
      {icon && <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange">{icon}</div>}
      <div>
        <h3 className="text-lg font-bold tracking-tight">{title}</h3>
        {description && <p className="text-sm text-white/40">{description}</p>}
      </div>
    </div>
    <div className="p-8 space-y-6">
      {children}
    </div>
  </div>
);

interface InputFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  multiline?: boolean;
  rows?: number;
  hint?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, type = 'text', placeholder, value, onChange, multiline, rows = 3, hint }) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between">
      <label className="text-sm font-bold text-white/60 ml-1">{label}</label>
      {hint && (
        <div className="group relative">
          <Info size={14} className="text-white/20 hover:text-white transition-colors cursor-help" />
          <div className="absolute bottom-full right-0 mb-2 w-48 p-2 bg-black border border-white/10 rounded-lg text-[10px] text-white/60 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
            {hint}
          </div>
        </div>
      )}
    </div>
    {multiline ? (
      <textarea
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-4 text-white focus:outline-none focus:border-brand-orange/50 focus:ring-1 focus:ring-brand-orange/50 transition-all resize-none"
      />
    ) : (
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-4 text-white focus:outline-none focus:border-brand-orange/50 focus:ring-1 focus:ring-brand-orange/50 transition-all"
      />
    )}
  </div>
);

const SiteSettings: React.FC = () => {
  const [settings, setSettings] = React.useState({
    siteName: 'ConversionFoxx',
    tagline: 'Precision Digital Marketing & Web Solutions',
    businessEmail: 'hello@conversionfoxx.com',
    businessPhone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    hours: 'Mon - Fri: 9:00 AM - 6:00 PM',
    facebook: 'https://facebook.com/conversionfoxx',
    twitter: 'https://twitter.com/conversionfoxx',
    linkedin: 'https://linkedin.com/company/conversionfoxx',
    instagram: 'https://instagram.com/conversionfoxx',
    copyright: '© 2026 ConversionFoxx. All rights reserved.',
  });

  const handleChange = (field: string, value: string) => {
    setSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    // Placeholder save logic
    alert('Settings saved successfully!');
  };

  return (
    <div className="space-y-10 max-w-5xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-2">Site Settings</h2>
          <p className="text-white/40">Manage your website's global information and contact details.</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-all font-bold">
            <RotateCcw size={18} />
            Reset
          </button>
          <button 
            onClick={handleSave}
            className="flex items-center gap-2 px-8 py-3 bg-brand-orange text-white rounded-xl font-bold shadow-lg shadow-brand-orange/20 hover:bg-brand-orange/90 transition-all"
          >
            <Save size={18} />
            Save Changes
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <FormSection title="General Information" description="Basic site identity and branding." icon={<Globe size={20} />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField 
              label="Website Name" 
              value={settings.siteName} 
              onChange={(e) => handleChange('siteName', e.target.value)} 
              hint="The main name of your website."
            />
            <InputField 
              label="Website Tagline" 
              value={settings.tagline} 
              onChange={(e) => handleChange('tagline', e.target.value)} 
              hint="A short description that appears in search results."
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <label className="text-sm font-bold text-white/60 ml-1">Favicon</label>
              <div className="w-20 h-20 bg-white/5 border-2 border-dashed border-white/10 rounded-2xl flex items-center justify-center group cursor-pointer hover:border-brand-orange/50 transition-all">
                <div className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center font-bold text-black text-xs">C</div>
              </div>
              <p className="text-[10px] text-white/30 text-center">PNG, ICO (32x32)</p>
            </div>
            <div className="space-y-4 md:col-span-2">
              <label className="text-sm font-bold text-white/60 ml-1">Website Logo</label>
              <div className="h-20 bg-white/5 border-2 border-dashed border-white/10 rounded-2xl flex items-center justify-center group cursor-pointer hover:border-brand-orange/50 transition-all">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-brand-orange rounded-lg flex items-center justify-center font-bold text-black">C</div>
                  <span className="text-xl font-bold tracking-tight">Conversion<span className="text-brand-orange">Foxx</span></span>
                </div>
              </div>
              <p className="text-[10px] text-white/30 text-center">SVG or Transparent PNG (Max 2MB)</p>
            </div>
          </div>
        </FormSection>

        <FormSection title="Contact Details" description="How clients can reach you." icon={<Mail size={20} />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField 
              label="Business Email" 
              type="email"
              value={settings.businessEmail} 
              onChange={(e) => handleChange('businessEmail', e.target.value)} 
            />
            <InputField 
              label="Business Phone" 
              value={settings.businessPhone} 
              onChange={(e) => handleChange('businessPhone', e.target.value)} 
            />
            <InputField 
              label="Location" 
              value={settings.location} 
              onChange={(e) => handleChange('location', e.target.value)} 
            />
            <InputField 
              label="Business Hours" 
              value={settings.hours} 
              onChange={(e) => handleChange('hours', e.target.value)} 
            />
          </div>
        </FormSection>

        <FormSection title="Social Media" description="Connect your social profiles." icon={<Share2 size={20} />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField 
              label="Facebook URL" 
              value={settings.facebook} 
              onChange={(e) => handleChange('facebook', e.target.value)} 
            />
            <InputField 
              label="Twitter URL" 
              value={settings.twitter} 
              onChange={(e) => handleChange('twitter', e.target.value)} 
            />
            <InputField 
              label="LinkedIn URL" 
              value={settings.linkedin} 
              onChange={(e) => handleChange('linkedin', e.target.value)} 
            />
            <InputField 
              label="Instagram URL" 
              value={settings.instagram} 
              onChange={(e) => handleChange('instagram', e.target.value)} 
            />
          </div>
        </FormSection>

        <FormSection title="Footer Content" description="Copyright and legal text." icon={<Info size={20} />}>
          <InputField 
            label="Copyright Text" 
            value={settings.copyright} 
            onChange={(e) => handleChange('copyright', e.target.value)} 
            multiline
          />
        </FormSection>
      </div>

      {/* Sticky Save Bar */}
      <div className="sticky bottom-6 left-0 right-0 bg-[#111]/90 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center justify-between shadow-2xl z-40">
        <div className="flex items-center gap-3 text-sm text-white/60 ml-4">
          <div className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
          Unsaved changes detected
        </div>
        <div className="flex items-center gap-4">
          <button className="px-6 py-2 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-all text-sm font-bold">
            Discard
          </button>
          <button 
            onClick={handleSave}
            className="px-8 py-2 bg-brand-orange text-white rounded-lg font-bold shadow-lg shadow-brand-orange/20 hover:bg-brand-orange/90 transition-all text-sm"
          >
            Save All Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SiteSettings;
