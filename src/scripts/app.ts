import { appWindow, WebviewWindow } from '@tauri-apps/api/window'
import { querySelector } from '@/scripts/common'
import { process as apiProcess } from '@tauri-apps/api';

if (process.env.NODE_ENV === 'production') {
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    return false;
  })
}

function titleBar (): void {
  querySelector('#win_minimize')
    .addEventListener('click', () => appWindow.minimize())
  querySelector('#win_close')
    .addEventListener('click', () => {
      apiProcess.exit()
    })
}

function openSettings ():void{
  querySelector('#win_settings')
    .addEventListener('click', () => {
      // const settingsWindow = new WebviewWindow('settings', {
      //   url: '/#/settings',
      //   center: true,
      //   width: 600,
      //   height: 400,
      //   skipTaskbar: true,
      //   decorations: false,
      // })
    })
}

export {
  titleBar, openSettings
}
