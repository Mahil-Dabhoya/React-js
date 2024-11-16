import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (

    <div>
  <nav className="navbar navbar-expand-lg navbar-light" style={{border:"2px solid #777644", borderSpacing:"10px"}}>
  <div className="container">
  <h2 className="navbar-brand" href="#" style={{textAlign:"start" ,fontSize:"25px",color:"#333003" , fontWeight:"600" , padding:'20px 40px', borderRadius:"10px 20px 10px 20px", boxShadow:"4px 4px 1px #345643" , marginTop:"10px"}}>React Data-Table</h2>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/' className="nav-link active" aria-current="page" style={{textAlign:"start" ,fontSize:"23px",color:"#333003", fontWeight:"600" , padding:'20px 40px', borderRadius:"10px 20px 10px 20px", boxShadow:"4px 4px 1px #345643" , marginTop:"10px"}} >Add</Link>
        </li>
        <li className="nav-item">
          <Link to='/view' className="nav-link active" aria-current="page" style={{textAlign:"start" ,fontSize:"23px",color:"#333003", fontWeight:"600" , padding:'20px 40px', borderRadius:"10px 20px 10px 20px", boxShadow:"4px 4px 1px #345643" , marginTop:"10px"}}>View</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Header