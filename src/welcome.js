import { DISPLAY_NAME, message } from "./const.js"
import * as vscode from "vscode"

/**
 * 右下角的欢迎语
 * @return {vscode.Disposable}
 */
export function welcome() {
  console.log(`Register ${DISPLAY_NAME} extension .`)

  const disposable = new vscode.Disposable(() => {
    vscode.window.showInformationMessage(message)
  })

  return disposable
}
