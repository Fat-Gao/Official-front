<template>
  <div style="width: 100%">
    <Official />
  </div>
</template>

<script>
import Official from './components/Official.vue'
import { provide, ref } from 'vue'
import { useI18n } from "vue-i18n"

export default {
  name: 'App',
  components: {
    Official
  },
  setup() {
    const language = ref('zh-cn')
    let { t } = useI18n();
    //方法：function a(){}
    //传值
    provide('language', language)


    //return 变量、方法

    return {
      language,
      t
    }
  },

}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
  border: 0
}
</style>
