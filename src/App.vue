<template>
  <main>
    <!-- heading -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo" />
      <h1>Pinia Tasks</h1>
    </header>

    <!-- new task form -->
    <div class="new-task-form">
      <TaskForm />
    </div>

    <!-- filter button -->
    <div class="filter">
      <!-- <button @click="favTasks = 'all'">All tasks</button>
      <button @click="favTasks = 'favs'">Fave tasks</button> -->

      <select id="tasks" name="tasks" v-model="favTasks">
        <option value="all">All Tasks</option>
        <option value="favs">Favorites</option>
      </select>
    </div>

    <!-- task list -->
    <div class="task-list" v-if="favTasks === 'all'">
      <p>You have {{ taskStore.allTasksCount }} tasks to do</p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
    <!-- fave list -->
    <div class="task-list" v-if="favTasks === 'favs'">
      <p>You have {{ taskStore.favCount }} favs tasks to do</p>
      <div v-for="task in taskStore.favs" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useTaskStore } from "../stores/TaskStore";
import TaskDetails from "./components/TaskDetails.vue";
import TaskForm from "./components/TaskForm.vue";

const taskStore = useTaskStore();
const favTasks = ref("all");
</script>
