import { CreateItemForm } from "@/common/components/createItemForm/CreateItemForm"
import { useAddTodolistMutation } from "@/features/auth/todolists/api/todolistsApi"
import { Todolists } from "@/features/auth/todolists/Todolists"

export const Home = () => {
  const [addTodolist] = useAddTodolistMutation()
  return (
    <>
      < CreateItemForm onCreateItem={addTodolist}/>
      <Todolists />
    </>
  )
}
