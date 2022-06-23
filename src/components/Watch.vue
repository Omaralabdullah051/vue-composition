<template>
    <div>
       <!-- Options API -->
       <input type="text" placeholder="Name" v-model="name">

       <input type="text" placeholder="First Name" v-model="firstName">
       <input type="text" placeholder="Last Name" v-model="lastName">

       <input type="text" placeholder="Reactive First Name" v-model="fName">
       <input type="text" placeholder="Reactive Last Name" v-model="lName">
       <input type="text" placeholder="Reactive Name" v-model="options.name">
       <input type="text" placeholder="Reactive Hero Name" v-model="options.heroName">
    </div>
</template>

<script>
import {ref, watch, reactive, toRefs} from "vue";
    export default {
        name: 'WatchA',
        setup(){

          const state = reactive({
            fName: '',
            lName: '',
            options: {
                name: '',
                heroName: ''
            }
          })

        //watching multiple proties at a time
        //   watch(() => {
        //     return {...state}
        //   }, (newValue, oldValue)=> {
        //     console.log('fName old Value', oldValue.fName);
        //     console.log('fName new Value', newValue.fName);
        //     console.log('lName old Value', oldValue.lName);
        //     console.log('lName new Value', newValue.lName);
        //   })

       //watching invidual property
        watch(()=> state.fName, (newValue,oldValue)=> {
               console.log('fName old Value', oldValue);
               console.log('fName new Value', newValue);
        })

        //watching invidual property's current value
        watch(()=> state.lName, (value)=> {
               console.log('lname value', value);
        })

        //watching deeply nested properties
        watch(()=> state.options, (newValue,oldValue)=> {
               console.log('options old Value', oldValue);
               console.log('options new Value', newValue);
        },
        {
            deep: true
        }
        )

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
            lastName,
            ...toRefs(state)
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