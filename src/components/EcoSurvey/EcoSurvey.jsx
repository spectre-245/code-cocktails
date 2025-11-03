import Button from "../Button/Button";
import AnimatedBar from "./AnimatedBar/AnimatedBar";
import Card_image from "./../../assets/ecoSurvey/card_image.png";
import "./EcoSurvey.css";
import Footer from "../Hero/components/Footer/Footer";

function EcoSurvey() {
  return (
    <div className="EcoSurvey_Main">
      <div className="ecosurvey_heading">
        <h2 className="EcoSuv_h2">Ecosystem Survey</h2>
        <p className="EcoSuv_headin_p">
          At the heart of our mission lies the need to understand the dynamics,
          challenges, and opportunities within our ecosystem.
        </p>
        <Button
          btn_content="Take 2025 Ecosystem Survey ↗"
          backgroundColor="#f7a100"
          shadowColor="#ffe4a9"
          color="black"
        />
      </div>

      {/* Animated Graph */}
      <div
        className="bar_container"
        style={{
          display: "flex",
          alignItems: "end",
          gap: "10px",
          height: "226px",
        }}
      >
        <AnimatedBar
          startHeight={30}
          maxHeight={500}
          color="#f8f9e5"
          duration={4}
          width={90}
        />
        <AnimatedBar
          startHeight={40}
          maxHeight={450}
          color="#f8f9e5"
          duration={4}
          width={90}
        />
        <AnimatedBar
          startHeight={60}
          maxHeight={320}
          color="#f8f9e5"
          duration={3}
          width={90}
        />
        <AnimatedBar
          startHeight={20}
          maxHeight={202}
          color="#f8f9e5"
          duration={5}
          width={90}
        />{" "}
        <AnimatedBar
          startHeight={60}
          maxHeight={135}
          color="#f8f9e5"
          duration={1.7}
          width={90}
        />{" "}
        <AnimatedBar
          startHeight={57}
          maxHeight={129}
          color="#f8f9e5"
          duration={1.9}
          width={90}
        />{" "}
        <AnimatedBar
          startHeight={62}
          maxHeight={142}
          color="#f8f9e5"
          duration={1.4}
          width={90}
        />{" "}
        <AnimatedBar
          startHeight={52}
          maxHeight={138}
          color="#f8f9e5"
          duration={1.3}
          width={90}
        />{" "}
        <AnimatedBar
          startHeight={65}
          maxHeight={140}
          color="#f8f9e5"
          duration={1.8}
          width={90}
        />{" "}
        <AnimatedBar
          startHeight={70}
          maxHeight={130}
          color="#f8f9e5"
          duration={2.2}
          width={90}
        />{" "}
        <AnimatedBar
          startHeight={80}
          maxHeight={270}
          color="#f8f9e5"
          duration={1.8}
          width={90}
        />{" "}
        <AnimatedBar
          startHeight={70}
          maxHeight={290}
          color="#f8f9e5"
          duration={2.4}
          width={90}
        />{" "}
        <AnimatedBar
          startHeight={60}
          maxHeight={320}
          color="#f8f9e5"
          duration={3}
          width={90}
        />
        <AnimatedBar
          startHeight={40}
          maxHeight={450}
          color="#f8f9e5"
          duration={4}
          width={90}
        />
        <AnimatedBar
          startHeight={30}
          maxHeight={500}
          color="#f8f9e5"
          duration={4}
          width={90}
        />
      </div>

      {/* next section */}
      <div className="previous_survey_div">
        <h3 className="Previous_survey_h3">Previous Survey</h3>
        <div className="survey_report_box">
          <div className="survey_report_card">
            <img src={Card_image} alt="pic" className="card_image" />
            <a
              href="https://www.codeandcocktails.live/ecosystem-survey-24.pdf"
              target="_blank" // opens in new tab
              rel="noopener noreferrer" // security best practice
              className="link_button"
            >
              <Button
                btn_content="Download Report"
                backgroundColor="#f7a100"
                shadowColor="#ffe4a9"
                width="22.1rem"
                color="black"
              />
            </a>
          </div>
          <div className="survey_report_card2"></div>
          <div className="survey_report_card3"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EcoSurvey;
