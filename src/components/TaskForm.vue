<template>
  <div class="task-form">
    <form
      @submit.prevent="handleSubmit"
      class="max-w-[400px] mx-auto grid grid-cols-4 gap-3"
    >
      <input
        type="text"
        placeholder="I need to ..."
        v-model.trim="newTask"
        class="col-span-3 p-3 rounded-md font-medium text-gray-500"
      />
      <button
        class="col-span-1 bg-yellow-300 cursor-pointer rounded-md font-medium text-slate-50"
      >
        Add
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTaskStore } from "../../stores/TaskStore";

const taskStore = useTaskStore();

const newTask = ref("");

const handleSubmit = () => {
  if (newTask.value.length > 0) {
    let maxId = taskStore.tasks.reduce((max, task) => {
      return task.id > max ? task.id : max;
    }, 0);

    taskStore.addTask({
      id: maxId + 1,
      title: newTask.value,
      isFav: false,
    });

    newTask.value = "";
  }
};
</script>
