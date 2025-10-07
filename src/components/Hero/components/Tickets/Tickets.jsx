import React from "react";
import "./Tickets.css";
import Card from "./components/card/Card";
import First from "../../../../../src/assets/lonely-at-the-top-ticket-card-pattern.svg";
import Second from "../../../../../src/assets/3-member-squad-ticket-pattern.svg";
import Third from "../../../../../src/assets/5-member-squad-ticket-pattern.svg";
import Last from "../../../../../src/assets/10-member-squad-ticket-pattern.svg";

function Tickets() {
  return (
    <div className="bodyy">
      <h3 className="early_bird_heading">EARLY BIRD TICKETS</h3>
      <div className="cardss_container">
        <Card
          backgroundColor="#004c2e"
          source={First}
          ticket_type="Lonely At The Top"
          ticket_price="199"
        />
        <Card
          backgroundColor="#034aa6"
          source={Second}
          ticket_type="03 Member Squad"
          ticket_price="499"
        />
        <Card
          backgroundColor="#c90438"
          source={Third}
          ticket_type="05 Member Squad"
          ticket_price="799"
        />
        <Card
          backgroundColor="#ffaa00"
          source={Last}
          ticket_type="10 Member Squad"
          ticket_price="1599"
        />
      </div>
    </div>
  );
}

export default Tickets;
