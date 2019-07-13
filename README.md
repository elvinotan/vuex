# vuex

# Vuex Tutorial #1 - What is Vuex

Vuex adalah state management, seperti Redux tapi lebih mudah, layaknya data local di browser, sehingga memudahkan untuk transfer data antar component</br>
![WhatIs](https://github.com/elvinotan/vuex/blob/master/images/whatis.png)
Bila kita tidak menggunakan Vuex, untuk transfer data dari parent ke child harus menggunakan prop, dan sebaliknya harus trigger event dari child to parent, Super Ribett</br>
![OnlyVue](https://github.com/elvinotan/vuex/blob/master/images/onlyvue.png)
Bila kita sudah menggunakan Vuex, komunikasi antar component menjadi sgt mudah, dari c1 tinggal mutation data ke store, dan dari c2 tinggal getter data dari store</br>
![Vuex](https://github.com/elvinotan/vuex/blob/master/images/vuex.png)

Untuk memulai sample Vuex kita harus setting enviroment
Install vue cli

```
npm install -g vue-cli
```

Buat project vuex

```
vue init webpack-simple vuex
```

Install package

```
npm install
```

Jalankan Server

```
npm run dev
```

# Vuex Tutorial #2 - A Simple Vue App

Pada tahap ini kita masih menggunakan tehnik/cara lama tanpa vuex</br>
Pada kasus di bawah terdapat data array buah buahan yang terletak di bagian root App, data array ini akan di render di 2 component yang berbeda</br>
Cara lama di lakukan dengan mem-passing array buah-buahan melalui props, dimana masing-masing component (ProductOne dan ProductTwo) menerima props tersebut dan me-rendernya</br>

```
ProductOne.vue
<template>
  <div>
    <h1>Buah-Buahan One</h1>
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
  color: green;
}
</style>
```

```
ProductTwo.vue
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
```

```
App.vue
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
```

# Vuex Tutorial #3 - Setting up a Central Store

Pada tahap awal, untuk menggunakan vuex, kita harus melakukan setup Store</br>
Store adalah object placeholder, tempat menyimpan application data</br>

```
src/store/store.js
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

```

# Vuex Tutorial #4 - Using Computed Properties

Store yang telah kita setup pada tutorial sebelumnya, siap untuk di gunakan</br>
import store dari file store.js dan pasang pada Vue Instance, agar dapat di gunakan di mana saja melalui this.$store</br>
Untuk mengambil data dari store, kita menggunakan computed, dimana store root object dapat di access melalui this.$store.state...</br>

```
main.js
import Vue from "vue";
import App from "./App.vue";
import { store } from "./store/store";

new Vue({
  store, // equal store: store
  el: "#app",
  render: h => h(App)
});
```

```
ProductOne.vue
<template>
  <div>
    <h1>Buah-Buahan One</h1>
    <ul>
      <li v-for="product in products" :key="product.name">
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
    }
  }
};
</script>
<style scoped>
p {
  color: green;
}
</style>
```

# Vuex Tutorial #5 - Getters

```

```

# Vuex Tutorial #6 - Mutations

```

```

# Vuex Tutorial #7 - Actions

```

```

# Vuex Tutorial #8 - Mapping Actions & Getters

```

```
