<template>
  <div>
    <h1>Buah-Buahan Two</h1>
    <ul>
      <li v-for="product in products" :key="product.name">
        <p>{{ product.name }}, Harga Rp.{{ product.price }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    products: {
      type: Array,
      required: true,
      default: []
    }
  }
};
</script>
<style scoped>
p {
  color: red;
}
</style>