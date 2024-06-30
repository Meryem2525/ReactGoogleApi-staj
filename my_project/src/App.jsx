import { useState } from 'react'
import './App.css'
// import './Header.css'
import {Routes,Route} from 'react-router-dom'
import KullanıcıMap from './pages/KullanıcıMap'
import YoneticiMap from './pages/YoneticiMap'
import NotFoundPage from './Components/LoginRegister/LoginRegister'
import About from './pages/About'
import Contact from './pages/Contact'
import AdminPages from './pages/AdminPages'
import Map_call from './pages/Map_call'
import Change_dil from './Components/ChangeLanguage/Change_dil'
import ChangeLanguageOne from './Components/ChangeLanguage/ChangeLanguageOne'
function App() {

  return (
    <div>
     {/* <LoginRegister/> */}
    <Routes>
     
      <Route path='/mapcall' element={<Map_call/>}/>
      <Route path='/yoneticiMap' element={<YoneticiMap/>}/>
      <Route path='/adminpages' element={<AdminPages/>}/>
      <Route path='/changedil' element={<Change_dil/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/iletisim' element={<Contact/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
      
    </Routes>
     

   
    </div>
  )
}

export default App
