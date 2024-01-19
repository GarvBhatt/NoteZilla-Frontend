import { useState,useContext, useEffect } from "react";
import NoteContext from "../context/NoteContext";
import { Row, Form, Button, Col } from "react-bootstrap";
import {formStyle1,formStyle2} from './NoteStyle'

const AddPet = () => {
  const [note, setnote] = useState({noteTitle:"",stickyNoteContent:"",expectedDate:"",priorityLevel:"Low"});
  const [isFormValid, setIsFormValid] = useState(false);
  const { addNote } = useContext(NoteContext);
  
  const onSubmit = (e) => {
    e.preventDefault();
    addNote(note.noteTitle,
      note.stickyNoteContent,
      note.expectedDate,
      note.priorityLevel);
  };

  const onChange = (e) => {
    setnote({...note,[e.target.name]:e.target.value});
  };
  
  useEffect(()=>{
    setIsFormValid(note.noteTitle && note.stickyNoteContent && note.expectedDate);
  },[note]);

  const Damian = (window.innerWidth < 768)?"unset":"35em";

  return (
    <div
      style={formStyle2.a}
    >
      <h2
        style={formStyle2.b}
      >
        Add Your Sticky Note!
      </h2>
      <Form style={{...formStyle1,width:Damian}} onSubmit={onSubmit}>
        <Form.Group controlId="formNoteTitle" className="mb-3">
          <Form.Label>Note Title</Form.Label>
          <Form.Control
            type="text"
            value={note.noteTitle}
            name="noteTitle"
            onChange={onChange}
            placeholder="Enter Note Title"
          />
        </Form.Group>
        <Form.Group controlId="formStickyNoteContent" className="mb-3">
          <Form.Label>Sticky Note Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={note.stickyNoteContent}
            name="stickyNoteContent"
            onChange={onChange}
            placeholder="Enter Sticky Note Content"
          />
        </Form.Group>
        <Row>
          <Col>
            <Form.Group controlId="formExpectedDate">
              <Form.Label>Expected Completion Date</Form.Label>
              <Form.Control
                type="date"
                value={note.expectedDate}
                name="expectedDate"
                onChange={onChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formPriorityLevel">
              <Form.Label>Priority Level</Form.Label>
              <Form.Control
                as="select"
                value={note.priorityLevel}
                name="priorityLevel"
                onChange={onChange}
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Button
          style={{ fontSize: "large", marginTop: "20px", padding: "10px 20px" }}
          variant="primary"
          type="submit"
          disabled={!isFormValid}
        >
          Add Sticky Note
        </Button>
      </Form>
    </div>
  );
};

export default AddPet;