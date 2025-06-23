import Button from "@mui/material/Button"
import FormControl from "@mui/material/FormControl"
import FormGroup from "@mui/material/FormGroup"
import FormLabel from "@mui/material/FormLabel"
import Grid2 from "@mui/material/Grid2"
import TextField from "@mui/material/TextField"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { useLoginMutation } from "../../api/authApi"
import { ResultCode } from "@/common/enums"
import { useAppDispatch } from "@/common/hooks/useAppDispatch"
import { setIsLoggedInAC } from "@/app/app-slice"
import { AUTH_TOKEN } from "@/common/constants"
import { Inputs, loginSchema } from "../lib/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import Checkbox from "@mui/material/Checkbox"
import FormControlLabel from "@mui/material/FormControlLabel"

export const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "", rememberMe: false },
    mode: "onBlur",
  })

  const [login] = useLoginMutation()
  const dispatch = useAppDispatch()

  const onSubmit: SubmitHandler<Inputs> = (data: any) => {
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
            <TextField
              label="Email"
              margin="normal"
              error={!!errors.email}
              {...register("email", { required: true })}
            />
            {errors.email && <span>{errors.email.message}</span>}

            <TextField
              label="Password"
              margin="normal"
              error={!!errors.password}
              {...register("password", { required: true })}
            />
            {errors.password && <span>{errors.password.message}</span>}

            <FormControlLabel
              label={"Remember me"}
              control={
                <Controller
                  name={"rememberMe"}
                  control={control}
                  render={({ field: { value, ...field } }) => <Checkbox {...field} checked={value} />}
                />
              }
            />

            <Button type="submit" variant="contained" color="primary" disabled={!isValid}>
              Login
            </Button>
          </FormGroup>
        </FormControl>
      </form>
    </Grid2>
  )
}
