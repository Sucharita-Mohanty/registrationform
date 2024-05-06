import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Registrationform from "./component/Registrationform";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Registrationform />
    </>
  );
}

export default App;
