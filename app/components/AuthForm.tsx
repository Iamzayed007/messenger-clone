'use client'

import React, { useCallback, useState } from 'react'
import {SubmitHandler, FieldValues,useForm } from 'react-hook-form'
import AuthScocialButtton from './AuthSocialButton'
import Button from '../util/Button'
import Input from '../util/input/Input'
import {  BsGithub, BsGoogle} from "react-icons/bs";



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
    },[variant])

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
          disabled={isLoading}
          />}
          <Input label='Email' id='email' type='email' register={register}
          errors={errors}
          disabled={isLoading}
          />
          <Input label='Password' id='password' type='password' register={register}
          errors={errors}
          disabled={isLoading}
          />
          <div>
            <Button
            disabled={isLoading}
            fullWidth
            type='submit'
            >
              {variant == "LOGIN" ? 'Sign in': 'Register'}
            </Button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absulate inset-0 flex items-center">
              <div className="w-full border-t border-gray-300">

              </div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className='
              bg-white
              px-2
              text-gray-500
              '>
                or continue with
              </span>
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            <AuthScocialButtton
            icon={BsGithub}
            onclick={()=>socialAction('github')}
            />
            <AuthScocialButtton
            icon={BsGoogle}
            onclick={()=>socialAction('google')}
            />
          </div>
          <div className="mt-6 flex gap-2 px-2 justify-center text-sm text-gray-500
          ">
            <div>
              {variant=='LOGIN' ?
            'New to Messenger ?'  : 'Already register ?'
            }
            </div>
            <div className="underline cursor-pointer"
            onClick={toogleVariant}
            >
            {variant=='LOGIN' ?
            'Create an account'  : 'Login'
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthForm