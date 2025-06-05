import type { TodoItemProps } from "~/components/ui/TodoItem.script";
import { useTodoService } from "~/composables/services/TodoService";
import _ from 'lodash';
const {debounce} = _;

export class TodoItemEntity {
  id: string;
  _title: string;
  completed: boolean;
  createdAt?: Date;
  debouncedUpdate: () => void;

  constructor(props: TodoItemProps) {
    this.id = props.id;
    this._title = props.title;
    this.completed = props.completed;
    this.createdAt = props.createdAt;
    this.debouncedUpdate = debounce(this.updateAsync, 500);
  }

  
  public get title() : string {
    return this._title;
  }

  
  public set title(v : string) {
    this._title = v;
    this.debouncedUpdate();
  }
  

  toggle(): void {
    this.completed = !this.completed;
  }

  async deleteAsync(): Promise<void> {
    await useTodoService().deleteTodo({id: this.id});
  }

  async updateAsync(): Promise<void> {
    await useTodoService().updateTodo({id: this.id, title: this.title});
  }
}