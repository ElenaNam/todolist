import { ListItem, Checkbox, IconButton } from "@mui/material"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { ChangeEvent } from "react"
import { changeTaskStatusAC, changeTaskTitleAC, deleteTaskAC, TaskType } from "../../../../../model/tasks-reducer"
import { getListItemSx } from "@/app/App.styles";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { EditableSpan } from "@/components/EditableSpan/EditableSpan";

type Props = {
    task: TaskType
    todolistId: string
  }
   
  export const TaskItem = ({task, todolistId}: Props) => {
    const dispatch = useAppDispatch()
   
    const deleteTask = () => {
      dispatch(deleteTaskAC({todolistId, id: task.id}))
    }
   
    const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
      const newStatusValue = e.currentTarget.checked
      dispatch(changeTaskStatusAC({todolistId, id: task.id, status: newStatusValue}))
    }
   
    const changeTaskTitle = (title: string) => {
      dispatch(changeTaskTitleAC({todolistId, id: task.id, title}))
    }
   
    return (
        <ListItem sx={getListItemSx(task.isDone)}>
          <div>
            <Checkbox checked={task.isDone} onChange={changeTaskStatus}/>
            <EditableSpan title={task.title} onChange={changeTaskTitle} />
          </div>
          <IconButton onClick={deleteTask}>
            <DeleteOutlineIcon />
          </IconButton>
        </ListItem>
    )
  }