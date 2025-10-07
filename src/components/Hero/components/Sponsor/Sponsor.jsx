import React from "react";
import "./Sponsor.css";
import Button from "../../../Button/Button";
import Achieve from "../../../../assets/Sponsor_Assets/achieve.svg";
import Kweku from "../../../../assets/Sponsor_Assets/kweku.svg";
import Arrow from "../../../../assets/arrow.svg";
import Building from "../../../../assets/Sponsor_Assets/building.svg";
import UxGhana from "../../../../assets/Sponsor_Assets/ux-ghana-logo.svg";
import UgCs from "../../../../assets/Sponsor_Assets/ug-cs-logo.svg";
import Brandafrik from "../../../../assets/Sponsor_Assets/brandafrik-logo.svg";
import CediR from "../../../../assets/Sponsor_Assets/cedi-rates-logo.svg";
import linkedin from "../../../../assets/Sponsor_Assets/custume.svg";
import Enclave from "../../../../assets/Sponsor_Assets/enclave.svg";
import junkies from "../../../../assets/Sponsor_Assets/junkies.svg";
import Lime from "../../../../assets/Sponsor_Assets/lime-ar.svg";
import fluttr from "../../../../assets/Sponsor_Assets/flutter.svg";
import briff from "../../../../assets/Sponsor_Assets/brif-logo.webp";
import acra from "../../../../assets/Sponsor_Assets/accra-a.svg";
import o2 from "../../../../assets/Sponsor_Assets/oxegene-black.svg";
import gdg from "../../../../assets/Sponsor_Assets/gdg-accra.svg";
import mythopia from "../../../../assets/Sponsor_Assets/mythopia.svg";

function Sponsor() {
  return (
    <div className="sponsor_div">
      <h3 className="sponsor_h">BECOME A SPONSOR</h3>
      <p className="sponsor_p">
        Looking to connect with tech-savvy professionals and showcase
        <br />
        your brand? Join "Code & Cocktails" as a sponsor! This event gives
        <br />
        your company direct access to a dynamic audience of young
        <br />
        professionals eager to explore cutting-edge technology and
        <br />
        discover new products. But act fast—sponsorship spots are limited
        <br />
        and available on a first-come, first-served basis. Don't miss
        <br />
        the chance to boost your brand, build valuable connections, and be
        <br />
        part of one of the year's top tech events. Secure your sponsorship
        <br />
        today! Contact us to learn more about our Platinum, Gold, Silver,
        <br />
        and Bronze packages.
      </p>
      <div className="sponsor_btn_container">
        <Button
          btn_content="Sponsor Us"
          backgroundColor="#f7a100"
          shadowColor="#f8f9e5"
          color="black"
        />
      </div>
      <h1 className="silver_sponsor_h">SILVER SPONSOR</h1>
      {/* links */}

      <div className="links_container">
        <a
          className="links"
          href="https://theachieveapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Achieve} alt="link" />
        </a>

        <h2 className="partner_p">PARTNERS</h2>

        <div className="sponser_links_container">
          <a
            className="kweku_a"
            href="https://www.youtube.com/c/kwekutech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Kweku} alt="link" />
          </a>

          <a
            className="Arrow_a"
            href="https://www.letiarts.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Arrow} alt="link" />
          </a>

          <a
            className="Building_a"
            href="https://www.youtube.com/c/kwekutech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Building} alt="link" />
          </a>

          <a
            className="UxGhana_a"
            href="https://uxghana.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={UxGhana} alt="link" />
          </a>

          <a
            className="UgCs_a"
            href="https://dcs.ug.edu.gh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={UgCs} alt="link" />
          </a>

          <a
            className="Brandafrik_a"
            href="https://www.brandafrik.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Brandafrik} alt="link" />
          </a>

          <a
            className="CediR_a"
            href="https://cedirates.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={CediR} alt="link" />
          </a>
        </div>

        {/* Second row links */}

        <div className="sponser_links_container">
          <a
            className="linkedin_a"
            href="https://www.youtube.com/c/kwekutech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="link" />
          </a>

          <a
            className="Enclave_a"
            href="https://myenclave.space/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Enclave} alt="link" />
          </a>

          <a
            className="junkies_a"
            href="https://usejunkyard.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={junkies} alt="link" />
          </a>

          <a
            className="Lime_a"
            href="https://www.limear.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Lime} alt="link" className="lime_pic" />
          </a>

          <a
            className="fluttr_a"
            href="https://www.flutterghana.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={fluttr} alt="link" />
          </a>

          <a
            className="briff_a"
            href="https://www.brif.africa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={briff} alt="link" />
          </a>

          <a
            className="acra_a"
            href="blank"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={acra} alt="link" />
          </a>
        </div>

        {/* third row links */}
        <div className="sponser_links_container">
          <a
            className="o2_a"
            href="blank"
            target="_https://oxegene.com/"
            rel="noopener noreferrer"
          >
            <img src={o2} alt="link" className="o2" />
          </a>

          <a
            className="gdg_a"
            href="https://gdg.community.dev/gdg-accra/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gdg} alt="link" />
          </a>

          <a
            className="mythopia_a"
            href="https://mythopia.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={mythopia} alt="link" className="mythopia" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sponsor;
