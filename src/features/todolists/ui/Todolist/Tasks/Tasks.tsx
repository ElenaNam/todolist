import { useState } from "react"
import { useGetTasksQuery } from "../../../api/tasksApi"
import { DomainTodolist } from "../../../lib/types"
import List from "@mui/material/List"
import { Task } from "./Task/Task"
import { TaskStatus } from "@/common/enums"

type Props = {
  todolist: DomainTodolist
}

export const Tasks = ({ todolist }: Props) => {
  const { id, filter } = todolist
  const [page, setPage] = useState(1)
  const { data, isLoading } = useGetTasksQuery({ todolistId: id, params: { page } }, { refetchOnFocus: true })

  let filteredTasks = data?.items
  if (filter === "active") {
    filteredTasks = filteredTasks?.filter((task) => task.status === TaskStatus.New)
  }
  if (filter === "completed") {
    filteredTasks = filteredTasks?.filter((task) => task.status === TaskStatus.Completed)
  }

  if (isLoading) {
    return <>Загрузка... </>
  }

  return (
    <>
      {filteredTasks?.length === 0 ? (
        <p>Тасок нет</p>
      ) : (
        <>
          <List>
            {filteredTasks?.map(task => <Task key={task.id} task={task} todolistId={id} />)}
          </List>         
        </>
      )}
    </>
  )
}
