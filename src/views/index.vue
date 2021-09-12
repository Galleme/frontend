<template>
  <div>
    <example-component
      label="Welcome to the index page"
      color="black"
      size="text-2xl"
    />
  </div>
</template>

<script>
import ExampleComponent from "../components/ExampleComponent";
export default {
  name: "Index",
  components: { ExampleComponent }
}
</script>

<style scoped>

</style>