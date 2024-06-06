import { Link } from "react-router-dom";
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

// projectCard(spotifyLogo, "Spotify Logo Black", "Spotify Custom Shuffle", "Create subplaylists from your playlists", " A partner and I created a full-stack Spotify web application in
//                 which the user can create sub-playlists or shuffles from their
//                 existing playlists based on specific filters the user inputs
//                 based on their preferences. We engineered the back-end of
//                 accessing a user’s playlists and information using TypeScript,
//                 Node.js, and Spotify’s API, and streamlined a user-friendly
//                 front-end using HTML/CSS.")
// const projectCard = (
//   image: any,
//   imageAlt: string,
//   cardTitle: string,
//   tag: string,
//   modalDescription: string,
//   githubLink: string
// ) => {
//   const GITHUB_BUTTON = "GitHub Repo";

//   const DIALOG = document.getElementById("my_modal_2") as HTMLDialogElement;

//   return (
//     <div className="card card-compact image-full w-96 bg-primary shadow-xl inline-block">
//       <figure>
//         <img src={spotifyLogo} alt="Spotify Logo Black" />
//       </figure>
//       <div className="card-body">
//         <h2 className="card-title">Spotify Custom Shuffle</h2>
//         <p>
//           Create subplaylists from your playlists <p></p>
//         </p>
//         <div className="card-actions justify-end">
//           {/* Description Button */}
//           <button
//             className="btn"
//             onClick={() => (DIALOG as HTMLDialogElement).showModal()}
//           >
//             Decription
//           </button>
//           <dialog id="my_modal_2" className="modal">
//             <div className="modal-box text-neutral">
//               <h3 className="font-bold text-lg ">Spotify Custom Shuffle</h3>
//               <p className="py-4">
//                 A partner and I created a full-stack Spotify web application in
//                 which the user can create sub-playlists or shuffles from their
//                 existing playlists based on specific filters the user inputs
//                 based on their preferences. We engineered the back-end of
//                 accessing a user’s playlists and information using TypeScript,
//                 Node.js, and Spotify’s API, and streamlined a user-friendly
//                 front-end using HTML/CSS.
//               </p>
//             </div>
//             <form method="dialog" className="modal-backdrop">
//               <button>close</button>
//             </form>
//           </dialog>

//           {/* GitHub Repo Button */}
//           <button className="btn btn-secondary">
//             <Link
//               to="https://github.com/amaro52/spotify-custom-shuffle"
//               target="_blank"
//             >
//               {GITHUB_BUTTON}
//             </Link>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

export default HomePage;
