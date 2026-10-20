import { useEffect } from "react";
import "./index.css";

const projects = [
  {
    number: "01",
    name: "MULTIMART",
    category: "E-COMMERCE PLATFORM",
    description:
      "A multi-vendor e-commerce platform designed to make online shopping smarter with product discovery and inventory management.",
    stack: "React · Node.js · Express · MongoDB",
    live: "https://multimart.vercel.app/",
    github: "https://github.com/naveen94/Multimart",
  },
];

const technologies = [
  { name: "HTML5", type: "STRUCTURE", icon: "html5" },
  {
    name: "CSS3",
    type: "STYLING",
    icon: "css3",
    fallback:
      "https://cdn.jsdelivr.net/npm/simple-icons@v15/icons/css3.svg",
  },
  { name: "JavaScript", type: "LANGUAGE", icon: "javascript" },
  { name: "React", type: "FRONTEND", icon: "react" },
  { name: "Node.js", type: "BACKEND", icon: "nodedotjs" },
  { name: "Express.js", type: "BACKEND", icon: "express" },
  { name: "MongoDB", type: "DATABASE", icon: "mongodb" },
  { name: "Git & GitHub", type: "VERSION CONTROL", icon: "github" },
];

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".hero-text, .hero-photo, .section, .project-card"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    elements.forEach((element) => {
      element.classList.add("reveal");
      observer.observe(element);
    });

    // Keep all skill cards visible without scroll-triggered hiding.
    document.querySelectorAll(".tech-card").forEach((card) => {
      card.classList.remove("reveal");
      card.classList.add("visible");
    });

    const handleMouseMove = (event) => {
      document.documentElement.style.setProperty(
        "--mouse-x",
        `${(event.clientX / window.innerWidth) * 100}%`
      );

      document.documentElement.style.setProperty(
        "--mouse-y",
        `${(event.clientY / window.innerHeight) * 100}%`
      );
    };

    window.addEventListener("pointermove", handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener("pointermove", handleMouseMove);
    };
  }, []);

  return (
    <main>
      {/* NAVBAR */}
      <nav className="navbar">
        <a className="brand" href="#home">
          NK
        </a>

        <div className="nav-links">
          <a href="#about">ABOUT</a>
          <a href="#skills">SKILLS</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
        </div>

        <a
          className="nav-cta"
          href="https://www.linkedin.com/in/naveen-k-6526bb318/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LET&apos;S CONNECT ↗
        </a>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-text">
          <p className="hero-greeting">HELLO 👋I&apos;M</p>
          <h1>NAVEEN</h1>
          <p className="role">WEB DEVELOPER</p>
        </div>

        <img
          src="/me.png"
          alt="Naveen"
          className="hero-photo"
        />
      </section>

      {/* ABOUT */}
      <section className="about section" id="about">
        <div className="section-label">ABOUT ME</div>

        <div className="about-content">
          <div className="about-photo-wrap">
            <img
              src="/about-me.png"
              alt="Naveen"
              className="about-photo"
            />
          </div>

          <div className="about-text">
            <h2>
              I TURN IDEAS INTO{" "}
              <span className="muted">DIGITAL REALITY</span>
            </h2>

            <p className="body-copy">
              I&apos;m Naveen. Currently Pursuing my UG.
              Eager to connect with you soon.
            </p>
          </div>
        </div>
      </section>

           {/* TECH STACK */}
      <section className="tech-section section" id="skills">
        <div className="section-label">MY TECH STACK</div>

        <div className="tech-heading">
          <h2>
            MY <span className="gold">TOOLKIT</span>
          </h2>

          <p className="body-copy">
            Technologies I use to turn ideas into working experiences.
          </p>
        </div>

        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <article
              className="tech-card visible"
              key={tech.name}
              style={{ "--card-index": index }}
            >
              <div className="tech-card-top">
                <span className="tech-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="tech-dot"></span>
              </div>

              <div className="tech-logo-wrap">
                {tech.name === "CSS3" ? (
                  <svg
                    className="tech-logo"
                    viewBox="0 0 128 128"
                    role="img"
                    aria-label="CSS3 logo"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#1572B6"
                      d="M19 4h90l-8 100-37 20-37-20z"
                    />
                    <path
                      fill="#33A9DC"
                      d="M64 115V14h35l-7 84z"
                    />
                    <path
                      fill="#fff"
                      d="M37 26h54l-2 12H51l2 12h35l-4 34-20 11-20-11-1-17h13l1 9 8 4 8-4 2-14H39z"
                    />
                  </svg>
                ) : (
                  <img
                    className="tech-logo"
                    src={`https://cdn.simpleicons.org/${tech.icon}`}
                    alt={`${tech.name} logo`}
                    loading="eager"
                    onError={(event) => {
                      const img = event.currentTarget;

                      if (
                        tech.fallback &&
                        !img.dataset.fallbackUsed
                      ) {
                        img.dataset.fallbackUsed = "true";
                        img.src = tech.fallback;
                      } else {
                        img.style.display = "none";
                      }
                    }}
                  />
                )}
              </div>

              <h3>{tech.name}</h3>
              <p>{tech.type}</p>
            </article>
          ))}
        </div>
      </section>
      {/* PROJECTS */}
      <section className="projects section" id="projects">
        <div className="section-label">PROJECTS</div>

        <div className="projects-heading">
          <h2>
            MORE TO DEPLOY
            <br />
            <span className="gold">IN FUTURE</span>
          </h2>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article
              className="project-card"
              id={`project-${project.number}`}
              key={project.number}
            >
              <div className="project-number">
                {project.number}
              </div>

              <div className="project-info">
                <p className="eyebrow">{project.category}</p>
                <h3>{project.name}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <p className="project-stack">{project.stack}</p>
              </div>

              <div className="project-actions">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-action"
                  aria-label={`Open ${project.name} live demo`}
                >
                  <span>LIVE DEMO</span>

                  <svg
                    viewBox="0 0 24 24"
                    className="project-action-icon"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17 17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-action github-action"
                  aria-label={`View ${project.name} source code`}
                >
                  <span>SOURCE CODE</span>

                  <svg
                    viewBox="0 0 24 24"
                    className="project-action-icon"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .1.76 2.1 3.2 1.5.1-.73.4-1.22.7-1.5-2.5-.29-5.12-1.25-5.12-5.55 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.44.11-2.99 0 0 .95-.3 3.08 1.16a10.7 10.7 0 0 1 5.6 0c2.14-1.46 3.08-1.16 3.08-1.16.62 1.55.23 2.7.12 2.99.72.79 1.15 1.8 1.15 3.03 0 4.31-2.63 5.26-5.13 5.54.4.35.75 1.03.75 2.08v3.09c0 .3.2.65.78.54A11.2 11.2 0 0 0 12 .8Z" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact section" id="contact">
        <div className="section-label">CONTACT</div>

        <div className="contact-content">
          <div className="contact-left">
            <p className="eyebrow">HAVE AN IDEA?</p>

            <h2>
              LET&apos;S
              <br />
              <span className="gold">INTERACT</span>
            </h2>

            <p className="body-copy">
              Open to interact with everyone, learning new skills,
              and exploring exciting opportunities.
            </p>
          </div>

          <div className="contact-right">
            <div className="contact-mail-group">
              <p className="eyebrow">MAIL</p>

              <a
                href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=naveenforyou04@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mail-symbol-link"
                aria-label="Compose an email to Naveen"
              >
                <svg
                  className="mail-icon"
                  viewBox="0 0 100 75"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="5"
                    y="5"
                    width="82"
                    height="58"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="5"
                  />

                  <path
                    d="M7 10L46 38L85 10"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinejoin="round"
                  />
                </svg>

                <svg
                  className="send-icon"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 22L43 4L30 44L21 28L4 22Z"
                    fill="currentColor"
                  />

                  <path
                    d="M21 28L43 4"
                    stroke="#070710"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            <div className="contact-social-group">
              <p className="eyebrow">FIND ME IN</p>

              <a
                href="https://github.com/naveen94"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="social-icon"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .1.76 2.1 3.2 1.5.1-.73.4-1.22.7-1.5-2.5-.29-5.12-1.25-5.12-5.55 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.44.11-2.99 0 0 .95-.3 3.08 1.16a10.7 10.7 0 0 1 5.6 0c2.14-1.46 3.08-1.16 3.08-1.16.62 1.55.23 2.7.12 2.99.72.79 1.15 1.8 1.15 3.03 0 4.31-2.63 5.26-5.13 5.54.4.35.75 1.03.75 2.08v3.09c0 .3.2.65.78.54A11.2 11.2 0 0 0 12 .8Z" />
                </svg>

                <span>GITHUB ↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/naveen-k-6526bb318/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="social-icon"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.7H4.96V9.16h2.97v9.54ZM6.45 7.86a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44ZM19.05 18.7h-2.96v-4.64c0-1.1-.02-2.51-1.53-2.51-1.53 0-1.77 1.2-1.77 2.43v4.72H9.83V9.16h2.84v1.3h.04c.4-.75 1.36-1.53 2.8-1.53 3 0 3.54 1.97 3.54 4.53v5.24Z" />
                </svg>

                <span>LINKEDIN ↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <a className="brand" href="#home">
          NK
        </a>

        <p>DESIGNED &amp; BUILT BY NAVEEN · 2026</p>

        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}

export default App;