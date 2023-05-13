<template>
  <div class="task-form">
    <form @submit.prevent="handleSubmit">
      <input type="text" placeholder="I need to ..." v-model.trim="newTask" />
      <button>Add</button>
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
