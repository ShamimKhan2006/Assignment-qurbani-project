"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { toast } from "react-toastify";
import {
  Button,
  Description,
  FieldError,
  form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { email } from "better-auth";
import Link from "next/link";

import React from "react";

const RegisterPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    // const image = e.target.image.value;

    console.log({ email, password,name });

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
    //   image,
      callbackURL: "/",
    });

    console.log("data",data ,"error",error)

    if (data) {
      return toast.success("Register Succesfull!");
    }
    if (error) {
      return toast.error("Register Failed !");
    }
  };
  return (
    <div className=" flex justify-center items-center max-w-[40%] mx-auto border border-black px-4 py-10 m-20 bg-[#64349b] shadow-sm rounded-2xl text-white  transition-all duration-300
  hover:border-blue-900 
  hover:shadow-[0_0_15px_rgba(3,197,94,0.6)]">
      <form onSubmit={onSubmit} className="flex flex-col gap-4 ">
        <TextField
          
          isRequired
        
          type="text"
    
        >
          <Label className=" text-white">Name</Label>
          <Input   name="name" placeholder="Enter Your Name" />
          <FieldError />
        </TextField>
        <TextField
        
          isRequired
         
          type="email"
          validate={(value) => {
           if (value.length < 3) {
  return "Name must be at least 3 characters";
}
            return null;
          }}
        >
          <Label className=" text-white">Email</Label>
          <Input  name="email" placeholder="Enter Your Email" />
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
          <Label className=" text-white">Password</Label>
          <Input  name="password" placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>
         
        <TextField
         
          isRequired
          name="image"
          type="text"
          validate={(value) => {
            if (value.length < 3) {
              return "Please enter a valid image url";
            }
            return null;
          }}
        >
          <Label className=" text-white">Image</Label>
        <Input name="image" placeholder="Enter Your image url" />
          <FieldError />
        </TextField>
        <div className="flex gap-2">
          <Button className='w-full' type="submit">
            <Check />
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
