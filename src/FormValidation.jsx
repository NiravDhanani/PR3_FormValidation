import React, { useState } from "react";

const FormValidation = () => {
    const [data,setData] = useState([
        {
            name : "Nirav Dhanani",
            email : "n@gmail.com",
            salary : "80000"
        },
    ])
    // second state create problem in delete function =================
    // const [newData,setNewData] = useState([{
    //     name : "",email : "",salary : ""
    // }])

const NewRow = () => {
    const newRow = [...data,{
        name : "",email : "",salary : ""
    }
   ]
    setData(newRow)
}


const inputHandler = (e,i) => {
  // const newData = e.target.value;
  // setData(newData)
   console.log(e.target.value);
  };
 
const RemoveBtnHandler = (index) =>{
    if(data.length == 1){
        return false;
    }
    let remainData = [...data];
    remainData.splice(index,1);
    setData(remainData)
}

  return (
    <>
     <div className="row ">
        <h1 className="d-flex justify-content-center m-2">
          React - Add & Delete Rows Dynamically
        </h1>
      </div>
      <div className="row">
        <div className="container">
            <table className="table"> 
                <thead>
                    <th>No</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Salary</th>
                    <button onClick={()=>NewRow()} className="btn btn-success">ADD Row</button>
                </thead>
                <tbody >
                        {data.map((item,i)=>{
                          return  <tr key={i}>
                                <td> <input type="text" value={i}/></td>
                                <td> <input type="text" value={item.name} onChange={(e)=>inputHandler(e)} placeholder="Enter Full Name"  /></td>
                                <td> <input type="text" value={item.email} onChange={(e)=>inputHandler(e)} placeholder="Enter Full Name"  /></td>
                                <td> <input type="text" value={item.salary} onChange={(e)=>inputHandler(e)} placeholder="Enter Full Name"  /></td>
                                <td> <button onClick={(e)=>RemoveBtnHandler(i)} className="btn btn-danger"> Delete </button> </td>
                            </tr>
                        })}
                </tbody>
            </table>
        </div>
      </div>
    
    </>
  );
};

export default FormValidation;

