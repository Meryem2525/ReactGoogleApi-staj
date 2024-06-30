import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';


const languages=[
  {code:"en",lang:"English"},
  {code:"fr",lang:"French"}
];


const ChangeLanguageOne = () => {
    
  const {i18n} = useTranslation();

  const languageChange =(lng)=>{
    i18n.languageChange(lng);
};
useEffect(()=>{
document.body.dir=i18n.dir();
},[i18n,i18n.language])
  return (
    <div className='btn-container '>
      {
        languages.map((lng)=>{
          return (
            <button  className={lng.code === i18n.language ? "selected": ""} 
            key={lng.code}
             onClick={()=>languageChange(lng.code)}
             >{lng.lang} </button>
          );
        })
      }
    </div>
  )
}

export default ChangeLanguageOne