import { createTheme } from "@mui/material/styles"
import { ThemeMode } from "../types/types"
import { colors } from "../styles"

export const getTheme = (themeMode: ThemeMode) => {
  return createTheme({
    palette: {
      mode: themeMode,
      primary: {
        main: colors.primaryMain,
      },
      background: {
        default: themeMode === "light" ? colors.bgLight : colors.bgDark,
        paper: themeMode === "light" ? colors.white : colors.gray,
      },
    },
  })
}
