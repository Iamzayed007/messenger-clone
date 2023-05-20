'use client'

import React, { useCallback, useState } from 'react'
import {SubmitHandler, FieldValues,useForm } from 'react-hook-form'
import Input from './input/Input'
import Button from './Button'
type Variant = 'LOGIN' | 'REGISTER'
function AuthForm() {
    const [variant,setVariant] = useState<Variant>('LOGIN')
    const [isLoading,setIsLoading] = useState(false)
    const toogleVariant = useCallback(()=>{

      if (variant ==='LOGIN') {
        setVariant('REGISTER')
      }else{
        setVariant('LOGIN')
      }
    },[])

    const {register,handleSubmit,formState:{errors}} =useForm<FieldValues>({
      defaultValues:{
        name:'',
        email:'',
        password:''
      }
    })
    const onSubmit: SubmitHandler<FieldValues>=(data)=>{
      setIsLoading(true)
      if (variant ==='REGISTER') {
        
      }
      if (variant ==='LOGIN') {
        
      }
    }
    const socialAction=(action:string)=>{}

  return (
    <div
    className='
    mt-8
    sm:mx-auto
    sm:w-full
    sm:max-w-md
    '
    >
      <div
      className='
      bg-white
      px-4 
      py-4
      shadow
      sm:rounded-lg
      sm:px-10
      '
      >
        <form className='space-y-6'
        onSubmit={handleSubmit(onSubmit)}
        >
        { variant==="REGISTER" &&  
        <Input label='Name' id='name' register={register}
          errors={errors}
          />}
          <Input label='Email' id='email' type='email' register={register}
          errors={errors}
          />
          <Input label='Password' id='password' type='password' register={register}
          errors={errors}
          />
          <div>
            <Button>
              {variant == "LOGIN" ? 'Sign in': 'Register'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AuthForm