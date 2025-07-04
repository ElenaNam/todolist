import { CreateItemForm } from "@/common/components/createItemForm/CreateItemForm"
import { DomainTodolist } from "../../lib/types"
import { Tasks } from "./Tasks/Tasks"
import { useAddTaskMutation } from "../../api/tasksApi"
import { TodolistTitle } from "./TodolistTitle/TodolistTitle"
import { FilterButtons } from "./FilterButtons/FilterButtons"

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
      <TodolistTitle id={todolist.id} title={todolist.title} />
      <CreateItemForm onCreateItem={createTask} />
      <Tasks todolist={todolist} />
      <FilterButtons todolist={todolist}  />
    </>
  )
}
