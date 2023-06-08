<template>
  <div
    class="flex flex-row justify-between items-center mt-5 mx-auto py-2 px-5 rounded bg-gray-50"
  >
    <h3
      class="inline-block text-start text-gray-500 text-xl font-semibold uppercase"
    >
      {{ task.title }}
    </h3>
    <div class="">
      <i
        @click="taskStore.deleteTask(task.id)"
        class="material-icons ml-2 cursor-pointer text-2xl text-gray-500"
        >delete</i
      >
      <i
        @click="taskStore.addFavs(task.id)"
        :class="{ 'text-red-500': task.isFav }"
        class="material-icons ml-2 cursor-pointer text-2xl text-gray-500"
        >favorite</i
      >
    </div>
  </div>
</template>

<script setup>
import { useTaskStore } from "../../stores/TaskStore";
import { defineProps } from "vue";

const taskStore = useTaskStore();
const { task } = defineProps(["task"]);
</script>
