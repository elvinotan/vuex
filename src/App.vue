<template>
  <div>
    <product-one :products="products"></product-one>
    <product-two :products="products"></product-two>
  </div>
</template>

<script>
import ProductOne from "./components/ProductOne.vue";
import ProductTwo from "./components/ProductTwo.vue";
export default {
  name: "app",
  components: {
    "product-one": ProductOne,
    "product-two": ProductTwo
  },
  data() {
    return {
      products: [
        { name: "Mangga", price: 20000 },
        { name: "Semangka", price: 15000 },
        { name: "Jambu", price: 18000 }
      ]
    };
  }
};
</script>

<style>
</style>
