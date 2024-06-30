import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";

import React from 'react'

const Language = () => {
    
// const resources={
//     tr:{
//         translation:{
//             welcome:'Hoşgeldiniz' 
//         }
//     },
//     en:{
        
//         translation:{
//             welcome:'Welcome' 
//         }
//     }

// }
// i18n
// .use(initReactI18next)
// .init({
//     lng: "tr",
//     resources

    
//   });
//   const {t,i18n}=useTranslation()
//   const clickHandle= async lang=>{
//    await i18n.changeLanguage(lang )

//   }
  return (
    <div className="language">
      Aktif dil :{i18n.language}
      <br />
      <button onClick={()=> clickHandle('tr')}>Türkçe</button>
      <button onClick={()=> clickHandle('en')}>English</button>
    </div>
  )
}


  export default Language