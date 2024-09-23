
import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState('light');

const toggleMode = () => {
  if(mode == 'light'){
    setMode('dark');
    document.body.style.backgroundColor = 'grey';
  }
  else{
    setMode('light'); 
    document.body.style.backgroundColor = 'white';
  }
}
  return (
<>
  <Navbar title= "TextManipulator" about="About" mode={mode} toggleMode={toggleMode}/>
  <div className="container my-3">
    <TextForm heading = "Enter your text" mode={mode}/>
    {/* <About/> */}
  </div>
</>
  );
}

export default App;
