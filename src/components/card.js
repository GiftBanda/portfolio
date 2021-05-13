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
            <a href={props.link} className="live-btn" size="medium" target='_blank' rel='noreferrer' >LIVE PREVIEW</a>
            <a href={props.github} className="secondary-btn" size="medium" target='_blank' rel='noreferrer' >SOURCE CODE</a>
            </div>
        </div>
    );
}