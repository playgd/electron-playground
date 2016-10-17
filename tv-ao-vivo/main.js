const { app, BrowserWindow } = require('electron')
const path = require('path')
let mainWindow

process.on('uncaughtException', (err) => {
  return
})

const flashPlugin = {
  win32: 'pepflashplayer.dll',
  darwin: 'PepperFlashPlayer.plugin',
  linux: 'libpepflashplayer.so'
}[process.platform]

app.commandLine.appendSwitch('ppapi-flash-path', path.join(__dirname, 'flash', flashPlugin))

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: `${__dirname}/record.png`,
    webPreferences: {
      plugins: true
    }
  })
  mainWindow.loadURL(`file://${__dirname}/index.html`)

  // mainWindow.webContents.openDevTools()
  mainWindow.on('closed', () => mainWindow = null)
}

app.on('ready', createWindow)
app.on('window-all-closed', () => process.platform !== 'darwin' && app.quit())
app.on('activate', () => mainWindow === null && createWindow())
