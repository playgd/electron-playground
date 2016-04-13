'use strict';

import electron from 'electron';
import http from 'http';
import expressApp from './server';

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const port = 8080;
let server;

let mainWindow = null;

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800
  });

  server = http.createServer(expressApp);
  server.listen(port);
  server.on('listening', () => {
    mainWindow.loadURL('http://localhost:8080');
  });
  mainWindow.on('closed', () => {
    mainWindow = null;
    server.close();
  });
});
