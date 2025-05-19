import * as vscode from "vscode"
import axios from "axios"
import { Commands } from "./const.js"

/**
 * @param {import("axios").AxiosRequestConfig} obj
 */
export default async function useHttp(obj) {
  const config = JSON.parse(JSON.stringify(obj))
  const ID = config.id ?? "id 未定义"
  const title = `---------------- ${ID} ----------------`

  try {
    config.id = undefined

    const response = await axios.create().request(config)

    const fields = ["data", "status", "statusText", "headers", "config"]

    const options = {}

    const keys = Object.keys(response)

    for (const key of fields) {
      if (keys.includes(key) && key !== "request") {
        // @ts-ignore
        options[key] = response[key]
      }
    }

    // logger.appendLine(title)
    logger.appendLine(JSON.stringify(options, null, 2))
  } catch (error) {
    // @ts-ignore
    const { message, code, response } = error
    const info = {
      message,
      code,
      response: {
        status: response?.status ?? null,
        statusText: response?.statusText ?? null,
        data: response?.data ?? null,
        config: response?.config ?? null,
        headers: response?.headers ?? null
      }
    }
    const title = `---------------- ${ID} ERROR ----------------`
    // logger.appendLine(title)
    logger.appendLine(JSON.stringify(info, null, 2))
  }

  logger.show()
}
