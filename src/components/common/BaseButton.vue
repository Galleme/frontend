<template>
  <button class="button" :class="classes" :disabled="disabled" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '',
    }
  },
  computed: {
    classes() {
      return `${this.type} ${this.size}`
    },
  },
}
</script>

<style scoped>
.button {
  @apply py-2 px-4 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 cursor-pointer;
}

.primary {
  @apply text-white bg-indigo-500 hover:bg-indigo-700 focus:ring-indigo-400;
}

</style>