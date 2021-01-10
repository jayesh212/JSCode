const electron=require('electron')
const path=require('path')
//const os=require('os-utils')
const app=electron.app
const BrowserWindow=electron.BrowserWindow
var mainWindow
function createWindow()
{
    mainWindow=new BrowserWindow({
        backgroundColor:"#202020",
        title:"JSCode",
        frame:false,
        minimizable:true,
        maximizable:true,
        resizable:true,
    });
    mainWindow.loadFile(path.join(__dirname,"main.html"))
}
app.on('ready',createWindow);