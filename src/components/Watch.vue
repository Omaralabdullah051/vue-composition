<template>
    <div>
       <!-- Options API -->
       <input type="text" placeholder="Name" v-model="name">

       <input type="text" placeholder="First Name" v-model="firstName">
       <input type="text" placeholder="Last Name" v-model="lastName">
    </div>
</template>

<script>
import {ref, watch} from "vue";
    export default {
        name: 'WatchA',
        setup(){
          const firstName = ref('');
          const lastName = ref('Wayne');
          
          watch([firstName, lastName], (newValues, oldValues)=> {
                console.log('firstName oldValue', oldValues[0]);
                console.log('firstName newValue', newValues[0]);
                console.log('lastName oldValue', oldValues[1]);
                console.log('lastName newValue', newValues[1]);
          }, 
          {
            immediate: true
          }
          )

          return {
            firstName,
            lastName
          }
        },
        data(){
            return {
                name:''
            }
        },
        watch: {
            name(newValue, oldValue){
                console.log('oldValue', oldValue);
                console.log('newValue', newValue);
            }
        }
    }
</script>

<style scoped>

</style>