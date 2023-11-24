import React, { useState } from "react";
import NotesForm from "@/components/notesform";
import { About } from "@/components/about/about";
import Link from "next/link";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";
import Image from "next/image";

import ReactLoading from "react-loading";

export default function App() {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [loaded, setLoaded] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLoggedIn(true);
      setUserName(user.displayName);
      setProfilePic(user.photoURL);
    } else {
      setIsLoggedIn(false);
    }
    setLoaded(true);
  });
  return (
    <>
      <div
        id="founder"
        className={"flex flex-col items-center w-screen  bg-1 text-white"}
      >
        {loaded ? (
          <>
            {IsLoggedIn ? (
              <>
                <div className=" bg-transparent">
                  <div className="text-white flex gap-5 items-center ">
                    <span>You are logged in, {userName} </span>
                    <Image src={profilePic} height={40} width={40} />{" "}
                  </div>
                </div>
              </>
            ) : (
              <>
                {" "}
                <NotesForm />
                <div className="h-full"></div>
              </>
            )}
          </>
        ) : (
          <>
            <div className="h-screen w-screen flex justify-center items-center overflow-y-hidden">
              <ReactLoading type="spinningBubbles" />
            </div>
          </>
        )}
      </div>
    </>
  );
}
