// fix for about component
// ikke ha en nav component, skriv rett inn i index.js. Da kan about komponenten blir conditional rendered i index og da dukke opp utenfor navbaren.
import {useState} from "react"
import {About} from "@/components/about/about"
import NotesForm from "@/components/notesform"


export default function Nav({setloginButtonClicked}){


  
    return(
<nav className="flex flex-row  w-full h-16 justify-center items-center bg-transparent/90">
          <button className="bg-red-400"
          onClick={()=> checkIfAboutClicked()}>About</button>
          { aboutClicked ? (<About setaboutClicked={setaboutClicked} /> ):(null)}
             
          <div className="spacer w-4/5"></div>
          <div className="flex flex-col">
            <div> not signed in?</div>
            <button
              onClick={() => setloginButtonClicked(true) }
              className="hover:text-green-400"
            >
              log in, or create account
            </button>
          </div>
        </nav>)
}

