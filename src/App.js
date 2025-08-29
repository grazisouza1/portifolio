/* eslint-disable react/jsx-no-comment-textnodes */
import {
  FaCss3Alt,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaInstagram,
  FaJs,
  FaLinkedin,
  FaReact,
  FaUbuntu,
} from "react-icons/fa";
import "./App.css";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { DiMysql } from "react-icons/di";

function App() {
  const iconsNavBar = document.querySelectorAll(".icon-side-bar");

  iconsNavBar.forEach((icon) => {
    icon.addEventListener("click", function () {
      iconsNavBar.forEach((i) => i.classList.remove("active"));
      this.classList.add("active");
    });
  });

  //SCROLL EFFECT
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));

  return (
    <body>
      <aside className="menu-bar">
        <a href="#home">
          <img
            className="icon-side-bar"
            id="home-icon"
            src="/images/home-icon.svg"
            title="Home section"
            alt="home-icon"
          />
        </a>
        <a href="#experience">
          <img
            className="icon-side-bar"
            id="exp-icon"
            src="/images/experience-icon.svg"
            title="Experiences section"
            alt="exp-icon"
          />
        </a>
        <a href="#technologies">
          <img
            className="icon-side-bar"
            id="tech-icon"
            src="/images/certificate-icon.svg"
            title="Technologies section"
            alt="tech-icon"
          />
        </a>
        <a href="#about-me">
          <img
            className="icon-side-bar"
            id="prof-icon"
            src="/images/profile-icon.svg"
            title="About Me section"
            alt="prof-icon"
          />
        </a>
      </aside>

      <div className="container">
        <div id="home" className="hero">
          <section className="home-content hidden">
            <img
              src="/images/hello-hand.svg"
              title="Hello hand"
              id="hello-hand"
              alt="hello-hand"
            />

            <div className="home-text">
              <h1 id="home-title">
                Hi! I'm <span id="graziella">Graziella</span>
              </h1>
              <h3 id="home-description">
                I’m a software development student and I love to learn about
                front-end technologies.
              </h3>
            </div>
          </section>
        </div>

        <div className="main-page">
          <section id="experience" className="section exp-section hidden">
            <h1 className="section-title">Experience</h1>
            <div className="exp-content">
              <img className="arrow" src="/images/seta-esq.svg" alt="" />

              <div className="projects">
                <div className="project">
                  <img
                    className="project-img"
                    src="/images/calculator-img.svg"
                    alt=""
                  />
                  <div className="project-text">
                    <div className="project-title">
                      <h2>Calculator</h2>
                      <a
                        href="https://foundation-projects-gra.vercel.app/basic-calculator/index.html"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          className="icon icon-pc"
                          src="/images/share-icon.svg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="project-desc">
                      A calculator with basic operations. The design is not
                      responsive
                    </div>

                    <h3 className="technologies-title">Technologies:</h3>
                    <div className="technologies">
                      <img
                        className="technology-icon"
                        src="/images/html-icon.svg"
                        alt=""
                      />
                      <img
                        className="technology-icon"
                        src="/images/css-icon.svg"
                        alt=""
                      />
                      <img
                        className="technology-icon"
                        src="/images/js-icon.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <a
                    href="https://foundation-projects-gra.vercel.app/basic-calculator/index.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="icon icon-cel"
                      src="/images/share-icon.svg"
                      alt="Go to Calculator"
                    />
                  </a>
                </div>

                <div className="project">
                  <img
                    className="project-img"
                    src="images/random-letter-img.svg"
                    alt=""
                  />
                  <div className="project-text">
                    <div className="project-title">
                      <h2>Random Letter Generator</h2>
                      <a
                        href="https://foundation-projects-gra.vercel.app/random-letter-generator/index.html"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          className="icon icon-pc"
                          src="images/share-icon.svg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="project-desc">
                      A calculator with basic operations. The design is not
                      responsive
                    </div>

                    <h3 className="technologies-title">Technologies:</h3>
                    <div className="technologies">
                      <img
                        className="technology-icon"
                        src="images/html-icon.svg"
                        alt="Html Icon"
                      />
                      <img
                        className="technology-icon"
                        src="images/css-icon.svg"
                        alt=""
                      />
                      <img
                        className="technology-icon"
                        src="images/js-icon.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <a
                    href="https://foundation-projects-gra.vercel.app/random-letter-generator/index.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="icon icon-cel"
                      src="images/share-icon.svg"
                      alt=""
                    />
                  </a>
                </div>

                <div className="project">
                  <img
                    className="project-img"
                    src="images/pyramid-img.svg"
                    alt=""
                  />
                  <div className="project-text">
                    <div className="project-title">
                      <h2>Pyramid Generator</h2>
                      <a
                        href="https://foundation-projects-gra.vercel.app/pyramid-generator/index.html"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          className="icon icon-pc"
                          src="images/share-icon.svg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="project-desc">
                      It generates a simple pyramid with selectable characters
                      and levels
                    </div>

                    <h3 className="technologies-title">Technologies:</h3>
                    <div className="technologies">
                      <img
                        className="technology-icon"
                        src="images/html-icon.svg"
                        alt="Html Icon"
                      />
                      <img
                        className="technology-icon"
                        src="images/css-icon.svg"
                        alt=""
                      />
                      <img
                        className="technology-icon"
                        src="images/js-icon.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <a
                    href="https://foundation-projects-gra.vercel.app/pyramid-generator/index.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="icon icon-cel"
                      src="images/share-icon.svg"
                      alt=""
                    />
                  </a>
                </div>
              </div>

              <img className="arrow" src="images/seta-dir.svg" alt="" />
            </div>
          </section>

          <section id="technologies" className="section tech-section hidden">
            <h1 className="section-title">Technologies</h1>

            <div className="tech-content">
              <div className="tech-card">
                <FaHtml5 size={70} />
              </div>

              <div className="tech-card">
                <FaCss3Alt size={70} />
              </div>

              <div className="tech-card">
                <FaJs size={70} />
              </div>

              <div className="tech-card">
                <FaReact size={70} />
              </div>

              <div className="tech-card">
                <RiNextjsLine size={70} />
              </div>

              <div className="tech-card">
                <SiTypescript size={70} />
              </div>

              <div className="tech-card">
                <RiTailwindCssFill size={70} />
              </div>

              <div className="tech-card">
                <FaUbuntu size={70} />
              </div>

              <div className="tech-card">
                <FaFigma size={70} />
              </div>

              <div className="tech-card">
                <DiMysql size={70} />
              </div>
            </div>
          </section>

          <section id="about-me" className="section abt-me-section hidden">
            <h1 className="section-title">About Me</h1>
            <div className="abt-me-content">
              <p id="abt-me-text">
                I started self-learned HTML and CSS, then I took the entrance
                exam for a Cross-platform Software Development college, and
                started studying there in February 2024. I’ve been improve my
                skills on web development scheduled for completion in December
                2022.
              </p>
              <img
                className="abt-me-img"
                src="images/graziella-img.svg"
                id="abt-me-img"
                title="Graziella Souza (Me)"
                alt="Grazi"
              />
            </div>
          </section>

          <footer>
            <div className="footer-title">
              <h1>Contact Me!</h1>
            </div>
            <div className="footer-content">
              <div className="social-medias">
                {/* Instagram Icon */}
                <div classNameName="media-icon">
                  <a
                    href="https://www.instagram.com/grazi_bjj/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram size={35} />
                  </a>
                  {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                </div>

                {/* Linkedin Icon */}
                <div className="media-icon">
                  <a
                    href="https://www.linkedin.com/in/graziellasouza/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin size={35} />
                  </a>
                </div>

                {/* GitHub Icon */}
                <div className="media-icon">
                  <a
                    href="https://github.com/grazisouza1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub size={35} />
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </body>
  );
}

export default App;
