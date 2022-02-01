<template>
  <div id="main_window">
    <div id="titlebar">
      <!-- <div class="title">
          <span>Settings</span>
        </div> -->
      <!-- <div id="drag_area"></div> -->
      <div data-tauri-drag-region id="titlebar_buttons">
        <div id="win_minimize" class="titlebar_button">
          <img src="@/assets/svg/clarity_window-min-line.svg" />
        </div>
        <div id="win_close" class="titlebar_button close">
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
        <div id="settings_tools">
          <div class="tools_buttons">
            <div
              id="win_settings"
              class="tools_button"
              :class="{ disabled: !$store.getters.settingsIsHidden }"
              v-on:click="$store.getters.settingsIsHidden && openSettings()"
            >
              <img src="@/assets/svg/clarity_settings-solid.svg" />
            </div>
          </div>
        </div>
      </div>
      <div id="right_side">
        <div id="content_container">
          <router-view />
          <router-view />
        </div>
      </div>

      <Settings v-if="!$store.getters.settingsIsHidden"></Settings>
    </div>
  </div>
</template>

<script lang="ts">
import { titleBar } from "@/scripts/app";
import { Options, Vue } from "vue-class-component";
import Settings from '@/views/Settings.vue'
import { mapMutations } from "vuex";
@Options({
  data () {
    return {};
  },
  components: {
    Settings
  },
  mounted () {
    titleBar();
  },
  methods: {
    ...mapMutations([
      'showSettings',
      'hideSettings',
    ]),
    openSettings () {
      this.showSettings()
    }
  }
})
export default class MainWindow extends Vue { }
</script>
