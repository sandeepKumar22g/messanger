"use client";


import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "../../../components";
import AuthSocialButton from "./AuthSocialButton"
import {BsGithub, BsGoogle} from "react-icons/bs"
import axios from "axios";

const AuthForm = () => {
  const [variant, setVariant] = useState("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toogleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      axios.post("/api/register", data)
    }

    if (variant === "LOGIN") {
      // next auth signin
    }
  };

  const socialAction = (action) => {
    setIsLoading(true);

    // next auth social signin
  };
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                {variant === "REGISTER" && (
                    <Input id='name' label='Name' register={register} errors={errors} />
                )}
                <Input id='email' label='Email Address' type='email' register={register} errors={errors} />
                <Input id='password' label='Password' type='password' register={register} errors={errors} />
                <div >
                    <Button disabled={isLoading} fullWidth type='submit'>{variant === "LOGIN" ? "Sign In" : "Register"}</Button>
                </div>
            </form>
            <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>
                <div className="mt-6 flex gap-2">
                  <AuthSocialButton Icon={BsGithub} onClick={() =>socialAction('github')} />
                  <AuthSocialButton Icon={BsGoogle} onClick={() =>socialAction('google')} />
                </div>
            </div>
            <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
                <div>
                  {variant === "LOGIN" ? "New to messanger?" : "Already have an account"}
                </div>
                <div onClick={toogleVariant} className="underline cursor-pointer" >
                  {variant === "LOGIN" ? "Create and account" : "Login"}
                </div>
            </div>
        </div>
    </div>   
 );
};

export default AuthForm;
