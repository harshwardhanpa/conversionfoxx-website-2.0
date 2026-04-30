import { supabase, isSupabaseConfigured } from '../lib/supabaseClient';

export interface SiteSettings {
  id?: string;
  site_name: string;
  site_description: string;
  contact_email: string;
  contact_phone: string;
  address: string;
  google_analytics_id: string;
  favicon_url: string;
  logo_url: string;
  tagline?: string;
  facebook_url?: string;
  twitter_url?: string;
  linkedin_url?: string;
  instagram_url?: string;
  copyright_text?: string;
}

export const siteService = {
  async getSettings(): Promise<SiteSettings | null> {
    if (!isSupabaseConfigured) return null;
    try {
      const { data, error } = await supabase
        .from('site_settings')
        .select('*')
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('Error fetching site settings:', error);
        return null;
      }

      return data;
    } catch (err) {
      console.warn('Supabase fetch error for site settings:', err);
      return null;
    }
  },

  async updateSettings(settings: Partial<SiteSettings>): Promise<boolean> {
    const { data: existing } = await supabase.from('site_settings').select('id').single();

    let error;
    if (existing) {
      const { error: updateError } = await supabase
        .from('site_settings')
        .update(settings)
        .eq('id', existing.id);
      error = updateError;
    } else {
      const { error: insertError } = await supabase
        .from('site_settings')
        .insert([settings]);
      error = insertError;
    }

    if (error) {
      console.error('Error updating site settings:', error);
      return false;
    }

    return true;
  },

  async uploadMedia(file: File, bucket: string = 'media'): Promise<string | null> {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from(bucket)
      .upload(filePath, file);

    if (uploadError) {
      console.error('Error uploading media:', uploadError);
      return null;
    }

    const { data } = supabase.storage.from(bucket).getPublicUrl(filePath);
    return data.publicUrl;
  }
};
