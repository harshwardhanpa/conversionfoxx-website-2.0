import { supabase } from '../lib/supabaseClient';

export interface BrandingSettings {
  id?: string;
  primary_color: string;
  secondary_color: string;
  accent_color: string;
  background_color: string;
  text_color: string;
  font_family_heading: string;
  font_family_body: string;
  border_radius: string;
  glass_intensity: number;
  button_style: string;
}

export const brandingService = {
  async getSettings(): Promise<BrandingSettings | null> {
    const { data, error } = await supabase
      .from('branding_settings')
      .select('*')
      .single();

    if (error && error.code !== 'PGRST116') {
      console.error('Error fetching branding settings:', error);
      return null;
    }

    return data;
  },

  async updateSettings(settings: Partial<BrandingSettings>): Promise<boolean> {
    const { data: existing } = await supabase.from('branding_settings').select('id').single();

    let error;
    if (existing) {
      const { error: updateError } = await supabase
        .from('branding_settings')
        .update(settings)
        .eq('id', existing.id);
      error = updateError;
    } else {
      const { error: insertError } = await supabase
        .from('branding_settings')
        .insert([settings]);
      error = insertError;
    }

    if (error) {
      console.error('Error updating branding settings:', error);
      return false;
    }

    return true;
  }
};
