import AddNote from "./AddNote";
import DisplayTheNotes from "./DisplayTheNotes";

const Home = ()=>{
    return (
        <div className="container mt-5">
            <AddNote/>
            <DisplayTheNotes/>
        </div>
    );
}

export default Home;