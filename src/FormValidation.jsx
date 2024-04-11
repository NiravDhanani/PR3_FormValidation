import React, { useState } from "react";

const FormValidation = () => {
    const [data,setData] = useState([
        {
          id : Math.floor(Math.random()*1000),
            name : "Nirav Dhanani",
            email : "n@gmail.com",
            salary : "80000"
        },
    ])
    // second state create problem in delete function =================
    const [record,setRecord] = useState([])

const NewRow = () => {
    const newRow = [...data,{
        id:Math.floor(Math.random()*1000),name : "",email : "",salary : ""
    }
   ]
    setData(newRow)
}


const inputHandler = (e,index) => {
  const newData = [...data];
  newData[index][e.target.name] = e.target.value;
  setData(newData)

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

const insertHandler = () =>{
  console.log(data);
  let r = data;
  setRecord(r);
  
}

// const DeleteEvent =(index)=>{
//   let olddata = [...record];
//   olddata.splice(index,1)
//   setRecord(olddata)
// }

const DeleteEvent =(id)=>{
  let olddata = [...record];
  let del = olddata.filter((val)=>{
    return val.id != id
  })
  setRecord(del)
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
                    {/* <th>No</th> */}
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Salary</th>
                    <button onClick={()=>NewRow()} className="btn btn-success">ADD Row</button>
                </thead>
                <tbody >
                        {data.map((item,i)=>{
                          return  <tr key={item.id}>
                                 <input type="hidden" value={item.id}/>
                                <td> <input type="text" value={item.name} name="name" onChange={(e)=>inputHandler(e,i)} placeholder="Enter Full Name"  /></td>
                                <td> <input type="text" value={item.email} name="email" onChange={(e)=>inputHandler(e,i)} placeholder="Enter Full Name"  /></td>
                                <td> <input type="text" value={item.salary} name="salary" onChange={(e)=>inputHandler(e,i)} placeholder="Enter Full Name"  /></td>
                                <td> <button type="button" onClick={(e)=>RemoveBtnHandler(i)} className="btn btn-danger"> Delete </button> </td>
                            </tr>
                        })}
                </tbody>
            </table>
            <div className="d-flex justify-content-center">
              <button type="button" className="btn btn-primary" onClick={(e)=>insertHandler(e)} >Insert</button>
            </div>

            <div className="mt-5">
              <table className="table" border={1} cellPadding={10} >
              <thead>
                    <th>No</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Salary</th>
                    <th>Action</th>
                </thead>
                <tbody>
                {record.map((val,i)=>{
                  return (
                    <tr key={val.id}>
                      <td> {i} </td>
                      <td> {val.name} </td>
                      <td> {val.email} </td>
                      <td> {val.salary} </td>
                      <td> 
                        <button className="btn btn-danger" onClick={(e)=>DeleteEvent(val.id)} >Delete</button>
                         </td>
                    </tr>
                  )
                })}
                </tbody>
              </table>
            </div>
        </div>
      </div>
    
    </>
  );
};

export default FormValidation;

