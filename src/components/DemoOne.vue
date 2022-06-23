<template>
    <div>
       <h2>{{name}}</h2>
    </div>
</template>

<script>
import {ref} from "vue";
    export default {
        name: 'DemoOne',
        setup(){
            //If we don't use the ref function, we can show the name in the UI but can't update the name later because vue doesn't know what's need to be changed. So by using ref function reactivity comes into the picture.
            const name = ref('Batman');

            setTimeout(()=> {
                name.value = 'Superman';
                console.log(name);
            },2000)

            return {
                name,
            }
        }
    }
</script>

<style scoped>

</style>