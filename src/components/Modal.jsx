import { useContext, useEffect, useState } from "react";
import NoteContext from "../context/NoteContext";
import { buttonStyle, formStyle } from "./NoteStyle";
import { Modal, Row, Form, Button, Col } from "react-bootstrap";

const TheModal = ({ stickyNote }) => {
  const [show, setShow] = useState(false);
  const [note, setnote] = useState({
    noteTitle: stickyNote.title,
    stickyNoteContent: stickyNote.description,
    expectedDate: new Date(stickyNote.expectedDate).toISOString().split('T')[0],
    priorityLevel: stickyNote.priorityLevel,
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const { updateNote } = useContext(NoteContext);

  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setIsFormValid(
      note.noteTitle && note.stickyNoteContent && note.expectedDate
    );
  }, [note]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = (e) => {
    e.preventDefault();
    updateNote(
      note.noteTitle,
      note.stickyNoteContent,
      note.expectedDate,
      note.priorityLevel,
      stickyNote._id,
    );
    handleClose();
  };

  return (
    <>
      <Button
        variant="primary"
        style={{ ...buttonStyle, marginRight: "8px", color: "floralwhite" }}
        onClick={handleShow}
      >
        Edit Note
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form style={formStyle} onSubmit={onSubmit}>
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
              style={{
                fontSize: "large",
                marginTop: "20px",
                padding: "10px 20px",
              }}
              variant="primary"
              type="submit"
              disabled={!isFormValid}
            >
              Update Note
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TheModal;