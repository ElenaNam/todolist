import { ResultCode } from "@/common/enums"
import { useAppDispatch } from "@/common/hooks/useAppDispatch"
import { useMeQuery } from "@/features/auth/api/authApi"
import { useEffect, useState } from "react"
import { setIsLoggedInAC } from "./app-slice"
import { Header } from "@/common/components/header/Header"
import Container from "@mui/material/Container"
import { containerSx } from "@/common/styles"
import { Footer } from "@/common/components/footer/Footer"

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

  if (!isInit) return <p>Initialization...</p>

  return (
    <div className="App">
      <Header />
      <main>
        <Container maxWidth={"lg"}>
          {data?.data.login}
        </Container>
      </main>
	  <Footer/>
    </div>
  )
}
