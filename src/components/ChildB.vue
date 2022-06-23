<template>
    <div>
      <h2>Child Component B</h2>
      <ChildC/>
    </div>
</template>

<script>
import ChildC from "./ChildC.vue";
    export default {
        components: {
        ChildC,
        },
        name: 'ChildB'
    }
</script>

<style scoped>

</style>