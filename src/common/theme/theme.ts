import { createTheme } from "@mui/material/styles";
import { ThemeMode } from "@/app/app-reducer";


export const getTheme = (themeMode: ThemeMode) => {
	return createTheme({
		palette: {
			primary: {main: '#ff9800', light: '#ffac33', dark: '#b26a00'}, 
			secondary: {main: '#ffc400'}, 
			mode: themeMode  
		}, 
	})
}
