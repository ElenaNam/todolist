import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { useAppSelector } from "@/common/hooks/useAppSelector";
import { selectThemeMode } from "./app-selectors";
import { getTheme } from "@/common/theme/theme";

import { Header } from "@/common/components/Header/Header";
import { Main } from "./Main";

export const App = () => {
	const themeMode = useAppSelector(selectThemeMode)
	const theme = getTheme(themeMode)

	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Header />
				<Main />
			</ThemeProvider>
		</div>
	);
}
