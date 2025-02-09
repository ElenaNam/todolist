import { selectThemeMode } from '@/app/app-selectors';
import { useAppDispatch } from '@/common/hooks/useAppDispatch';
import { useAppSelector } from '@/common/hooks/useAppSelector';
import { getTheme } from '@/common/theme/theme';
import { NavButton } from '@/components/NavButton/NavButton';
import { AppBar, Toolbar, Container, IconButton, Switch } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import { changeThemeModeAC } from '@/app/app-reducer';
import { containerSx } from '@/common/styles/container.styles';

export const Header = () => {
	const themeMode = useAppSelector(selectThemeMode)
	
	const dispatch = useAppDispatch()

	const theme = getTheme(themeMode)

	//MUI
	const changeMode = () => {
		dispatch(changeThemeModeAC({themeMode: themeMode === 'light' ? 'dark' : 'light'}))
	}

	return (
		<AppBar position="static">
			<Toolbar>
				<Container sx={containerSx}>
					<IconButton color="inherit">
						<MenuIcon />
					</IconButton>
					<div>
						<Switch onChange={() => changeMode()} />
						<NavButton>Sign in</NavButton>
						<NavButton>Sign up</NavButton>
						<NavButton background={"dodgerblue"}>Faq</NavButton>
					</div>
				</Container>
			</Toolbar>
		</AppBar>
	);
};
