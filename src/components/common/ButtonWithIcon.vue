<template>
  <BaseButton :type="type" :disabled="disabled" :size="size">
    <fa class="text-blue-400 mr-3" size="2x" :icon="icon"/>
    <slot/>
  </BaseButton>
</template>

<script>
import BaseButton from "../../components/common/BaseButton";
import {faStar} from "@fortawesome/free-solid-svg-icons";

export default {
  name: "ButtonWithIcon",
  components: {BaseButton},
  props: {
    icon: {
      type: Object, // this is probably wrong?
      default: faStar,
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
