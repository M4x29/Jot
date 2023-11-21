// fix for about component
// ikke ha en nav component, skriv rett inn i index.js. Da kan about komponenten blir conditional rendered i index og da dukke opp utenfor navbaren.
import { useState } from "react";
import { About } from "@/components/about/about";
import App from "@/pages/index";
import NotesForm from "@/components/notesform";
import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import { handleBackdropClick } from "@/pages/index";

export default function Nav({}) {
  const [aboutClicked, setaboutClicked] = useState(false);

  const handleBackdropClick = () => {
    setaboutClicked(false);
  };
  return (
    <nav className=" z-10 flex flex-row w-screen gap-10 h-16 justify-center items-center text-white">
      <Link href={"/"}>
        <IoMdHome className="w-6 h-6" />
      </Link>
      <button
        className="hover:text-green-400"
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
      <div className="flex flex-col">
        <Link href={"/login_register/login"} className="hover:text-green-400">
          {" "}
          log in, or create account
        </Link>
      </div>
    </nav>
  );
}
