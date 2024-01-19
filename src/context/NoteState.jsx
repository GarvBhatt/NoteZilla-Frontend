import {useState, useEffect} from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const server = process.env.REACT_APP_SERVER;

  const onClickRegister = async (fname,lname,email,password,confirmPassword)=>
  {
      const response = await fetch(`${server}api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({fname,lname,email,password,confirmPassword})
      });
      
      const data = await response.json();
      if (!response.ok) {
        if(Array.isArray(data.error))
        {
          setTheAlert({theAlert:data.error[0].msg,theVariant:"danger"});
        }
        else
        {
          setTheAlert({theAlert:data.error,theVariant:"danger"});
        }
        return false;
      }
      await localStorage.setItem("jwtToken",data.jwtToken);
      setTheAlert({theAlert:"User Successfully Registered",theVariant:"success"});
      return true;
  }
  
  const onClickLogin = async (email,password)=>
  {
      const response = await fetch(`${server}api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email,password})
      });
      
      console.log("Response Status:", response.status);
      const data = await response.json();
      console.log("Server Response:", data);

      if (!response.ok) {
        if(Array.isArray(data.error))
        {
          setTheAlert({theAlert:data.error[0].msg,theVariant:"danger"});
        }
        else
        {
          setTheAlert({theAlert:data.error,theVariant:"danger"});
        }
        return false;
      }
      try {
        await localStorage.setItem("jwtToken", data.jwtToken);
      } catch (error) {
        console.error("Error storing jwtToken in localStorage:", error);
      }      setTheAlert({theAlert:"User is Successfully Logged in",theVariant:"success"});
      return true;
  }
  
  const updateNote = async (noteTitle,stickyNoteContent,expectedDate,priorityLevel,_id) => {
    try {
      const response = await fetch(`${server}api/notes/updateNote/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem("jwtToken")
        },
        body:JSON.stringify({
          "title": noteTitle,
          "description": stickyNoteContent,
          "priorityLevel": priorityLevel,
          "expectedDate": expectedDate
        })
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error((data && data.error)?data.error:"Failed to delete note");
      }

      notes.map((e)=>{
        if(e._id===data.note._id)
        {
          e.title = data.note.title;
          e.description = data.note.description;
          e.priorityLevel = data.note.priorityLevel;
          e.expectedDate = data.note.expectedDate;
        }
        return e;
      });
      setTheAlert({theAlert:"Note Updated Successfully",theVariant:"success"});
    } catch (error) {
      setTheAlert({theAlert:error,theVariant:"danger"});
      console.error("Error deleting data:", error);
    }
  };

  const deleteNote = async (_id) => {
    try {
      const response = await fetch(`${server}api/notes/deleteNote/${_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem("jwtToken")
        }
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error((data && data.error)?data.error:"Failed to delete note");
      }

      setNotes(notes.filter((e)=>{
        if(e._id!==_id)
        {
          return true;
        }
        return false;
      }));

      setTheAlert({theAlert:"Note Deleted Successfully",theVariant:"success"});
    } catch (error) {
      setTheAlert({theAlert:error,theVariant:"danger"});
      console.error("Error deleting data:", error);
    }
  };
  
  const fetchAllNotes = async () => {
    try {
      const response = await fetch(`${server}api/notes/fetchAllNotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem("jwtToken")
        }
      });
      
      const data = await response.json();

      if (!response.ok) {
        throw new Error((data && data.error)?data.error:"Failed to fetch data");
      }
      
      setNotes(data);
    } catch (error) {
      setTheAlert({theAlert:error,theVariant:"danger"});
      console.error("Error fetching data:", error);
    }
  };

  const addNote = async (noteTitle,stickyNoteContent,expectedDate,priorityLevel) => {
    try {
      const response = await fetch(`${server}api/notes/addNote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem("jwtToken")
        },
        body: JSON.stringify({
          "title": noteTitle,
          "description": stickyNoteContent,
          "priorityLevel": priorityLevel,
          "expectedDate": expectedDate
        })
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error((data && data.error)?data.error:"Failed to add note");
      }
      setNotes((prev)=>[...prev,data.note]);
      setTheAlert({theAlert:"Note Added Successfully",theVariant:"success"});
    } catch (error) {
      setTheAlert({theAlert:error,theVariant:"danger"});
      console.error("Error adding note:", error);
    }
  };
  
  const [TheAlert, setTheAlert] = useState({theAlert:"",theVariant:"success"});
  const [notes, setNotes] = useState([]);
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTheAlert({ theAlert: "" });
    }, 2000);
    
    return () => clearTimeout(timeoutId);
  }, [TheAlert.theAlert]);

  return (
    <NoteContext.Provider value={{ notes, fetchAllNotes, addNote, deleteNote, updateNote, onClickLogin, onClickRegister, TheAlert, setTheAlert}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;