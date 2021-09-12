<template>
  <BaseButton
    :type="type"
    :disabled="disabled"
    :size="size"
  >
    <div class="flex items-center">
      <div
        :class="classes"
        class="mr-1"
      >
        <slot name="icon" />
      </div>
      <slot name="text" />
    </div>
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
  },
  computed: {
    classes() {
      return `${this.disabled ? 'disabledIcon' : this.type + 'Icon'} ${this.size}`
    },
  }
}
</script>

<style scoped>
.primaryIcon{
  @apply text-purple-300;
}
.secondaryIcon{
  @apply text-gray-300;
}
.disabledIcon{
  @apply text-gray-100;
}
.successIcon{
  @apply text-green-300;
}
.dangerIcon{
  @apply text-red-300;
}
</style>
