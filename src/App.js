import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import NoteState from "./context/NoteState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import TheAlertCompnent from "./components/Alert";
import Register from "./components/Register";

function App() {
  return (
    <>
    <NoteState>
      <Router>
        <Header title={" NoteZilla"}/>
        <TheAlertCompnent/>
        <Routes>
          <Route path="" element={<Home/>} to="https://notezilla.onrender.com/" />
          <Route path="about" element={<About />} to="https://notezilla.onrender.com/about" />
          <Route path="login" element={<Login/>} to="https://notezilla.onrender.com/login" />
          <Route path="register" element={<Register/>} to="https://notezilla.onrender.com/register" />
        </Routes>
        <Footer/>
      </Router>
    </NoteState>
    </>
  );
}

export default App;
