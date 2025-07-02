import IconButton from "@mui/material/IconButton"
import AddBoxIcon from "@mui/icons-material/AddBox"
import TextField from "@mui/material/TextField"
import { type ChangeEvent, type KeyboardEvent, useState } from "react"

type Props = {
  onCreateItem: (title: string) => void
}

export const CreateItemForm = ({ onCreateItem }: Props) => {
  const [title, setTitle] = useState("")
  const [error, setError] = useState<string | null>(null)

  const createItemHandler = () => {
    const trimmedTitle = title.trim()
    if (trimmedTitle !== "") {
      onCreateItem(trimmedTitle)
      setTitle("")
    } else {
      setError("Title is required")
    }
  }

  const changeTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value)
    setError(null)
  }

  const createItemOnEnterHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      createItemHandler()
    }
  }

  return (
    <div>
      <TextField
        label={"Enter a title"}
        variant={"outlined"}
        value={title}
        size={"small"}
        error={!!error}
        helperText={error}
        onChange={changeTitleHandler}
        onKeyDown={createItemOnEnterHandler}
        autoComplete="off"
        sx={{
          "& .MuiOutlinedInput-root": {
            ".MuiOutlinedInput-notchedOutline": {
              transition: `border-color .3s`,
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: (theme) => `${theme.palette.primary.light}`,
            },
          },
        }}
      />
      <IconButton onClick={createItemHandler} color={"primary"}>
        <AddBoxIcon />
      </IconButton>
    </div>
  )
}
