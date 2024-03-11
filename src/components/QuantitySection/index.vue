<template>
  <div>
    <div class="header d-flex align-items-center justify-content-between">
      <div>
        <span>{{ title }}</span>
        <div>
          <span>{{ subtitle }}</span>
        </div>
      </div>
      <div v-if="required">obrigatorio</div>
    </div>
    <counter :count="count" @increment="increment" @decrement="decrement" />
  </div>
</template>

<script>
export default {
  name: "QuantitySection",
  props: {
    title: {
      type: String,
      default: "title",
    },
    subtitle: {
      type: String,
      default: "subtitle",
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.$emit("increment");
    },
    decrement() {
      this.$emit("decrement");
    },
  },
};
</script>

<style>
</style>