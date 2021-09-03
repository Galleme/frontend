<template>
  <h1 :class="size" :style="textColor">
    {{ label }}
  </h1>
</template>

<script>
export default {
  name: "ExampleComponent",
  props: {
    label: String,
    color: String,
    size: String,
  },
  computed: {
    textColor() {
      return `color: ${this.color}`;
    }
  }
}
</script>