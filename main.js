const { app, BrowserWindow } = require("electron");
const electron = require("electron");
const path = require("path");
const url = require("url");

let mainWindow;
const Menu = electron.Menu;

function createWindow() {
  // 隐藏菜单栏
  Menu.setApplicationMenu(null);
  // Create the browser window.设置窗口宽高，最小宽高，图标等
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 1280,
    minHeight: 800,
    resizable: true,
    allowRunningInsecureContent: true,
    experimentalCanvasFeatures: true,
    icon: "./favicon.ico",
  });
  mainWindow.loadFile("source/rosmontis/index.html");

  mainWindow.on("closed", function () {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);
