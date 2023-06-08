<template>
  <main>
    <!-- heading -->
    <header
      class="flex flex-row justify-center items-center pt-10 pb-7 text-center bg-zinc-900"
    >
      <img
        src="./assets/pinia-logo.svg"
        alt="pinia logo"
        class="w-[60px] -rotate-[10deg]"
      />
      <h1 class="text-slate-50 font-medium rotate-[2deg] text-4xl ml-4 mt-5">
        I need to DO
      </h1>
    </header>

    <!-- new task form -->
    <div class="bg-zinc-900 py-5">
      <TaskForm />
    </div>

    <!-- filter button -->
    <div class="w-[640px] my-3 mx-auto text-right">
      <select
        id="tasks"
        name="tasks"
        v-model="favTasks"
        class="bg-yellow-300 p-2 ml-1 rounded border border-gray-50"
      >
        <option value="all" class="bg-yellow-300 text-gray-300">
          All Tasks
        </option>
        <option value="favs" class="bg-yellow-300 text-gray-300">
          Favorites
        </option>
      </select>
    </div>

    <!-- loading -->
    <div
      class="mx-auto my-7 bg-red-300 max-w-[640px] border border-red-500 text-gray-500 p-1 text-center"
      v-if="loading"
    >
      Loading ...
    </div>

    <!-- task list -->
    <div class="max-w-[640px] my-5 mx-auto" v-if="favTasks === 'all'">
      <p>You have {{ allTasksCount }} tasks to do</p>
      <div v-for="task in tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
    <!-- fave list -->
    <div class="max-w-[640px] my-5 mx-auto" v-if="favTasks === 'favs'">
      <p>You have {{ favCount }} favs tasks to do</p>
      <div v-for="task in favs" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
    <!-- <button @click="taskStore.$reset">Reset State</button> -->
  </main>
</template>

<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useTaskStore } from "../stores/TaskStore";
import TaskDetails from "./components/TaskDetails.vue";
import TaskForm from "./components/TaskForm.vue";

const taskStore = useTaskStore();
const favTasks = ref("all");
const { tasks, loading, favs, favCount, allTasksCount } =
  storeToRefs(taskStore);

taskStore.getTasks();
</script>
