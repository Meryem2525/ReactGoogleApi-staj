import React from 'react'
import  {Link} from "react-router-dom"
// import '../pages/Header.css'

const Header = () => {
  return (
    
    <div  className="header">
      <div className="">
        <p>Arpeta Yazılım Şirketi</p>
      </div>
    
    <Link  className='link'  to="/about">Hakkımızda</Link>
    <Link   className='link'  to="/mapcall">Harita</Link>
       
    <Link  className='link' to="/iletisim">İletişim</Link>
    <div className="">
      <input type="text"  />
      <button > Türkçe</button>
      <button> English</button>
    </div>
    </div>
   
       
  )
}

export default Header
