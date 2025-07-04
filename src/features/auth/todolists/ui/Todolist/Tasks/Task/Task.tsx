import { DomainTask } from "@/features/auth/todolists/api/tasksApi.types"
import ListItem from "@mui/material/ListItem"
import { getListItemSx } from "./Task.styles"
import { TaskStatus } from "@/common/enums"
import Checkbox from "@mui/material/Checkbox"
import IconButton from "@mui/material/IconButton"
import DeleteIcon from "@mui/icons-material/Delete"
import { useRemoveTaskMutation, useUpdateTaskMutation } from "@/features/auth/todolists/api/tasksApi"
import { ChangeEvent } from "react"
import { createTaskModel } from "@/features/auth/todolists/lib/types/utils/createTaskModel"
import { EditableSpan } from "@/common/components/editableSpan/EditableSpan"

type Props = {
  todolistId: string
  task: DomainTask
}

export const Task = ({ todolistId, task }: Props) => {
  const [updateTask] = useUpdateTaskMutation()
  const [removeTask] = useRemoveTaskMutation()

  const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
    const status = e.currentTarget.checked ? TaskStatus.Completed : TaskStatus.New
    const model = createTaskModel(task, { status })
    updateTask({ taskId: task.id, todolistId, model })
  }

  const changeTaskTitle = (title: string) => {
    const model = createTaskModel(task, { title })
    updateTask({ taskId: task.id, todolistId, model })
  }

  const deleteTask = () => {
    removeTask({ todolistId, taskId: task.id })
  }

  const isTaskCompleted = task.status === TaskStatus.Completed

  return (
    <ListItem sx={getListItemSx(isTaskCompleted)}>
      <div>
        <Checkbox checked={isTaskCompleted} onChange={changeTaskStatus} />
        <EditableSpan value={task.title} onChange={changeTaskTitle} />
      </div>
      <IconButton onClick={deleteTask}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  )
}
