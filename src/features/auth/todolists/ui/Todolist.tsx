import { DomainTodolist } from "../lib/types"

type Props = {
    todolist: DomainTodolist
}

export const Todolist = ({todolist} : Props) => {
  return (
    <>
    {todolist.title}
    </>
  )
}