/* global Vue axios */

var App = {
  data: function () {
    return {
      message: "Hello Vue!",
      correctAnswer: 32,
      userGuess: null,
      guessResponse: "Enter a number.",
      imageUrl: "",
    };
  },
  methods: {
    checkGuess() {
      if (parseInt(this.userGuess) === this.correctAnswer) {
        this.guessResponse = "YOU GOT IT!!!!";
        this.imageUrl = "https://c.tenor.com/hLIV2I8VGl4AAAAC/ummmmmm.gif";
        console.log("Nice");
      } else if (parseInt(this.userGuess) > this.correctAnswer) {
        this.guessResponse = "Too high!";
        this.imageUrl = "https://c.tenor.com/km6qbyrUioQAAAAC/jimmy-mcmillan-too-damn-high.gif";
        console.log("too high");
      } else if (parseInt(this.userGuess) < this.correctAnswer) {
        this.guessResponse = "Too low...";
        this.imageUrl = "https://memegenerator.net/img/instances/68022240.jpg";
        console.log("too low");
      }
    },
  },
};

Vue.createApp(App).mount("#app");
