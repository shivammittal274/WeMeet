import React, { useRef, useEffect } from "react";
import "./Circle.css";
import developer from "../../../images/developer.png";
import chat from "../../../images/chat.png";
import marketplace from "../../../images/marketplace.png";
import meetings from "../../../images/meetings.png";
import onzoom from "../../../images/onzoom.png";
import zoomforhome from "../../../images/zoomforhome.png";
import zoomrooms from "../../../images/zoomrooms.png";
import phone2 from "../../../images/phone2.png";
import webinars from "../../../images/webinars.png";
function Circle() {
  const graph = useRef(null);

  useEffect(() => {
    const ciclegraph = graph.current;
    const circleElements = ciclegraph.childNodes;

    let angle = 360 - 90;
    let dangle = 360 / circleElements.length;

    for (let i = 0; i < circleElements.length; i++) {
      let circle = circleElements[i];
      angle += dangle;
      circle.style.transform = `rotate(${angle}deg) translate(${
        ciclegraph.clientWidth / 2
      }px) rotate(-${angle}deg)`;
    }
  }, []);

  return (
    <div className="circle-container">
      <div className="ciclegraph" ref={graph}>
        <p className="midicon">
          <p className="text">WeMeet</p>
        </p>

        <div className="circle">
          <img src={phone2} alt="" className="icon-block1" />
          <span className="icon-info">Phone</span>
        </div>
        <div className="circle">
          <img src={developer} alt="" className="icon-block1" />
          <span className="icon-info">DEVELOPER PLATFORM </span>
        </div>

        <div className="circle">
          <img src={zoomforhome} alt="" className="icon-block1" />
          <span className="icon-info">HOME</span>
        </div>
        <div className="circle">
          <img src={onzoom} alt="" className="icon-block1" />
          <span className="icon-info">ON MEET</span>
        </div>
        <div className="circle">
          <img src={marketplace} alt="" className="icon-block1" />
          <span className="icon-info">Menu</span>
        </div>
        <div className="circle">
          <img src={webinars} alt="" className="icon-block1" />
          <span className="icon-info">Webinars</span>
        </div>
        <div className="circle">
          <img src={zoomrooms} alt="" className="icon-block1" />
          <span className="icon-info">Rooms</span>
        </div>
        <div className="circle">
          <img src={chat} alt="" className="icon-block1" />
          <span className="icon-info">Chat</span>
        </div>
        <div className="circle">
          <img src={meetings} alt="" className="icon-block1" />
          <span className="icon-info">Meetings</span>
        </div>
      </div>
      <div className="right-side">
        <div className="content">
          <img
            className="side"
            src="https://www.gstatic.com/meet/google_meet_marketing_ongoing_meeting_grid_427cbb32d746b1d0133b898b50115e96.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Circle;
