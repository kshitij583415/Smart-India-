import React from 'react'
import "../Contact.css"
import loc from "../images/c-images/location.png"
import mail from "../images/c-images/mail.png"
import call from "../images/c-images/call.png"
import i1 from "../images/c-images/1.png"
import i2 from "../images/c-images/3.png"
import i3 from "../images/c-images/2.png"
import i4 from "../images/c-images/5.png"


function Contact() {
  return (
    <>
    <section1>
            <div className="container1">
                <div className="contactInfo"> 
                    <div>
                        <h2>Contact Info</h2>
                        <ul className="info">
                            <li>
                                <span><img src={loc} alt="" /></span>
                                <span>KLE Technological University<br />
                                    Vidyanagar, Hubli<br />
                                    580031</span>
                            </li>
                            <li>
                                <span><img src={mail} alt=""/></span>
                                {/* <!-- <span>nassosanagn@gmail.com</span> --> */}
                                <span><a href = "mailto: kshitij2k04@gmail.com">kshitij2k04@gmail.com</a></span>
                            </li>
                            <li>
                                <span><img src={call} alt=""/></span>
                                <span>9555402098</span>
                            </li>

                        </ul>
                    </div>
                    <ul className="sci">
                        <li><a href="https://www.facebook.com"><img src={i1} alt="" /></a></li>
                        <li><a href="https://www.instagram.com"><img src={i2} alt=""/></a></li>
                        <li><a href="https://twitter.com"><img src={i3} alt=""/></a></li>
                        <li><a href="https://www.linkedin.com"><img src={i4} alt=""/></a></li>
                        
                    </ul>
                </div>
                    <div className="contactForm">
                        <h2>Send a Message</h2>
                        <div className="formBox">
                        <div className="inputBox w50">
                            <input type="text" name="" required />
                            <span>First Name</span>
                        </div>
                        <div className="inputBox w50">
                            <input type="text" required />
                            <span>Last Name</span>
                        </div>
                        <div className="inputBox w50">
                            <input type="email" required />
                            <span>Email Address</span>
                        </div>
                        <div className="inputBox w50">
                            <input type="text" required />
                            <span>Mobile Number</span>
                        </div>
                        <div className="inputBox w100">
                            <textarea required></textarea>
                            <span>Write your message here...</span>
                        </div>
                        <div className="inputBox w100">
                            <input type="submit" value="Send" />
                        </div>
                    </div>
                </div>
                    
                    
             </div>
        </section1>
    </>
  )
}

export default Contact
