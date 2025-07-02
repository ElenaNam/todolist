import Grid from "@mui/material/Grid2"
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
      <Grid container spacing={2} columns={18} style={{marginTop: '50px'}}>
        {todolists?.map((todolist) => (
          <Grid key={todolist.id} size={6}>
            <Paper sx={{ p: "0 20px 20px 20px" }}>
              <Todolist todolist={todolist} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  )
}
