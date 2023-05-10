"use client";

import Input from '@/app/components/inputs/input';
import React, { useCallback, useState } from 'react'
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {

  const [ variant, setVariant ] = useState<Variant>("LOGIN");
  const [ isLoading, setIsLoading ] = useState(false);

  const toggleVariant = useCallback(() => {
    if ( variant === "LOGIN" ) {
      setVariant("REGISTER")
    } else {
      setVariant("LOGIN")
    }
  }, [variant])

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    }    
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: ""
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)

    if ( variant === "REGISTER" ) {
      // Axios Register
    }

    if ( variant === "LOGIN" ) {
      // NextAuth SignIn
    }
  }

  const socialAction = (action: string) => {
    setIsLoading(true)

    // NextAuth Social SignIn

  }

  return (
    <div
      className="
        mt-8
        sm:mx-auto
        sm:w-full
        sm:max-w-md
      "
    >
      <div
        className="
          bg-white
          px-4
          py-8
          shadow
          sm:rounded-lg
          sm:px-10
        "
      >
        <form
          className="
            space-y-6
          "
          onSubmit={handleSubmit(onSubmit)}
        >
          { variant === "REGISTER" && 
            <Input
              id="name"
              label="Name"
              register={register}
              errors={errors}
            />
          }
          <Input 
            id="email"
            label="Email"
            type="email"
            errors={errors} 
            register={register}
          />
          <Input 
            id="password"
            label="Password"
            type="password"
            errors={errors}
            register={register}
          />
        </form>
      </div>
    </div>
  )
}

export default AuthForm