import {createClient} from "@supabase/supabase-js"
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhb294aHZyaHd1cHF1a2hmanJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjI0MTQ0MTUsImV4cCI6MTk3Nzk5MDQxNX0.I2IVltAx37K7QFi1zTEs2O4d2V9K6mHhP45fhrVEkWY"

export const supabase = createClient("https://paooxhvrhwupqukhfjrs.supabase.co", supabaseAnonKey)


