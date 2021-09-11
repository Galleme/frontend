<template>
  <button
    class="button"
    :class="classes"
    :disabled="disabled"
    @click="$emit('onClick')"
  >
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
      default: 'primary',
      validator: function (value) {
        return ['primary', 'secondary', 'success', 'danger'].indexOf(value) !== -1;
      },
    },
    size: {
      type: String,
      default: '',
    }
  },
  emits: ['onClick'],
  computed: {
    classes() {
      return `${this.disabled ? 'disabled' : this.type} ${this.size}}`
    },
  },
}
</script>

<style scoped>
.button {
  @apply py-2 px-4 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 cursor-pointer;
}
.disabled {
  @apply text-white bg-gray-300 cursor-not-allowed shadow-sm;
}

.primary {
  @apply text-white bg-indigo-500 hover:bg-indigo-700 focus:ring-indigo-400;
}

.secondary {
  @apply text-white bg-gray-400 hover:bg-gray-600 focus:ring-gray-300;
}

.success {
  @apply text-white bg-green-500 hover:bg-green-700 focus:ring-green-400;
}

.danger {
  @apply text-white bg-red-500 hover:bg-red-700 focus:ring-red-400;
}
</style>
