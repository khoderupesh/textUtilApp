// import './App.css';
import About from './components/about';
import Navbar from './components/navbar';
import TextForms from './components/textforms';

function App() {
  return (
    <>
    <Navbar title="TextUtils"  />
    <div className="container">
      <TextForms heading="Text Casing Converter App"/>
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;
