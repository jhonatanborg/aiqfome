
<template>
  <navbar />
  <router-view></router-view>
</template>
<script >
import Navbar from "./components/Navbar/index.vue";

export default {
  components: {
    Navbar,
  },
  name: "App",
  data() {
    return {
      msg: "Vite + Vue",
    };
  },
};
</script>

