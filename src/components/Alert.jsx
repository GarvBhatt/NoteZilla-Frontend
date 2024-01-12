import Alert from "react-bootstrap/Alert";
import { useContext } from "react";
import NoteContext from "../context/NoteContext";

const TheAlertCompnent = ()=> {
  const { TheAlert } = useContext(NoteContext);

  return (
    <div style={{ height: "50px",position: "fixed",bottom: 0,width: "100%",zIndex: 1000}}>
        {(TheAlert.theAlert)?<Alert style={{fontSize:"18px", display:"flex", justifyContent: "space-around"}} variant={TheAlert.theVariant}><strong>{TheAlert.theAlert}</strong></Alert>:""}
    </div>
  );
}

export default TheAlertCompnent;