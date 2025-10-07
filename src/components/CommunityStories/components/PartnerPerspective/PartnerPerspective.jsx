import "./PartnerPerspective.css";
import PPcard from "./PPcard/PPcard";
import CediR from "../../../../assets/Sponsor_Assets/cedi-rates-logo.svg";
import Junkies from "../../../../assets/pcal_assets/junkies.svg";
import Lime from "../../../../assets/Sponsor_Assets/lime-ar.svg";
import Vr from "../../../../assets/pcal_assets/vr-logo.svg";
import Ux from "../../../../assets/Sponsor_Assets/ux-ghana-logo.svg";
import kk from "../../../../assets/pcal_assets/kweku-tech-logo.svg";
import Bafrik from "../../../../assets/Sponsor_Assets/brandafrik-logo.svg";
import O2 from "../../../../assets/Sponsor_Assets/oxegene-black.svg";

function PartnerPerspective() {
  return (
    <div className="PP_body">
      <div className="ppcal_track">
        <div className="ppcard_container">
          <div className="pp_carousel_track">
            {/* first */}
            <PPcard
              backgroundcolor="#e5f9e5"
              bordercolor="yellow"
              Mcontent="Partnering with Sedem and his team was an easy decision for us. We’ve long believed that tech professionals need more opportunities to step away from screens and genuinely enjoy ourselves. C&C stood out as the only group actively addressing that need, and we were more than happy to get on board and support their mission."
              Hcontent="Helping techies unwind and have fun."
              linecolor="pink"
              linemargin="7rem"
              sorce={Junkies}
              Pcard_height="1rem"
              Pcard_width="auto"
              PPF_contents="Samuel Allotey"
              PPF_contents_2nd="Co-founder | thedsgnjunkies"
              margin_top="10px"
            />
            {/* second card */}
            <PPcard
              backgroundcolor="#fbebeb"
              bordercolor="blue"
              Mcontent="Code & Cocktails boasts a well-connected, vibrant tech community. This is where we go to catch up on trends, friends and what's new in Ghana's tech space."
              Hcontent="Contribution to ecosystem growth and exposure to other industry stakeholders."
              linecolor="pink"
              linemargin="11rem"
              sorce={CediR}
              Pcard_height="4rem"
              Pcard_width="auto"
              PPF_contents="Ralph Gerbs"
              PPF_contents_2nd="Founder | CediRates"
            />
            {/* third card */}
            <PPcard
              backgroundcolor="#ececf5"
              bordercolor="green"
              Mcontent="Code & Cocktails boasts a well-connected, vibrant tech community. This is where we go to catch up on trends, friends and what's new in Ghana's tech space."
              Hcontent="Commmunity Data Collection & Reports. Engaged with +100 developersss."
              linecolor="blue"
              linemargin="11rem"
              sorce={Lime}
              Pcard_height="1rem"
              Pcard_width="auto"
              PPF_contents="Stephan-Marie Rubayiza"
              PPF_contents_2nd="Product Manager | LimeAR"
              margin_top="20px"
            />
            {/* Forth card */}
            <PPcard
              backgroundcolor="#fff8e5"
              bordercolor="yellow"
              Mcontent="Code and Cocktails presents our organization with the oportunity to reach out to new users and get feedback from the community. It's also an extremely fun place to be."
              Hcontent="Collected valuable insights from diverse users."
              linecolor="orange"
              linemargin="13rem"
              sorce={Vr}
              Pcard_height="3rem"
              Pcard_width="auto"
              PPF_contents="Robertson Nortey"
              PPF_contents_2nd="Developer | Leti Arts"
              margin_top="10px"
            />
            {/* Fifth */}
            <PPcard
              backgroundcolor="#ececf5"
              bordercolor="#e5f9e5"
              Mcontent="Doubling as talent pipeline and community fun event to showcase our local talent skill/ recruitment and exposing our local talents to opportunities of network and mural values."
              Hcontent="Contribution to our local talent and community growth."
              linecolor="greenyellow"
              linemargin="13rem"
              sorce={Ux}
              Pcard_height="4rem"
              Pcard_width="auto"
              PPF_contents="Eric Puplampu"
              PPF_contents_2nd="Co-founder | UX Ghana"
              margin_top="10px"
            />
            {/* Sixth card */}
            <PPcard
              backgroundcolor="#fbebeb"
              bordercolor="orange"
              Mcontent="KwekuTech highlights Africa's growing tech scene through storytelling, events, and community content. Partnering with Code and Cocktails aligns perfectly with this mission."
              Hcontent="Boosted brand and community impact."
              linecolor="#db4437"
              linemargin="15rem"
              sorce={kk}
              Pcard_height="4rem"
              Pcard_width="auto"
              PPF_contents="Raphael Mensah"
              PPF_contents_2nd="Co-founder | KwekuTech"
              margin_top="10px"
            />
            {/* Seveth card */}
            <PPcard
              backgroundcolor="#ececf5"
              bordercolor="green"
              Mcontent="Partnering helped us to document and share the stories, energy, and impact of Ghana’s tech community—turning each event into powerful visual stories that inspire and amplify innovation."
              linecolor="blue"
              linemargin="15rem"
              sorce={Bafrik}
              Pcard_height="4rem"
              Pcard_width="auto"
              PPF_contents="Yaw Kyei Boahene"
              PPF_contents_2nd="Lead Software Engineer | BrandAfrik"
              margin_top="10px"
            />
            {/* 8th card */}
            <PPcard
              backgroundcolor="#fff8e5"
              bordercolor="green"
              Mcontent="It's been incredible collaborating with the Code&Cocktail team on building a stronger visual identity. I believe great representation is crucial for organisations and teams who are making real impact. It's been an absolute joy seeing how the team has taken the brand ID and ran with it."
              Hcontent="Contributed to the new and updates brand system."
              linecolor="orange"
              linemargin="8.5rem"
              sorce={O2}
              Pcard_height="2rem"
              Pcard_width="auto"
              PPF_contents="Elaad Nutakor"
              PPF_contents_2nd="Entrepreneur  | Oxygene"
              margin_top="15px"
            />

            {/* Second set */}
            {/* First card */}
            <PPcard
              backgroundcolor="#e5f9e5"
              bordercolor="yellow"
              Mcontent="Partnering with Sedem and his team was an easy decision for us. We’ve long believed that tech professionals need more opportunities to step away from screens and genuinely enjoy ourselves. C&C stood out as the only group actively addressing that need, and we were more than happy to get on board and support their mission."
              Hcontent="Helping techies unwind and have fun."
              linecolor="pink"
              linemargin="7rem"
              sorce={Junkies}
              Pcard_height="1rem"
              Pcard_width="auto"
              PPF_contents="Samuel Allotey"
              PPF_contents_2nd="Co-founder | thedsgnjunkies"
              margin_top="10px"
            />
            {/* second card */}
            <PPcard
              backgroundcolor="#fbebeb"
              bordercolor="blue"
              Mcontent="Code & Cocktails boasts a well-connected, vibrant tech community. This is where we go to catch up on trends, friends and what's new in Ghana's tech space."
              Hcontent="Contribution to ecosystem growth and exposure to other industry stakeholders."
              linecolor="pink"
              linemargin="11rem"
              sorce={CediR}
              Pcard_height="4rem"
              Pcard_width="auto"
              PPF_contents="Ralph Gerbs"
              PPF_contents_2nd="Founder | CediRates"
            />
            {/* third card */}
            <PPcard
              backgroundcolor="#ececf5"
              bordercolor="green"
              Mcontent="Code & Cocktails boasts a well-connected, vibrant tech community. This is where we go to catch up on trends, friends and what's new in Ghana's tech space."
              Hcontent="Commmunity Data Collection & Reports. Engaged with +100 developersss."
              linecolor="blue"
              linemargin="11rem"
              sorce={Lime}
              Pcard_height="1rem"
              Pcard_width="auto"
              PPF_contents="Stephan-Marie Rubayiza"
              PPF_contents_2nd="Product Manager | LimeAR"
              margin_top="20px"
            />
            {/* Forth card */}
            <PPcard
              backgroundcolor="#fff8e5"
              bordercolor="yellow"
              Mcontent="Code and Cocktails presents our organization with the oportunity to reach out to new users and get feedback from the community. It's also an extremely fun place to be."
              Hcontent="Collected valuable insights from diverse users."
              linecolor="orange"
              linemargin="13rem"
              sorce={Vr}
              Pcard_height="3rem"
              Pcard_width="auto"
              PPF_contents="Robertson Nortey"
              PPF_contents_2nd="Developer | Leti Arts"
              margin_top="10px"
            />
            {/* Fifth */}
            <PPcard
              backgroundcolor="#ececf5"
              bordercolor="#e5f9e5"
              Mcontent="Doubling as talent pipeline and community fun event to showcase our local talent skill/ recruitment and exposing our local talents to opportunities of network and mural values."
              Hcontent="Contribution to our local talent and community growth."
              linecolor="greenyellow"
              linemargin="13rem"
              sorce={Ux}
              Pcard_height="4rem"
              Pcard_width="auto"
              PPF_contents="Eric Puplampu"
              PPF_contents_2nd="Co-founder | UX Ghana"
              margin_top="10px"
            />
            {/* Sixth card */}
            <PPcard
              backgroundcolor="#fbebeb"
              bordercolor="orange"
              Mcontent="KwekuTech highlights Africa's growing tech scene through storytelling, events, and community content. Partnering with Code and Cocktails aligns perfectly with this mission."
              Hcontent="Boosted brand and community impact."
              linecolor="#db4437"
              linemargin="15rem"
              sorce={kk}
              Pcard_height="4rem"
              Pcard_width="auto"
              PPF_contents="Raphael Mensah"
              PPF_contents_2nd="Co-founder | KwekuTech"
              margin_top="10px"
            />
            {/* Seveth card */}
            <PPcard
              backgroundcolor="#ececf5"
              bordercolor="green"
              Mcontent="Partnering helped us to document and share the stories, energy, and impact of Ghana’s tech community—turning each event into powerful visual stories that inspire and amplify innovation."
              linecolor="blue"
              linemargin="15rem"
              sorce={Bafrik}
              Pcard_height="4rem"
              Pcard_width="auto"
              PPF_contents="Yaw Kyei Boahene"
              PPF_contents_2nd="Lead Software Engineer | BrandAfrik"
              margin_top="10px"
            />
            {/* 8th card */}
            <PPcard
              backgroundcolor="#fff8e5"
              bordercolor="green"
              Mcontent="It's been incredible collaborating with the Code&Cocktail team on building a stronger visual identity. I believe great representation is crucial for organisations and teams who are making real impact. It's been an absolute joy seeing how the team has taken the brand ID and ran with it."
              Hcontent="Contributed to the new and updates brand system."
              linecolor="orange"
              linemargin="8.5rem"
              sorce={O2}
              Pcard_height="2rem"
              Pcard_width="auto"
              PPF_contents="Elaad Nutakor"
              PPF_contents_2nd="Entrepreneur  | Oxygene"
              margin_top="15px"
            />
          </div>
        </div>
      </div>

      {/* Partner perspective text */}
      <div className="pp_text_area">
        <h2 className="pp_h2">Partner Perspectives</h2>
        <p className="pp_p">
          Collaboration is our superpower. Our partners work with us to elevate
          voices, share knowledge, and create unforgettable moments. Hear how
          these partnerships help make each event more meaningful—for us and the
          wider tech community.
        </p>
      </div>

      <div className="sponsor_in">
        <h3 className="Spon_in_h3">Sponsor Insights</h3>
        <p className="spon_in_p">
          Behind every successful gathering is the support of sponsors who
          believe in our mission. Their stories reveal not just the value they
          bring, but also the value they gain by investing in community, talent,
          and innovation.
        </p>
      </div>
    </div>
  );
}

export default PartnerPerspective;
