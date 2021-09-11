<template>
  <BaseButton :type="type" :disabled="disabled" :size="size">
    <div class="flex items-center">
      <fa class="text-blue-400 mr-3" :size="size" :icon="icon"/>
      <slot name="text"/>
    </div>
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
    created() {
      console.log(this.icon)
    },
  },
}
</script>
