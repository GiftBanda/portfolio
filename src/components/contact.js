import React from "react";
import WhatsApp from "@material-ui/icons/WhatsApp";
import Twitter from "@material-ui/icons/Twitter";
import LinkedIn from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";
import Email from "@material-ui/icons/Email";
import Phone from "@material-ui/icons/Call";
import Footer from "./footer";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

function Contact() {
    return(
        
        <div className="contact" >
            <Zoom>
            <img src="../images/business.png" alt="Gift Banda" />
            </Zoom>
            <p>
               LET'S TALK! 
            </p>
            <Fade left>
            <div className="profiles" >
                <a href="https://twitter.com/GiftBanda42" >
                <Twitter className="profiles twitter"  style={{fontSize: "40px"}} />
                </a>

                <a  href="https://www.linkedin.com/in/gift-banda-557a04b9/" >
                <LinkedIn className="profiles linkedin" style={{fontSize: "40px"}}  />
                </a>

                <a href="https://github.com/GiftBanda" >
                <GitHub className="profiles github"  style={{fontSize: "40px"}} />
                </a>

                <a href="mailto:bandagift42@gmail.com" >
                <Email className="profiles email"  style={{fontSize: "40px"}} />  
                </a>

                <a href="https://wa.me/message/4UOYUNANJP5UL1" >
                <WhatsApp  className="profiles whatsapp"  style={{fontSize: "40px"}}  />  
                </a>
                
                <a href="tel:+260977560054" >
                <Phone  className="profiles whatsapp" style={{fontSize: "40px"}} /> 
                </a>
                
                
                
                
                
                
            </div>
            </Fade>
            <Footer />
        </div>
    );
}

export default Contact;