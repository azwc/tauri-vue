import { querySelector } from "./common"
import store from "@/store"

function settingsTitleBar (): void {
  querySelector('#settings_close').addEventListener('click', () => {
    store.commit('hideSettings')
  })
}

export {
  settingsTitleBar
}
