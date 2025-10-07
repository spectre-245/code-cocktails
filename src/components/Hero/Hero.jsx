import { useState, useEffect } from "react";

import "./Hero.css";
import Badge from "./components/badge/Badge";
import Button from "../Button/Button";
import Slider from "./components/slider/Slider";
import vrlogo from "../../assets/vrlogo.png";
import Arrow from "../../assets/arrow.svg";
import Music from "../../assets/music.svg";
import Gpad from "../../assets/gpad.svg";
import Hive from "../../assets/gamerz-hive.svg";
import Starbadge from "../../assets/starbadge.svg";
import Paystack from "../../assets/paystack.png";
import Time from "../../assets/time-large.svg";
import Brand from "../../assets/brandafrik.svg";
import Gift from "../../assets/gift-large.svg";
import GiftPal from "../../assets/gift-palll.svg";
import Tickets from "./components/Tickets/Tickets";
import Merch from "./components/Merch/Merch";
import Sponsor from "./components/Sponsor/Sponsor";
import Footer from "./components/Footer/Footer";
import Carosel from "./components/carosel/Carosel";

function Hero() {
  const sliders = [
    {
      backgroundColor: "#004c2e",
      source: vrlogo,
      subheading: "VIRTUAL REALITY ESCAPE ROOM",
      content: `This is an exciting opportunity to test problem-solving skills in a 
      virtual world. Participants will have the chance to immerse
      themselves in a thrilling VR experience and solve puzzles to escape
      the room`,
      width: "490px",
      powered_by: Arrow,
      margin: "20px",
      top: "-12rem",
      right: "25rem",
      power: "powered by",
    },
    {
      backgroundColor: "#004c2e",
      source: Music,
      subheading: "NON-STOP JAMMING",
      content: `This is an opportunity to relax and unwind with non-stop live
      performances from local artistes. It is a chance to enjoy live music,
      dance and have fun while networking with other tech professionals.`,
      width: "490px",
      margin: "70px",
      top: "-7rem",
      right: "25rem",
      sub_margin: "3rem",
    },
    {
      backgroundColor: "#cf1e4c",
      source: Gpad,
      subheading: "ESPORT TOURNAMENT",
      content: `This is an exciting opportunity for attendees to showcase their
        gaming skills and compete against their peers. Participants will
        have the chance to play the latest games and win prizes..`,
      width: "490px",
      margin: "40px",
      top: "-8rem",
      powered_by: Hive,
      right: "25rem",
      sub_margin: "2rem",
      power: "powered by",
    },

    {
      backgroundColor: "#004c2e",
      source: Starbadge,
      subheading: "TECH TRIVIA",
      content: `Take a spin for your chance to win amazing prizes! This activity is
        open to everyone, with exciting rewards up for grabs. Don't miss out
        on the fun—show up, spin, and see what you'll win!`,
      width: "490px",
      powered_by: Paystack,
      margin: "20px",
      top: "-12rem",
      right: "25rem",
      power: "powered by",
      sub_margin: "3rem",
    },

    {
      backgroundColor: "#034aa6",
      source: Time,
      subheading: "SCAVENGER HUNT",
      content: `The is a fun way to explore the event, test your tech knowledge and
      win prizes. Participants will have to solve clues and complete
      challenges to find hidden items. It's a perfect blend of adventure
      and learning.`,
      width: "490px",
      powered_by: Brand,
      imageHeight: "38rem",
      margin: "20px",
      top: "-12rem",
      right: "25rem",
      power: "powered by",
      sub_margin: "20px",
    },

    {
      backgroundColor: "#ffaa00",
      source: Gift,
      subheading: "SPIN THE WHEEL",
      content: `Take a spin for your chance to win amazing prizes! This activity is
      open to everyone, with exciting rewards up for grabs. Don't miss out
      on the fun—show up, spin, and see what you'll win!`,
      width: "490px",
      powered_by: GiftPal,
      // imageHeight: "38rem",
      margin: "20px",
      top: "-12rem",
      right: "25rem",
      power: "powered by",
      sub_margin: "3rem",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliders.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [sliders.length]);

  return (
    <div>
      <p className="first_p">
        JOIN THE <br />
        TECH PARTY <br />
        OF THE YEAR
      </p>
      <Badge
        content={"Fri. Nov 28th, 2025 TBD 6PM till late"}
        leftPad={"2rem"}
        rightPad={"2rem"}
        top={"300px"}
        right={"600px"}
      />
      <p className="small_p">
        Join Code and Cocktails for a relaxed mix of tech, drinks, and good{" "}
        <br />
        company. Whether you're a pro or just starting out, connect with
        <br />
        others,share ideas, and have fun building something great together
        <br />
        —no pressure,just good vibes!
      </p>
      <div className="button_container">
        <Button
          btn_content="Get Ticket"
          backgroundColor="#f7a100"
          shadowColor="red"
          color="white"
        />
      </div>
      <Carosel />

      {/* SLIDER SECTION */}
      <div className="slider_carousel">
        <div
          className="slider_track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {sliders.map((props, index) => (
            <Slider key={index} {...props} />
          ))}
        </div>
      </div>

      {/* Ticket section */}
      <Tickets />

      {/* Merch Section */}
      <Merch />

      {/* Sponsor section */}
      <Sponsor />

      {/* Footer section */}
      <Footer />
    </div>
  );
}

export default Hero;
