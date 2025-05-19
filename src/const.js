/**
 * 当前插件的唯一标识符,应该与 package.json中的 configuration.id相对应
 * @example
 * context.extension.id == "publisher.name"
 * vscode.extensions.getExtension(id).id == "publisher.name"
 */
export const EXNTENSION_ID = "vscode-http-client"

/**
 * 插件名字, package.json -> displayName
 */
export const DISPLAY_NAME = "RESTful API Http Client"

/**
 * package.json -> contributes -> commands
 */
export const Commands = {
  /// 打开输出面板
  output: `${EXNTENSION_ID}.output`,
  /// 发起请求 request
  request: `${EXNTENSION_ID}.request`,
  /// 生成 RESTful API 样例 gen
  gen: `${EXNTENSION_ID}.gen`,
  /// vm执行example.api.js
  run: `${EXNTENSION_ID}.run`
}

/**
 * 配置
 */
export const Config = {
  enable: true
}

/**
 * 插件启动后的欢迎语
 */
export const message = `Thank you for using ${DISPLAY_NAME}`

/**
 * 文件选择 glob
 */
export const selector = [{ scheme: "file", language: "javascript", pattern: "**/*.api.js" }]
