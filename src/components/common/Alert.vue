<template>
  <div class="alert">
    <div class="flex flex-col md:items-center md:flex-row">
      <div class="mr-3 p-4 rounded rounded-tr-none rounded-br-none text-white hidden md:block" :class="type">
        <fa size="lg" :icon="icon"/>
      </div>
      <p class="md:mr-2 text-base font-bold text-gray-800 capitalize hidden md:block">
        {{ type }}
      </p>
      <div class="h-1 w-1 bg-gray-300 rounded-full mr-2 hidden xl:block" />
      <slot class="text-sm lg:text-base text-gray-600 lg:pt-1 xl:pt-0 sm:mb-0 mb-2 sm:text-left" />
    </div>
    <div class="flex xl:items-center lg:items-center sm:justify-end justify-center pr-4">
      <router-link :to="link" class="focus:outline-none focus:text-indigo-400 hover:text-indigo-400 text-sm mr-4 font-bold cursor-pointer text-indigo-700 dark:text-indigo-600">
        Details
      </router-link>
      <button @click="$emit('dismiss')" class="focus:outline-none focus:text-gray-400 hover:text-gray-400 text-sm cursor-pointer text-gray-600 dark:text-gray-400">
        Dismiss
      </button>
    </div>
  </div>
</template>

<script>
import RouterLink from "@ionic/vue-router"
import Fa from 'vue-fa'
import { faCheckCircle, faInfoCircle, faTimesCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

export default {
  name: "Alert",
  components: {RouterLink, Fa},
  props: {
    title: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'info',
    },
    link: {
      type: String,
      default: '',
    }
  },
  setup() {
    return {
      faCheckCircle, faInfoCircle, faTimesCircle, faExclamationCircle
    }
  },
  emits: ['dismiss'],
  computed: {
    icon() {
      switch(this.type) {
        case "success":
          return faCheckCircle;
        case "warning":
          return faExclamationCircle;
        case "error":
          return faTimesCircle;
        default:
          return faInfoCircle;
      }
    },
  }
}
</script>

<style scoped>
.alert {
  @apply transition duration-150 ease-in-out bg-white shadow rounded flex flex-col py-4 md:py-0 items-center md:flex-row justify-between;
}

.alert .info {
  @apply bg-indigo-400
}

.alert .success {
  @apply bg-green-400
}

.alert .warning {
  @apply bg-yellow-400
}

.alert .error {
  @apply bg-red-500
}
</style>