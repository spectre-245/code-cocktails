import React from "react";
import "./PastSponsors.css";
import p1 from "./../../../../../assets/PastSponsors/gamerz-hive-black-logo.svg";
import p2 from "./../../../../../assets/PastSponsors/we-dey-manage-logo.svg";
import p3 from "./../../../../../assets/PastSponsors/paystack-logo.svg";
import p4 from "./../../../../../assets/PastSponsors/kowri.webp";
import p5 from "./../../../../../assets/PastSponsors/tale-logo.webp";
import p6 from "./../../../../../assets/PastSponsors/touch-stack-logo.svg";
import p7 from "./../../../../../assets/PastSponsors/Soccabet-logo.webp";
import p9 from "./../../../../../assets/PastSponsors/monteroso-logo.svg";
import p10 from "./../../../../../assets/PastSponsors/mnotify-logo.png";

function PastSponsors() {
  return (
    <div className="p_main">
      <h3>PAST SPONSORS</h3>
      <div className="first_pic_container">
        <a
          href="https://www.gamerzhive.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={p1} alt="pic" className="p1" />
        </a>

        <a
          href="https://www.linkedin.com/company/we-dey-manage-academy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={p2} alt="pic" className="p2" />
        </a>
        <a
          href="https://paystack.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={p3} alt="pic" className="p3" />
        </a>
        <a
          href="https://www.kowri.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={p4} alt="pic" className="p4" />
        </a>
        <a
          href="https://talesfromghana.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={p5} alt="pic" className="p5" />
        </a>

        <a
          href="https://www.touchstacktechnologies.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={p6} alt="pic" className="p6" />
        </a>
        <a
          href="https://www.soccabet.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={p7} alt="pic" className="p7" />
        </a>
      </div>
      {/* second conatiner */}
      <div className="second_pic_container">
        <a
          href="https://www.kowri.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={p4} alt="pic" className="p4" />
        </a>
        <a
          href="https://monterosa.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={p9} alt="pic" className="p9" />
        </a>
        <a
          href="https://www.mnotify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={p10} alt="pic" className="p10" />
        </a>
      </div>
    </div>
  );
}

export default PastSponsors;
