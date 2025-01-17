import { SxProps } from '@mui/material'
 
export const containerSx: SxProps = {
	display: 'flex',
	justifyContent: 'space-between',
	
}

export const getListItemSx = (isDone: boolean): SxProps => ({
	opacity: isDone ? 0.4 : 1,
	color: '#ff9800',
	fontWeight: 600,
	textDecoration: isDone ? 'line-through' : ''
})

