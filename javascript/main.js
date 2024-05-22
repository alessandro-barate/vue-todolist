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
      show: true,
      text: "",
      condition: true,
    };
  },

  method: {
    removeTask() {
      console.log("ciao");
    },

    addTask() {
      this.text += this.lists;
    },
  },
}).mount("#app");

//lists[index].done === true

//@click="show = false"
