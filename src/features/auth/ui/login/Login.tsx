import Button from "@mui/material/Button"
import FormControl from "@mui/material/FormControl"
import FormGroup from "@mui/material/FormGroup"
import FormLabel from "@mui/material/FormLabel"
import Grid2 from "@mui/material/Grid2"
import TextField from "@mui/material/TextField"
import { SubmitHandler, useForm } from "react-hook-form"
import { useLoginMutation } from "../../api/authApi"
import { ResultCode } from "@/common/enums"
import { useAppDispatch } from "@/common/hooks/useAppDispatch"
import { setIsLoggedInAC } from "@/app/app-slice"
import { AUTH_TOKEN } from "@/common/constants"

export const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<{ email: string; password: string }>()

  const [login] = useLoginMutation()
  const dispatch = useAppDispatch()

  const onSubmit: SubmitHandler<{ email: string; password: string }> = (data: any) => {
    login(data).then((res) => {
      if (res.data?.resultCode === ResultCode.Success) {
        dispatch(setIsLoggedInAC({ isLoggedIn: true }))
        localStorage.setItem(AUTH_TOKEN, res.data.data.token)
        reset()
      } else {
        dispatch(setIsLoggedInAC({ isLoggedIn: false }))
      }
    })
  }

  return (
    <Grid2 container justifyContent={"center"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel>
            <p>
              To login get registered
              <a style={{ marginLeft: "5px" }} href="https://social-network.samuraijs.com" target="_blank">
                here
              </a>
            </p>
            <p>or use common test account credentials:</p>
            <p>
              <b>Email:</b> free@samuraijs.com
            </p>
            <p>
              <b>Password:</b> free
            </p>
          </FormLabel>
          <FormGroup>
            <TextField label="Email" margin="normal" {...register("email", { required: true })} />
            {errors.email && <span>Обязательное поле</span>}

            <TextField label="Password" margin="normal" {...register("password", { required: true })} />
            {errors.password && <span>Обязательное поле</span>}

            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
          </FormGroup>
        </FormControl>
      </form>
    </Grid2>
  )
}
