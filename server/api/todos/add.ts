import { useSupabase } from "~/composables/useSupabase";

export default defineEventHandler(async (event) => {
  const supabase = useSupabase();
  const body = await readBody(event);
  const { title } = body;

  if (!title) throw createError({ statusCode: 400, message: 'Title is required' });

  const { data, error } = await supabase
  .from('todos')
  .insert([{ title }])
  .select();
  if (error) throw createError({ statusCode: 500, message: error.message });

  return data;
});
