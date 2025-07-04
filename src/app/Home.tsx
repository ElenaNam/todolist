import { CreateItemForm } from "@/common/components/createItemForm/CreateItemForm"
import { useAddTodolistMutation } from "@/features/todolists/api/todolistsApi"
import { Todolists } from "@/features/todolists/ui/Todolists"

export const Home = () => {
  const [addTodolist] = useAddTodolistMutation()
  return (
    <>
      <CreateItemForm onCreateItem={addTodolist} />
      <Todolists />
    </>
  )
}
