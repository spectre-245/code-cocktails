import React from "react";
import "./Merch.css";
import Button from "../../../Button/Button";
import Right from "../../../../assets/right.png";
import Left from "../../../../assets/left.png";
import Bottom from "../../../../assets/bottom.png";

function Merch() {
  return (
    <div className="merch_main_div">
      <div className="sub_div">
        <div className="text_container">
          <h3 className="merch_heading">BUY MERCH</h3>
          <p className="merch_p">
            Don't miss out on the opportunity to take home a piece of the
            <br />
            action! Our exclusive event merchandise is the perfect way to show
            <br />
            off your tech-savvy style and commemorate the amazing time
            <br />
            you had at our event.
          </p>
        </div>
        <a href="https://paystack.shop/code">
          <Button
            btn_content="Buy Merch"
            backgroundColor="#f7a100"
            shadowColor="#ffe4a9"
            color="black"
          />
        </a>

        <img src={Right} alt="right_merch_pic" className="right_merch_pic" />
        <img src={Left} alt="left_merch_pic" className="left_merch_pic" />
        <img src={Bottom} alt="bottom_merch_pic" className="bottom_merch_pic" />
      </div>
    </div>
  );
}

export default Merch;
