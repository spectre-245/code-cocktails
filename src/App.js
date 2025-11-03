import "./App.css";
import CommunityStories from "./components/CommunityStories/CommunityStories";
import All from "./components/CommunityStories/components/All/All";
import SubForm from "./components/CommunityStories/components/ShareStory/components/SubForm/SubForm";
import EcoSurvey from "./components/EcoSurvey/EcoSurvey";
import Engage from "./components/Engage/Engage";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import PastEvents from "./components/PastEvents/PastEvents";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* Contents */}
        <div className="contents">
          <Switch>
            <Route exact path="/">
              <Hero />
            </Route>
            <Route path="/PastEvents">
              <PastEvents />
            </Route>
            <Route exact path="/CommunityStories">
              <CommunityStories />
            </Route>
            <Route path="/CommunityStories/all">
              <All />
            </Route>
            <Route path="/CommunityStories/submission">
              <SubForm />
            </Route>
            <Route exact path="/EcosystemSurvey">
              <EcoSurvey />
            </Route>
            <Route exact path="/Engage">
              <Engage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
