import React from "react";
import { Link } from "react-router-dom";

const PCard = (props: any) => {
  const DIALOG = document.getElementById(props.modalName) as HTMLDialogElement;

  return (
    <div className="card card-compact image-full w-96 bg-base-100 shadow-xl inline-block my-4 mx-4">
      <figure>
        <img src={props.image} alt={props.imageAlt} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.subtitle}</p>
        <div className="card-actions justify-end">
          {/* Description Button */}
          <button
            className="btn"
            onClick={() => (DIALOG as HTMLDialogElement).showModal()}
          >
            More
          </button>
          <dialog id={props.modalName} className="modal">
            <div className="modal-box text-neutral">
              <h3 className="font-bold text-2xl ">{props.title}</h3>
              <p className="py-4 text-base text-primary-content">
                {props.modalDescription}
              </p>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>

          {/* GitHub Repo Button */}
          <Link to={props.githubLink} target="_blank">
            <button className="btn btn-secondary">GitHub Repo</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PCard;
