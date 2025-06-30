import { DomainTodolist } from "../lib/types"
import { Tasks } from "./Todolist/Tasks/Tasks"

type Props = {
    todolist: DomainTodolist
}

export const Todolist = ({todolist} : Props) => {
  return (
    <>
    {todolist.title}
    <Tasks todolist={todolist} />
    </>
  )
}