import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://hddfkkojfvmjuxsyhcgh.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkZGZra29qZnZtanV4c3loY2doIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3MDI1MjksImV4cCI6MjA5MjI3ODUyOX0.2EYGf2PPBDpkkY1d2Rp87GY5so05ehx6a0sYfCXHe1Q'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
