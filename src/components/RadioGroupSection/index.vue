<template>
  <!-- radio group component -->
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
    <div>
      <div>
        <input type="radio" name="radio" id="radio1" />
        <label for="radio1">radio 1</label>
      </div>
      <div>
        <input type="radio" name="radio" id="radio2" />
        <label for="radio2">radio 2</label>
      </div>
      <div>
        <input type="radio" name="radio" id="radio3" />
        <label for="radio3">radio 3</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RadioGroupSection",
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
    key: {
      type: String,
      default: "key",
    },
  },
};
</script>

<style>
</style>