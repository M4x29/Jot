import React, { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

function NotesForm() {
  const [notes, setNotes] = useState([]);
  const [state, setState] = useState({
    title: "",
    note: "",
    id: uuidv4(),
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newNote = { ...state, id: uuidv4() };
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    window.localStorage.setItem("notes", JSON.stringify(updatedNotes));

    setState({
      title: "",
      note: "",
    });
  };
  useEffect(() => {
    const storedNotes = JSON.parse(window.localStorage.getItem("notes"));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  const handleDelete = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    window.localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  return (
    <>
      {" "}
      <main className="w-screen h-full flex justify-center ">
        <div className="w-1/4 h-fit m-0 flex flex-col ">
          <div className="h-3"></div>

          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            className="bg-2 rounded-md outline shadow-white p-4 border-slate-100"
          >
            <h1
              className={
                "text-4xl text-slate-50 w-full flex justify-center items-center mb-3 border-black outline-none"
              }
            >
              New note
            </h1>
            <form className="flex flex-col" onSubmit={handleSubmit}>
              {" "}
              <input
                className="w-full pl-4 h-12 text-whtie text-2xl placeholder:text-white p-1 outline-none  placeholder:text-xl rounded-3xl flex justify-center items-center bg-transparent border border-white"
                type="text"
                placeholder=" Write title here ..."
                name="title"
                onChange={handleChange}
                value={state.title}
              />
              <div className="h-3"></div>
              <textarea
                className="text-white placeholder:text-white rounded-sm p-3 outline-none bg-transparent border border-white resize-none"
                name="note"
                id=""
                cols="30"
                rows="8"
                placeholder="Start writing .."
                onChange={handleChange}
                onSubmit={handleSubmit}
                value={state.note}
              ></textarea>
              <div className="h-3"></div>
              <button
                className="bg-secondary h-16 rounded-lg text-black bg-3 "
                type="submit"
              >
                Save note
              </button>
            </form>
          </motion.div>
        </div>
      </main>
      <div className=" w-11/12   mt-8 mb-5 flex ">
        <div className="text-white  w-full h-full flex flex-row flex-wrap gap-5 p-6 ">
          {notes.length > 0 ? (
            notes.map((note, i) => {
              return (
                <div key={i}>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                  >
                    <div
                      className="bg-notes text-xl text-black w-96 h-[400px] overflow-y-auto flex flex-col p-4  "
                      key={i}
                    >
                      <div className="w-full flex justify-end">
                        <button
                          className="p-1 hover:text-[#FF404E]"
                          onClick={() => {
                            handleDelete(note.id);
                          }}
                        >
                          <AiFillDelete />
                          {/*Dette er sånn man bruker react icons plugin btw*/}
                        </button>
                      </div>
                      <h3 className="font-bold ml-3 text-3xl mb-9">
                        {note.title}
                      </h3>
                      <p className="ml-3">{note.note}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })
          ) : (
            <div>
              <div className=" bg-blue-600 w-11/12 h-[2px] mt-8"></div>
              <p className="w-screen mt-6">No notes available</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default NotesForm;
