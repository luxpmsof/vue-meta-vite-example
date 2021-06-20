import { createApp } from 'vue'
import { createMetaManager, plugin as metaPlugin } from 'vue-meta/dist/vue-meta.esm-browser'
import App from './App.vue'
import router from './router'

createApp(App).use(router).use(createMetaManager()).use(metaPlugin).mount('#app')
