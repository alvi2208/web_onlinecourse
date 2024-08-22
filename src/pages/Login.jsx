import FormLogin from "../fragments/FormLogin";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="max-w-xs w-full m-5 p-6 border border-blue-300 rounded-lg shadow-lg">
        <h1 className="font-bold text-blue-600 mb-2 text-3xl">
          <Link to="/" className="hover:underline">
            LOGIN
          </Link>
        </h1>
        <p className="font-medium mb-8">Welcome, please enter your account</p>
        <FormLogin />
        <Button />
        <p className="text-sm mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/regist" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
