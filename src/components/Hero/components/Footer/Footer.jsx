import React from "react";
import "./Footer.css";
import whatsapp from "../../../../assets/whatsapp.svg";
import X from "../../../../assets/twitter(x).svg";
import linkin from "../../../../assets/linkedIn.svg";
import IG from "../../../../assets/instagram.svg";
import Iictock from "../../../../assets/ticktock.svg";
import footer_pic from "../../../../assets/footer-img.svg";
import Button from "../../../Button/Button";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_main_container">
        <div className="left_containerr">
          <h1>
            Join Our Community
            <br />
            at Code and
            <br />
            Cocktails!
          </h1>
        </div>
        <div className="right_containerr">
          <p>
            Join Code and Cocktails for a relaxed mix of tech, drinks, and good
            company.
            <br />
            Whether you're a pro or just starting out, connect with others,
            share ideas,
            <br />
            and have fun building something great together—no pressure, just
            good vibes!
          </p>

          <Button
            btn_content={
              <a
                href="https://chat.whatsapp.com/Ik9SSYT3VDC8VqVwNjqRgC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={whatsapp} alt="whatsapp" />
                <span>CLICK TO JOIN OUR WHATSAPP</span>
              </a>
            }
            backgroundColor="#00a863"
            shadowColor="#ffe4a9"
            color="black"
          />

          <div className="btn_footer_container">
            <Button
              btn_content={
                <a
                  href="https://x.com/codeNcocktails"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={X} alt="whatsapp" />
                </a>
              }
              backgroundColor="#ffaa00"
              shadowColor="#ffe4a9"
              color="black"
            />

            <Button
              btn_content={
                <a
                  href="https://www.instagram.com/codexcocktails/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={IG} alt="IG" />
                </a>
              }
              backgroundColor="#ffaa00"
              shadowColor="#ffe4a9"
              color="black"
            />

            <Button
              btn_content={
                <a
                  href="https://www.linkedin.com/company/code-and-cocktails/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkin} alt="whatsapp" />
                </a>
              }
              backgroundColor="#ffaa00"
              shadowColor="#ffe4a9"
              color="black"
            />

            <Button
              btn_content={
                <a
                  href="https://www.tiktok.com/@codexcocktails"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Iictock} alt="whatsapp" />
                </a>
              }
              backgroundColor="#ffaa00"
              shadowColor="#ffe4a9"
              color="black"
            />
          </div>
        </div>
      </div>
      <div className="fspan_con">
        <span className="footer_span">
          Copyright©2025 code&cocktails. All right reserved.
        </span>
      </div>

      <div className="footer_pic_container">
        <img src={footer_pic} alt="footerpic" className="footer_pic" />
      </div>
    </div>
  );
}

export default Footer;
