import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || supabaseUrl === 'https://your-project-url.supabase.co') {
  console.error('Supabase URL is missing or using placeholder. Please set VITE_SUPABASE_URL in your secrets.');
}

if (!supabaseAnonKey || supabaseAnonKey === 'your-anon-key') {
  console.error('Supabase Anon Key is missing or using placeholder. Please set VITE_SUPABASE_ANON_KEY in your secrets.');
}

export const supabase = createClient(supabaseUrl || 'https://placeholder.supabase.co', supabaseAnonKey || 'placeholder');
