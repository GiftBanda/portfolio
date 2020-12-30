import React from "react";

export default function Card(props) {
    return(
        <div className="card" >
            <div>
                <img src={props.img} alt={props.alt} />
            </div>
            <p>
                {props.description}
            </p>
            <div>
            <a href={props.link} className="live-btn" size="medium" >LIVE PREVIEW</a>
            <a href={props.github} className="secondary-btn" size="medium" >SOURCE CODE</a>
            </div>
        </div>
    );
}