<template>
    <div>
        <h2>{{firstName}} {{lastName}}</h2>
        <h2>{{fname}} {{lname}}</h2>
    </div>
</template>

<script>
import {reactive, toRefs} from "vue";
    export default {
        name: 'DemoTwo',
        setup(){
        const state = reactive({
            firstName: 'Bruce',
            lastName: 'Wayne'
           })

           setTimeout(()=> {
            state.firstName = 'Clark',
            state.lastName = 'Tent'
           },2000)

           return toRefs(state); //toRefs() preserves the reactivity for invidiual properties in this state obj.
        },
        data(){
            return {
                fname: 'Bruce',
                lname: 'Wayne',
            }
        }
    }
</script>

<style scoped>

</style>