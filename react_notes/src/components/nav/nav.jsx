// fix for about component
// ikke ha en nav component, skriv rett inn i index.js. Da kan about komponenten blir conditional rendered i index og da dukke opp utenfor navbaren.
import { useState, useEffect } from "react";
import { About } from "@/components/about/about";
import App from "@/pages/index";
import NotesForm from "@/components/notesform";
import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import { handleBackdropClick } from "@/pages/index";
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function Nav() {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  const [aboutClicked, setaboutClicked] = useState(false);

  useEffect(() => {
    const fetchLoginData = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        console.log("user is logged in");
      } else {
        setIsLoggedIn(false);
        console.log("user is not logged in");
      }
    });

    return () => fetchLoginData(); // Cleanup on component unmount
  }, []);

  const handleBackdropClick = () => {
    setaboutClicked(false);
  };
  return (
    <nav className=" fixed top-0 z-10 flex flex-row w-screen px-10 gap-10 h-16 justify-center items-center text-white  border-white border-b">
      <Link href={"/"}>
        <IoMdHome className="w-9 h-9 hover:text-green-400 " />
      </Link>
      <div className="w-1/12"></div>
      <button
        className="hover:text-green-400 text-xl"
        onClick={() => setaboutClicked(true)}
      >
        About
      </button>
      {aboutClicked ? (
        <div
          className={`fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 ${
            aboutClicked ? "backdrop-blur-sm" : ""
          }`}
          onClick={handleBackdropClick}
        ></div>
      ) : null}
      {aboutClicked ? (
        <div className="w-screen h-screen flex justify-center items-centers  ">
          <About
            setaboutClicked={setaboutClicked}
            handleBackdropClick={handleBackdropClick}
          />
        </div>
      ) : null}
      <div className="spacer w-4/5"></div>
      <div className=" w-full flex justify-center sm:w-full sm:justify-end ">
        {IsLoggedIn ? (
          <>
            <div>logged in</div>
          </>
        ) : (
          <Link
            href={"/login_register/login"}
            className="hover:text-green-400 sm:text-xl"
          >
            {" "}
            log in, or create account
          </Link>
        )}
      </div>
    </nav>
  );
}
