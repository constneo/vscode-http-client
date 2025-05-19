import * as vscode from "vscode"

/**
 * Register command.
 * @param {vscode.ExtensionContext} context
 * @param {string} command
 * @returns {vscode.Disposable}
 */
export default (context, command) => {
  const disposable = vscode.commands.registerCommand(command, () => {
    const editor = vscode.window.activeTextEditor
    if (editor) {
      const position = editor.selection.active
      const line = position.line
      const column = position.character

      vscode.window.showInformationMessage(`当前光标位置：行 ${line + 1}，列 ${column + 1}`)
    }
  })
  return disposable
}
