import Link from "next/link";
import React, { ChangeEvent, FormEvent, useState } from "react";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import axios from "axios";
import { useRouter } from "next/navigation";
import {
  authFailure,
  authStart,
  authSuccess,
} from "../../store/Actions/userSlice.action";
import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";

export interface LogInProp {
  email: string;
  password: string;
}

const LogIn = () => {
  const [logInForm, setLogInForm] = useState<LogInProp>({
    email: "",
    password: "",
  });

  const router = useRouter();

  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.user);

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setLogInForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmitRegisterForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(authStart());
    try {
      const apiUri = process.env.NEXT_PUBLIC_API_URL;
      const res = await axios.post(`${apiUri}/api/auth/login`, logInForm);
      const data = res.data;
      console.log(data);
      setLogInForm({
        email: "",
        password: "",
      });
      dispatch(authSuccess(data));
      router.push("/");
    } catch (error) {
      console.log(error);
      dispatch(authFailure("login failure"));
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmitRegisterForm}
        className="w-[350px] bg-white shadow-gray-200 shadow-lg flex flex-col gap-4 border p-4 rounded-lg"
      >
        <h1 className="text-center font-bold  text-4xl">Log In</h1>

        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="p-3 rounded-full border"
            value={logInForm.email}
            onChange={handleChangeText}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <div className="flex p-3 rounded-full border items-center gap-1">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              className="focus:outline-none"
              value={logInForm.password}
              onChange={handleChangeText}
            />
            <div>
              {showPassword ? (
                <VisibilityOutlinedIcon
                  className="cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <VisibilityOffOutlinedIcon
                  className="cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="p-3 rounded-full border bg-cyan-800 text-white"
        >
          {loading ? "loading..." : "LogIn"}
        </button>

        <small className="text-center">
          Don&apos;t have an account ?{" "}
          <Link className="text-blue-500" href="/register">
            Register
          </Link>
        </small>
      </form>
    </div>
  );
};

export default LogIn;
