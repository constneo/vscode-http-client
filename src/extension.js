import * as vscode from "vscode"
import output from "./output.js"
import { DISPLAY_NAME } from "./const.js"
import gen from "./gen.js"
import statusbar from "./statusbar.js"
import useCodeLens from "./codelens.js"
import run from "./run.js"
import { getConfig } from "./utils.js"

// @ts-ignore
global.logger = vscode.window.createOutputChannel(DISPLAY_NAME, "json")

/**
 * 激活扩展
 * @param {vscode.ExtensionContext} context
 * @returns {void}
 */
export function activate(context) {
  const config = getConfig()
  if (config.enable) {
    // 加载当前语言的翻译文件
    const locale = vscode.env.language

    context.subscriptions.push(output(context))
    context.subscriptions.push(gen(context))
    context.subscriptions.push(statusbar(context))
    context.subscriptions.push(run(context))
    // context.subscriptions.push(new CodeLensProvider())
    context.subscriptions.push(useCodeLens())
  }
}

export function deactivate() {}
