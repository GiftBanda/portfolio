import React from "react";
import WhatsApp from "@material-ui/icons/WhatsApp";
import Twitter from "@material-ui/icons/Twitter";
import LinkedIn from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";
import Email from "@material-ui/icons/Email";
import Phone from "@material-ui/icons/Call";
import Footer from "./footer";
import Zoom from "react-reveal/Zoom";

function Contact() {
    return(
        
        <div className="contact" >
            <Zoom>
            <img src="../images/business.png" alt="Gift Banda" />
            </Zoom>
            <p style={{textTransform: 'capitalize' ,width: '400px', textAlign: 'center', margin: '0 auto', paddingBottom: '.5rem'}} >
                Do You have a project or You want to hire me or maybe you just want to say Hi
            </p>
            <h2>
                LET'S TALK! 
            </h2>
            <Zoom top cascade>
            <div className="profiles" >
                <a href="https://twitter.com/GiftBanda42" target='_blank' rel='noreferrer' >
                <Twitter className="profiles twitter"  style={{fontSize: "40px"}} />
                </a>

                <a  href="https://www.linkedin.com/in/gift-banda-557a04b9/" target='_blank' rel='noreferrer' >
                <LinkedIn className="profiles linkedin" style={{fontSize: "40px"}}  />
                </a>

                <a href="https://github.com/GiftBanda" target='_blank' rel='noreferrer' >
                <GitHub className="profiles github"  style={{fontSize: "40px"}} />
                </a>

                <a href="mailto:bandagift42@gmail.com" target='_blank' rel='noreferrer' >
                <Email className="profiles email"  style={{fontSize: "40px"}} />  
                </a>

                <a href="https://wa.me/message/4UOYUNANJP5UL1" target='_blank' rel='noreferrer' >
                <WhatsApp  className="profiles whatsapp"  style={{fontSize: "40px"}}  />  
                </a>
                
                <a href="tel:+260977560054" target='_blank' rel='noreferrer' >
                <Phone  className="profiles whatsapp" style={{fontSize: "40px"}} /> 
                </a>
                
            </div>
            </Zoom>
            <Footer />
        </div>
    );
}

export default Contact;