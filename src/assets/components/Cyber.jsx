import React from 'react'
import "../../index.css"

function Cyber({data,setdata}) {
  const cyber=data.filter((ele)=>ele.name==='cybersecurity')
  console.log(cyber);
  return (
    <>
    <div className='cyber'>
  {
    cyber.map((e)=>{
      return   <div className="col">
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

export default Cyber