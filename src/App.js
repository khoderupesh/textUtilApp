// import './App.css';
// import About from './components/about';
import Alert from './components/alert';
import Navbar from './components/navbar';
import TextForms from './components/textforms';
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () =>  {
    if(mode === 'light') {
      setMode('dark');
      showAlert('Set to Dark Mode', 'success')
    } else {
      setMode('light');
      showAlert('Set to Light Mode', 'success')
    }
    setTimeout(() => {
      showAlert()
    }, 1500)
  }
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({message, type})
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container">
      <TextForms heading="Text Casing Converter App" />
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;
