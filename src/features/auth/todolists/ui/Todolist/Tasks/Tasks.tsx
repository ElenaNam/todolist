import { useState } from "react"
import { useGetTasksQuery } from "../../../api/tasksApi"
import { DomainTodolist } from "../../../lib/types"
import List from "@mui/material/List"
import { Task } from "./Task/Task"

type Props = {
  todolist: DomainTodolist
}

export const Tasks = ({ todolist }: Props) => {
  const { id, filter } = todolist
  const [page, setPage] = useState(1)
  const { data, isLoading } = useGetTasksQuery({ todolistId: id, params: { page } }, { refetchOnFocus: true })

  if (isLoading) {
    return <>Загрузка... </>
  }

  return (
    <>
      <List>{data?.items.map((task) => <Task key={task.id} todolistId={id} task={task} />)}</List>
    </>
  )
}
