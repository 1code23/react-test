import request from "../config/serve.js"

export function getData(data) {
  return request( "get",
  "/v1/wx/user/children",
  data)
}
export function getIpAddress(data) {
    return request(
      "get",
      "/v1/wx/user/children",
      data
    )
  }
