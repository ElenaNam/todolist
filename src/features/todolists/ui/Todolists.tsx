import Grid from "@mui/material/Grid2"
import Paper from "@mui/material/Paper"
import { useGetTodolistsQuery } from "../api/todolistsApi"
import { Todolist } from "./Todolist/Todolist"

export const Todolists = () => {
  const { data: todolists, isLoading } = useGetTodolistsQuery()
  if (isLoading) {
    return <>Загрузка...</>
  }
  return (
    <>
      <Grid container spacing={2} columns={18} sx={{marginTop: "50px", alignItems: "stretch", }}>
        {todolists?.map((todolist) => (
          <Grid key={todolist.id} size={{ xs: 18, sm: 9, md: 6 }} style={{maxWidth: "360px"}}>
            <Paper sx={{ p: "20px" }}>
              <Todolist todolist={todolist} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  )
}
