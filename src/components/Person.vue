<template>
    <div>
        <input type="text" placeholder="First Name" v-model="firstName">
        <input type="text" placeholder="Last Name" v-model="lastName">
    </div>
    <PersonGreeting :firstName="firstName" :lastName="lastName"/>
</template>

<script>
import PersonGreeting from "./PersonGreeting.vue";
import {ref} from "vue";
    export default {
       name: "PersonA",
       components: {
        PersonGreeting,
       },
       setup(){
        const firstName = ref('');
        const lastName = ref('');

        return{
            firstName,
            lastName
        }
       }
    }
</script>

<style scoped>

</style>