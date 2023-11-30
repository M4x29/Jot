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
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";

export default function Login({ setloginButtonClicked }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [show, setShow] = useState(false);
  const provider = new GoogleAuthProvider();
  const inputStyles =
    "outline-none text-white text-lg rounded-lg bg-transparent border border-white h-11 w-full pl-5 placeholder-white focus:border-green-400";

  const googleSignIn = () => {
    signInWithPopup(auth, provider);
  };

  function loginUser(e) {
    e.preventDefault();
    try {
      console.log("logged in");
    } catch (error) {
      console.log("there was a error");
    }
  }
  try {
  } catch (error) {}

  return (
    <div className="items-center w-screen h-screen flex flex-col justify-center ">
      <div className="flex flex-col bg-transparent rounded-md w-full h-full justify-center items-center ">
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
          onSubmit={(e) => loginUser(e)}
        >
          <div className="h-12"></div>

          <section className="flex flex-col justify-center h-3/5 w-1/3 gap-5  items-center ">
            {" "}
            <h1 className="justify-center text-6xl bold text-white">Login</h1>
            <div className="h-2"></div>
            <input type="text" className={inputStyles} placeholder="Username" />
            <div className="flex w-full  items-center">
              {" "}
              <input
                type={show ? "text" : "password"}
                className={`${inputStyles} text-2xl placeholder:text-lg`}
                placeholder="password"
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
              className="border w-full border-white text-white text-xl h-12  rounded-lg hover:bg-green-400 hover:text-black hover:border-green-400  "
            >
              Login
            </button>
            <button
              onClick={() => googleSignIn()}
              className="animation-parent w-fit text-xl self-start text-white flex flex-row gap-2 items-center hover:text-green-400  "
              type="button"
            >
              or sign in with{" "}
              <FcGoogle
                alt="google image"
                className="w-8 h-8 animation-child "
              />
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
