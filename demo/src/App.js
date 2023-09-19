//import logo from './logo.svg';
import "./App.css"
import Todos from "./Todos"

// import Greeting from "./Components/Greeting"
// import Button from "react-bootstrap/Product"
function App() {
  //  const name1="John";
  //  const marks=50;
  const isLoggedIn = true

  return (
    <div className="App">
      {/* <Greeting isLoggedIn="false"></Greeting> */}
      <Todos></Todos>
    </div>
  )
}

export default App
//double > object
// single-> function, va
