import React from "react"
import data from '../../Data/data.json'
import './Table.css'
function Table () {
return(
    <div  className="unic">
    <table>
<thead>
<th>Prenume</th>
<th>Nume</th>
<th>Varsta</th>
<th>Universitate</th>
<th>Oras</th>
<th>Media Notelor</th>
</thead>
<tbody>
{data.map((row,index) => (

<tr key={index}>
<td>{row.first_name}</td>
<td>{row.last_name}</td>
<td>{row.age}</td>
<td>{row.university}</td>
<td>{row.city}</td>
<td>{row.grade}</td>

</tr>

))}


</tbody>

</table>
</div>
);
}
export default Table;