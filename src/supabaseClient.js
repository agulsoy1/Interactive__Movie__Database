import {createClient} from "@supabase/supabase-js"

const supabaseUrl = "https://arbsmddtbwbnyynaxeuj.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFyYnNtZGR0Yndibnl5bmF4ZXVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM0NTM5OTEsImV4cCI6MjA4OTAyOTk5MX0.lMVp_IF4cn9YEzOccE45opUmch3NIelwhqqZBJZtdtk";

export const supabase = createClient(supabaseUrl, supabaseAnonKey)