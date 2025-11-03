import "./Engage.css";
import First_Pic from "./../../assets/Engage_assest/engage-hero-image-1.webp";
import Second_Pic from "./../../assets/Engage_assest/engage-hero-image-2.webp";
import Third_Pic from "./../../assets/Engage_assest/engage-hero-image-3.webp";
import Dev_card_pic1 from "./../../assets/Engage_assest/dev_card_pic1.webp";
import Dev_card_pic2 from "./../../assets/Engage_assest/dev_card_pic2.webp";
import Dev_card_pic3 from "./../../assets/Engage_assest/dev_card_pic3.webp";
import Net_mix_1 from "./../../assets/Engage_assest/networking-mixers-image-1.webp";
import Net_mix_2 from "./../../assets/Engage_assest/networking-mixers-image-2.webp";
import Net_mix_3 from "./../../assets/Engage_assest/networking-mixers-image-3.webp";
import Button from "../Button/Button";
import Footer from "./../Hero/components/Footer/Footer";
import Dropdown from "./components/Dropdown";

function Engage() {
  function DevCard({ imageSrc, text, bordercolor, backcolor }) {
    return (
      <div
        style={{
          "--dev_card_bcolor": bordercolor,
          "--dev_card_color": backcolor,
        }}
        className="devcard"
      >
        <img src={imageSrc} alt="developer" className="devcard_img" />
        <p className="devcard_text">{text}</p>
      </div>
    );
  }

  // How it works component
  function HowItWorks({ Num, Topic, How_conntent }) {
    return (
      <div className="How_it_works_card">
        <span className="Num">{Num}</span>
        <h5 className="Topic"> {Topic} </h5>
        <p className="How_p"> {How_conntent} </p>
      </div>
    );
  }

  return (
    <div className="Engage_Main">
      <div className="enage_hero_div">
        {/* Left side */}
        <div className="left_hero_div">
          <h3 className="left_hero_h3">
            Unlock Opportunities in the Tech Ecosystem
          </h3>
          <p className="left_hero_p">
            C&C Engage connects startups, entrepreneurs, and investors to the
            tech ecosystem, driving growth and opportunity.
          </p>
        </div>
        {/* right side */}
        <div className="right_hero_div">
          <div className="Image_wrapperr">
            <div className="pic_box_1">
              <img src={First_Pic} alt="pic" className="First_pic" />
            </div>
            <div className="pic_box_2">
              <img src={Second_Pic} alt="pic" className="second_pic" />
            </div>
            <div className="pic_box_3">
              <img src={Third_Pic} alt="pic" className="third_pic" />
            </div>
          </div>
        </div>
      </div>
      {/* next section Card sec */}

      <div className="Custom_hackathons_div">
        <h3 className="Custom_hackathons_h3">Custom Hackathons</h3>
        <div className="strip_1">Product Launches</div>
        <div className="strip_2">Custom Hackathons</div>
        <div className="strip_3">Networking Mixers</div>

        {/* sub hackathon sec */}
        <p className="Custom_hackathons_p">
          Engage developers and product teams through bespoke hackathons
          tailored to introduce your APIs, developer tools, or technology stack.
        </p>

        {/* three divs image section */}

        <div className="DevCard_section">
          <DevCard
            bordercolor="#ffaa00"
            backcolor="#ffaa00"
            imageSrc={Dev_card_pic1}
            text="Build awareness and adoption of your product among developers"
          />
          {/* second card */}
          <DevCard
            bordercolor="#ffaa00"
            backcolor="#ffaa00"
            imageSrc={Dev_card_pic2}
            text="Encourage innovation using your tools and software"
          />
          {/* third */}
          <DevCard
            bordercolor="#ffaa00"
            backcolor="#ffaa00"
            imageSrc={Dev_card_pic3}
            text="Award prizes and gain valuable feedback from participants."
          />
        </div>
        <div className="engage_btn_container">
          <Button
            btn_content="Start Now →"
            backgroundColor="red"
            shadowColor="#f7a100"
            color="black"
          />
        </div>
        {/*  */}
        <div className="Networking_mixers_div">
          <h3 className="Networking_mixers_h3">Netwoking Mixers</h3>
          <p className="networking_mixers_p">
            Your product deserves more than just a conventional launch. We
            partner with micro-influencers and niche communities to create
            unforgettable product launch
          </p>
        </div>
        <div className="green_cards_sec">
          <DevCard
            bordercolor="#00a863"
            backcolor="#00a863"
            imageSrc={Net_mix_1}
            text="Facilitate introductions to potential partners, clients, and collaborators"
          />
          {/* second */}
          <DevCard
            bordercolor="#00a863"
            backcolor="#00a863"
            imageSrc={Net_mix_2}
            text="Strengthen relationships within the tech community."
          />
          {/* third */}
          <DevCard
            bordercolor="#00a863"
            backcolor="#00a863"
            imageSrc={Net_mix_3}
            text="Build lasting networks that fuel growth and opportunities."
          />
        </div>
        <div className="engage_btn_container">
          <Button
            btn_content="Book a call →"
            backgroundColor="red"
            shadowColor="#f7a100"
            color="black"
          />
        </div>
      </div>

      {/*  */}
      <div className="p_launch_party_div">
        <h3 className="p_launch_party_h3">Product Launch Parties</h3>
        <p className="p_launch_party_p">
          Your product deserves more than just a conventional launch. We partner
          with micro-influencers and niche communities to create unforgettable
          product launch
        </p>
      </div>
      <div className="blue_cards_div">
        <DevCard
          bordercolor="#17bdff"
          backcolor="#17bdff"
          imageSrc={Dev_card_pic1}
          text="Generate buzz and excitement among your target audience"
        />{" "}
        <DevCard
          bordercolor="#17bdff"
          backcolor="#17bdff"
          imageSrc={Dev_card_pic1}
          text="Put your product in front of the right people - tech-savvy users, developers, and investors."
        />{" "}
        <DevCard
          bordercolor="#17bdff"
          backcolor="#17bdff"
          imageSrc={Dev_card_pic1}
          text="Build lasting networks that fuel growth and opportunities"
        />
      </div>
      <div className="blue_btn_container">
        <Button
          btn_content="Let's get started →"
          backgroundColor="red"
          shadowColor="#f7a100"
          color="black"
        />
      </div>

      {/* Hpw it works section */}

      <h3 className="How_it_works_h3">How It Works</h3>
      <div className="how_it_works_div">
        <HowItWorks
          Num="1"
          Topic="Fill Out Our Simple Form"
          How_conntent="Let us know which service you're interested in, your budget, and what you aim to achieve."
        />
        <HowItWorks
          Num="2"
          Topic="Book a Consultation"
          How_conntent="We’ll review your details and schedule a personalized call to dive into how we can help you."
        />
        <HowItWorks
          Num="3"
          Topic="Kick Off Your Event"
          How_conntent="Whether it’s a hackathon, mixer, or product launch, we’ll take care of the details and ensure it’s a success."
        />
      </div>
      <div className="how_btn_container">
        <Button
          btn_content="Tell us what you need →"
          backgroundColor="red"
          shadowColor="#00a863"
          color="black"
        />
      </div>

      {/* Questions section */}
      <div className="ask_q_div">
        <h3 className="Ask_q_h3">You've got Questions?</h3>
        <h3 className="Ask_q_h4">We've got answers.</h3>
        {/*  */}

        <div className="dropd_container">
          <Dropdown
            title="How are your hackathons different from others?"
            description="Our hackathons are uniquely designed around your product or technology. We introduce your APIs, tools, or platform to a carefully selected group of developers and product people, ensuring maximum engagement and relevance."
            con="1"
          />
          <Dropdown
            title="What’s involved in planning a product launch party?"
            description="We handle everything-from planning the venue and logistics to partnering with micro-influencers who can authentically promote your product to their niche audiences. Our goal is to create a launch that resonates and drives results."
            con="2"
          />
          <Dropdown
            title="What budget should i have for these services?"
            description="Budgets vary depending on the scope of the event and services required. Fill out our form with your specific needs, and we’ll provide a tailored proposal that fits your budget."
            con="3"
          />
          <Dropdown
            title="How do i know if a networking mixer is right for me?"
            description="Our mixers are perfect if your're looking to connect with key players in the tech ecosystem-whether for investment, partnerships or simply expanding your network. We carefully curate the guest list to ensure you meet the right people."
            con="4"
          />
          <Dropdown
            title="What kind of companies do you work with?"
            description="We work with startups, entrepreneurs, and established `businesses looking to enter new markets, introduce new products, or grow their community. Our services are tailored to meet the needs of tech-driven companies at all stages."
            con="5"
          />
        </div>
        {/* Get in touch */}
        <div className="get_touch_div">
          <span>Still have a question?</span>
          <a href="mailto:tinobarros301@gmail.com?" className="mail_a">
            Get In Touch
          </a>
        </div>
      </div>
      {/* Light bulb section */}
      <div className="light_bulb_div">
        <h2 className="bulb_h2">Ready to Get Started?</h2>
        <p className="bulb_p">
          Whether it's a hackathon, mixer, or product launch, we're here to help
          you connect, engage, and grow. Tell us what you need, and we'll get in
          touch with a custom proposal tailored to your goals.
        </p>
        <Button
          btn_content="Start your journey →"
          backgroundColor="#17bdff"
          shadowColor="#c90438"
          color="white"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Engage;
