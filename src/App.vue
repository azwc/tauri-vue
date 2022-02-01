<template>
  <router-view name="main_window"></router-view>
  <router-view name="settings"></router-view>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'
// import { titleBar } from '@/scripts/app'

@Options({
  data () {
    return {}
  },
  components: {
  },
  // mounted () {
  //   titleBar()
  // }
})
export default class App extends Vue {}
</script>
<style lang="scss" src="@/assets/scss/app.scss"></style>
