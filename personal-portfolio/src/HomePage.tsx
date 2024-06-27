// import { Link } from "react-router-dom";
import pedicabs from "./images/pedicabs.avif";
import brutusLogo from "./images/brutus-lock-logo.png";
import spotifyLogo from "./images/spotify-logo-black.png";
import drumKit from "./images/drum-kit.jpeg";
import simonGame from "./images/simon-game.jpeg";
import ProjectCard from "./components/ProjectCard";

const HomePage = () => {
  return (
    <div className="px-4 py-1 font-serif">
      {/* title */}
      <p className="text-4xl font-semibold pt-1 pb-5">My Projects</p>


      {/* cards */}
      <div className="grid grid-cols-3 gap-4 py-4">
        {/* SIMON GAME */}
        <ProjectCard
          image={simonGame}
          imageAlt="Simon Game"
          title="Simon Game"
          subtitle="A game that challenges you to remember the pattern"
          modalName="SimonModal"
          modalDescription="..."
          githubLink="https://github.com/amaro52/simon-game"
        />
        {/* DRUM KIT */}
        <ProjectCard
          image={drumKit}
          imageAlt="Drum Kit"
          title="Keyboard Drum Kit"
          subtitle="Play the drums with your keyboard"
          modalName="drumKitModal"
          modalDescription="..."
          githubLink="https://github.com/amaro52/drum-kit"
        />
        {/* CUSTOM SHUFFLE */}
        <ProjectCard
          image={spotifyLogo}
          imageAlt="Spotify Logo Black"
          title="Spotify Custom Shuffle"
          subtitle="Create sub-playlists from your playlists"
          modalName="SpotifyModal"
          modalDescription=<p>
            <h2 className="font-bold ">About</h2>
            You probably have different playlists for different occastions,
            moods, etc. What if you could take it a step further, and create
            sub-playlists. You can filter one of your playlists by artist,
            album, era, and more, and create a sub-playlist with songs that
            match those specifications. Instead of adding those songs to the
            queue every single time, you instantly have a new playlist that you
            can use.
            <br />A partner and I created a full-stack Spotify web application
            in which the user can create sub-playlists or shuffles from their
            existing playlists based on specific filters the user inputs based
            on their preferences.
            <h2 className="font-bold pt-3">Tools</h2>
            We engineered the back-end of accessing and manipulating a user’s
            playlists and information using TypeScript, Node.js, and Spotify’s
            API, and streamlined a user-friendly front-end using HTML/CSS.
          </p>
          githubLink="https://github.com/amaro52/spotify-custom-shuffle"
        />

        {/* BRUTUS */}
        <ProjectCard
          image={brutusLogo}
          imageAlt="Brutus Logo"
          title="Brutus Bike Lock"
          subtitle="Security in motion"
          modalName="BrutusModal"
          modalDescription="..."
          githubLink="https://github.com/amaro52/brutus-lock"
        />

        {/* CHARIOT */}
        <ProjectCard
          image={pedicabs}
          imageAlt="Chariot bg"
          title="Chariot."
          subtitle="Ride-hauling service for pedicabs"
          modalName="ChariotModal"
          modalDescription=<p>
            <h2 className="font-bold ">Inspiration</h2>
            Around Austin, there are an abundance of high density events, from
            music festivals to Texas football games. One of the most common ways
            to get around is using the pedicabs. We were inspired and created
            the idea of creating an Uber-like product for pedicabs catered
            toward large, high-density events. Anyone with a pedicab can join
            our app as a driver, and riders can sign up as passengers and can
            see all the pedicab drivers in the area.
            <br />
            <h2 className="font-bold pt-3">Tools</h2>
            We used tools such as TypeScript, Next.js, Cloud Firebase, Stripe’s
            checkout session API for payments, and Google Maps’ Places API for
            navigation to power the back-end. For the front-end, we used
            React.js and HTML/CSS to develop a user friendly UI that makes the
            process of ordering rides and payment seamless.
          </p>
          githubLink="https://github.com/amaro52/chariot."
        />
      </div>
    </div>
  );
};

export default HomePage;
