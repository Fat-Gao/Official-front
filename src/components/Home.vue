<template>
    <div class="bac-esg">
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
.bac-esg {
    width: 100%;
    height: 100%;
    background-size: cover;
    position: absolute;
    z-index: -1;
    /* background-repeat: no-repeat; */
    opacity: 1;
}
</style>