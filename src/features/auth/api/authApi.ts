import { baseApi } from "@/app/baseApi"
import { BaseResponse } from "@/common/types/types"

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    me: build.query<BaseResponse<{ id: number; login: string; email: string }>, void>({
      query: () => "auth/me",
      transformResponse: (response: BaseResponse<{ id: number; login: string; email: string }>) => {
        if (response.resultCode !== 0) {
          throw new Error(response.messages?.[0] || "Unknown error")
        }
        return response
      },
    }),
    login: build.mutation<BaseResponse<{ userId: number; token: string }>, { email: string; password: string }>({
      query: (body) => ({
        url: "auth/login",
        method: "POST",
        body,
      }),
    }),
  }),
})

export const { useMeQuery, useLoginMutation } = authApi
