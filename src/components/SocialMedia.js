import React from 'react'
import instagram from '../Images/instagram-icon.png'
import facebook from '../Images/facebook-icon.png'
import twitter from '../Images/twitter-icon.png'
import whats_app from '../Images/whatsapp-icon.png'

export const SocialMedia = () => {
    return (
        <section class="social-media" id="Contact">
            <div class="container text-center">
                <h1>FIND US ON SOCIAL MEDIA</h1>
                <div class="social-icons">
                <a href="https://www.instagram.com/g_i_r_i_dhar/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Instagram icon"/></a>
                <a href="https://www.facebook.com/giridhar.holla.1/" target="_blank"  rel="noopener noreferrer"><img src={facebook} alt="Facebook icon"/></a>
                <a href="https://twitter.com/GiridharaHolla" target="_blank"  rel="noopener noreferrer"><img src={twitter} alt="Twitter icon"/></a>
                <a href="https://wa.me/+919741528701" target="_blank"  rel="noopener noreferrer"><img src={whats_app} alt="Whats app icon"/></a>
                </div>
            </div>
        </section>
    )
}

