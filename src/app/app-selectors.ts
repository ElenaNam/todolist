import type { RootState } from "./store";
import type { ThemeMode } from "./app-reducer";


export const selectThemeMode = (state: RootState) => state.app.themeMode

