function NotesForm() {
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
        <form className="flex flex-col">
          <input
            className="w-full h-12 text-text text-2xl placeholder:text-text placeholder:text-xl rounded-sm flex justify-center items-center"
            type="text"
            placeholder=" Write title here ..."
            name="title"
          />
          <div className="h-3"></div>
          <textarea
            className="text-black placeholder:text-text placeholder:place-content-center rounded-sm"
            name="note"
            id=""
            cols="30"
            rows="5"
            placeholder="Start writing .."
          ></textarea>
          <div className="h-3"></div>
          <button
            className="bg-secondary h-16 rounded-sm text-text"
            type="submit"
          >
            Save note
          </button>
          <div></div>
        </form>
      </div>
    </>
  );
}

export default NotesForm;
