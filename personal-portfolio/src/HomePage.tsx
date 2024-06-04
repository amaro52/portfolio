import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="p-5">
      <p className=" text-4xl font-semibold font-serif">My Projects</p>

      <button className="font-serif cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
        Button
      </button>

      <div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl inline-block p-4">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Custom Shuffle</h2>
            <p>Description</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
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
        <div className="card card-compact w-96 bg-base-100 shadow-xl inline-block p-4">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Chariot.</h2>
            <p>Description</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <Link to="https://github.com/amaro52chariot." target="_blank">
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
