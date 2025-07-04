
import DeleteIcon from "@mui/icons-material/Delete"
import IconButton from "@mui/material/IconButton"
import styles from "./TodolistTitle.module.css"
import { EditableSpan } from "@/common/components/editableSpan/EditableSpan"
import { useRemoveTodolistMutation, useUpdateTodolistTitleMutation } from "../../../api/todolistsApi"

type Props = {
  id: string
  title: string
}

export const TodolistTitle = ({ id, title }: Props) => {

  const [removeTodolist] = useRemoveTodolistMutation()
  const [updateTodolistTitle] = useUpdateTodolistTitleMutation()

  const deleteTodolist = () => {
    removeTodolist(id)
  }

  const changeTodolistTitle = (title: string) => {
    updateTodolistTitle({ id, title })
  }

  return (
    <div className={styles.container}>
      <h3>
        <EditableSpan value={title} onChange={changeTodolistTitle} />
      </h3>
      <IconButton onClick={deleteTodolist}>
        <DeleteIcon />
      </IconButton>
    </div>
  )
}