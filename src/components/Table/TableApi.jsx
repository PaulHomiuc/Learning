import React from "react"
import data from '../../Data/data.json'
import './Table.css'
import axios from 'axios';
import { useState,useEffect } from "react";
function TableApi () {
    
  const [data,setData]=useState('');


  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then(response =>{
      setData(response.data);
      console.log(data);
    }).catch(error => {console.log(error);
    });
  },[]);
return(
    <div  className="unic">
    {data ? (
    <table>
<thead>
    <tr>
<th>Username</th>
<th>email</th>

<th>Oras</th>

</tr>
</thead>
<tbody>
{data.map(item => (

<tr key={item.id}>
<td>{item.username}</td>
<td>{item.email}</td>
<td>{item.address.city}</td>

</tr>

))}


</tbody>

</table>
    ):(<p>Loading...</p>)
  
  }
</div>
);
}
export default TableApi;