import { Todolist } from "../../api/todolistsApi.types"

export type DomainTodolist = Todolist & {
  filter: FilterValues
}

export type FilterValues = "all" | "active" | "completed"
