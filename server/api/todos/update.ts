import { useSupabase } from '@/composables/useSupabase';

export default defineEventHandler(async (event) => {
  const supabase = useSupabase();
  const body = await readBody(event);
  const { id, title } = body;

  if (!id) throw createError({ statusCode: 400, message: 'ID required' });

  const { data, error } = await supabase.from('todos').update({ title }).eq('id', id);
  if (error) throw createError({ statusCode: 500, message: error.message });

  return data;
})