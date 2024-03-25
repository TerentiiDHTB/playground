import {createApp} from 'vue'
import App from './app/App.vue'
import {router} from "./app/providers/router.js";
import PrimeVue from "primevue/config";
import {plugin, defaultConfig} from "@formkit/vue";

const app = createApp(App)

app.use(plugin, defaultConfig)
app.use(PrimeVue)
app.use(router)

app.mount('#app')
