import Button from "../../../Button/Button";
import "./ShareStory.css";
import { Link } from "react-router-dom";

function ShareStory() {
  return (
    <div>
      <div className="story_div">
        <h1 className="story_h1">Share Your Story</h1>
        <p className="story_p">
          Have a Code & Cocktails story of your own? We'd love to hear it!
        </p>
        <Link to="/CommunityStories/submission" className="ss_link">
          <Button
            btn_content="Submit your story"
            backgroundColor="#00a561"
            shadowColor="#f8f9e5"
            color="Black"
          />
        </Link>
      </div>
    </div>
  );
}

export default ShareStory;
