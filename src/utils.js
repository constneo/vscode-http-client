import { exec } from "child_process"
import * as vscode from "vscode"
import { Config, message, EXNTENSION_ID } from "./const.js"

/**
 * @param {string} str
 */
export function getJson(str) {
  try {
    return JSON.parse(str)
  } catch (error) {
    return null
  }
}

/**
 * @param {any} obj
 */
export function _typeof(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1)
}

/**
 * 执行命令
 * @param {string} command
 * @returns {Promise<string>}
 */
export function execCommand(command) {
  return new Promise((resolve, reject) => {
    exec(`${command}`, (error, stdout, stderr) => {
      if (error) reject(`${stderr || error.message}`)
      else resolve(stdout)
    })
  })
}

/**
 * 获取插件的配置
 * @returns {{enable:boolean}}
 */
export function getConfig() {
  const config = vscode.workspace.getConfiguration(EXNTENSION_ID)
  const ret = JSON.parse(JSON.stringify(Config))

  for (const key in Config) {
    ret[key] = config.get(key)
  }

  return ret
}

/**
 * 获取插件的 package.json
 *
 * See {@link https://code.visualstudio.com/api/references/extension-manifest}
 * @example
 * context.extension.packageJSON
 * vscode.extensions.getExtension(id).packageJSON
 * @param {vscode.ExtensionContext} context
 * @returns {any}
 */
export function getExtensionJson(context) {
  return context.extension.packageJSON
}

/**
 * 根据id获取获取插件.
 *
 * 如果是在扩展管理的右键上下文中,命令的参数,就是插件的id.
 * @example
 * vscode.commands.registerCommand(Commands.hello,(id) => { id === "publisher.name"})
 * @param {string} id
 * @returns {vscode.Extension<any> | undefined}
 */
export function getExtension(id) {
  return vscode.extensions.getExtension(id)
}

/**
 * 获取当前环境
 *
 * The mode the extension is running in. See {@link ExtensionMode}
 * @param {vscode.ExtensionContext} context
 * @returns {vscode.ExtensionMode}
 */
export function getMode(context) {
  return context.extensionMode
}

/**
 * @param {vscode.Uri} uri
 * @returns {vscode.WorkspaceFolder| undefined}
 */
export function getRootDir(uri) {
  return vscode.workspace.getWorkspaceFolder(uri)
}

/**
 * 右下角的欢迎语
 * @return {vscode.Disposable}
 */
export function welcome() {
  console.log(`Register ${EXNTENSION_ID} extension .`)

  const disposable = new vscode.Disposable(() => {
    vscode.window.showInformationMessage(message)
  })

  return disposable
}
/**
 * 获取当前日期
 * @returns {string}
 */
export function getCurrentDate() {
  let date = new Date()
  // console.log(date.getFullYear()) //当前日期的年 2022
  // console.log(date.getMonth() + 1) //月份+1 由于月份是0-11计算 所以需要 +1
  // console.log(date.getDate()) // 日
  // console.log(date.getDay()) // 星期几  注意：星期日返回的是0
  // console.log(date.getHours()) // 时
  // console.log(date.getMinutes()) // 分
  // console.log(date.getSeconds()) // 秒

  const y = date.getFullYear()
  const m = date.getMonth() + 1
  const d = date.getDate()
  const hh = date.getHours()
  const mm = date.getMinutes()
  const ss = date.getSeconds()

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

/**
 * 自定义 when 子句上下文
 *
 * @returns {vscode.Disposable}
 */
export function when() {
  // 监听配置文件的修改,使条件立即生效
  const disposable = vscode.workspace.onDidChangeConfiguration(async config => {
    vscode.commands.executeCommand("setContext", "constneo.testSetContext", true)
  })

  return disposable
}

/**
 * 监听文件
 * @returns {vscode.FileSystemWatcher}
 */
export function onWatcher() {
  const watcher = vscode.workspace.createFileSystemWatcher("**/*.{md,json}")
  // watcher.onDidCreate(() => {})
  return watcher
}

export function useListenConfiguration() {
  // 监听配置文件的修改,使条件立即生效
  const disposable = vscode.workspace.onDidChangeConfiguration(async config => {
    const a = config.affectsConfiguration(EXNTENSION_ID)
  })

  return disposable
}
