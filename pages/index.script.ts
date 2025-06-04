import type { TodoItemProps } from "~/components/ui/TodoItem.script";
import { useTodoService } from "~/composables/services/TodoService";

export function useIndex () {

  useHead({
    title: 'Mes taches',
  })
  const task = ref('');
  const tasks = ref<TodoItemProps[]>([]);
  const isLoading = ref(true);

  async function addTodo () {
    const addedTask = await useTodoService().addTodos({
      title: task.value,
    });
    tasks.value.unshift(addedTask);
    task.value = '';
  }

  function removeTodo (e: TodoItemProps["id"]) {
    const index = tasks.value.findIndex(todo => todo.id === e);
    tasks.value.splice(index, 1);
  }

  onMounted(async() => {
    isLoading.value = true; 
    tasks.value = await useTodoService().getTodos();
    isLoading.value = false; 
  })

  return {
    task, 
    tasks,
    isLoading,
    addTodo,
    removeTodo,
  };
}