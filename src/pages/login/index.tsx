import Link from "next/link";
import React, { ChangeEvent, FormEvent, useState } from "react";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

export interface LogInProp {
  email: string;
  password: string;
}

const LogIn = () => {
  const [logInForm, setLogInForm] = useState<LogInProp>({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setLogInForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmitRegisterForm = (e: FormEvent<HTMLFormElement>) => {
    console.log(logInForm);
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
          LogIn
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
