import React from "react";
import "./Slider.css";

function Slider(props) {
  return (
    <div
      style={{
        "--bgColor": props.backgroundColor,
        "--width": props.width,
        "--margin": props.margin,
        "--top": props.top,
        "--right": props.right,
        "--sub_margin": props.sub_margin,
        "--image_height": props.imageHeight || "auto",
      }}
      className="slider_div"
    >
      <h3 className="Activity_h">Activities</h3>
      <div className="vrlogo_container">
        <img src={props.source} alt="Vrlogo" className="Vrlogo_pic" />
      </div>
      <div className="sub_heading">
        <h3 className="sub_heading_h">{props.subheading}</h3>
        <p className="sub_heading_p">{props.content}</p>

        {props.power?.trim() && props.powered_by && (
          <footer className="slider_footer">
            <span className="slider_span">{props.power}</span>
            <img src={props.powered_by} alt="Powered" />
          </footer>
        )}
      </div>
    </div>
  );
}

export default Slider;
