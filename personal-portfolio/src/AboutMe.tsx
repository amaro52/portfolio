import amogh from "./images/amogh-in-austin-avatar.jpg";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="about-me font-serif ">
      <div className="grid grid-cols-2 gap-5">
        <div className="">
          <p className="text-2xl pb-2">
            Hi, I'm Amogh Maroju. I'm from Dallas, Texas, and I'm undergraduate
            Computer Science student at The University of Texas at Austin. I
            have a passion for learning more about cybersecurity, AI/ML, and
            software development.
          </p>

          <div>
            <p className="text-xl pb-2">
              All the projects that I have taken up contribute to my goal of
              getting better at creating new innovative products that I find
              interesting, while strengthening my technical and collaborative
              skills.
            </p>
            <p className="text-xl pb-2">
              Outside of academics, I enjoy being active, playing sports such as
              soccer, basketball, and volley and exploring new places.
            </p>
          </div>
        </div>

        {/* carosel and links */}
        <div>
          {/* carosel */}
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src={amogh}
                alt="Amogh in Austin"
                className="w-full"
                style={{  height: "100px" }}
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>

          {/* about me links */}
          <div className="about-me-links">
            {/* Linkedin button */}
            <Link
              to="https://www.linkedin.com/in/amoghmaroju"
              target="_blank"
              className="pr-4"
            >
              <button className="btn btn-outline btn-info " id="linkein-link">
                My LinkedIn
              </button>
            </Link>

            {/* GitHub button */}
            <Link
              to="https://github.com/amaro52"
              target="_blank"
              className="pr-4"
            >
              <button className="btn btn-outline btn-neutral" id="github-link">
                My GitHub
              </button>
            </Link>

            <div className="flexbox">
              <p>
                <strong>Contact Me: </strong>
                <a
                  href="mailto:amoghmaroju@utexas.edu"
                  target="_blank"
                  className="underline hover:link-primary"
                >
                  amoghmaroju@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
