
<template>
  <div class="d-flex max-width">
    <product-card />
  </div>
</template>

<script>
import ProductCard from "../../components/ProductCard/index.vue";
export default {
  name: "Product",
  components: {
    ProductCard,
  },
};
</script>

<style>
.max-width {
  max-width: 500px;
  margin: 0 auto;
}
</style>