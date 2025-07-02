import { ReactNode } from "react"
import { BrowserRouter as Router } from "react-router"

type Props = {
  children: ReactNode
}

export const BrowserRouter = ({ children }: Props) => {
  return <Router>{children}</Router>
}
