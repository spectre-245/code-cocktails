import "./SubForm.css";
import upload from "./../../../../../../assets/upload.png";
import Sticker from "./../../../../../../assets/pcal_assets/Daniel adu.svg";
import Button from "../../../../../Button/Button";
import Footer from "../../../../../Hero/components/Footer/Footer";

function SubForm() {
  return (
    <div className="s_f_body">
      <div className="s_f_text_container">
        <div className="s_f_subdiv">
          <h1 className="s_f_h1">Share Your Experience As An Attendee</h1>
          <p className="s_f_p">
            Below is a simple form to collect your Code & Cocktails experience.
          </p>

          {/* formmmm */}
          <form className="S_f_form">
            <span className="name_span">Full Name</span>
            <input placeholder="eg. John Doe" className="name_inpt" />
            <span className="name_span">Email</span>
            <input placeholder="eg. jon@gmail.com" className="name_inpt" />
            <span className="name_span">Role</span>
            <select className="select_s">
              <option value="" disabled selected hidden className="opt1">
                -- Select an option --
              </option>
              <option value="Developer">Developer</option>
              <option value="Product Designer">Product Designer</option>
              <option value="Designer">Designer</option>
              <option value="Digital Marketer">Digital Marketer</option>
              <option value="Entrepreneur">Entrepreneur</option>
              <option value="others">others</option>
            </select>
            <div className="line"></div>
            <span className="profile_span">Profile Photo[Optional]</span>
            <button className="btn_img">
              <img src={upload} alt="pic" loading="lazy" className="img_btn" />
              Click To Upload
            </button>
          </form>
        </div>
      </div>
      <div className="Text_area_container">
        <div className="text_sub_container">
          <h3 className="Your_s_con_h3">Your story (max. 300 characters)</h3>
          <textarea
            placeholder="Share your experience here"
            className="text_area"
          />
          <img src={Sticker} alt="pic" className="sticker" />
          <Button
            btn_content="Get Ticket"
            backgroundColor="#f7a100"
            shadowColor="#ffe4a9"
            color="black"
            width="35rem"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SubForm;
