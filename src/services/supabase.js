import { createClient } from '@supabase/supabase-js';


const supabaseUrl = 'https://mevtkrmfpmtnznrkzrbv.supabase.co';
// eslint-disable-next-line no-undef
// const supabaseKey = process.env.SUPABASE_KEY;
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ldnRrcm1mcG10bnpucmt6cmJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM5MjcyMDUsImV4cCI6MjAxOTUwMzIwNX0.yGM3FjTpbAbrJNvu-MQwZKZnrKcrD7tgaKlN1T2B-XQ"
const supabase = createClient(supabaseUrl, supabaseKey);


export default supabase;