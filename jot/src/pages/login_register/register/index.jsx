import React, { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";

export default function Login() {
  const [show, setShow] = useState(false);
  const inputStyles =
    "outline-none text-white text-lg rounded-lg bg-transparent border border-white h-11 w-full pl-5 placeholder-white focus:border-green-400";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();

  function onSubmit(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up successfully
        const user = userCredential.user;
        // Handle success, redirect, etc.
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Handle error, show a message, etc.
      });
    console.log("user registered");
  }

  return (
    <div className=" w-screen h-screen flex flex-col justify-center items-center ">
      <div className="flex flex-col bg-transparent rounded-md w-full h-screen justify-center items-center ">
        <form
          className="flex flex-col w-full h-full gap-3 items-center "
          onSubmit={onSubmit}
        >
          <div className="h-12"></div>

          <section className="flex flex-col justify-center h-3/5 w-2/3 md:w-1/3 md_ gap-6  items-center ">
            {" "}
            <h1 className="justify-center text-3xl md:text-6xl lg:text-6xl bold text-white w-full">
              Create Account
            </h1>
            <div className="h-2"></div>
            <input
              type="text"
              className={inputStyles}
              placeholder="e-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex w-full  items-center">
              {" "}
              <input
                type={show ? "text" : "password"}
                className={`${inputStyles} text-2xl placeholder:text-lg`}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />{" "}
              {show ? (
                <BiHide
                  className="text-white text-2xl -ml-8"
                  onClick={() => setShow(false)}
                />
              ) : (
                <BiShow
                  onClick={() => setShow(true)}
                  className="text-white text-2xl -ml-8"
                />
              )}
            </div>
            <button
              type="submit"
              className="border w-full border-white text-white text-xl h-12  rounded-lg hover:bg-green-400 hover:text-black hover:border-green-400 hover:duration-300 "
            >
              Sign up
            </button>
            <span className="h-2"></span>
            <div className="w-full flex justify-start">
              {" "}
              <Link
                href={"/login_register/login"}
                className="text-white text-xl "
              >
                Have an account?{" "}
                <span className="hover:text-green-400  text-white text-xl hover:text-2xl hover:duration-300 ">
                  Log in
                </span>
              </Link>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
}
