import React from "react";
import { Link } from "react-router-dom";

// interface for each card
interface Card {
  image: any;
  imageAlt: string;
  title: string;
  subtitle: string;
  modalName: string;
  modalDescription: HTMLBodyElement;
  githubLink: string;
}

const ProjectCard: React.FC<Card> = ({
  image,
  imageAlt,
  title,
  subtitle,
  modalName,
  modalDescription,
  githubLink,
}) => {
  const DIALOG = document.getElementById(modalName) as HTMLDialogElement;

  return (
    <div className="card card-compact image-full w-96 bg-primary shadow-xl inline-block">
      <figure>
        <img src={image} alt={imageAlt} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          {subtitle} <p></p>
        </p>
        <div className="card-actions justify-end">
          {/* Description Button */}
          <button
            className="btn"
            onClick={() => (DIALOG as HTMLDialogElement).showModal()}
          >
            More
          </button>
          <dialog id={modalName} className="modal">
            <div className="modal-box text-neutral">
              <h3 className="font-bold text-2xl ">{title}</h3>
              <p className="py-4 text-base text-primary-content">{modalDescription}</p>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>

          {/* GitHub Repo Button */}
          <Link to={githubLink} target="_blank">
            <button className="btn btn-secondary">GitHub Repo</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
