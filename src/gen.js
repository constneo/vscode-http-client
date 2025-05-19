import { Commands, DISPLAY_NAME, message } from "./const.js"
import * as vscode from "vscode"

/**
 * 右下角的欢迎语
 * @param {*} contentx
 * @return {vscode.Disposable}
 */
export default function (contentx) {
  console.log(`Register ${DISPLAY_NAME} extension .`)

  const disposable = vscode.commands.registerCommand(Commands.gen, () => {
    vscode.window.showInformationMessage(message)

    // 输出一段文字到输出面板
    // logger.appendLine("value")
  })

  return disposable
}
