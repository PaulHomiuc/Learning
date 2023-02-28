import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Footer from  './components/footer';
import Navbar from './components/navbar/navbar';
import Table from './components/Table/Table';
import axios from 'axios';
import TableApi from './components/Table/TableApi';



function App() {
  

  const [data,setData]=useState('');
  const [loading,setLoading] = useState(true);


  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then(response =>{
      setData(response.data);
      setLoading(false);
      console.log(data);
    }).catch(error => {console.log(error);
    });
  },[]);



  return (
    <div className="App">
      <Navbar id='nvg'/>
      <div className='content'>
    <h3>Table form Json</h3>
    <Table/>
    <h3>Table from API</h3>
   <TableApi/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
