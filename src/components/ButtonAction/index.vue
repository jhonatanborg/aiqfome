<template>
  <div>
    <button @click="onClick" class="btn btn-secondary">Adicionar</button>
  </div>
</template>

<script>
export default {
  name: "ButtonAction",
  props: {
    text: {
      type: String,
      default: "Adicionar",
    },
    onClick: {
      type: Function,
      default: () => {},
    },
  },
};
</script>