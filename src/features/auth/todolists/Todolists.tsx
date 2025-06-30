import Grid2 from "@mui/material/Grid2"
import Paper from "@mui/material/Paper"
import { Todolist } from "./ui/Todolist"
import { useGetTodolistsQuery } from "./api/todolistsApi"

export const Todolists = () => {
  const { data: todolists, isLoading } = useGetTodolistsQuery()
  if (isLoading) {
    return <>Загрузка...</>
  }
  return (
    <>
      {todolists?.map((todolist) => (
        <Grid2 key={todolist.id}>
          <Paper sx={{ p: "0 20px 20px 20px" }}>
            <Todolist todolist={todolist} />
          </Paper>
        </Grid2>
      ))}
    </>
  )
}
