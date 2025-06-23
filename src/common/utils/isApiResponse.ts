import { ResultCode } from "../enums"

export const isApiResponse = (data: unknown): data is { resultCode: ResultCode; messages: string[] } => {
  return typeof data === "object" && data !== null && "resultCode" in data && "messages" in data
}
