import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
  // faQuestionCircle,
  // faExclamationCircle,
  // faUser,
// } from "@fortawesome/free-solid-svg-icons";
// import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import "./Header.scss";
import Time from "./Time";
import ig from "./logo.jpeg";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <a href="/"><img src={ig} /></a>
        <span className="help-text">WeMeet</span>
      </div>
      <div className="action-btn">
        <Time className="clock" />
        {/* < ContactSupportIcon className = "icon-block" /> */}
        {/* <FontAwesomeIcon className="icon-block" icon={faQuestionCircle} />
        <FontAwesomeIcon className="icon-block" icon={faExclamationCircle} />
        <FontAwesomeIcon className="icon-block" icon={faUser} /> */}
      </div>
    </div>
  );
}

export default Header;
