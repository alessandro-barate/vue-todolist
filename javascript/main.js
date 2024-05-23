"use strict";

const { createApp } = Vue;

createApp({
  data() {
    return {
      lists: [
        {
          text: "Quarterly Newsletter",
          done: true,
        },
        {
          text: "Mobile app launch",
          done: true,
        },
        {
          text: "Interview John H.",
          done: false,
        },
        {
          text: "Summit update to mobile storefronts",
          done: true,
        },
        {
          text: "Schedule meeting with Alex",
          done: false,
        },
        {
          text: "Homepage refresh",
          done: true,
        },
        {
          text: "Quarterly Newsletter",
          done: true,
        },
        {
          text: "Onboard new Sales team members",
          done: true,
        },
        {
          text: "Review editorial calendar",
          done: true,
        },
      ],

      index: 0,
      newTask: null,
      searchTask: null,
    };
  },

  methods: {
    removeTask(indexReceived) {
      this.lists = this.lists.filter((todo, index) => index !== indexReceived); //Qui non vado a togliere effettivamente dall'array di partenza, perchè fare una cosa del genere è onerosa. E' best practice fare un nuovo array usando filter.
    },

    addTask() {
      const myTask = { text: this.newTask.trim(), done: false };

      if (!this.newTask) return;
      this.lists.push(myTask);
      this.newTask = null;
    },

    toggleTask(indexReceived) {
      this.lists[indexReceived].done = !this.lists[indexReceived].done;
    },

    tasksList() {},
  },
}).mount("#app");

//@click="show = false"
