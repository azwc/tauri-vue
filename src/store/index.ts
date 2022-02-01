import { createStore } from 'vuex'

export default createStore({
  state: {
    settingsIsHidden: true,
    settingsDialogPos: {
      left: null,
      top: null
    }
  },
  getters: {
    settingsIsHidden (state) {
      return state.settingsIsHidden
    },
    settingsDialogPos (state) {
      return state.settingsDialogPos
    }
  },
  mutations: {
    showSettings (state) {
      state.settingsIsHidden = false
    },
    hideSettings (state) {
      state.settingsIsHidden = true
    },
    setSettingsDialogPos (state, { left, top }) {
      state.settingsDialogPos = {
        left: left,
        top: top
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
