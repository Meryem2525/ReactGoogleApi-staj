import React from 'react'
import  {Link} from "react-router-dom"


const AdminHeader = () => {
  return (    
    <div  className="header">
      <div className="">
        <p>Arpeta Yazılım Şirketi</p>
      </div>
    <Link  className='link'  to="/about">Hakkımızda</Link>
    <Link   className='link'  to="/mapcall">Harita</Link>
       
    <div className="">
      <input type="text"  />
      <button >Türkçe</button>
      <button>English</button>
    </div>
    </div>
   
       
  
    
  )
}

export default AdminHeader
