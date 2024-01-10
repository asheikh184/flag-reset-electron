const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const serve = require("electron-serve");
const path = require("path");
const keytar = require("keytar");

const appServe = app.isPackaged
  ? serve({
      directory: path.join(__dirname, "../out"),
    })
  : null;

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  if (app.isPackaged) {
    appServe(win).then(() => {
      win.loadURL("app://-");
    });
  } else {
    win.loadURL("http://localhost:3000");
    win.webContents.openDevTools();
    win.webContents.on("did-fail-load", (e, code, desc) => {
      win.webContents.reloadIgnoringCache();
    });
  }
  ipcMain.on("set-custom-path", async () => {
    const chosenFolders = await dialog.showOpenDialog(win, {
      properties: ["openDirectory"],
    });
    if (chosenFolders) {
      console.log("chosenFolders", chosenFolders?.filePaths[0]);
      keytar
        .setPassword("my-app", "file-path", chosenFolders?.filePaths[0])
        .then(
          () => {
            // success
            console.log("success saving flag file-path");
            win.webContents.send("chosen-path", {
              pathName: chosenFolders?.filePaths[0],
            });
          },
          (error) => {
            console.error(error);
          }
        )
        .catch((error) => {
          //console.log(error);
        });
    }
    keytar.setPassword("my-app", "flag-1", "downloaded").then(
      () => {
        // success
        console.log("success saving flag set-downloaded");
      },
      (error) => {
        console.error(error);
      }
    );
  });
  ipcMain.on("reset-custom-path", async () => {
    keytar
      .deletePassword("my-app", "file-path")
      .then(
        () => {
          // success
          console.log("success deleting flag file-path");
        },
        (error) => {
          console.error(error);
        }
      )
      .catch((error) => {
        //console.log(error);
      });

    keytar.deletePassword("my-app", "flag-1").then(
      () => {
        // success
        console.log("success deleting flag set-downloaded");
      },
      (error) => {
        console.error(error);
      }
    );
  });
};

app.on("ready", () => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
