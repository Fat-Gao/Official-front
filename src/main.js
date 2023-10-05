// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus' //全局引入
import 'element-plus/dist/index.css'
import App from './App.vue'
import i18n from './language/index.js'

const app = createApp(App)

app.use(ElementPlus)
app.use(i18n)
app.mount('#app')
