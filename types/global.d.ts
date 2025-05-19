import type * as vscode from "vscode"

declare global {
  /**
   * RESTful API Http Client 输出面板
   */
  export const logger: vscode.OutputChannel
}

export {}
