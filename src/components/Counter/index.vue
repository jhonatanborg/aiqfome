<template>
  <div class="d-flex align-items-center bg-aiqfome">
    <div
      @click="decrement"
      class="cursor-pointer"
      v-if="!isQuantity && count === 1"
    >
      <img src="../../assets/delete.svg" alt="" />
    </div>
    <div class="cursor-pointer" @click="decrement" v-else>
      <img src="../../assets/minus.svg" alt="" />
    </div>
    <div v-if="isQuantity && count === 1">
      <img src="../../assets/minus-light.svg" alt="" />
    </div>
    <div class="number">
      <span class="font-weigth-bold">{{ count }}</span>
    </div>
    <div @click="increment" class="cursor-pointer">
      <img src="../../assets/add.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Counter",
  props: {
    count: {
      type: Number,
      default: 0,
    },
    isQuantity: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    increment() {
      console.log("funfou");
      this.$emit("increment");
    },
    decrement() {
      this.$emit("decrement");
    },
  },
};
</script>

<style>
.number {
  font-size: 16px;
  font-weight: bold;
  padding: 0.8rem;
}
</style>