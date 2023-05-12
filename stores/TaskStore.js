import { defineStore } from "pinia";

export const useTaskStore = defineStore("TaskStore", {
  state: () => ({
    tasks: [
      { id: 1, title: "buy some milk", isFav: false },
      { id: 2, title: "play Gloomhaven", isFav: true },
    ],
  }),

  getters: {
    favs: (state) => {
      return state.tasks.filter((t) => t.isFav);
    },
    favCount: (state) => {
      return state.tasks.reduce((p, t) => {
        return t.isFav ? p + 1 : p;
      }, 0);
    },
    allTasksCount: (state) => {
      return state.tasks.length;
    },
  },

  actions: {
    addTask(task) {
      this.tasks.push(task);
    },

    addFavs(id) {
      const task = this.tasks.find((t) => t.id === id);
      task.isFav = !task.isFav;
    },

    deleteTask(id) {
      this.tasks = this.tasks.filter((t) => {
        return t.id !== id;
      });
    },
  },
});
