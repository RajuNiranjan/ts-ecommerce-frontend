import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import {
  authFailure,
  authStarts,
  authSuccess,
} from "@/store/Actions/userSlice.action";
import axios, { AxiosError } from "axios";
import { RootState } from "@/store/store";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

const LogIn = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const apiUri = process.env.NEXT_PUBLIC_API_URL;
  const { error, loading } = useSelector((state: RootState) => state.user);
  const { toast } = useToast();
  const [logInFormData, setLogInFormData] = useState({
    userNameOrEmail: "",
    password: "",
  });

  const [formError, setFormError] = useState({
    userNameOrEmail: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const OnChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setLogInFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    validateFields(id, value);
  };

  const validateFields = (id: string, value: string) => {
    switch (id) {
      case "userNameOrEmail":
        if (value.trim() === "") {
          setFormError((prev) => ({
            ...prev,
            userNameOrEmail: "User name or email is required",
          }));
        } else {
          setFormError((prev) => ({
            ...prev,
            userNameOrEmail: "",
          }));
        }
        break;
      case "password":
        if (value.trim() === "") {
          setFormError((prev) => ({
            ...prev,
            password: "Password is required",
          }));
        } else {
          setFormError((prev) => ({
            ...prev,
            password: "",
          }));
        }
        break;
    }
  };

  const handleSubmitLoginForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(logInFormData);
    dispatch(authStarts());

    const isEmail = logInFormData.userNameOrEmail.includes("@");
    const requestData = isEmail
      ? {
          email: logInFormData.userNameOrEmail,
          password: logInFormData.password,
        }
      : {
          userName: logInFormData.userNameOrEmail,
          password: logInFormData.password,
        };

    try {
      const res = await axios.post(`${apiUri}/api/auth/login`, requestData);
      const data = res.data;
      console.log(data);
      dispatch(authSuccess(data));
      localStorage.setItem("token", data.token);
      toast({
        title: "Login successfully",
      });
      router.push("/");
    } catch (error) {
      const err = error as AxiosError;

      if (err.response?.data && typeof err.response.data === "object") {
        const errorMessage = (err.response.data as { message: string }).message;
        dispatch(authFailure(errorMessage));
        toast({
          title: errorMessage,
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      } else {
        console.log("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full min-w-[320px] max-w-[450px] p-4">
        <CardHeader className="text-center">
          <CardTitle>Log In</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmitLoginForm}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              <Label htmlFor="userNameOrEmail">User Name or Email</Label>
              <Input
                type="text"
                id="userNameOrEmail"
                placeholder="Alex Adem or alexadem@gmal.com"
                value={logInFormData.userNameOrEmail}
                onChange={OnChangeText}
              />
              {formError.userNameOrEmail && (
                <small className="text-red-500">
                  {formError.userNameOrEmail}
                </small>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                value={logInFormData.password}
                onChange={OnChangeText}
              />
              {formError.password && (
                <small className="text-red-500">{formError.password}</small>
              )}
            </div>

            <Button type="submit" className="w-full">
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                "Log In"
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center items-center">
          <small>
            Don't have an account ?{" "}
            <Link className="text-blue-500 hover:underline" href="/register">
              Register
            </Link>
          </small>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LogIn;
