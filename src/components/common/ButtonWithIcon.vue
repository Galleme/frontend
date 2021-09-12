<template>
  <BaseButton class="flex items-center" :type="type" :disabled="disabled" :size="size">
    <fa :class="classes" :size="size" :icon="icon"/>
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
      return `${this.disabled ? 'disabled' : this.type + 'Icon'} ${this.size}}`
    },
  }
}
</script>

<style scoped>
.primaryIcon {
  @apply text-purple-300 mr-3
}
.disabledIcon {
  @apply text-purple-400 mr-3
}
.secondaryIcon {
  @apply text-gray-300 mr-3
}
.successIcon {
  @apply text-green-200 mr-3
}
.dangerIcon {
  @apply text-purple-400 mr-3
}
</style>
