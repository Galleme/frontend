<template>
  <BaseButton :type="type" :disabled="disabled" :size="size">
    <slot/>
  </BaseButton>
</template>

<script>
import BaseButton from "../../components/common/BaseButton";

export default {
  name: "ButtonWithIcon",
  components: {BaseButton},
  props: {
    icon: {
      type: String, // maybe?
      default: '',
    },

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
    },
    computed: {
      classes() {
        return `${this.disabled ? 'disabled' : this.type} ${this.size}}`
      },
    },
  }
}
</script>

<style scoped>

</style>
