// import './App.css';
// import About from './components/about';
import Navbar from './components/navbar';
import TextForms from './components/textforms';
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark')
    } else {
      setMode('light');
    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <div className="container">
      <TextForms heading="Text Casing Converter App"/>
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;
