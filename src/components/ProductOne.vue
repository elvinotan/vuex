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
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
    ...mapGetters(["salesProduct"])
  },
  methods: {
    ...mapActions(["reducePrice"])
  }
};
</script>
<style scoped>
p {
  color: green;
}
</style>