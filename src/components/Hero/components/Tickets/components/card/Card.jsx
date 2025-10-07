import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="cardd-wrapper">
      <div style={{ "--bgcolor": props.backgroundColor }} className="cardd">
        <img src={props.source} alt="FirstCardImage" className="card_image" />
        <span className="Card_span">{props.ticket_type}</span>
        <p className="span_p">
          <span className="Card_price_span">{props.ticket_price}</span>
          <span className="Card_span_ghs">ghs</span>
        </p>
        <button className="ticket-btn">Get Ticket</button>
      </div>
    </div>
  );
}

export default Card;
