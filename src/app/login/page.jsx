"use client";
import { authClient } from "@/lib/auth-client";
import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, form, Input, Label, TextField} from "@heroui/react";

import Link from "next/link";



import React from 'react';
import { toast } from "react-toastify";

const Loginpage = () => {
    const onSubmit=async(e)=>{
        e.preventDefault()
        const email=e.target.email.value;
        const password=e.target.password.value;

        // console.log({email,password})

       const { data, error } = await authClient.signIn.email({
    email,
    password, 
    rememberMe: true,
    callbackURL:'/'
  
});

// console.log("data",data,"error",error)

  if(data){
   return toast.success("Login Succesfull!");
  }
  if(error){
   return toast.error("Login Failed !");
  }

    }
    return (
             
       
         <div className="flex justify-center items-center max-w-[40%] mx-auto border border-black px-4 py-10 m-20 bg-[#64349b] shadow-sm rounded-2xl text-white">
            <form onSubmit={onSubmit} className="flex w-96 flex-col gap-4" >
      <TextField
   
        isRequired
     
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input    name="email" placeholder="Enter Your Email" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        minLength={8}
     
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input    name="password" placeholder="Enter your password" />
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>
      <div className="flex  flex-col gap-2">
        <Button className="w-full" type="submit">
          <Check  />
          Login
        </Button>
         <div className=" mx-auto flex gap-4 items-center">
             <h3>Dont have an Account ..?</h3>
         <Link href={"/register"}> <Button  variant="secondary">Register</Button></Link>
         </div>
         </div>
         
    </form>
         </div>

    );
};

export default Loginpage;