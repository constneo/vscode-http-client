/**
 * @param {string} key
 * @param {Request} options
 */
export default function useRequest(key, options) {
  // console.log("request", options)

  const request = Object.assign({}, options, {
    // body: JSON.stringify(options.body)
  })

  // console.log("request:", request)
  // console.log("request.bdoy:", request.body)

  fetch(options.url, request)
    .then(res => res.json())
    .then(res => {
      // console.log("res:", res)
      logger.appendLine(`---------------- ${key} ----------------`)
      logger.appendLine(JSON.stringify(res, null, 2))
    })
    .catch(err => {
      // console.log("err:", err)
      logger.appendLine(err)
    })
}
