import React from 'react'
import Header from './Header'
import './Contact.css'

const Contact = () => {
  return (
    <div>
      <Header/>

    
	<div className="container">
		<div className="contact-box">
			<div className="left"></div>
			<div className="right">
				<h2>Contact Us</h2>
        <input type="text"  className="field" placeholder='Your Name' required />
        <input type="text" className="field" placeholder='Your Email' required />
        <input type="text" className="field" placeholder='Phone' required />
        <textarea   className="field" placeholder='Message'> </textarea>
        <button className="btn">Send</button>

			</div>
		</div>
	</div>

    </div>
  )
}

export default Contact
