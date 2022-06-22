<template>
    <h2>Options - {{o_firstName}}</h2>
    <h2>Options - {{o_firstName}} | {{o_lastName}} | {{o_heroName}}</h2>

    <h2>Composition - {{c_firstName }}</h2>
    <h2>Compsoition - {{greet}}</h2>

    <h2>Composition - {{c_firstName }} | {{c_lastName}} | {{c_heroName}}</h2>
    <h2>Compsoition - {{greetHero}}</h2>
    
    <h2>Composition - {{state.firstName }} | {{state.lastName}} | {{state.heroName}}</h2>
    <h2>Compsoition - {{reactiveGreetHero}}</h2>
</template>

<script>
import {ref, reactive} from "vue";
    export default {
        name: 'DataA',
        setup(){
          const c_firstName = ref('Clark');
          const c_lastName = ref('Kent');
          const c_heroName = ref('Superman');

          const greet = `Hello ${c_firstName.value}`;
          const greetHero = `Hello ${c_firstName.value} | ${c_lastName.value} | ${c_heroName.value}`;

        //Here reactive function is an alternative to ref function and the benefit is we don't need to call ref() multiple times and we can access the value without .value notation. But it is convnetion that only used when we have a group of primitive data types, object, array. 
          const state = reactive({
                firstName: 'Bruce',
                lastName: 'Wayne',
                heroName: 'Batman'
          })

          const reactiveGreetHero= `Hello ${state.firstName} | ${state.lastName} | ${state.heroName}`;

          return {
            c_firstName,
            c_lastName,
            c_heroName,
            greet,
            greetHero,
            state, 
            reactiveGreetHero
          }
        },
        data(){
            return {
                o_firstName: 'Bruce',
                o_lastName: 'Wayne',
                o_heroName: 'Batman'
            }
        }
    }
</script>

<style scoped>

</style>