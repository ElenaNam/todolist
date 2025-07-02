import { CreateItemForm } from "@/common/components/createItemForm/CreateItemForm"
import { DomainTodolist } from "../lib/types"
import { Tasks } from "./Todolist/Tasks/Tasks"
import { useAddTaskMutation } from "../api/tasksApi"

type Props = {
  todolist: DomainTodolist
}

export const Todolist = ({ todolist }: Props) => {
  const [addTask] = useAddTaskMutation()
  const createTask = (title: string) => {
    addTask({ todolistId: todolist.id, title })
  }
  return (
    <>
      {todolist.title}
      <CreateItemForm onCreateItem={createTask} />
      <Tasks todolist={todolist} />
    </>
  )
}
