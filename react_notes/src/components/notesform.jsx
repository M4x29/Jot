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
        <div className="w-1/4 h-fit  m-0 flex flex-col">
          <div className="h-3"></div>

          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            className="bg-[#262230] rounded-md p-4 border-slate-100"
          >
            <h1
              className={
                "text-4xl text-slate-50 w-full flex justify-center items-center mb-3 border-black"
              }
            >
              New note
            </h1>
            <form className="flex flex-col" onSubmit={handleSubmit}>
              {" "}
              <input
                className="w-full h-16 text-text text-2xl placeholder:text-text p-1  placeholder:text-xl rounded-sm flex justify-center items-center"
                type="text"
                placeholder=" Write title here ..."
                name="title"
                onChange={handleChange}
                value={state.title}
                required
              />
              <div className="h-3"></div>
              <textarea
                className="text-black placeholder:text-text rounded-sm p-3"
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
                className="bg-secondary h-16 rounded-sm text-text"
                type="submit"
              >
                Save note
              </button>
            </form>
          </motion.div>
        </div>
      </main>
      <div className=" w-11/12  border-t-2 border-blue-600  mt-8 mb-5 flex ">
        <div className="text-white  w-full h-full flex flex-row flex-wrap gap-5 p-6 ">
          {notes.length > 0 ? (
            notes.map((note, i) => {
              return (
                <>
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
                </>
              );
            })
          ) : (
            <p>No notes available</p>
          )}
        </div>
      </div>
    </>
  );
}

export default NotesForm;
