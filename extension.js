const vscode = require("vscode");

/**
 * @param {vscode.ExtensionContext} context
 */

function activate(context) {
  const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, -100);

  statusBarItem.text = new Date().toLocaleTimeString("de-DE", { hour12: false, hour: "2-digit", minute: "2-digit" });

  context.subscriptions.push(statusBarItem);

  statusBarItem.show();

  setInterval(() => {
    statusBarItem.text = new Date().toLocaleTimeString("de-DE", { hour12: false, hour: "2-digit", minute: "2-digit" });
  }, 1000);
}

module.exports = { activate };
