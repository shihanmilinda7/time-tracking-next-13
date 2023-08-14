"use client";

import { redirect } from "next/navigation";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("admin@sds.com");
  const [password, setPassword] = useState("admin");

  const [showAlert, setShowAlert] = useState(false);

  const login = async (e) => {
    const user_login = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const res = await user_login.json();
    console.log(res.message);

    if (res.message == "SUCCESS") {
      try{
      localStorage.setItem("userid", res.users[0].userid);
      localStorage.setItem("userDetails", JSON.stringify(res.users[0]));
    } catch (error) {}
      redirect("/dashboard");
    } else {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        redirect("/");
      }, 5000);
    }
    return res;
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action={login}>
          <div>
            <label
              for="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                value={email}
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  class="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autocomplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
            {showAlert && (
              <div
                className="mb-4 rounded-lg bg-red-500 px-6 py-5 text-base text-red-100"
                role="alert"
              >
                Invalid Email or Password !
                <button
                  className="bg-red-500 mr-auto"
                  onClick={() => setShowAlert(false)}
                >
                  x
                </button>
              </div>
            )}
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <a
            href="#"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            SignUp
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
