import React from 'react'
import { Link } from 'react-router-dom'
import Datascience from './Datascience'

function Topbar({data,setdata}) {
  
   return (
    <>
    <div className='topbar'>
    <ul className="nav justify-content-end ">
   <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="/Cyber">CyberSecurity</Link>
   </li>
   {/* <li className="nav-item">
    <Link className="nav-link" to="/Careerer">Careerer</Link>
   </li> */}
   <li className="nav-item">
    <Link className="nav-link" to="/Fullstack">FullstackDevelopment</Link>
   </li>
   <li className="nav-item">
    <Link className="nav-link active" to="/DataScience" tabindex="-1" aria-disabled="true">DataScience</Link>
  </li>
</ul>
</div>
</>
  )
}

export default Topbar