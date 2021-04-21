<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} | META` : `META` }}</template>
  </metainfo>
  <img alt="Vue logo" src="./assets/logo.png" />
  <navigation />
  <router-view />
</template>

<script>
import Navigation from './components/Navigation.vue'
import { useMeta } from 'vue-meta'
export default {
  components: {
    Navigation
  },
  setup() {
    useMeta({
      title: '',
      htmlAttrs: { lang: 'en' }
    })
  }
}
</script>
