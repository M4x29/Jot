import React, { useEffect } from "react";
import App from "@/pages/index";
import NotesForm from "@/components/notesform";
import { GiHood } from "react-icons/gi";
import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/nav/nav";
import { useForm } from "react-hook-form";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../../firebase";

export default function Login({ setloginButtonClicked }) {
  const provider = new GoogleAuthProvider();
  const inputStyles =
    "outline-none text-black rounded-lg bg-transparent border border-black h-8 w-56 pl-3";

  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const user = result.user;
      getAdditionalUserInfo(result);
    })
    .catch((error) => {
      console.log("there was an error signing you in with google");
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

  function loginUser() {
    try {
      console.log("logged in");
    } catch (error) {
      console.log("there was a error");
    }
  }

  return (
    <div className="items-center w-screen h-full flex flex-col  justify-center ">
      <div className="flex flex-col  bg-slate-800 rounded-md w-screen h-screen ">
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
            {/* tror egt ikke section taggen er nødvendig, men nå er den her */}
            <h1 className="justify-center text-6xl bold ">Login</h1>
            <div className="h-2"></div>
            <input type="text" className={inputStyles} placeholder="Username" />
            <input
              type="text"
              className={
                inputStyles
              } /* backtick og dollar tegn er ikke nødvendig ha! */
              placeholder="password"
            />
            <button onClick={loginUser()}>Login</button>
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
