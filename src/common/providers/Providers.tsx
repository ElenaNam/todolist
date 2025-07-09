import { ReactNode } from "react"
import { ReduxProvider } from "./ReduxProvider"
import { ThemeProvider } from "./ThemeProvider"
import { HashRouter } from "react-router"

type Props = {
  children: ReactNode
}

export const Providers = ({ children }: Props) => {
  return (
    <HashRouter>
      <ReduxProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </ReduxProvider>
    </HashRouter>
  )
}
