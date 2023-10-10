<template>
    <div class="bac-home">
      <Official />
      <div>home</div>
    </div>
</template>
  
<script>
import Official from './Official.vue'

export default {
    name: 'Home',
    components: {
        Official
    },
    setup() { }
}
</script>
  
<style>
.bac-home {
    width: 100%;
    height: 100%;
    background-image: url(../assets/background.jpg);
    background-size: cover;
    position: absolute;
    z-index: -1;
    /* background-repeat: no-repeat; */
    opacity: 1;
}
</style>