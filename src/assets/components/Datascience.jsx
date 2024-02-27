import React from 'react'
import "../../index.css"
import Card from 'react-bootstrap/Card';


function Datascience({data,setdata}) {
  // console.log(data,setdata);
  const datascience=data.filter((ele)=>ele.name==='datascience')
  console.log(datascience);
  return (
    <>
    <div className='cyber'>
    {
      datascience.map((e)=>{
        return  <div className="col">
               <div className="card">
          <img src={e.img} className="card-img-top" alt="FullStack" height="400px" width="5px"/>
          <div className="card-body">
            <h5 className="card-title">{e.name}</h5>
            <p className="card-text"> {e.description}</p>
          </div>
        </div>
        </div>
      })
    }
    </div>
   
    </>
  )
}

export default Datascience