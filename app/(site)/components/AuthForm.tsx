"use client";

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
    <div>AuthForm</div>
  )
}

export default AuthForm