import * as vscode from "vscode"
import { Commands, DISPLAY_NAME } from "./const.js"

/**
 * Register command.
 * @param {vscode.ExtensionContext} context
 * @returns {vscode.Disposable}
 */
export default context => {
  // 只有在扩展激活之后,才会显示出来
  const statusItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left)

  statusItem.command = {
    title: Commands.output,
    command: Commands.output,
    tooltip: `打开输出面板`,
    arguments: [{ hello: "world" }]
  }

  statusItem.tooltip = `打开 ${DISPLAY_NAME} 输出面板`
  statusItem.text = "$(rocket)"
  statusItem.show()

  return new vscode.Disposable(() => {})
}
