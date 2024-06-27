import pedicabs from "./images/pedicabs.avif";
import brutusLogo from "./images/brutus-lock-logo.png";
import spotifyLogo from "./images/spotify-logo-black.png";
import drumKit from "./images/drum-kit.jpeg";
import simonGame from "./images/simon-game.jpeg";

const projectCards = [
  {
    image: spotifyLogo,
    imageAlt: "Spotify Logo Black",
    title: "Spotify Custom Shuffle",
    subtitle: "spotify subtitle",
    modalName: "SpotifyModal",
    modalDescription: <h2 className="font-bold ">About</h2>
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
          </p>,
    githibLink: "https://github.com/amaro52/spotify-custom-shuffle",
  },
  {
    image: brutusLogo,
    imageAlt: "Brutus Logo",
    title: "Brutus Bike Lock",
    subtitle: "Security in motion",
    modalName: "BrutusModal",
    modalDescription: "...",
    githubLink: "https://github.com/amaro52/brutus-lock",
  },
];

export default projectCards;
