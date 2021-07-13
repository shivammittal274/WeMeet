import React from "react";
import './Footer.css'

const Emoji = props => (
    <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </span>
);
function Footer() {
    return(
        <div className="footer">
            Your Only Video Meet App
            <Emoji symbol="❤️" />

        </div>
    )
}

export default Footer;