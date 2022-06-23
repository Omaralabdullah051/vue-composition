<template>
    <div>
       Composition API lifecycle hooks
        <h3 v-if="errorMsg">{{errorMsg}}</h3>
        <div v-for="post in posts" :key="post.id">
        <h3>{{post.id}} {{post.title}}</h3>
        </div>
    </div>
</template>

<script>
import {ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from "vue";
import axios from "axios";
    export default {
        name: 'LifecycleC',
        setup(){
            const posts = ref([]);
            const errorMsg = ref('');
            
            //In composition API we don't need to use any method for creation phase whereas in option API we need to use beforeCreate() and create() methods.
            const getPosts = () => {
              axios.get('https://jsonplaceholder.typicode.com/posts')
              .then((data) => {
                console.log(data.data);
                posts.value = data.data;
              })
              .catch(err => {
                console.log(err);
                errorMsg.value = 'Error retrieving data'
              })
            }
            getPosts();

          onBeforeMount(() => {
            console.log('LifecycleC onBeforeMount()');
          })
          onMounted(() => {
            console.log('LifecycleC onMounted()');
          })
          onBeforeUpdate(() => {
            console.log('LifecycleC onBeforeUpdate()');
          })
          onUpdated(() => {
            console.log('LifecycleC onUpdated()');
          })
          onBeforeUnmount(() => {
            console.log('LifecycleC onBeforeUnMount()');
          })
          onUnmounted(() => {
            console.log('LifecycleC onUnmounted()');
          })

          return {
            posts,
            errorMsg
          }
        }
    }
</script>

<style scoped>

</style>