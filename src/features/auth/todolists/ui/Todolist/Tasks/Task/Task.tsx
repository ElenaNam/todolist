import { DomainTask } from "@/features/auth/todolists/api/tasksApi.types"
import ListItem  from "@mui/material/ListItem"

type Props = {
    todolistId: string
    task: DomainTask
}


export const Task = ({todolistId, task}: Props) => {
  return (
    <ListItem>
        todolistId {todolistId}
        {task.title}
    </ListItem>
  )
}