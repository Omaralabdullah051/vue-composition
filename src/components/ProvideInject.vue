<template>
    <div>
      <h3>Parent Component {{name}}</h3>
      <h3>Parent Component count {{count}}</h3>
      <h3>Parent Component hero {{firstName}} {{lastName}}</h3>

      <button @click="incrementCount">Increment Count</button>
      <ChildA/>
    </div>
</template>

<script>
import {provide, ref, reactive, toRefs} from "vue";
import ChildA from "./ChildA.vue";
    export default {
        components: {ChildA},
        name: 'ProvideInject',
        setup(){
         provide('c_userName', 'Batman')

         const count = ref(0);
         const incrementCount = () => {
            count.value++
         }
          
         const state = reactive({
            firstName: 'Bruce',
            lastName: 'Wayne'
         })

         provide('c_count', count);
         provide('c_hero', state);
         provide('incrementCount', incrementCount);

         return {
            count,
            ...toRefs(state),
            incrementCount
         }
        },
        data(){
            return {
                name: 'Batman'
            }
        },
        provide(){
            return {
                username: this.name
            }
        }
    }
</script>

<style scoped>

</style>