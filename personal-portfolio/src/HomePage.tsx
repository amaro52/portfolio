import { Link } from "react-router-dom";
import spotifyLogo from "./images/spotify-logo-black.png";
import brutusLogo from "./images/brutus-lock-logo.png";
import pedicabs from "./images/pedicabs.avif";

const HomePage = () => {
  const GITHUB_BUTTON = "GitHub Repo";
  const DIALOG = document.getElementById("my_modal_2") as HTMLDialogElement;

  return (
    <div className="px-4 py-1 font-serif">
      {/* title */}
      <p className="text-4xl font-semibold pt-1 pb-5">My Projects</p>

      {/* cards */}
      <div className="grid grid-cols-3 gap-4">
        {/* CUSTOM SHUFFLE */}
        <div className="card card-compact image-full w-96 bg-primary shadow-xl inline-block">
          <figure>
            <img src={spotifyLogo} alt="Spotify Logo Black" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Spotify Custom Shuffle</h2>
            <p>
              Create subplaylists from your playlists <p></p>
            </p>
            <div className="card-actions justify-end">
              {/* Description Button */}
              <button
                className="btn"
                onClick={() => (DIALOG as HTMLDialogElement).showModal()}
              >
                Decription
              </button>
              <dialog id="my_modal_2" className="modal">
                <div className="modal-box text-neutral">
                  <h3 className="font-bold text-lg ">Spotify Custom Shuffle</h3>
                  <p className="py-4">
                    A partner and I created a full-stack Spotify web application
                    in which the user can create sub-playlists or shuffles from
                    their existing playlists based on specific filters the user
                    inputs based on their preferences. We engineered the
                    back-end of accessing a user’s playlists and information
                    using TypeScript, Node.js, and Spotify’s API, and
                    streamlined a user-friendly front-end using HTML/CSS.
                  </p>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>

              {/* GitHub Repo Button */}
              <button className="btn btn-secondary">
                <Link
                  to="https://github.com/amaro52/spotify-custom-shuffle"
                  target="_blank"
                >
                  {GITHUB_BUTTON}
                </Link>
              </button>
            </div>
          </div>
        </div>

        {/* BRUTUS */}
        <div className="card card-compact image-full w-96 bg-base-100 shadow-xl inline-block">
          <figure>
            <img src={brutusLogo} alt="Brutus Logo" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Brutus Lock</h2>
            <p>Security in Motion</p>
            <div className="card-actions justify-end">
              {/* Description Button */}
              <button
                className="btn"
                onClick={() => (DIALOG as HTMLDialogElement).showModal()}
              >
                Decription
              </button>
              <dialog id="my_modal_2" className="modal">
                <div className="modal-box text-neutral">
                  <h3 className="font-bold text-lg ">Hello!</h3>
                  <p className="py-4">
                    Press ESC key or click outside to close
                  </p>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>

              {/* GitHub Repo Button */}
              <button className="btn btn-secondary">
                <Link
                  to="https://github.com/amaro52/brutus-lock"
                  target="_blank"
                >
                  {GITHUB_BUTTON}
                </Link>
              </button>
            </div>
          </div>
        </div>

        {/* CHARIOT */}
        <div className="card card-compact image-full w-96 bg-base-100 shadow-xl inline-block">
          <figure>
            <img src={pedicabs} alt="PeddyBike Image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Chariot.</h2>
            <p>Description</p>
            <div className="card-actions justify-end">
              {/* Description Button */}
              <button
                className="btn"
                onClick={() => (DIALOG as HTMLDialogElement).showModal()}
              >
                Decription
              </button>
              <dialog id="my_modal_2" className="modal">
                <div className="modal-box text-neutral">
                  <h3 className="font-bold text-lg ">Hello!</h3>
                  <p className="py-4">
                    Press ESC key or click outside to close
                  </p>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>

              {/* GitHub Repo Button */}
              <button className="btn btn-secondary">
                <Link to="https://github.com/amaro52/chariot." target="_blank">
                  {GITHUB_BUTTON}
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
