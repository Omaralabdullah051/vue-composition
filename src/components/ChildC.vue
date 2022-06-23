<template>
    <div>
      <h2>Child Component C</h2>
      <h2>Component C - UserName is {{username}}</h2>
      <h2>Component C composition UserName is {{childUserName}}</h2>

      <h3>Component c count - {{childCount}}</h3>
      <h3>Component c hero - {{firstName}} {{lastName}}</h3>
      
      <button @click="incrementCount">Increment Count</button>
    </div>
</template>

<script>
import {inject, toRefs} from 'vue';
    export default {
        name: 'ChildC',
        setup(){
            const childUserName = inject('c_userName', 'Default');
            const childCount = inject('c_count', 0);
            const childHero = inject('c_hero', {});
            const incrementCount = inject('incrementCount');

            return {
                childUserName,
                childCount,
                ...toRefs(childHero),
                incrementCount
            }
        },
        inject: ['username']
    }
</script>

<style scoped>

</style>