import "./App.css";
import Button from "@mui/material/Button";
import RatingDemo from "./RatingDemo";
import Form from "./Form";
import NavBar from "./NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Form />
      <RatingDemo />
      {/* <Button variant="text">Contained</Button>
      <Button variant="outlined">Contained</Button>
      <Button
        color="success"
        variant="contained"
        onClick={() => alert("Hello")}
      >
        Contained
      </Button>
      <Button
        color="warning"
        variant="contained"
        onClick={() => alert("Good Bye")}
      >
        Contained
      </Button> */}
    </div>
  );
}

export default App;
