import DisplayANote from "./DisplayANote";
import { useContext, useEffect } from "react";
import NoteContext from "../context/NoteContext";
import { useNavigate } from "react-router-dom";
import { stickyNoteListStyle } from './NoteStyle'

const StickyNoteInfo = () => {
  const Navigate = useNavigate(); 

  const { notes, fetchAllNotes } = useContext(NoteContext);

  useEffect(() => {
    if(localStorage.getItem("jwtToken"))
    {
      fetchAllNotes();
    }
    else
    {
      Navigate("/login");
    }
    // eslint-disable-next-line
  }, [Navigate]);

  return (
    <div>
      <h2 className="text-center mb-4">StickyNotes Information</h2>
      <div style={stickyNoteListStyle}>
        {notes.length === 0 ? (
          <p style={{ fontSize: "20px", color: "#555" }}>
            Oops! No sticky notes to display at the moment.
          </p>
        ) : (
          notes.map((stickyNote, index) => (
            <DisplayANote key={index} stickyNote={stickyNote} />
          ))
        )}
      </div>
    </div>
  );
};

export default StickyNoteInfo;
