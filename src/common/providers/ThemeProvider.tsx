import { selectThemeMode } from "@/app/app-slice"
import { ReactNode } from "react"
import { useAppSelector } from "../hooks/useAppSelector"
import { getTheme } from "../theme"
import { ThemeProvider as Provider } from "@mui/material/styles"

type Props = {
  children: ReactNode
}

export const ThemeProvider = ({ children }: Props) => {
  const themeMode = useAppSelector(selectThemeMode)
  const theme = getTheme(themeMode)

  return <Provider theme={theme}>{children}</Provider>
}
