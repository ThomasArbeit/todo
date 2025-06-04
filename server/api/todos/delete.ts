import { useSupabase } from '@/composables/useSupabase';

export default defineEventHandler(async (event) => {
  const supabase = useSupabase();
  const body = await readBody(event);
  const { id } = body;
  console.log('log :', id);

  if (!id) throw createError({statusCode: 400, message: 'Aucun Id'});

  const {data, error} = await supabase
  .from('todos')
  .delete()
  .eq('id', id);

  if (error) throw createError({statusCode: 500, message: error.message});

  return {success: true};
})