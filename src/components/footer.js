import React from "react";

export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return(
        <div className="footer" >
            <p>Created with love by Gift Banda, <span>©{year} </span> </p>
        </div>
    );
}