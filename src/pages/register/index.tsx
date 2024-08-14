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
import axios, { AxiosError } from "axios";
import {
  authFailure,
  authStarts,
  authSuccess,
} from "@/store/Actions/userSlice.action";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "@/store/store";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

const Register = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const apiUri = process.env.NEXT_PUBLIC_API_URL;
  const { error, loading } = useSelector((state: RootState) => state.user);
  const [registerFormData, setRegisterFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState({
    userName: "",
    email: "",
    password: "",
  });

  console.log("loading", loading);

  const OnChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setRegisterFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    validateField(id, value);
  };

  const validateField = (id: string, value: string) => {
    switch (id) {
      case "userName":
        if (value.trim() === "") {
          setFormErrors((prev) => ({
            ...prev,
            userName: "User name is required",
          }));
        } else {
          setFormErrors((prev) => ({
            ...prev,
            userName: "",
          }));
        }
        break;
      case "email":
        if (value.trim() === "") {
          setFormErrors((prev) => ({
            ...prev,
            email: "Email is required",
          }));
        } else if (
          !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
        ) {
          setFormErrors((prev) => ({
            ...prev,
            email: "Invalid email format",
          }));
        } else {
          setFormErrors((prev) => ({
            ...prev,
            email: "",
          }));
        }
        break;
      case "password":
        if (value.trim() === "") {
          setFormErrors((prev) => ({
            ...prev,
            password: "Password is required",
          }));
        } else if (value.length < 6 || value.length > 15) {
          setFormErrors((prev) => ({
            ...prev,
            password: "Password must be between 6 and 15 characters",
          }));
        } else if (
          !/[a-z]/.test(value) ||
          !/[A-Z]/.test(value) ||
          !/[0-9]/.test(value) ||
          !/[!@#$%^&*(),.?":{}|<>]/.test(value)
        ) {
          setFormErrors((prev) => ({
            ...prev,
            password:
              "Password must contain one lowercase, one uppercase, one number, and one special character",
          }));
        } else {
          setFormErrors((prev) => ({
            ...prev,
            password: "",
          }));
        }
        break;
      default:
        break;
    }
  };

  const handleSubmitRegisterForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(authStarts());
    try {
      const response = await axios.post(
        `${apiUri}/api/auth/register`,
        registerFormData
      );
      const data = response.data;
      console.log(data);
      localStorage.setItem("token", data.token);
      toast({
        title: "user registered successfully",
      });
      dispatch(authSuccess(data));
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
          <CardTitle>Register</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmitRegisterForm}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              <Label htmlFor="userName">User Name</Label>
              <Input
                type="text"
                id="userName"
                placeholder="Alex Adem"
                value={registerFormData.userName}
                onChange={OnChangeText}
              />
              {formErrors.userName && (
                <small className="text-red-500">{formErrors.userName}</small>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="alexadem@gmal.com"
                value={registerFormData.email}
                onChange={OnChangeText}
              />
              {formErrors.email && (
                <small className="text-red-500">{formErrors.email}</small>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                {" "}
                <Input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Password"
                  value={registerFormData.password}
                  onChange={OnChangeText}
                />
                <div className="absolute top-2.5 right-2.5">
                  {showPassword ? (
                    <EyeOff onClick={() => setShowPassword(!showPassword)} />
                  ) : (
                    <Eye onClick={() => setShowPassword(!showPassword)} />
                  )}
                </div>
              </div>

              {formErrors.password && (
                <small className="text-red-500">{formErrors.password}</small>
              )}
            </div>
            <Button type="submit" className="w-full">
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                "Register"
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center items-center">
          <small>
            Already have an account ?{" "}
            <Link className="text-blue-500 hover:underline" href="/login">
              Login
            </Link>
          </small>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
