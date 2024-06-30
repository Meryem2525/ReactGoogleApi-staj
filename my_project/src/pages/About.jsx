import React from 'react'
import Header from './Header'

import img2 from '../images/yazilim.jpg'
import '../pages/About.css'

const About = () => {
  return (
    <div> 
       <Header/>
       <div className="about">
       <div className="about-container">
        <h1>Arpeta Yazılım </h1>
        <br />
        ARPETA YAZILIM VE BİLİŞİM TEKNOLOJİLERİ A.Ş.
Arpeta Yazılım, 2019 yılında, yazılım geliştirme alanında yenilikçi ve yüksek kaliteli çözümler sunma vizyonuyla kuruldu. Kuruluşumuzdan bu yana, müşteri memnuniyetini en üst düzeyde tutarak, işletmelerin dijital dönüşüm süreçlerini hızlandırmak ve rekabet avantajı sağlamalarına yardımcı olmak için çalışıyoruz.
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem fugiat beatae non harum exercitationem nisi ullam assumenda quia labore. Aliquam optio qui perspiciatis minus ipsam, magnam itaque velit accusantium. Dolorem.</p>
        </div>
       
        <div className='about-left'>
          <img src={img2} alt="" />
        </div>
       </div>
       
    </div>
  )
}

export default About
