import { useSupabase } from "~/composables/useSupabase";

export default defineEventHandler(async (event) => {
  const supabase = useSupabase();
  const { data, error } = await supabase
  .from('todos')
  .select('*')
  .order('created_at', { ascending: false });
  
  if (error) throw createError({ statusCode: 500, message: error.message });
  return data;
});
