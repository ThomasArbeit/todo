<script setup lang="ts">
  import { LucideCheck, LucideTrash2 } from 'lucide-vue-next';
  import { useTodoItem, type TodoItemEmit, type TodoItemProps } from './TodoItem.script';
  import Input from '@/components/ui/Input.vue';
  const props = defineProps<TodoItemProps>();
  const emits = defineEmits<TodoItemEmit>();
  const setup = useTodoItem(props, emits);

</script>

<template>
  <div :class="['todo-item', `${setup.todoItem.completed ? 'todo-item--completed' : null }`]">
    <div class="todo-item__circle" @click="setup.todoItem.toggle()"><LucideCheck v-if="setup.todoItem.completed" color="white" :size="16"/></div>
    <div class="todo-item__content">
      <Input placeholder="Todo vide" variant="nude" type="text" v-model="setup.todoItem.title"/>
    </div>
    <div class="todo-item__actions">
      <LucideTrash2 @click="setup.deleteTodo()" :size="20"/>
    </div>
  </div>
</template>