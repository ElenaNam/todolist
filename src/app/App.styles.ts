import { SxProps } from '@mui/material'
 
export const appHeaderSx: SxProps = {
	padding: '50px 0',
	position: 'relative',
	zIndex: '1',
	textAlign: 'center',
	display: 'flex',
	gap: '7px'
}

export const containerSx: SxProps = {
	display: 'flex',
	justifyContent: 'space-between',
}

export const todolistSx: SxProps = {
	flexShrink: '0',
	height: 'auto',
	overflow: 'hidden',
	padding: '20px',
}


export const todolistItemsSx = {
	maxHeight: '200px',
	height: 'auto',
	transition: 'height 0.3s ease',
	overflowY: 'auto',
	margin: '20px 0 30px',
	display: 'flex',
	flexDirection: 'column',
	gap: '7px',
	'&::-webkit-scrollbar': {
	  width: '8px',
	},
	'&::-webkit-scrollbar-track': {
	  background: 'transparent',
	  borderRadius: '10px',
	},
	'&::-webkit-scrollbar-thumb': {
	  backgroundColor: '#e87d00',
	  borderRadius: '10px',
	  border: '2px solid transparent',
	  backgroundClip: 'content-box',
	},
  };

export const todolistHeaderSx: SxProps = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	marginBottom: '15px'
}

export const todolistAddFormSx: SxProps = {
	display: 'flex',
	gap: '7px'
}

export const getListItemSx = (isDone: boolean): SxProps => ({
	opacity: isDone ? 0.4 : 1,
	color: '#ff9800',
	fontWeight: 600,
	textDecoration: isDone ? 'line-through' : ''
})

export const addFormMsgSx: SxProps = {
	position: 'absolute',
	padding: '5px 0 0',
	opacity: '.7',
}