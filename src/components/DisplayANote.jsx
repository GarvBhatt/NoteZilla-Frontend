import {useContext} from "react";
import Modal from "./Modal";
import {Card,Button} from "react-bootstrap";
import NoteContext from "../context/NoteContext";
import {buttonStyle,divButtonStyle,descriptionStyle,cardStyle,titleStyle,priorityStyle,ExpectedDateOfCompletion} from './NoteStyle';

const DisplayANote = ({ stickyNote }) => {

  const { deleteNote } = useContext(NoteContext);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleDelete = ()=>{
    deleteNote(stickyNote._id,stickyNote.user);
  }

  const getPriorityColor = () => {
    if (stickyNote.priorityLevel === "Low")
    {
      return "green";
    }
    else if (stickyNote.priorityLevel === "Medium")
    {
      return "#b0a000";
    }
    else if (stickyNote.priorityLevel === "High")
    {
      return "red";
    }

    return "black";
  };

  return (
    <Card className="m-3 shadow rounded" style={cardStyle}>
      <Card.Body style={{ position: "relative", zIndex: 2 }}>

        <div style={titleStyle}>
          {stickyNote.title}
        </div>

        <div className="border-top my-1"></div>

        <div style={descriptionStyle}>
          {stickyNote.description}
        </div>

        <div style={priorityStyle}>
          Priority Level :{" "}
          <span style={{ color: getPriorityColor(), paddingLeft:"3px"}}>
            {stickyNote.priorityLevel}
          </span>
        </div>

        <div style={ExpectedDateOfCompletion}>
          Expected Date of Completion: {formatDate(stickyNote.expectedDate)}
        </div>

      </Card.Body>

      <div style={divButtonStyle}>
        <Modal stickyNote={stickyNote}/>
        <Button style={buttonStyle} variant="danger" onClick={handleDelete}>   
          Delete Note
        </Button>
      </div>

    </Card>
  );
};

export default DisplayANote;