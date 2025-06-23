import { selectAppStatus, selectIsLoggedIn, setIsLoggedInAC } from "@/app/app-slice"
import { AUTH_TOKEN } from "@/common/constants"
import { ResultCode } from "@/common/enums"
import { useAppDispatch } from "@/common/hooks/useAppDispatch"
import { useAppSelector } from "@/common/hooks/useAppSelector"
import { containerSx } from "@/common/styles"
import { useLogoutMutation } from "@/features/auth/api/authApi"
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
  const [logout] = useLogoutMutation()

  const dispatch = useAppDispatch()

  const logoutHandler = () => {
    logout().then((res) => {
      if (res.data?.resultCode === ResultCode.Success) {
        dispatch(setIsLoggedInAC({ isLoggedIn: false }))
        localStorage.removeItem(AUTH_TOKEN)
      }
    })
  }

  return (
    <AppBar position="static" color="default" sx={{ mb: "30px" }}>
      <Toolbar>
        <Container maxWidth={"lg"} sx={containerSx}>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
          {isLoggedIn && (
            <Button onClick={logoutHandler} variant="contained" color="primary">
              Sign out
            </Button>
          )}
        </Container>
      </Toolbar>
      {status === "loading" && <LinearProgress />}
    </AppBar>
  )
}
