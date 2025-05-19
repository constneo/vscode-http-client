import { randomUUID } from "node:crypto"

export default {
  id: `${randomUUID()}`,
  baseURL: "http://127.0.0.1:5000",
  url: "/xxx",
  method: "POST",
  headers: {
    "Content-Type": "application/json "
  },
  data: {}
}
