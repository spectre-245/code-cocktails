import React from "react";
import im1 from "../../../../assets/image (1).png";
import im2 from "../../../../assets/image (2).png";
import im3 from "../../../../assets/image (3).png";
import im4 from "../../../../assets/image (4).png";
import im5 from "../../../../assets/image (5).png";
import im6 from "../../../../assets/image (6).png";
import im7 from "../../../../assets/image (7).png";
import "./Carosel.css";

function Carosel() {
  return (
    <div>
      <div className="image_wrapper">
        <div className="scrolling_track">
          <div className="image_container">
            <img src={im1} alt="pic" className="PIm1" />
            <img src={im2} alt="pic" className="PIm2" />
            <img src={im3} alt="pic" className="PIm3" />
            <img src={im4} alt="pic" className="PIm4" />
            <img src={im5} alt="pic" className="PIm5" />
            <img src={im6} alt="pic" className="PIm6" />
            <img src={im7} alt="pic" className="PIm7" />

            {/* Duplicates for infinite scroll */}
            <img src={im1} alt="pic" className="PIm1" />
            <img src={im2} alt="pic" className="PIm2" />
            <img src={im3} alt="pic" className="PIm3" />
            <img src={im4} alt="pic" className="PIm4" />
            <img src={im5} alt="pic" className="PIm5" />
            <img src={im6} alt="pic" className="PIm6" />
            <img src={im7} alt="pic" className="PIm7" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carosel;
