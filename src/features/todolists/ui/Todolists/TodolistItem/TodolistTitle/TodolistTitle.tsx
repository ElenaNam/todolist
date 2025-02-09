import { useAppDispatch } from "@/common/hooks/useAppDispatch"
import { EditableSpan } from "@/components/EditableSpan/EditableSpan"
import { TodolistType, deleteTodolistAC, changeTodolistTitleAC } from "@/features/todolists/model/todolists-reducer"
import { Grid2, Typography, IconButton } from "@mui/material"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { todolistHeaderSx } from "./TodolistTitle.styles"

type Props = {
	todolist: TodolistType
  }
   
  export const TodolistTitle = ({todolist}: Props) => {
	const {id, title} = todolist
   
	const dispatch = useAppDispatch()
   
	const deleteTodolist = () => {
	  dispatch(deleteTodolistAC({id}))
	}
   
	const changeTodolistTitle = (title: string) => {
	  dispatch(changeTodolistTitleAC({id, title}))
	}

	return (
		<Grid2 container sx={todolistHeaderSx}>
			<Grid2>
				<Typography align="center" variant='h6' fontWeight={'700'}>
					<EditableSpan title={title} onChange={changeTodolistTitle} />
				</Typography>
			</Grid2>
			<Grid2>
				<IconButton onClick={deleteTodolist} color="primary">
					<DeleteOutlineIcon/>
				</IconButton>
			</Grid2>
		</Grid2>
	)
  }