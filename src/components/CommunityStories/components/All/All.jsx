import Pcarocel from "../Pcarocel/Pcarocel";
import "./All.css";
import Jael from "./../../../../assets/pcal_assets/jael.webp";
import Adwoa from "./../../../../assets/pcal_assets/NanaAsdwoa.webp";
import SamAmpedu from "./../../../../assets/pcal_assets/SamuelAmpedu.webp";
import Samuel from "./../../../../assets/pcal_assets/Samuel.webp";
import Daniel from "./../../../../assets/pcal_assets/Daniel adu.svg";
import Boni from "./../../../../assets/pcal_assets/Boni.svg";
import Jewel from "./../../../../assets/pcal_assets/jewel selase.webp";
import Jnr from "./../../../../assets/pcal_assets/Abenkwan.webp";
import Kelvin from "./../../../../assets/pcal_assets/Kelvin yesutor.webp";
import Reginald from "./../../../../assets/pcal_assets/Nyarko.webp";
import Norbert from "./../../../../assets/pcal_assets/norbert.webp";
import Kle from "./../../../../assets/pcal_assets/kle.webp";
import Sed from "./../../../../assets/pcal_assets/Sed.webp";
import Ranshford from "./../../../../assets/pcal_assets/ransford.webp";
import ShareStory from "../ShareStory/ShareStory";

function All() {
  return (
    <div className="All_body">
      <div>
        <h1 className="Aten_h1">
          Attendee <br />
          Spotlights
        </h1>
        <div className="f_p_container">
          <p className="All_1st_p">
            Every face in the crowd has a story, and every story brings our
            events to life. Whether it's a breakthrough conversation, a first
            pitch, or newfound inspiration - our attendees share how Code &
            Cocktails helped shape their journey.
          </p>
        </div>
      </div>
      {/* Images */}
      <div className="cards_container_al">
        <div className="first_row">
          <Pcarocel
            source={Jael}
            Name={"Jehiel Britstot Houmanou"}
            Title={"Designer"}
            pcontents={
              "Code and Cocktails has actually been a fun thing for me considering the fact that I barely step out or move around due to majority of my life as a techie working from home. I attended the first edition and then the second edition and it has all be vibes having to just get your mind off brain cell killing projects.😂😂 Connecting with people was also a perk for me and I'm still not going to forget the number of Stanbic Bank devs I met😅 Hoping to attend the third edition too!"
            }
            classs={"Im1"}
            backgroundcolor={"#034aa6"}
          />
          {/* adwoa */}
          <Pcarocel
            source={Adwoa}
            Name={"Nana Adwoa"}
            Title={"Designer"}
            pcontents={
              "One of my favorite Code and Cocktails memories wasWye Tech When I met a group of developers Who had just launched their startup. Weended brainstorming ideas over drinks, and thatconversa-Hon gave me he courage to start pursuing my own project. Beyond music and energy,Stood out was how he event brought together people Who genuinely want Share, build, and inspire each other I left feeling more motivated then ever, I can't experience magic again is year."
            }
            classs={"Im2"}
          />
          {/* samuel apem */}
          <Pcarocel
            source={SamAmpedu}
            Name={"Samuel Ampadu"}
            Title={"Developer"}
            pcontents={
              "I was missing out on all the fun I used to have before entering tech until I saw this event 'Code Cup 25' and convinced my boys to hop on with me. We volunteered, networked and oh my days, we found gems!"
            }
            classs={"Im1"}
          />
        </div>
        {/* Second row */}
        <div className="second_row">
          <Pcarocel
            source={Samuel}
            Name={"Samuel Ampedu"}
            Title={"Developer"}
            pcontents={
              "later last year, I dove into tech and it was just me and my laptop. I was missing all the fun I used to have before I started tech until I saw an event I decided to be a part of 'Code Cup'"
            }
            classs={"Im3"}
          />
          {/* adwoa */}
          <Pcarocel
            source={Daniel}
            Name={"Daniel Adu Obuobi"}
            Title={"Tech Sales Analyst"}
            pcontents={
              "Code and Cocktails was an amazing experience! It was the perfect night of fun, allowing a techie like myself to finally destress from all the workplace pressure. The opportunity to connect and build new relationships with great people in the ecosystem was invaluable. I'm now eagerly awaiting the second edition!"
            }
            classs={"Im4"}
            backgroundcolor={"#ff005c"}
          />
          {/* samuel apem */}
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
        </div>
        {/* third container */}
        <div className="third_row">
          {/* paul */}
          <Pcarocel
            source={Boni}
            Name={"Paul Owusu Yeboah"}
            Title={"Product Designer"}
            pcontents={
              "I had such a great time at Code & Cocktails 2023 at Jambo Spaces! Honestly, I went in thinking it would be more of a straight-up tech event, but the vibe was so different—more like a party, just with a room full of techies. And whoever thinks techies don’t chill really needs to think again. I finally got to meet so many amazing designers I’d only known online, hear their journeys, exchange feedback, and even reconnect with some old SHS friends. The little hunt (filling a form by asking people for a price) added such a fun twist to the whole vibe. This year, I’m looking forward to an even better time—more learning, more connections, and of course, more fun. Can’t wait!"
            }
            classs={"Im5"}
            backgroundcolor={"#004c2f"}
          />
          {/* Benefo*/}
          <Pcarocel
            source={Boni}
            Name={"Benefo"}
            Title={"Developer"}
            pcontents={
              "Code & Cocktails was an absolute blast! ✨ It's inspiring to see so many of you connect, build, and share ideas while enjoying great company. Seeing our local tech community come together like this is why we love doing what we do. A huge thank you to everyone who joined us!"
            }
            classs={"Im4"}
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
            classs={"Im5"}
          />
        </div>
        {/* forth */}
        <div className="forth_row">
          <Pcarocel
            source={Jnr}
            Name={"Abenkwan Jnr"}
            Title={"Designer"}
            pcontents={
              "It's been amazing watching Code and Cocktails become the No. 1 gathering for techies to relax and have fun for once, especially for us creatives, y3br3 bi oo...hmmm...lol. I love the 'All work and no play makes Jack a dull boy' vibes it gives; massive props to the team.."
            }
            classs={"Im1"}
          />
          {/* Yesutor */}
          <Pcarocel
            source={Kelvin}
            Name={"Kelvin Yesutor"}
            Title={"Designer"}
            pcontents={
              "It is really amazing when it comes to Code and Cocktails. Each year, we make sure we give the best experience to fellow techies, helping them blow off steam after a tedious year. Leave the CODE, AND come for some COCKTAILS😉"
            }
            classs={"Im4"}
          />
          {/* reginald */}
          <Pcarocel
            source={Reginald}
            Name={"Reginald Nyarkp"}
            Title={"Developer"}
            pcontents={
              "After months of wrangling bugs and sprint deadlines, Code & Cocktails is my oasis — a rare night where the only crashing I worry about is into laughter. As a co-organizer, the best part? The brilliant devs, designers, and tech dreamers I get to meet, all wired by a shared love for tech... and maybe a good drink. Also, a note to all attending: the crown of Code & Cocktails Chess Champion shall rest firmly on my head. Come for the vibes, stay for the challenge and remember checkmate is personal. 🥂♟️"
            }
            classs={"Im2"}
          />
        </div>
        {/* fifth */}

        <div className="forth_row">
          <Pcarocel
            source={Norbert}
            Name={"Norbert Aberor"}
            Title={"Developer"}
            pcontents={
              "Code and cocktails is one of those events that you get an awesome experience from and always can’t wait for the next one. I made new connections and learned new things."
            }
            classs={"Im2"}
          />
          {/* klenam */}
          <Pcarocel
            source={Kle}
            Name={"Klenam"}
            Title={"Volunteer"}
            pcontents={
              "Volunteering at Code and Cocktails for two consecutive years has been an incredible experience. From meeting diverse people in the tech ecosystem to learning new things and having mad fun. It’s become the highlight of my year, and I always look forward to it. If you’re looking for an event that blends fun with meaningful networking, Code and Cocktails is the place to be!"
            }
            classs={"Im5"}
          />
          {/* sed */}
          <Pcarocel
            source={Sed}
            Name={"Sed"}
            Title={"Entrepreneur"}
            pcontents={
              "As the lead organizer, I love seeing you all at Code & Cocktails enjoy yourselves and build new friendships whilst making memories. It’s what keeps me and the team inspired to improve our events for the local tech community. Here’s to us 🥳🥂"
            }
            classs={"Im6"}
          />
        </div>
        <div className="forth_row">
          <Pcarocel
            source={Boni}
            Name={"Eric Puplampu"}
            Title={"Co-founder"}
            pcontents={
              "Doubling as talent pipeline and community fun event to showcase our local talent skill/ recruitment and exposing our local talents to opportunities of network and mural values."
            }
            classs={"Im4"}
            backgroundcolor={"#ffaa00"}
          />
          {/* eldad */}
          <Pcarocel
            source={Boni}
            Name={"Eldad Nutakor"}
            Title={"Entrepreneur"}
            pcontents={
              "Working with the Code&Cocktail team to strengthen their visual identity has been a joy. Great representation matters, and it’s been exciting to see the team bring the brand to life."
            }
            classs={"Im1"}
            backgroundcolor={"#ff005c"}
          />
          {/* Ranshford */}
          <Pcarocel
            source={Ranshford}
            Name={"Ransford Genesis"}
            Title={"Developer"}
            pcontents={
              "Code and Cocktails was a thrilling experience where I finally got to meet the amazing people I’ve been working with remotely, while also making new connections. It was a night filled with great conversations, laughter, and unforgettable dance moments that brought everyone together."
            }
            classs={"Im6"}
          />
        </div>
      </div>
      <ShareStory />
    </div>
  );
}

export default All;
