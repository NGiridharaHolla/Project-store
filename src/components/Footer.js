import React from 'react'
import emailjs from 'emailjs-com'
import wave2 from '../Images/wave2.png'


export const Footer = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID, e.target,process.env.REACT_APP_USER_ID)
        .then((result) => {
            alert('Message sent successfully')
        }).catch((error) => {
            alert('Error in sending message')
        });
        e.target.reset()
}
    return (
        <section className="footer" id="Contact">
            <img src={wave2} alt="Wave effect" className="footer-img" />
            <div className="container-fluid">
                <h1 className="text-center pro-txt">CONTACT ME FOR QUERIES</h1>
                <div className="row">

                    <div className="offset-md-1 col-md-4 footer-box">
                        <div className="contact-details">
                            <p><i class="fa fa-location"></i>&nbsp;&nbsp;Location&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;Bangaluru, Karnataka</p>
                            <p><i class="fa fa-envelope"></i>&nbsp;&nbsp;Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;giridharholla1842<span>@gmail.com</span></p>
                            <p><i class="fa fa-graduation-cap"></i>&nbsp;&nbsp;Education&nbsp;&nbsp;:&nbsp;&nbsp;RNSIT, Bangaluru</p>
                            <p><i class="fa fa-phone"></i>&nbsp;&nbsp;Phone&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;9741528701</p>
                        </div>

                    </div>

                    <div className="offset-md-1 col-md-5">
                        <form onSubmit={sendEmail}>
                            <div className="form-group form-field">
                                <label htmlFor="Name" class="form-label">Name</label>
                                <input type="text" className="form-control" id="Name" placeholder="Enter your Name" pattern="[a-zA-Z]{3-15}" name="Name" required />
                            </div>
                            <div className="form-group form-field">
                                <label htmlFor="Email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter email" name="Email" required />
                            </div>
                            <div className="form-group form-field">
                                <label htmlFor="Message" className="form-label">Message</label>
                                <textarea id="Message" name="Message" rows="4" placeholder="Enter your message" required></textarea>
                            </div>
                            <div className="btn-container">
                                {/* <button type="submit" className="btn-submit" onClick={sendEmail}>Submit</button> */}
                                <input type="submit" value="Submit" className="btn-submit"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        
    )
}
