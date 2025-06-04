<script setup lang="ts">
  import Page from '@/components/ui/Page.vue';
  import Input from '@/components/ui/Input.vue';
  import { useIndex } from './index.script';
import TodoItem from '~/components/ui/TodoItem.vue';
import TodoItemSkeleton from '~/components/ui/TodoItemSkeleton.vue';
  const setup = useIndex();
</script>

<template>
  <Page title="Mes taches">
    <Input v-model="setup.task.value" placeholder="+ Ajouter une tache" type="text" @enter="setup.addTodo()"/>
    <div class="list" v-if="!setup.isLoading.value">
      <TodoItem v-for="todo in setup.tasks.value" 
      :key="todo.id" 
      @delete="(e) => setup.removeTodo(e)"
      v-bind="todo"/>
    </div>
    <div class="list" v-else>
      <TodoItemSkeleton v-for="i in 5" :key="i" />
    </div>
  </Page>
</template>
