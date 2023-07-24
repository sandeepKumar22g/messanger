"use client";

import { Input } from "@/components";
import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

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
      //axios register
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
                <Input />
            </form>
        </div>
    </div>   
 );
};

export default AuthForm;
