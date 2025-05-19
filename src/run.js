import * as vscode from "vscode"
import * as vm from "node:vm"
import { Commands } from "./const.js"
import useRequest from "./request.js"

/**
 * @param {vscode.Uri} uri
 */
async function loadModuleFresh(uri) {
  const content = await vscode.workspace.fs.readFile(uri)
  const code = content.toString()
  const exports = {}
  const module = { exports }
  vm.runInThisContext(code)(module.exports, require, module, __filename, __dirname)
  return module.exports
}

/**
 * @param {vscode.ExtensionContext} context
 */
export default function run(context) {
  const disposable = vscode.commands.registerCommand(Commands.run, async key => {
    const document = vscode.window.activeTextEditor?.document

    // const platform = process.platform

    const context = vm.createContext({
      console,
      process,
      apis: {}
    })

    const text = document?.getText()

    // console.log("text:", text)

    // const fs = vscode.workspace.fs

    // if (platform == "win32" && document?.fileName) {
    //   const modules = await import(`file://${vscode.window.activeTextEditor?.document.fileName}`)
    //   console.log("module:", modules)

    //   if (modules[key]) {
    //     console.log("modules[key]:", modules[key])
    //   } else {
    //     console.log("未导出")
    //   }
    // }

    // apis === context.apis
    const code = `
    ((key)=>{
        ${text};
        console.log("run.js line 30");
        apis[key]= ${key};
    })
    `

    // 在指定上下文中执行 JavaScript 代码
    vm.runInContext(code, context)(key)

    // console.log("[ context ]->", context.apis)

    const api = context.apis[key]

    if (api) {
      // await vscode.commands.executeCommand(Commands.request, api)
      // await http(api)

      useRequest(key, api)
    }
  })

  return disposable
}
