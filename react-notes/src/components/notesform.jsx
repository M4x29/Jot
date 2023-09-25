import React from "react"; // importerer React modul som man bør gjøre i alle komponenter fordi det er visse funksjonaliteter som er avhengig av denne modulen
import { useState } from "react"; // importerer useState hook som lar oss bruke state i funksjonelle komponenter
import { AiFillDelete } from "react-icons/ai";

function NotesForm() {
  const [notes, setNotes] = useState([]);
  const [state, setState] = useState({
    title: "",
    note: "",
    id: Math.random() * 10,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value }); //... er en spread operator btw. Denne handleChange funksjonen henter inn en event som skjedde i DOM med event.target. .target henter inn det som skjedde på nettsiden basically. Og .name henter inn hvor det skjedde. Så vi har en attribute i html-en som er name="title" så den henter inn at noe skjedde i input taggen som hører til name="title".
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNotes([...notes, state]);
    setState({
      title: "",
      note: "",
    });
  };
  const handleDelete = (id) => {
    const deletedNote = notes.filter((note) => note.id !== id); //tar inn note id og fjerner id-en som er lik den som er valgt. Så blir setNotes oppdatert med den nye arrayen uten den slettede noten.
    setNotes(deletedNote);
  };

  return (
    <>
      <div className="w-1/4 h-fit  m-0 flex flex-col">
        <h1
          className={
            "text-4xl text-text w-full flex justify-center items-center  border-black"
          }
        >
          New note
        </h1>
        <div className="h-3"></div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            className="w-full h-16 text-text text-2xl placeholder:text-text placeholder:text-xl rounded-sm flex justify-center items-center"
            type="text"
            placeholder=" Write title here ..."
            name="title"
            onChange={handleChange}
            value={state.title}
            required
          />
          <div className="h-3"></div>
          <textarea
            className="text-black placeholder:text-text placeholder:place-content-center rounded-sm"
            name="note"
            id=""
            cols="30"
            rows="8"
            placeholder="Start writing .."
            onChange={handleChange}
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
      </div>
      <div className=" w-11/12  border-t-2 border-blue-600  mt-5 mb-5 flex ">
        <div className="text-white  w-full h-full flex flex-row flex-wrap gap-5 p-6 ">
          {notes.length > 0 ? (
            notes.map((note, i) => {
              return (
                <>
                  <div
                    className="bg-white text-xl text-black w-96 h-[300px] overflow-y-scroll flex flex-col p-4  "
                    key={i}
                  >
                    <div className="w-full flex justify-end">
                      <button
                        className="p-1 hover:text-[#FF404E]"
                        onClick={() => handleDelete(note.id)}
                      >
                        <AiFillDelete />
                      </button>
                    </div>
                    <h3 className="font-bold ml-3 text-3xl mb-9">
                      {note.title}
                    </h3>
                    <p className="ml-3">{note.note}</p>
                  </div>
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
