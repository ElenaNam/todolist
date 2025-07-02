import { ReactNode } from "react"
import { BrowserRouter } from "./BrowserRouter"
import { ReduxProvider } from "./ReduxProvider"
import { ThemeProvider } from "./ThemeProvider"

type Props = {
  children: ReactNode
}

export const Providers = ({ children }: Props) => {
  return (
    <BrowserRouter>
      <ReduxProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </ReduxProvider>
    </BrowserRouter>
  )
}
