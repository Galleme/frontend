<template>
  <BaseButton class="flex items-center" :type="type" :disabled="disabled" :size="size">
    <fa :class="classes" class="mr-3" :size="size" :icon="icon"/>
    <slot/>
  </BaseButton>
</template>

<script>
import BaseButton from "../../components/common/BaseButton";
import Fa from 'vue-fa'
import { faStar, faFlag, faPlus } from '@fortawesome/free-solid-svg-icons'

export default {
  name: "ButtonWithIcon",
  components: {BaseButton, Fa},
  setup() {
    return {
      faStar, faFlag, faPlus
    }
  },
  props: {
    disabled: {
      type: Boolean,
    },
    icon: {
      type: Object,
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
      return `${this.disabled ? 'disabledIcon' : this.type + 'Icon'} ${this.size}}`
    },
  }
}
</script>

<style scoped>
.primaryIcon {
  @apply text-purple-300
}
.disabledIcon {
  @apply text-gray-100
}
.secondaryIcon {
  @apply text-gray-300
}
.successIcon {
  @apply text-green-200
}
.dangerIcon {
  @apply text-red-300
}
</style>
