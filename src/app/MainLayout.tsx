import { useAppSelector } from "@/common/hooks/useAppSelector"
import { getTheme } from "@/common/theme"
import Container from "@mui/material/Container"
import { Outlet } from "react-router"
import { selectThemeMode } from "./app-slice"

export const MainLayout = () => {
  const themeMode = useAppSelector(selectThemeMode)
  const theme = getTheme(themeMode)
  return (
    <main>
      <Container maxWidth={"lg"}  style={{paddingBlock: '20px', border: `1px solid ${theme.palette.primary.dark}`}}>
        <h1>layout</h1>
        <Outlet />
      </Container>
    </main>
  )
}
