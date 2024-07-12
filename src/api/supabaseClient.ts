// src/api/supabaseClient.ts

import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL, SUPABASE_KEY } from "@env";

console.log("SUPABASE_URL:", SUPABASE_URL); // Debug
console.log("SUPABASE_KEY:", SUPABASE_KEY); // Debug

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
