<template>
  <BaseButton :type="type" :disabled="disabled" :size="size">
    <slot name="icon"/>
    <slot name="text"/>
  </BaseButton>
</template>

<script>
import BaseButton from "../../components/common/BaseButton";

export default {
  name: "ButtonWithIcon",
  components: {BaseButton},
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
    },
    computed: {
      classes() {
        return `${this.disabled ? 'disabled' : this.type} ${this.size}}`
      },
    },
  }
}
</script>
