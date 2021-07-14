import React from "react";
import {Zoom} from 'react-reveal';


function About() {
    return(
            <article>
                <hr />
            <div className="heading about" >
            

            <Zoom right cascade>
            <h2 className='header'>About Me</h2>
            </Zoom>

            <Zoom top cascade>
            <h1>Creative Front-end Developer and Digital Marketer</h1>
            </Zoom>
      
        </div>
        
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
        <h1 id='description'>
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
            I completed my full stack web development bootcamp at the London App Brewery in January 2020. Fluent in Html, Css and Javascript I decided to focus on the front-end and build my career as a front-end developer. Having acquired a strong understanding of Html, Css, Javascript ,React, MaterialUi, Bootstrap 5 and Firebase Technologies coupled with a firm digital marketing background, I noticed that developing a website is easy but developing websites that solve real world business and/or economical challenges is takes creativity, team-work and problem-solving skills and that's my specialty.
        </p>

        </article>

        
    );
}

export default About;