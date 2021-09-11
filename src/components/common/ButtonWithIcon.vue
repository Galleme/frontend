<template>
  <BaseButton
    :type="type"
    :disabled="disabled"
    :size="size"
  >
    <div class="flex items-center">
      <slot name="icon" />
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
  }
}
</script>
