const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

electron.crashReporter.start();

app.on('ready', () => {
    const mainWindow = new BrowserWindow({
        width: 1024,
        height: 768
    });

    mainWindow.loadURL(`file://${__dirname}/index.html`)
});
