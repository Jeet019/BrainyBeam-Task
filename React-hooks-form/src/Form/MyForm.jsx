// MyForm.jsx
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import CommonInput from "../component/CommenInput";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    username: yup.string().required("Username is required").min(3, "Minimum 3 characters"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Minimum 8 characters"),
  });
  
  const MyForm = () => {
    const methods = useForm({
      resolver: yupResolver(schema),
      mode: "onTouched",
    });
  
    const onSubmit = (data) => {
      console.log("Form Data:", data);
    };
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <CommonInput
                name="username"
                label="Username"
                placeholder="Enter your username"
              />
              <CommonInput
                name="email"
                label="Email"
                type="email"
                placeholder="Enter your email"
              />
              <CommonInput
                name="password"
                label="Password"
                type="password"
                placeholder="Enter your password"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </form>
          </FormProvider>
        </div>
      </div>
    );
  };
  
  export default MyForm;
