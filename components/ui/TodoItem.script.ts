import { TodoItemEntity } from "~/entities/TodoItemEntity"

export type TodoItemProps = {
  id: string,
  title: string,
  createdAt: Date,
  completed: boolean,
}

export type TodoItemEmit = {
  (e: 'delete', id: string): void,
}

export function useTodoItem (props: TodoItemProps, emit: TodoItemEmit) {
  const todoItem = reactive(new TodoItemEntity(props));

  async function deleteTodo () {
    await todoItem.deleteAsync();
    emit('delete', todoItem.id);
  }

  return {
    todoItem, 
    deleteTodo
  };
}