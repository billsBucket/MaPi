import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://ybqyhqhbdwxkwuwesyri.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlicXlocWhiZHd4a3d1d2VzeXJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkxNTg2OTYsImV4cCI6MjA1NDczNDY5Nn0.jiNZhlJDfdj5ikY5P4IKw_PH0Q_2Boxq4EVGe92CkfA";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);