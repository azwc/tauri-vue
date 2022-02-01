<template>
  <div id="main_window">
    <div id="titlebar">
      <!-- <div id="drag_area"></div> -->
      <div data-tauri-drag-region id="titlebar_buttons">
        <div id="win_settings" class="titlebar_button">
          <img src="@/assets/svg/clarity_settings-solid.svg" />
        </div>
        <div id="win_minimize" class="titlebar_button">
          <img src="@/assets/svg/clarity_window-min-line.svg" />
        </div>
        <div id="win_close" class="titlebar_button">
          <img src="@/assets/svg/clarity_window-close-line.svg" />
        </div>
      </div>
    </div>
    <div id="client_area">
      <div id="left_side">
        <div id="nav">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
        </div>
      </div>
      <div id="right_side">
        <div id="content_container">
          <router-view />
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { titleBar } from '@/scripts/app'

@Options({
  data () {
    return {}
  },
  components: {},
  mounted () {
    titleBar()
  }
})
export default class App extends Vue {}
</script>
<style lang="scss" src="@/assets/scss/app.scss"></style>
