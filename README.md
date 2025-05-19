# RESTful API Client

快速测试 RESTful API.

## 说明

- 测试文件以 `.api.js` 结尾.
- ~~使用和 `axios`[请求](https://www.axios-http.cn/docs/req_config) 一样的配置即可.~~
- 请求配置是一个标准的 [Requst](https://developer.mozilla.org/zh-CN/docs/Web/API/Request)
- 点击状态栏的 `rocket` 图标,将打开请求返回的 [Response](https://developer.mozilla.org/zh-CN/docs/Web/API/Response)面板
- 包含两个 `snippets`, `.api` `.uuid`

## 示例

example.api.js

```javascript
const API_GET = {
  url: "http://127.0.0.1:4000/users",
  method: "GET",
  headers: {
    "Content-Type": "application/json;charset=utf-8"
  }
}

const API_POST = {
  url: "http://127.0.0.1:4000/users",
  method: "POST",
  headers: {
    "Content-Type": "application/json;charset=utf-8"
  },
  body: {
    name: "alex",
    age: 12
  }
}
```
