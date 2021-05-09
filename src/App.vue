<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} | META` : `META` }}</template>
  </metainfo>
  <img alt="Vue logo" src="./assets/logo.png" />
  <navigation />
  <router-view />

  {{ JSON.stringify(metainfo) }}
</template>

<script>
import Navigation from './components/Navigation.vue'
import { useMeta, useActiveMeta } from 'vue-meta/dist/vue-meta.esm-browser'

export default {
  components: {
    Navigation
  },
  setup() {
    useMeta({
      title: 'Bla',
      htmlAttrs: { lang: 'en' }
    })

    const metainfo = useActiveMeta()

    return {
      metainfo
    }
  }
}
</script>
