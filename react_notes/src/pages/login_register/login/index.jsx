import React, { useEffect } from "react";
import App from "@/pages/index";
import NotesForm from "@/components/notesform";
import { GiHood } from "react-icons/gi";
import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/nav/nav";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";
import { auth } from "@/firebase";
import { FcGoogle } from "react-icons/fc";

export default function Login({ setloginButtonClicked }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const provider = new GoogleAuthProvider();
  const inputStyles =
    "outline-none text-white rounded-lg bg-transparent border border-white h-8 w-56 pl-3";

  const googleSignIn = () => {
    signInWithPopup(auth, provider);
  };

  function loginUser() {
    try {
      console.log("logged in");
    } catch (error) {
      console.log("there was a error");
    }
  }
  try {
  } catch (error) {}

  return (
    <div className="items-center w-screen h-full flex flex-col  justify-center ">
      <div className="flex flex-col  bg-transparent rounded-md w-screen h-screen ">
        <Link
          href={"/"}
          className="hover:text-green-300 w-fit h-fit flex justify-start text-sm p-5 items-center hover:border-s-2 border-green-400"
        >
          {" "}
          be anonymous
        </Link>

        <GiHood className="hover:text-green w-8 h-8" />

        <form className="flex flex-col w-full h-full justify-start gap-3 items-center">
          <div className="h-12"></div>
          <section className="flex flex-col justify-start  w-fit gap-5">
            {" "}
            <h1 className="justify-center text-6xl bold text-white">Login</h1>
            <div className="h-2"></div>
            <input type="text" className={inputStyles} placeholder="Username" />
            <input
              type="text"
              className={
                inputStyles
              } /* backtick og dollar tegn er ikke nødvendig ha! */
              placeholder="password"
            />
            <button
              type="button"
              className="border border-white text-white"
              onClick={() => loginUser()}
            >
              Login
            </button>
            <button
              onClick={() => googleSignIn()}
              className="text-white flex flex-row gap-2 items-center"
              type="button"
            >
              <span>or sign in with </span>{" "}
              <FcGoogle alt="google image" className="w-8 h-8" />
            </button>
          </section>
        </form>

        <Link href={"/login_register/register/register"}>
          Dont have an account?{" "}
          <span className="hover:text-green-400">Sign up</span>
        </Link>
      </div>
    </div>
  );
}
