// import { Link } from "react-router-dom";
import spotifyLogo from "./images/spotify-logo-black.png";
import brutusLogo from "./images/brutus-lock-logo.png";
import pedicabs from "./images/pedicabs.avif";
import ProjectCard from "./ProjectCard";

const HomePage = () => {
  return (
    <div className="px-4 py-1 font-serif">
      {/* title */}
      <p className="text-4xl font-semibold pt-1 pb-5">My Projects</p>

      {/* cards */}
      <div className="grid grid-cols-3 gap-3">
        {/* CUSTOM SHUFFLE */}
        <ProjectCard
          image={spotifyLogo}
          imageAlt="Spotify Logo Black"
          title="Spotify Custom Shuffle"
          subtitle="Create subplaylists from your playlists"
          modalName="SpotifyModal"
          modalDescription="A partner and I created a full-stack Spotify web application
                    in which the user can create sub-playlists or shuffles from
                    their existing playlists based on specific filters the user
                    inputs based on their preferences. We engineered the
                    back-end of accessing a user’s playlists and information
                    using TypeScript, Node.js, and Spotify’s API, and
                    streamlined a user-friendly front-end using HTML/CSS."
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
          modalDescription="..."
          githubLink="https://github.com/amaro52/chariot."
        />
      </div>
    </div>
  );
};

export default HomePage;
