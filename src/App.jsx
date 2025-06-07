import React from 'react';
import  {useState} from 'react';
import './App.css';
function App() {

    const [users ,setUssers] = useState([
        {id:1, name:"John", age:30, diachi: " Cam Pha - Quang Ninh"},
        {id:2, name:"Jane", age:25, diachi: " Ha Long - Quang Ninh"},
        {id:2, name:"Jane", age:25, diachi: " Ha Long - Quang Ninh"},
        {id:3, name:"Doe", age:22, diachi: "Vinh Bao - Hai Phong"},
        {id:4, name:"Smith", age:28, diachi: "Chi Linh - Hai Duong"},
        {id:4, name:"Smith", age:28 , diachi: "Chi Linh - Hai Duong"}
    ]);

   return (
     
    <>
       <h2> Danh sach nguoi dung </h2>
        <table>
            <thead>
               <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Dia Chi</th>
               </tr>
            </thead>
            <tbody> 
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.diachi}</td>
                        <td className="no-border">
                          <button className="action-btn add">Add</button>
                          <button className="action-btn edit">Edit</button>
                          <button className="action-btn delete">Delete</button>
                       </td>

                    </tr>
                ))}
            </tbody>
       </table>
    </>
   );
}

export default App;
