import { Link } from "react-router-dom";
import spotifyLogo from "./images/spotify-logo-black.png";
import brutusLogo from "./images/brutus-lock-logo.png";

const HomePage = () => {
  return (
    <div className="px-4 py-1 font-serif">
      <p className="text-4xl font-semibold py-1">My Projects</p>

      <button className="cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
        Button
      </button>
      <p className="py-1" />

      <div className="grid grid-cols-3 gap-4">
        <div className="card card-compact image-full w-96 bg-primary shadow-xl inline-block">
          <figure>
            <img src={spotifyLogo} alt="Spotify Logo Black" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Custom Shuffle</h2>
            <p>Create subplaylists from your playlists</p>
            <div className="card-actions justify-end">
              <button className="btn btn-secondary">
                <Link
                  to="https://github.com/amaro52/spotify-custom-shuffle"
                  target="_blank"
                >
                  GitHub Repo
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact image-full w-96 bg-base-100 shadow-xl inline-block">
          <figure>
            <img src={brutusLogo} alt="Brutus Logo" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Brutus Lock</h2>
            <p>Description</p>
            <div className="card-actions justify-end">
              <button className="btn btn-secondary">
                <Link
                  to="https://github.com/amaro52/brutus-lock"
                  target="_blank"
                >
                  GitHub Repo
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact image-full w-96 bg-base-100 shadow-xl inline-block">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="PeddyBike Image"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Chariot.</h2>
            <p>Description</p>
            <div className="card-actions justify-end">
              <button className="btn btn-secondary">
                <Link to="https://github.com/amaro52/chariot." target="_blank">
                  GitHub Repo
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
