<template>
  <div>
    <product-one></product-one>
    <product-two></product-two>
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
    return {};
  }
};
</script>

<style>
</style>
