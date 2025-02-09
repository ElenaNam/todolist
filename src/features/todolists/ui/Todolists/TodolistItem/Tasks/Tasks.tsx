import { List } from "@mui/material"
import { selectTasks } from "../../../../model/tasks-selectors"
import { TodolistType } from "../../../../model/todolists-reducer"
import { TaskItem } from "./TaskItem/TaskItem"
import { useAppSelector } from "@/common/hooks/useAppSelector"

type Props = {
    todolist: TodolistType
  }
   
  export const Tasks = ({todolist}: Props) => {
    const {id, filter} = todolist
   
    const tasks = useAppSelector(selectTasks)
   
    const todolistTasks = tasks[id]
    let filteredTasks = todolistTasks
    if (filter === 'active') {
      filteredTasks = todolistTasks.filter(task => !task.isDone)
    }
    if (filter === 'completed') {
      filteredTasks = todolistTasks.filter(task => task.isDone)
    }
   
    return (
        <>
          {filteredTasks.length === 0 ? (
              <p>Тасок нет</p>
          ) : (
              <List>
                {filteredTasks.map(task => (
                    <TaskItem key={task.id} task={task} todolistId={id}/>
                ))}
              </List>
          )}
        </>
    )
  }