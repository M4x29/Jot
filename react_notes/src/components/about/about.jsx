import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export function About({ clicked, setaboutClicked }) {
  const [Display, setDisplay] = useState(true);

  return (
    <div className="absolute w-1/2 h-full top-2 flex flex-col  justify-center ">
      <div className="flex flex-col h-2/3 bg-slate-800 rounded-md ">
        <button
          onClick={() => setaboutClicked(false)}
          className="hover:text-green-300 w-fit h-fit flex justify-start text-xl p-5 items-center hover:border-s-2 border-green-400 "
        >
          <AiOutlineClose className="" />
        </button>

        <section className="flex flex-col justify-center text-md md:text-xl lg:text-xl  w-fit gap-5 p-8">
          {" "}
          {/* tror egt ikke section taggen er nødvendig, men nå er den her:)*/}
          <h1 className="justify-center text-3xl md:text-4xl lg:text-6xl bold w-full ">
            About us
          </h1>
          <p className="">
            This is a simple note taking app. By default, it stores your notes
            in localstorage.
          </p>
          <div className=""></div>
          <p>
            If you want to use synchronization across devices you have to create
            an account.{" "}
          </p>
          <div className="h-2"></div>
        </section>
      </div>
    </div>
  );
}

// import React, { useState, useEffect } from "react";

// export function About({ setaboutClicked }) {
//   const [Display, setDisplay] = useState(true);

//   useEffect(() => {
//     setaboutClicked(true);
//     setDisplay(true);
//     return () => {
//       setaboutClicked(false);
//     };
//   }, [setaboutClicked]);

//   return (
//     <div>
//       <p>Display State: {Display.toString()}</p>
//       <button onClick={() => setDisplay(false)}>Toggle Display</button>
//     </div>
//   );
// }
