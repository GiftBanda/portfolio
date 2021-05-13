import React from "react";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Footer from "./footer";
import {Zoom, Fade} from 'react-reveal';


function About() {
    return(
            <article>
            <div className="heading about" >
            <Fade top>
            <a href="https://www.linkedin.com/in/gift-banda-557a04b9/" >
                <LinkedIn className="linkedin" style={{fontSize: "80px"}} />
            </a>
            </Fade>

            <Zoom top cascade>
            <h1>Hello, I'm Gift! Creative Front-end Developer and Digital Marketer</h1>
            </Zoom>
      
        </div>
        <hr />
        <p>
            Hardworking and effective web developer with years of experience in the industry. I am actively looking for a web developer position. Willing to join a dynamic, innovative and collaborative team.
        </p>
        <Zoom bottom cascade>
        <p className="internship" >
            Offers related to remote work are highly welcome!
        </p>
        </Zoom>
        <p>
            Being a programmer creating dynamic and responsive websites is what i love and enjoy doing. Because it enables me to solve different real world challenges be it in business, individual or even climate related. I didn't choose it because of a decent salary but because programming is my passion.
        </p>

        <Zoom bottom cascade>
        <h1>
            SKILLS CAN BE TAUGHT, BUT ATTITUDE CAN'T!
        </h1>
        </Zoom>
        <ul>
            <li>
                Energitic, organised, reliable, highly motivated, positive team player
            </li>
            <li>
                Life long learner and open to new challenges
            </li>
            <li>
                Having the potential to motivate and support co-workers
            </li>
        </ul>
        <p>
            I completed my full stack web development bootcamp at the London App Brewery in january 2020. Fluent in Html, Css and Javascript I decided to focus on the front-end and build my career as a front-end developer. Having acquired a strong understanding of Html, Css, Javascript ,React, TailwindCss, MaterialUi, Bootstrap 5 and Firebase Technologies coupled with a firm digital marketing background, I noticed that anyone can develop a website and/or mobile app but I develop websites and mobile apps that solve real world challenges and make businesses and individuals thrive.
        </p>
        <Footer />
            </article>

        
    );
}

export default About;