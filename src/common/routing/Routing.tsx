import { selectIsLoggedIn } from "@/app/app-slice"
import { useAppSelector } from "../hooks/useAppSelector"
import { Route, Routes } from "react-router"
import { PageNotFound, ProtectedRoute } from "../components"
import { MainLayout } from "@/app/MainLayout"
import { Login } from "@/features/auth/ui/login/Login"
import { Home } from "@/app/Home"

export const Path = {
  Main: "/",
  Login: "login",
  NotFound: "*",
} as const

export const Routing = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn)
  return (
    <Routes>
      <Route path={Path.Main} element={<MainLayout />}>
        <Route
          index
          element={
            <ProtectedRoute isAllowed={isLoggedIn}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path={Path.Login}
          element={
            <ProtectedRoute isAllowed={!isLoggedIn}>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route path={Path.NotFound} element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}
