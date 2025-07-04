import Container from "@mui/material/Container"
import { Outlet } from "react-router"

export const MainLayout = () => {
  return (
    <main>
      <Container maxWidth={"lg"} style={{ paddingBlock: "20px" }}>
        <Outlet />
      </Container>
    </main>
  )
}
