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

const LogIn = () => {
  const [logInFormData, setLogInFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const OnChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setLogInFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmitRegisterForm = (e: FormEvent<HTMLFormElement>) => {
    console.log(logInFormData);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full min-w-[320px] max-w-[450px] p-4">
        <CardHeader className="text-center">
          <CardTitle>Log In</CardTitle>
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
                value={logInFormData.userName}
                onChange={OnChangeText}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="alexadem@gmal.com"
                value={logInFormData.email}
                onChange={OnChangeText}
              />
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
            </div>{" "}
            <Button type="submit" className="w-full">
              Log In
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
