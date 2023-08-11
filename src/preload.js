// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer } = require('electron')
contextBridge.exposeInMainWorld('e', {
    version: {
        node: () => process.versions.node,
        chrome: () => process.versions.chrome,
        electron: () => process.versions.electron,
    },
    api: {
        ping: () => {
            ipcRenderer.send('ping')
        },
        createException: () => {
            ipcRenderer.send('create-exception')
        },
    },
    ipc: {
        on: (channel, func) => {
            ipcRenderer.on(channel, func);
      
            return () => {
              ipcRenderer.removeListener(channel, func);
            };
        },
    }
    // we can also expose variables, not just functions
})