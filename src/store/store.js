import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [
      { name: "Mangga", price: 20000 },
      { name: "Semangka", price: 15000 },
      { name: "Jambu", price: 18000 }
    ]
  }
});
