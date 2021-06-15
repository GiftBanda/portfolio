import React from "react";
import { Zoom } from "react-reveal";

export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return(
        <div className="footer" >
            <Zoom>
            <p>A Gift Banda Website <span>©{year} </span> </p>
            </Zoom>
        </div>
    );
}