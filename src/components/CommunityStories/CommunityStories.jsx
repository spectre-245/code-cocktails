import "./CommunityStories.css";
import Scamera from "./../../assets/community-stories-camera.svg";
import Pcarocel from "./components/Pcarocel/Pcarocel";
import SamAmpedu from "./../../assets/pcal_assets/SamuelAmpedu.webp";
import Adwoa from "./../../assets/pcal_assets/NanaAsdwoa.webp";
import Samuel from "./../../assets/pcal_assets/Samuel.webp";
import Daniel from "./../../assets/pcal_assets/Daniel adu.svg";
import Boni from "./../../assets/pcal_assets/Boni.svg";
import Jnr from "./../../assets/pcal_assets/Abenkwan.webp";
import Kelvin from "./../../assets/pcal_assets/Kelvin yesutor.webp";
import Jael from "./../../assets/pcal_assets/jael.webp";
import Jewel from "./../../assets/pcal_assets/jewel selase.webp";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import ShareStory from "./components/ShareStory/ShareStory";
import PartnerPerspective from "./components/PartnerPerspective/PartnerPerspective";
import FullCarousel from "./components/FullCarousel/FullCarousel";
import paystack from "./../../assets/paystack-logo1.svg";
import wedey from "./../../assets/we-dey-manage-logo.svg";
import Gamez from "./../../assets/gamerz-hive-black-logo.svg";
import Footer from "../Hero/components/Footer/Footer";

function CommunityStories() {
  return (
    <div className="main_comStories">
      <div className="sub">
        <div className="text_container">
          <h3>
            Our
            <br /> Community
            <br /> Stories
          </h3>
          <img src={Scamera} alt="pic" loading="lazy" className="sCAM" />
          <p>
            At Code & Cocktails, collaboration and passion drive everything we
            do. Hear directly from the attendees, partners, and sponsors who
            make our events truly unforgettable.
          </p>
        </div>
      </div>

      {/* Attendee spotlight */}
      <div className="Attendee_spot">
        <h3>Attendee Spotlights</h3>
        <div className="Atende_pdiv">
          <p className="attende_p">
            Every face in the crowd has a story, and every story brings our
            events to life. Whether it's a breakthrough conversation, a first
            pitch, or newfound inspiration - our attendees share how Code &
            Cocktails helped shape their journey.
          </p>
        </div>
        {/* Pcarocel */}
        <div className="image_wrap">
          <div className="p_scroll_track">
            <div className="Pcarocel_div">
              <Pcarocel
                source={Adwoa}
                Name={"Nana Adwoa"}
                Title={"Designer"}
                pcontents={
                  "one of my favorite Code and Cocktails memories wasWye Tech When I met a group of developers Who had just launched their startup. Weended brainstorming ideas over drinks, and thatconversa-Hon gave me he courage to start pursuing my own project. Beyond music and energy,Stood out was how he event brought together people Who genuinely want Share, build, and inspire each other I left feeling more motivated then ever, I can't experience magic again is year."
                }
                classs={"Im1"}
              />
              {/* samAmpedu */}
              <Pcarocel
                source={SamAmpedu}
                Name={"Samuel Ampadu"}
                Title={"Developer"}
                pcontents={
                  "I was missing out on all the fun I used to have before entering tech until I saw this event 'Code Cup 25' and convinced my boys to hop on with me. We volunteered, networked and oh my days, we found gems!"
                }
                classs={"Im2"}
              />
              {/* Samuel */}
              <Pcarocel
                source={Samuel}
                Name={"Samuel Ampedu"}
                Title={"Developer"}
                pcontents={
                  "later last year, I dove into tech and it was just me and my laptop. I was missing all the fun I used to have before I started tech until I saw an event I decided to be a part of 'Code Cup'"
                }
                classs={"Im3"}
              />
              {/* Daniel */}
              <Pcarocel
                source={Daniel}
                Name={"Daniel Adu Obuobi"}
                Title={"Tech Sales Analyst"}
                pcontents={
                  "code and Cocktails was an amazing experience! It was the perfect night of fun, allowing a techie like myself to finally destress from all the workplace pressure. The opportunity to connect and build new relationships with great people in the ecosystem was invaluable. I'm now eagerly awaiting the second edition!"
                }
                classs={"Im4"}
                backgroundcolor={"#ff005c"}
              />
              {/* Boni */}
              <Pcarocel
                source={Boni}
                Name={"Boni Deladem"}
                Title={"Developer"}
                pcontents={
                  "Met with my mentor, chilled with people who helped me build my current skill, , finally spoke to a girl 😭"
                }
                classs={"Im5"}
                backgroundcolor={"#034aa6"}
              />
              {/* Jel */}
              <Pcarocel
                source={Jael}
                Name={"Jehiel Britstot Houmanou"}
                Title={"Designer"}
                pcontents={
                  "Met with my mentor, chilled with people who helped me build my current skill, , finally spoke to a girl 😭"
                }
                classs={"Im6"}
                backgroundcolor={"#034aa6"}
              />

              {/* Second settttt */}
              <Pcarocel
                source={Adwoa}
                Name={"Nana Adwoa"}
                Title={"Designer"}
                pcontents={
                  "one of my favorite Code and Cocktails memories wasWye Tech When I met a group of developers Who had just launched their startup. Weended brainstorming ideas over drinks, and thatconversa-Hon gave me he courage to start pursuing my own project. Beyond music and energy,Stood out was how he event brought together people Who genuinely want Share, build, and inspire each other I left feeling more motivated then ever, I can't experience magic again is year."
                }
                classs={"Im1"}
              />
              {/* samAmpedu */}
              <Pcarocel
                source={SamAmpedu}
                Name={"Samuel Ampedu"}
                Title={"Developer"}
                pcontents={
                  "I was missing out on all the fun I used to have before entering tech until I saw this event 'Code Cup 25' and convinced my boys to hop on with me. We volunteered, networked and oh my days, we found gems!"
                }
                classs={"Im2"}
              />
              {/* Samuel */}
              <Pcarocel
                source={Samuel}
                Name={"Samuel Ampedu"}
                Title={"Developer"}
                pcontents={
                  "later last year, I dove into tech and it was just me and my laptop. I was missing all the fun I used to have before I started tech until I saw an event I decided to be a part of 'Code Cup'"
                }
                classs={"Im3"}
              />
              {/* Daniel */}
              <Pcarocel
                source={Daniel}
                Name={"Daniel Adu Obuobi"}
                Title={"Tech Sales Analyst"}
                pcontents={
                  "code and Cocktails was an amazing experience! It was the perfect night of fun, allowing a techie like myself to finally destress from all the workplace pressure. The opportunity to connect and build new relationships with great people in the ecosystem was invaluable. I'm now eagerly awaiting the second edition!"
                }
                classs={"Im4"}
                backgroundcolor={"#ff005c"}
              />
              {/* Boni */}
              <Pcarocel
                source={Boni}
                Name={"Bini Deladem"}
                Title={"Developer"}
                pcontents={
                  "Met with my mentor, chilled with people who helped me build my current skill, , finally spoke to a girl 😭"
                }
                classs={"Im5"}
                backgroundcolor={"#034aa6"}
              />
              {/* Jel */}
              <Pcarocel
                source={Jael}
                Name={"Jehiel Britstot Houmanou"}
                Title={"Designer"}
                pcontents={
                  "Met with my mentor, chilled with people who helped me build my current skill, , finally spoke to a girl 😭"
                }
                classs={"Im6"}
                backgroundcolor={"#034aa6"}
              />
            </div>
          </div>
        </div>
        {/* second pcarol */}
        <div className="image_wrap">
          <div className="p_scroll_track">
            <div className="Pcarocel_div">
              <Pcarocel
                source={Jnr}
                Name={"Abenkwan Jnr"}
                Title={"Designer"}
                pcontents={
                  "It's been amazing watching Code and Cocktails become the No. 1 gathering for techies to relax and have fun for once, especially for us creatives, y3br3 bi oo...hmmm...lol. I love the 'All work and no play makes Jack a dull boy' vibes it gives; massive props to the team.."
                }
                classs={"Im1"}
              />
              {/* Kelvin*/}
              <Pcarocel
                source={Kelvin}
                Name={"Kelvin Yesutor"}
                Title={"Designer"}
                pcontents={
                  "It is really amazing when it comes to Code and Cocktails. Each year, we make sure we give the best experience to fellow techies, helping them blow off steam after a tedious year. Leave the CODE, AND come for some COCKTAILS😉"
                }
                classs={"Im2"}
              />
              {/* Boni */}
              <Pcarocel
                source={Boni}
                Name={"Boni Deladem"}
                Title={"Developer"}
                pcontents={
                  "Met with my mentor, chilled with people who helped me build my current skill, , finally spoke to a girl 😭"
                }
                classs={"Im3"}
                backgroundcolor={"#034aa6"}
              />
              {/* Paual */}
              <Pcarocel
                source={Boni}
                Name={"Paul Owusu Yeboah"}
                Title={"Product Designer"}
                pcontents={
                  "I had such a great time at Code & Cocktails 2023 at Jambo Spaces! Honestly, I went in thinking it would be more of a straight-up tech event, but the vibe was so different—more like a party, just with a room full of techies. And whoever thinks techies don’t chill really needs to think again. I finally got to meet so many amazing designers I’d only known online, hear their journeys, exchange feedback, and even reconnect with some old SHS friends. The little hunt (filling a form by asking people for a price) added such a fun twist to the whole vibe. This year, I’m looking forward to an even better time—more learning, more connections, and of course, more fun. Can’t wait!"
                }
                classs={"Im4"}
                backgroundcolor={"#004c2f"}
              />
              {/* Benefo */}
              <Pcarocel
                source={Boni}
                Name={"Benefo"}
                Title={"Developer"}
                pcontents={
                  "Code & Cocktails was an absolute blast! ✨ It's inspiring to see so many of you connect, build, and share ideas while enjoying great company. Seeing our local tech community come together like this is why we love doing what we do. A huge thank you to everyone who joined us!"
                }
                classs={"Im5"}
                backgroundcolor={"#ffaa00"}
              />
              {/* Jewel */}
              <Pcarocel
                source={Jewel}
                Name={"Jewel Selase"}
                Title={"Designer"}
                pcontents={
                  "It has been a truly marvelous experience from the very beginning. I’ve met wonderful people and teams at the event who have positively impacted me in one way or another, and I look forward to more opportunities like this."
                }
                classs={"Im6"}
              />
              {/* second setttt */}
              <Pcarocel
                source={Jnr}
                Name={"Abenkwan Jnr"}
                Title={"Designer"}
                pcontents={
                  "It's been amazing watching Code and Cocktails become the No. 1 gathering for techies to relax and have fun for once, especially for us creatives, y3br3 bi oo...hmmm...lol. I love the 'All work and no play makes Jack a dull boy' vibes it gives; massive props to the team.."
                }
                classs={"Im1"}
              />
              {/* Kelvin*/}
              <Pcarocel
                source={Kelvin}
                Name={"Kelvin Yesutor"}
                Title={"Designer"}
                pcontents={
                  "It is really amazing when it comes to Code and Cocktails. Each year, we make sure we give the best experience to fellow techies, helping them blow off steam after a tedious year. Leave the CODE, AND come for some COCKTAILS😉"
                }
                classs={"Im2"}
              />
              {/* Boni */}
              <Pcarocel
                source={Boni}
                Name={"Boni Deladem"}
                Title={"Developer"}
                pcontents={
                  "Met with my mentor, chilled with people who helped me build my current skill, , finally spoke to a girl 😭"
                }
                classs={"Im3"}
                backgroundcolor={"#034aa6"}
              />
              {/* Paual */}
              <Pcarocel
                source={Boni}
                Name={"Paul Owusu"}
                Title={"Product Designer"}
                pcontents={
                  "I had such a great time at Code & Cocktails 2023 at Jambo Spaces! Honestly, I went in thinking it would be more of a straight-up tech event, but the vibe was so different—more like a party, just with a room full of techies. And whoever thinks techies don’t chill really needs to think again. I finally got to meet so many amazing designers I’d only known online, hear their journeys, exchange feedback, and even reconnect with some old SHS friends. The little hunt (filling a form by asking people for a price) added such a fun twist to the whole vibe. This year, I’m looking forward to an even better time—more learning, more connections, and of course, more fun. Can’t wait!"
                }
                classs={"Im4"}
                backgroundcolor={"#004c2f"}
              />
              {/* Benefo */}
              <Pcarocel
                source={Boni}
                Name={"Benefo"}
                Title={"Developer"}
                pcontents={
                  "Code & Cocktails was an absolute blast! ✨ It's inspiring to see so many of you connect, build, and share ideas while enjoying great company. Seeing our local tech community come together like this is why we love doing what we do. A huge thank you to everyone who joined us!"
                }
                classs={"Im5"}
                backgroundcolor={"#ffaa00"}
              />
              {/* Jewel */}
              <Pcarocel
                source={Jewel}
                Name={"Jewel Selase"}
                Title={"Designer"}
                pcontents={
                  "It has been a truly marvelous experience from the very beginning. I’ve met wonderful people and teams at the event who have positively impacted me in one way or another, and I look forward to more opportunities like this."
                }
                classs={"Im6"}
              />
            </div>
          </div>
        </div>

        {/*  */}
        <div className="Com_btn_container">
          <Link to="/CommunityStories/all" className="com_link">
            <Button
              btn_content="View More"
              backgroundColor="#00a863"
              shadowColor="#f8f9e5"
              color="black"
            />
          </Link>
        </div>
      </div>
      <ShareStory />
      <PartnerPerspective />
      <div className="carousel_fwrapper">
        <div className="f_caro_box">
          <FullCarousel
            maxwidth="580px"
            backgroundColor="#e7f4ff"
            F_caro_content="Code & Cocktails stands out for its relaxed, welcoming vibe that makes it easy to connect authentically with people across the ecosystem. Paystack has always appreciated the casual atmosphere — it creates space for meaningful conversations, new connections, and genuine camaraderie. It’s one of the few events where you can engage deeply without the pressure, and that’s part of what makes it so special."
            f_caro_question="
          +Paystack made over 1000+ meaningful connections through Code & Cocktails.
          + The event drove impact in developer advocacy, product feedback, and hiring.
          + It deepened Paystack's visibility and immersion in Ghana's tech ecosystem.
          "
            linecolor="#4aadfe"
            linespace="7rem"
            FCal_src={paystack}
            foot_img_height="20px"
            fFoot_name="Kwadwo Owusu-Agyeman"
            fFoot_position="CEO | Paystack"
            fcarou_bgImage={paystack}
            bgTop="10rem"
            bgRight="60px"
          />

          <FullCarousel
            maxwidth="580px"
            backgroundColor="#fff5e6"
            F_caro_content="Code and Cocktails is the set of community engagement activities for devs and devs-adjacent professionals. I am excited to continue engaging, partnering & sponsoring future Code & Cocktail events via WDMA & PalmWine DJ & Friends."
            f_caro_question="
          + Contribution to ecosystem growth
          "
            linecolor="#fe9901"
            linespace="15.6rem"
            foot_img_height="7rem"
            FCal_src={wedey}
            fFoot_name="Emmanuel Agbeko Gamor"
            fFoot_position="Entrepreneur | We Dey Manage Academy"
            fcarou_bgImage={wedey}
          />
          {/* third */}

          <FullCarousel
            maxwidth="510px"
            backgroundColor="#fff5e6"
            F_caro_content="Very well organized program. Had a great time networking and meeting quite a lot of people I had not seen for a while. Really great music and vibes. It really brought the tech community together."
            f_caro_question="
          + Made 20+ connections with software engineers and founders.
          + Recruited 5 developers for Touch Stack Technologies.
          "
            linecolor="#ffb800"
            linespace="14.2rem"
            foot_img_height="5rem"
            FCal_src={Gamez}
            fFoot_name="Brian Adjei-Otchwemah"
            fFoot_position="Co-founder | GamerzHive"
            fcarou_bgImage={Gamez}
            bgTop="10rem"
            // bgRight="60px"
          />

          {/* seccc */}
          <FullCarousel
            maxwidth="580px"
            backgroundColor="#e7f4ff"
            F_caro_content="Code & Cocktails stands out for its relaxed, welcoming vibe that makes it easy to connect authentically with people across the ecosystem. Paystack has always appreciated the casual atmosphere — it creates space for meaningful conversations, new connections, and genuine camaraderie. It’s one of the few events where you can engage deeply without the pressure, and that’s part of what makes it so special."
            f_caro_question="
          +Paystack made over 1000+ meaningful connections through Code & Cocktails.
          + The event drove impact in developer advocacy, product feedback, and hiring.
          + It deepened Paystack's visibility and immersion in Ghana's tech ecosystem.
          "
            linecolor="#4aadfe"
            linespace="7rem"
            FCal_src={paystack}
            foot_img_height="20px"
            fFoot_name="Kwadwo Owusu-Agyeman"
            fFoot_position="CEO | Paystack"
            fcarou_bgImage={paystack}
            bgTop="10rem"
            bgRight="60px"
          />

          <FullCarousel
            maxwidth="580px"
            backgroundColor="#fff5e6"
            F_caro_content="Code and Cocktails is the set of community engagement activities for devs and devs-adjacent professionals. I am excited to continue engaging, partnering & sponsoring future Code & Cocktail events via WDMA & PalmWine DJ & Friends."
            f_caro_question="
          + Contribution to ecosystem growth
          "
            linecolor="#fe9901"
            linespace="15.6rem"
            foot_img_height="7rem"
            FCal_src={wedey}
            fFoot_name="Emmanuel Agbeko Gamor"
            fFoot_position="Entrepreneur | We Dey Manage Academy"
            fcarou_bgImage={wedey}
          />
          {/* third */}

          <FullCarousel
            maxwidth="550px"
            backgroundColor="#fff5e6"
            F_caro_content="Very well organized program. Had a great time networking and meeting quite a lot of people I had not seen for a while. Really great music and vibes. It really brought the tech community together."
            f_caro_question="
          + Made 20+ connections with software engineers and founders.
          + Recruited 5 developers for Touch Stack Technologies.
          "
            linecolor="#fe9901"
            linespace="15.6rem"
            foot_img_height="7rem"
            FCal_src={Gamez}
            fFoot_name="Brian Adjei-Otchwemah"
            fFoot_position="Co-founder | GamerzHive"
            fcarou_bgImage={Gamez}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CommunityStories;
