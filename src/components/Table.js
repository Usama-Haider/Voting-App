import React from "react";
import './Table.css';


// dynamic data
import {users} from './textData';




function Table() {

    return (
        
    <div className="container">
            <h1>This is our dynamic data table</h1>
            <table border={5}>

                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Institute</th>
                    </tr>
                </thead>

                <tbody>

                    {users.map((users, index) => (
                        <tr type = {index}>
                            <td>{index + 1}</td>
                            <td>{users.name}</td>
                            <td>{users.age}</td>
                            <td>{users.email}</td>
                            <td>{users.institute}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
        );
}



// make this component available in whole app
export default Table;