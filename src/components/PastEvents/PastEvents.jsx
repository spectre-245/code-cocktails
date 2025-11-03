import Badge from "../Hero/components/badge/Badge";
import Carosel from "../Hero/components/carosel/Carosel";
import g1 from "../../assets/gallery_assets/past-image-1.webp";
import g2 from "../../assets/gallery_assets/past-image-2.webp";
import g3 from "../../assets/gallery_assets/past-image-3.webp";
import g4 from "../../assets/gallery_assets/past-image-4.webp";
import g5 from "../../assets/gallery_assets/past-image-5.webp";
import g6 from "../../assets/gallery_assets/past-image-6.webp";
import g7 from "../../assets/gallery_assets/past-image-7.webp";
import g8 from "../../assets/gallery_assets/past-image-8.webp";
import g9 from "../../assets/gallery_assets/past-image-9.webp";
import F1 from "../../assets/metric_assets/people.svg";
import F2 from "../../assets/metric_assets/international-reach-card-image.svg";
import F3 from "../../assets/metric_assets/online-presence-card-image.svg";
import Footer from "../Hero/components/Footer/Footer";
import "./PastEvents.css";
import Button from "../Button/Button";
import Metrics from "./components/Metrics/Metrics";
import PastSponsors from "./components/Metrics/PastSponsors/PastSponsors";

function PastEvents() {
  return (
    <div>
      <h3 className="Past_events_h3">
        PAST
        <br />
        EVENTS
      </h3>
      <Badge
        content={"Images from past events across the years"}
        leftPad={"9rem"}
        rightPad={"9rem"}
        top={"250px"}
        right={"450px"}
      />

      <div className="carosel_div">
        <Carosel />
      </div>

      {/* gallery section */}

      <div className="gallery_section">
        <h3 className="gallery_h">Images from the Past</h3>
        <div class="gallery">
          <div className="column">
            <img src={g1} alt="Pic 1" />
            <img src={g2} alt="Pic 2" className="g2" />
            <img src={g3} alt="Pic 3" />
          </div>
          <div className="column">
            <img src={g4} alt="Pic 1" />
            <img src={g5} alt="Pic 2" />
            <img src={g6} alt="Pic 3" className="g6" />
          </div>

          <div className="column">
            <img src={g7} alt="Pic 1" className="g7" />
            <img src={g8} alt="Pic 2" />
            <img src={g9} alt="Pic 3" />
          </div>
        </div>
        <div className="past_btn_container">
          <a href="https://photos.google.com/share/AF1QipNB6mEy8vEnm8cdeml0bfId4gBrle6GVc_2JMjy86VnymvFuS3BFiKEYziauQduUA?key=VkZMaVBremt4LXIxOXdYaHluUHhKR29fZHA4cjVB">
            <Button
              btn_content="See More Images"
              backgroundColor="#f7a100"
              shadowColor="red"
              color="white"
            />
          </a>
        </div>
      </div>

      {/* Metrics section */}
      <div className="Metric_main">
        <h3 className="metric_h3">Metrics From The Past</h3>
        <div className="Metrics_container">
          <Metrics
            source={F1}
            top={"9.5rem"}
            right={"10rem"}
            backgroundcolor={"#00a863"}
            heading={"Attendee Demographics"}
            content={
              "Tech Professionals, including software engineers, product designers, product managers and \nentrepreneurs\n"
            }
            length={"20rem"}
            rates={"1.1K"}
            height={"12rem"}
            padright={"17rem"}
            color={"white"}
          />

          <Metrics
            backgroundcolor={"#034aa6"}
            heading={"International Reach"}
            length={"20rem"}
            content={
              "Our event is attended by participants from all over the world, reflecting its global reach and \ndiverse international participation\n"
            }
            rates={"20+"}
            source={F2}
            top={"12.4rem"}
            right={"6.5rem"}
            padright={"17.5rem"}
            color={"white"}
          />

          <Metrics
            length={"15rem"}
            backgroundcolor={"#ffe4a9"}
            heading={"Online Presence"}
            content={
              "Our posts have organically achieved a reach of over 2.7M across the world. Our \nwebsite has received over 31K visits through organic reach and engagement \nthrough strategic partners and influencers."
            }
            source={F3}
            top={"3rem"}
            right={"6.5rem"}
            padright={"26.2rem"}
            color={"black"}
            height={"10rem"}
          />
        </div>
      </div>
      {/* Sponsor section */}
      <PastSponsors />
      {/* footer */}
      <Footer />
    </div>
  );
}

export default PastEvents;
