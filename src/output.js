import * as vscode from "vscode"
import { Commands } from "./const.js"

/**
 * Register command.
 * @param {vscode.ExtensionContext} contentx
 * @returns {vscode.Disposable}
 */
export default contentx => {
  const disposable = vscode.commands.registerCommand(Commands.output, async () => {
    logger.show()
  })

  return disposable
}
