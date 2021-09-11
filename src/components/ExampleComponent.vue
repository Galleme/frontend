<template>
  <div>
    <h1 class="text-3xl font-semibold my-2">
      Using Icons:
    </h1>
    <div class="flex items-center">
      <fa
        class="text-blue-400 mr-3"
        size="2x"
        :icon="faStar"
      />
      <fa
        class="text-red-400 mr-3"
        size="2x"
        :icon="faFlag"
      />
      <fa
        class="text-green-400 mr-3"
        size="2x"
        :icon="faPlus"
      />
    </div>
    <h1 class="text-3xl font-semibold my-2">
      Test Text (for Faker):
    </h1>
    <p
      :class="size"
      :style="textColor"
      class="flex"
    >
      {{ label }}
    </p>
  </div>
</template>

<script>
import Fa from 'vue-fa'
import { faStar, faFlag, faPlus } from '@fortawesome/free-solid-svg-icons'

export default {
  name: "ExampleComponent",
  components: {
    Fa,
  },
  props: {
    label: {
      type: String,
      default: "Test",
    },
    color: {
      type: String,
      default: "black",
    },
    size: {
      type: String,
      default: "text-lg",
    },
  },
  setup() {
    return {
      faStar, faFlag, faPlus
    }
  },
  computed: {
    textColor() {
      return `color: ${this.color}`;
    }
  }
}
</script>