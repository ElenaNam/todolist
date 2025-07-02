import { DomainTask } from "@/features/auth/todolists/api/tasksApi.types"
import ListItem  from "@mui/material/ListItem"
import { getListItemSx } from "./Task.styles"
import { TaskStatus } from "@/common/enums"

type Props = {
    todolistId: string
    task: DomainTask
}


export const Task = ({todolistId, task}: Props) => {
    const isTaskCompleted = task.status === TaskStatus.Completed
  return (
    <ListItem sx={getListItemSx(isTaskCompleted)}>
        {task.title}
    </ListItem>
  )
}