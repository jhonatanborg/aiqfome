<template>
  <div class="card">
    <img src="../../assets/product.png" class="card-img-top" alt="..." />
    <div class="card-body pa-3">
      <span class="card-title text-lg font-weight-bold">Ceviche de salmão</span>
      <div class="d-flex align-items-center">
        <p class="card-text mr-5 font-weight-bold">a partir de</p>
        <h2 class="card-text text-primary">R$ 19,90</h2>
      </div>
      <p class="card-text text-light-5 font-weight-bold">
        salmão temperado com limão, cebola e pimenta
      </p>
      <div class="footer-card">
        <div>
          <span> quantos? </span>
        </div>
        <div v-if="count === 0">
          <button-action :onClick="increment" />
        </div>
        <div v-else>
          <counter
            :count="count"
            @increment="increment"
            @decrement="decrement"
          />
        </div>
      </div>
      <div class="divider"></div>
      <radio-group-section
        required
        key="tamanho"
        :subtitle="'escolha 1'"
        :title="'qual o tamanho?'"
      />
      <radio-group-section
        required
        key="talher"
        :subtitle="'precisa de talher?'"
        :title="'escolha até 1'"
      />
    </div>
  </div>
</template>

<script>
import ButtonAction from "../ButtonAction/index.vue";
import Counter from "../Counter/index.vue";
import RadioGroupSection from "../RadioGroupSection/index.vue";
export default {
  name: "ProductCard",
  components: {
    ButtonAction,
    Counter,
    RadioGroupSection,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      console.log("passoi aqu");
      this.count++;
    },
    decrement() {
      if (this.count > 0) {
        this.count--;
      }
    },
  },
};
</script>

<style>
.card-img-top {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.footer-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
}
</style>