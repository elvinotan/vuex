import Vue from "vue";
import Vuex from "vuex";
import { isContext } from "vm";

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    products: [
      { name: "Mangga", price: 20000 },
      { name: "Semangka", price: 15000 },
      { name: "Jambu", price: 18000 }
    ]
  },
  getters: {
    salesProduct(state) {
      return state.products.map(p => {
        return { name: "**" + p.name + "**", price: p.price / 2 };
      });
    }
  },
  mutations: {
    reducePrice(state, payload) {
      state.products.forEach(p => {
        p.price -= payload;
      });
    }
  },
  actions: {
    reducePrice(contex, payload) {
      setTimeout(function() {
        contex.commit("reducePrice", payload);
      }, 3000);
    }
  }
});
