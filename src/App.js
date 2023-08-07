import { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import Alert from './Component/Alert';

function App() {
  const [mode, setMode] = useState('light');
  // const [alert, setAlert] = useState(null);
  const [alert,setAlert] = useState(null);
   
  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  }
  
  const toggleMode = () => {
    if(mode === 'dark'){
   setMode('light');
   document.body.style.backgroundColor = 'white'
   showAlert("Dark mode has been enabled!", "success")
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = 'gray'
      showAlert("Light mode has been enabled!","success")
    }
    
  }


  return (
   <> 
   <Navbar title="My-App" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
        <div className="container my-3">
          
         <TextForm showAlert={showAlert} heading="Enter the Text " mode={mode}/>
        
        </div>
  
  
   </>
  );
}

export default App;
