import { Path } from "@/common/routing"
import { Navigate, Outlet } from "react-router"

type Props = {
    isAllowed: boolean
    redirectPath?: string
    children?: React.ReactNode
}

export const ProtectedRoute = ({ isAllowed, redirectPath = Path.Main, children }: Props) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />
  }
  return children ? <>{children}</> : <Outlet />
}