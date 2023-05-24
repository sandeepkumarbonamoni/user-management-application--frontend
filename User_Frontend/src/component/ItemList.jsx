import React from 'react'
import { Link } from "react-router-dom";

export default function ItemList() {
  return (
    <div>
        
    
        
        <h2 className="text-center">Crop List</h2>
        <div className = "row">
       <center> <Link className="btn btn-warning m-2" to="/adduser" style={{width:"20%"}}>ADD CROP DETAILS</Link></center>
        </div>
        <br></br>
        <div className = "row">
               <table className = "table table-striped table-bordered">

                   <thead style={{backgroundColor:'white'}}>
                       <tr>
                           <th> Crop Name</th>
                           <th> Quantity </th>
                           <th> Price(per 1 Quintal)</th>
                           <th> Actions</th>
                       </tr>
                   </thead>
                  
               </table>

        </div>

   </div>
  )
}
