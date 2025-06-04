export function useTodoService () {
  async function getTodos() {
    const todos = await $fetch('/api/todos/get');
    return todos;
  }

  async function addTodos(body: any) {
    const todo = await $fetch('/api/todos/add',{
      method: 'POST',
      body: body,
    });
    return todo[0];
  }

  async function deleteTodo(body: any) {
    try {
      const { success } = await $fetch('/api/todos/delete', {
        method: 'DELETE',
        body: body,
      });
      console.log('Todo supprimee');
      return success;
    } catch (e) {
      console.log(e,'Erreur lors de la suppression');
    }
  }

  async function updateTodo(body: any) {
    try {
      const data = await $fetch('/api/todos/update', {
        method: 'PUT',
        body: body,
      });
      console.log('Todo Updated');
      return data;
    } catch (e) {
      console.log(e, `Erreur de l'update`);
    }
  }

  return {
    addTodos,
    getTodos,
    deleteTodo,
    updateTodo,
  }
}