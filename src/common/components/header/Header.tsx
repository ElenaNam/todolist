import { selectAppStatus, selectIsLoggedIn } from "@/app/app-slice"
import { useAppDispatch } from "@/common/hooks/useAppDispatch"
import { useAppSelector } from "@/common/hooks/useAppSelector"
import { containerSx } from "@/common/styles"
import MenuIcon from "@mui/icons-material/Menu"
import AppBar from "@mui/material/AppBar"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import IconButton from "@mui/material/IconButton"
import LinearProgress from "@mui/material/LinearProgress"
import Toolbar from "@mui/material/Toolbar"

export const Header = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn)
  const status = useAppSelector(selectAppStatus)

  //const dispatch = useAppDispatch()

  const logoutHandler = () => {
    console.log("logout") //TODO:
  }

  return (
    <AppBar position="static" color='default' sx={{ mb: "30px" }}>
      <Toolbar>
        <Container maxWidth={"lg"} sx={containerSx}>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
          {isLoggedIn && <Button onClick={logoutHandler} variant="contained" color="primary">Sign out</Button>}
        </Container>
      </Toolbar>
      {status === "loading" && <LinearProgress />}
    </AppBar>
  )
}
