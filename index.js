var App = {
  data: function () {
    return {
      message: "Hello from JavaScript",
      name: "Katherine",
      count: 0,
    };
  },
  methods: {
    changeMessage: function () {
      this.message = "What is up my dude.";
    },
  },
};

Vue.createApp(App).mount("#app");
