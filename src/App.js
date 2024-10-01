
import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert"

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState('#0000cc');
  const [activeButton, setactiveButton] = useState(null);


  const showAlert = (message, type) => {
      setAlert(
        {
          msg: message,
          type: type
        }
      )

      setTimeout(() => {
        setAlert(null);
      }, 2000);
  }

  const handleColor = (colorValue, buttonId) => {
    setColor(colorValue);
    setactiveButton(buttonId);
  }

const toggleMode = () => {
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = color;
    showAlert("Dark mode has been enabled", "success");
  }
  else{
    setMode('light'); 
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success");
  }
}
  return (
<>
  <Navbar title= "TextManipulator" about="About" 
  mode={mode} 
  toggleMode={toggleMode} 
  handleColor={handleColor}
  activeButton={activeButton}
  />
  <Alert alert = {alert}/>
  <div className="container my-3">
    <TextForm showAlert = {showAlert} heading = "Enter your text" mode={mode}/>
    {/* <About/> */}
  </div>
</>
  );
}

export default App;
