import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/container.css";
import CloseBtn from "../imagesmb/icons/closeicon.png";
import Lines from "./Lines";

const Container = ({children}) => {
  return (
    <div className='container'>
      <div className="container_header">
      {/* onClick={showAccNav} */}
      <button className="container_header_btn">
          <Link to="/">
            <img  src={CloseBtn} alt="close" />
          </Link>
        </button>
      </div>

      {children}



      
      {/* <div>
      <Lines />
      </div> */}
    </div>
  )
}

export default Container