"use client";

import { Check } from "@gravity-ui/icons";
import { toast } from "react-toastify";
import { Button, FieldError, Input, Label, TextField } from "@heroui/react";

import React from "react";
import { authClient } from "@/lib/auth-client";
import { error } from "better-auth/api";

const BookingForm = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;

    const address = e.target.address.value;

    const phone = e.target.phone.value;

    const { data } = await authClient.signIn.email({
      email,
      name,
      address,
      phone,

      callbackURL: "/",
    });

    console.log("data", data, "error", error);

    if (data) {
      return toast.success("Login Succesfull!");
    }
    if (error) {
      return toast.success("booking completed");
    }
  };

  return (
    <div>
      <h1 className="font-semibold text-[#ce20b9]  mr-15 text-2xl text-center mt-10 pt-15">
        Booking details
      </h1>
      <div
        className=" flex justify-center items-center m-30 mx-auto border border-black  w-8/12 lg:m-10 py-10 px-10 shadow-sm rounded-2xl text-white  transition-all duration-300
  hover:border-blue-900 
  hover:shadow-[0_0_15px_rgba(3,197,94,0.6)]"
      >
        <form onSubmit={onSubmit} className="flex flex-col gap-4 ">
          <TextField isRequired type="text">
            <Label className=" text-white">Name</Label>
            <Input name="name" placeholder="Enter Your Name" />
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
            <Input name="email" placeholder="Enter Your Email" />
            <FieldError />
          </TextField>

          <TextField isRequired maxLength={11} type="phone">
            <Label className=" text-white">Phone</Label>
            <Input name="phone" placeholder="Enter your phone Number" />

            <FieldError />
          </TextField>

          <TextField isRequired name="address" type="text">
            <Label className=" text-white">Address</Label>
            <Input name="address" placeholder="Enter Your address" />
            <FieldError />
          </TextField>
          <div className="flex gap-2">
            <Button className="w-full" type="submit">
              <Check />
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
