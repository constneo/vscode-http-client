import * as vscode from "vscode"
import { Commands, selector } from "./const.js"

export default function useCodeLens() {
  return vscode.languages.registerCodeLensProvider(selector, {
    onDidChangeCodeLenses() {
      return new vscode.Disposable(() => {})
    },
    provideCodeLenses(document, token) {
      const first = document?.lineAt(0).text ?? ""
      if (!first) {
        return []
      }
      const text = document.getText()
      const codeLenses = []

      // 存储获取到的变量名
      const keys = []

      // 匹配 codelens 所在位置
      const pattern = /(const|let)\s+([\w]+)[\s]+(=)[\s]+(?=\{)/g

      let matches = pattern.exec(text)
      while (matches !== null) {
        const temp = document.positionAt(matches.index)
        const line = document.lineAt(temp.line)
        const indexOf = line.text.indexOf(matches[0])
        // console.log("matches[0]::: ", matches)
        const position = new vscode.Position(line.lineNumber, indexOf)
        const range = document.getWordRangeAtPosition(position, new RegExp(pattern))

        if (range) {
          const codeLens = new vscode.CodeLens(range)

          codeLens.command = {
            title: "发起请求",
            command: Commands.run,
            arguments: [matches[2]]
          }

          codeLenses.push(codeLens)
        }

        matches = pattern.exec(text)
      }

      // console.log("codeLenses:", codeLenses)

      //TODO:处理api请求命名重复
      // const list = new Set()
      // codeLenses.forEach(item => {
      //   if (item.command && item.command.arguments) {
      //     /**
      //      * @type {string}
      //      */
      //     const i = item.command.arguments[0]
      //     const str = i.split(" ")
      //     console.log("str:", str)
      //   }
      // })

      return codeLenses
    }
  })
}
