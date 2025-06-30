import { baseApi } from "@/app/baseApi"
import { DomainTodolist } from "../lib/types"
import { Todolist } from "./todolistsApi.types"

export const todolistsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTodolists: build.query<DomainTodolist[], void>({
      query: () => "todo-lists",
      transformResponse: (todolists: Todolist[]): DomainTodolist[] =>
        todolists.map((item) => ({ ...item, filter: "all" })),
      providesTags: ["Todolist"],
    }),
  }),
})

export const { useGetTodolistsQuery } = todolistsApi
