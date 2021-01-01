import React from "react";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Footer from "./footer";


function About() {
    return(
            <article className="" >
            <div className="heading about" >
            <a href="https://www.linkedin.com/in/gift-banda-557a04b9/" >
                <LinkedIn className="linkedin" style={{fontSize: "80px"}} />
            </a>
            
            <h1>Hello, I'm Gift! Creative Front-end Developer</h1>
            
            
            
        </div>
        <hr />
        <p>
            Hardworking and effective web and mobile app developer with 3 years of expertise. I am actively looking for a web or mobile app developer position. Willing to join a dynamic, innovative and collaborative team.
        </p>
        <p className="internship" >
            Offers related to remote work are highly welcome!
        </p>
        <p>
            Being a programmer creating websites and mobile apps is what i love and enjoy doing. Because it enables me to solve different real world challenges that is business, economical or climate related. I didn't choose it because of a decent salary but because programming is my passion.
        </p>
        <h1>
            SKILLS CAN BE TAUGHT, BUT ATTITUDE CAN'T!
        </h1>
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
            I completed my full stack web development bootcamp and flutter development bootcamp at the london app brewery in january 2020. Fluent in Flutter, Html, Css and Javascript I decided to focus on the front-end and build my career as a front-end developer. Having acquired a strong understanding of React, TailwindCss, MaterialUi, Flutter and Firebase Technologies coupled with a firm digital marketing background, I noticed that anyone can develop a website/mobile app but I develop websites and mobile apps that solve real world challenges.
        </p>
        <Footer />
            </article>

        
    );
}

export default About;