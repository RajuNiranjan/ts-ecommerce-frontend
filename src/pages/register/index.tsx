import Link from "next/link";
import React, { ChangeEvent, FormEvent, useState } from "react";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import axios from "axios";
import { useRouter } from "next/navigation";

export interface RegisterProp {
  userName: string;
  email: string;
  password: string;
}

const Register = () => {
  const [registerForm, setRegisterForm] = useState<RegisterProp>({
    userName: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setRegisterForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmitRegisterForm = async (e: FormEvent<HTMLFormElement>) => {
    if (
      !registerForm.email ||
      !registerForm.password ||
      !registerForm.userName
    ) {
      return;
    }
    try {
      console.log(registerForm);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmitRegisterForm}
        className="w-[350px] bg-white shadow-gray-200 shadow-lg flex flex-col gap-4 border p-4 rounded-lg"
      >
        <h1 className="text-center font-bold text-4xl">Register</h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            name="userName"
            id="userName"
            className="p-3 rounded-full border"
            value={registerForm.userName}
            onChange={handleChangeText}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="p-3 rounded-full border"
            value={registerForm.email}
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
              value={registerForm.password}
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
          Register
        </button>

        <small className="text-center">
          Already have an account ?{" "}
          <Link className="text-blue-500" href="/login">
            Login
          </Link>
        </small>
      </form>
    </div>
  );
};

export default Register;
