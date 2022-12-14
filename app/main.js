const {app, BrowserWindow, ipcMain, shell} = require('electron');
const { getWindowSettings, saveBounds } = require('./settings')

const path = require('path');
const url = require('url');
const ipc = ipcMain

let win;

function createWindow(){

  const bounds = getWindowSettings()

  win = new BrowserWindow({
    width: bounds[0],
    height: bounds[1],
    minWidth: 800,
    minHeight: 500,
    icon: __dirname+'/src/img/icon.png',
    frame: false,
    resizable: true,
    show: false,
    webPreferences: {
      enableRemoteModule: true,
      nodeIntegration: true,
      contextIsolation: false,
      devTools: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.on('resized', () => saveBounds(win.getSize()))

  win.loadFile('index.html') // Загрузить файл при открытии
  win.setBackgroundColor('#363636') // Цвет фона окна приложения

  // win.openDevTools(); // Открыть девтулз при запуске
  // win.maximize();    // Открыть на весь экран при запуске

  // Открытие линков _blank в браузере по умолчанию
  win.webContents.on('new-window', function(e, url) {
    e.preventDefault();
    require('electron').shell.openExternal(url);
  });

  /////// TITLE BAR BUTTONS
  //// MINIMIZE APP
  ipc.on('minimizeApp', ()=> {
    win.minimize()
  })

  //// MAXIMIZE RESTORE APP
  ipc.on('maximizeRestoreApp', ()=> {
    if (win.isMaximized()) {
      console.log('restore')
      win.restore()
    } else {
      win.maximize()
    }
  })

  //// CLOSE APP
  ipc.on('closeApp', ()=> {
    win.close()
  })
  /////////////////////////


  //// ФУНКЦИЯ ЗАКРЫТИЯ ОКОН (НЕ ОТНОСИТСЯ К КНОПКАМ)
  win.on('closed', () => {
    win = null;
  })


  //// SPLASH СКРИН
  var splash = new BrowserWindow({ 
    width: 500,
    height: 300,
    maximizable: false,
    fullscreen: false,
    fullscreenable: false,
    resizable: false,
    transparent: true, 
    frame: false,
    alwaysOnTop: true,
    icon: __dirname+'/src/img/icon.png',
    webPreferences: {
      devTools: false
    }
  });

  splash.loadFile('splash.html');
  splash.center();
  win.once('ready-to-show', () => {
    splash.close();
    win.center(); // Центрирует окно в любом случаи!
    win.show();
  });
}


app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
// app.on('ready', createWindow);
// app.on('ready', () => {
//   setTimeout(() => {
//     createWindow()
//   }, 1000)
// })


// Если все окна закрыты - закрыть приложение, малое отношение к виндовс, но имеет к маку
app.on('window-all-closed', () =>{
  if(process.platform !== 'darwin'){
    app.quit();
  }
});
