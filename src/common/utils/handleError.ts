import { BaseQueryApi, FetchBaseQueryError, FetchBaseQueryMeta, QueryReturnValue } from "@reduxjs/toolkit/query"
import { isApiResponse } from "./isApiResponse"
import { ResultCode } from "../enums"
import { setAppErrorAC } from "@/app/app-slice"
import { isErrorWithMessage } from "./isErrorWithMessage"

export const handleError = (
  api: BaseQueryApi,
  result: QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>,
) => {
  let error = "Some error occurred"

  if (result.error) {
    switch (result.error.status) {
      case "FETCH_ERROR":
      case "PARSING_ERROR":
      case "CUSTOM_ERROR":
        error = result.error.error
        break
      case 403:
        error = "403 Forbidden Error. Check API-KEY"
        break
      case 400:
      case 500:
        if (isErrorWithMessage(result.error.data)) {
          error = result.error.data.message
        } else {
          error = JSON.stringify(result.error.data)
        }
        break
      default:
        error = JSON.stringify(result.error)
        break
    }
    api.dispatch(setAppErrorAC({ error }))
  }

  if (isApiResponse(result.data) && result.data.resultCode === ResultCode.Error) {
    const messages = result.data.messages
    error = messages.length ? messages[0] : error
    if (error === "You are not authorized") return
    api.dispatch(setAppErrorAC({ error }))
  }
}
