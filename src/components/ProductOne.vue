<template>
  <div>
    <h1>Buah-Buahan One</h1>
    <ul>
      <li v-for="product in salesProduct" :key="product.name">
        <p>{{ product.name }}, Harga Rp.{{ product.price }}</p>
      </li>
      <button @click="reducePrice(1000)">Reduce Price By 1</button>
    </ul>
  </div>
</template>
<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
    salesProduct() {
      return this.$store.getters.salesProduct;
    }
  },
  methods: {
    reducePrice(amount) {
      this.$store.dispatch("reducePrice", amount);
    }
  }
};
</script>
<style scoped>
p {
  color: green;
}
</style>