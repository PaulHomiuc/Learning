import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Footer from  './components/footer';
import Navbar from './components/navbar/navbar';
import Table from './components/Table/Table';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar id='nvg'/>
      <div className='content'>

    <Table/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
