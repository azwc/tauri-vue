<template>
  <div id="settings_box">
    <div id="settings">
      <div id="settings_titlebar" @mousedown="move">
        <div class="title">
          <span>Settings</span>
        </div>
        <div id="titlebar_buttons">
          <div id="settings_close" class="titlebar_button close">
            <img src="@/assets/svg/clarity_window-close-line.svg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { settingsTitleBar } from '@/scripts/settings'
import { Options, Vue } from 'vue-class-component'
import store from '@/store'
import { mapMutations } from 'vuex';
@Options({
  data () {
    return {
    }
  },
  mounted () {
    settingsTitleBar();
    const left = store.getters.settingsDialogPos.left
    const top = store.getters.settingsDialogPos.top
    if (left !== null && top !== null) {
      const settings = document.getElementById("settings")
      console.log(settings)
      if (settings) {
        settings.style.left = left + 'px'
        settings.style.top = top + 'px'
        settings.style.marginLeft = '0px'
        settings.style.marginTop = '0px'
      }
    }
  },
  methods: {
    ...mapMutations([
      'setSettingsDialogPos',
    ]),
    move (event: MouseEvent) {
      let moveableNode = event.target
      console.log((moveableNode as HTMLElement))
      if ((moveableNode as HTMLElement).tagName === 'IMG' || (moveableNode as HTMLElement).id === 'settings_close') {
        return
      }
      if ((moveableNode as HTMLElement).id !== 'settings_titlebar') {
        moveableNode = document.getElementById('settings_titlebar')
      }
      const disX = event.clientX - (moveableNode as HTMLElement).offsetLeft;
      const disY = event.clientY - (moveableNode as HTMLElement).offsetTop;
      const beMoveNode = (event.currentTarget as Node).parentElement

      let initLeft = 0;
      let initTop = 0;

      if (beMoveNode) {
        initLeft = beMoveNode.offsetLeft;
        initTop = beMoveNode.offsetTop;

        beMoveNode.style.left = initLeft + 'px';
        beMoveNode.style.top = initTop + 'px';
        beMoveNode.style.marginLeft = 0 + 'px'
        beMoveNode.style.marginTop = 0 + 'px'
      }
      let left: number | null = null;
      let top: number | null = null;
      document.onmousemove = (e) => {
        const moveX = e.clientX - disX;
        const moveY = e.clientY - disY;
        if (beMoveNode) {
          // minLeft = 0 maxLeft = 200
          // minTop = 0 maxTop = 170
          left = initLeft + moveX
          if (left <= 0) {
            left = 0
          } else if (left >= 200) {
            left = 200
          }
          // if (left >= 0 && left <= 200) {
          //   console.log('left: ' + left)
          // }
          beMoveNode.style.left = left + 'px';
          top = initTop + moveY
          if (top <= 0) {
            top = 0
          } else if (top >= 170) {
            top = 170
          }
          // if (top >= 0 && top <= 170) {
          //   console.log('top: ' + top)
          // }
          beMoveNode.style.top = top + 'px';
        }
      }

      document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
        this.setSettingsDialogPos({ left: left, top: top })
      }
    }
  }
})
export default class Settings extends Vue { }
</script>
<style lang="scss" src="@/assets/scss/settings.scss"></style>
