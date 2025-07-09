import { SxProps } from "@mui/material"

export const getListItemSx = (isDone: boolean): SxProps => ({
  p: 0,
  justifyContent: "flex-start",
  alignItems: "flex-start",
  opacity: isDone ? 0.5 : 1,
  

  "& span:nth-of-type(2)": {
    p: '9px 0 0',
    textDecoration: isDone ? 'line-through' : 'none',
  }

})
