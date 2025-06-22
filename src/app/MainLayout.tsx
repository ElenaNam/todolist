import Container from "@mui/material/Container"
import { Outlet } from "react-router"

export const MainLayout = () => {
  return (
    <main>
      <Container maxWidth={"lg"}>
        <h1>layout</h1>
        <Outlet />
      </Container>
    </main>
  )
}
