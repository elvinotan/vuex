<template>
  <div>
    <h1>Buah-Buahan One</h1>
    <ul>
      <li v-for="product in salesProduct" :key="product.name">
        <p>{{ product.name }}, Harga Rp.{{ product.price }}</p>
      </li>
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
  }
};
</script>
<style scoped>
p {
  color: green;
}
</style>