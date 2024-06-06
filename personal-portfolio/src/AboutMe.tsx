import amogh from "./images/amogh-in-austin-avatar.jpg";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="about-me prose font-serif">
      <p className="text-2xl">
        Hi, I'm Amogh Maroju. I'm from Dallas, Texas, and I'm undergraduate
        Computer Science student at The University of Texas at Austin. I have a
        passion for learning more about cybersecurity, AI/ML, and software
        development.
      </p>
      <p className="text-xl">
        All the projects that I have taken up contribute to my goal of getting
        better at creating new innovative products that I find interesting and
        strengthening my technical & collaborative skills.
      </p>
      <p className="text-xl">
        Outside of academics, I enjoy playing sports such as soccer, basketball,
        and pickleball and exploring new places.
      </p>

      <div>
        {/* Linkedin button */}
        <Link
          to="https://www.linkedin.com/in/amoghmaroju"
          target="_blank"
          className="pr-4"
        >
          <button className="btn btn-outline btn-info">My LinkedIn</button>
        </Link>

        {/* GitHub button */}
        <Link to="https://github.com/amaro52" target="_blank">
          <button className="btn btn-outline btn-neutral">My GitHub</button>
        </Link>
      </div>
    </div>
  );
};

export default AboutMe;
