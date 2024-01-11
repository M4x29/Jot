import React, { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";
import { auth } from "@/firebase";
import { FcGoogle } from "react-icons/fc";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login({ setloginButtonClicked }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const provider = new GoogleAuthProvider();
  const inputStyles =
    "outline-none text-white text-lg rounded-lg bg-transparent border border-white h-11 w-full pl-5 placeholder-white focus:border-green-400";

  const googleSignIn = () => {
    signInWithPopup(auth, provider);
  };

  // function loginUser(e) {
  //   e.preventDefault();
  //   try {
  //     console.log("logged in");
  //   } catch (error) {
  //     console.log("there was a error");
  //   }
  // }
  // try {
  // } catch (error) {}

  const auth = getAuth();
  function onSubmit(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    console.log("user registered");
  }
  // signInWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //   });

  return (
    <div className=" w-screen h-screen flex flex-col justify-center items-center ">
      <div className="flex flex-col bg-transparent rounded-md w-full h-screen justify-center items-center ">
        {/* <div className="flex ">
          <Link
            href={"/"}
            className="hover:text-green-300 w-fit text-white h-fit flex justify-start p-5 gap-3 text-sm items-center hover:border-s-2 border-green-400"
          >
            <span>be anonymous</span>
            <GiHood className=" cursor-pointer w-8 h-8" />
          </Link>
        </div> */}

        <form
          className="flex flex-col w-full h-full gap-3 items-center "
          onSubmit={onSubmit}
        >
          <div className="h-12"></div>

          <section className="flex flex-col justify-center h-3/5 w-1/3 gap-5  items-center ">
            {" "}
            <h1 className="justify-center text-6xl bold text-white">Login</h1>
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
              Login
            </button>
            <button
              onClick={() => googleSignIn()}
              className="animation-parent w-fit text-xl self-start text-white flex flex-row gap-2 items-center hover:text-green-400  hover:text-2xl hover:duration-300 "
              type="button"
            >
              or sign in with{" "}
              <FcGoogle
                alt="google image"
                className="w-8 h-8 animation-child "
              />
            </button>
            <span className="h-2"></span>
            <div className="w-full flex justify-start">
              {" "}
              <Link
                href={"/login_register/register/"}
                className="text-white text-xl h-12"
              >
                Dont have an account?{" "}
                <span className="hover:text-green-400  text-white text-xl hover:text-2xl hover:duration-300 ">
                  Sign up
                </span>
              </Link>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
}
