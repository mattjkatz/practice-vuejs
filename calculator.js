var App = {
  data: function () {
    return {
      saved_number: 0,
      calculations: [],
      message: "Hello Vue!",
      addition_message: "Enter Numbers to Add!",
      number1: 0,
      number2: 0,
      sum: 0,
      multiplication_message: "Enter Numbers to Multiply!",
      number3: 0,
      number4: 0,
      product: 0,
      subtraction_message: "Enter Numbers to Subtract!",
      number5: 0,
      number6: 0,
      difference: 0,
      division_message: "Enter Numbers to Divide!",
      number7: 0,
      number8: 0,
      quotient: 0,
    };
  },
  methods: {
    computeSum() {
      this.sum = Number(this.number1) + Number(this.number2);
      this.saved_number = this.sum;
      this.calculations.push(this.sum);
    },
    computeProduct() {
      this.product = Number(this.number3) * Number(this.number4);
      this.saved_number = this.product;
    },
    computeDifference() {
      this.difference = Number(this.number5) - Number(this.number6);
      this.saved_number = this.difference;
    },
    computeQuotient() {
      this.quotient = Number(this.number7) / Number(this.number8);
      this.saved_number = this.quotient;
    },
  },
};

Vue.createApp(App).mount("#app");
