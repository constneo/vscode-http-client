/**
 * A sample JavaScript file for testing the RESTful API.
 *
 * Axios request configuration
 * See https://www.axios-http.cn/docs/req_config
 */

// curl -X POST -d "name=abc&id=123" http://127.0.0.1:5000/users
// {"message":"创建成功","code":200,"result":{"name":"wing","id":"123"},"success":true}
const Create = {
  id: "Create",
  url: "http://127.0.0.1:5000/users",
  data: {
    id: "123",
    name: "abc"
  }
}

// curl -X PUT -d "id=123" http://127.0.0.1:5000/users/123
// {"message":"更新成功","code":200,"result":{"id":"123"},"success":true}
const Update = {
  id: "Update",
  url: "http://127.0.0.1:5000/users/123",
  method: "PUT",
  data: {
    id: "123",
    name: "efg"
  }
}

const Patch = {
  id: "Update",
  url: "http://127.0.0.1:5000/users/123",
  method: "PATCH",
  data: {
    id: "123",
    name: "efg"
  }
}

// curl -X GET http://127.0.0.1:5000/users
// {"message":"查询成功","code":200,"result":[{"name":"xiaom ing","age":20},{"name":"xiao fang","age":18}],"success":true}
const Read = {
  id: "Read",
  url: "http://127.0.0.1:5000/users",
  method: "GET"
}

// curl -X GET http://127.0.0.1:5000/users/123
// {"message":"读取单个成功","code":200,"result":{"name":"xiaom ing","age":20},"success":true}

const ReadOne = {
  id: "Read",
  url: "http://127.0.0.1:5000/users/123",
  method: "GET"
}

// curl -X DELETE http://127.0.0.1:5000/users/123
// {"message":"删除单个成功","code":200,"result":{"id":"123"},"success":true}
const Delete = {
  id: "Delete",
  url: "http://127.0.0.1:5000/users/123",
  method: "DELETE"
}

fetch(Create.url, {
  method: "POST",
  body: JSON.stringify({
    id: "123",
    name: "abc"
  })
})
  .then(res => res.json())
  .then(res => console.log("res:", res))
  .catch(error => {
    console.log("error:::", error)
  })
