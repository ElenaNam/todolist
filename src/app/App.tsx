import { ResultCode } from "@/common/enums"
import { useAppDispatch } from "@/common/hooks/useAppDispatch"
import { useMeQuery } from "@/features/auth/api/authApi"
import { useEffect, useState } from "react"
import { setIsLoggedInAC } from "./app-slice"
import LinearProgress from "@mui/material/LinearProgress"
import { ErrorSnackbar, Footer, Header } from "@/common/components"
import { Routing } from "@/common/routing"
import CssBaseline from "@mui/material/CssBaseline"

export const App = () => {
  const [isInit, setIsInit] = useState(false)

  const { data, isLoading } = useMeQuery()

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (isLoading) return
    setIsInit(true)
    if (data?.resultCode === ResultCode.Success) {
      dispatch(setIsLoggedInAC({ isLoggedIn: true }))
    }
  }, [isLoading])

  if (!isInit) return <LinearProgress />

  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Routing />
      <ErrorSnackbar />
      <Footer />
    </div>
  )
}
