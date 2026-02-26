import { useState, useEffect, useRef } from "react";
import "./App.css";
import githubIcon from "./assets/icons/github.svg";
import mailIcon from "./assets/icons/minutemailer.svg";
import linkedinIcon from "./assets/icons/linkedin.svg";

const techStack = [
  { name: "Java", type: "Language", url: "https://www.vectorlogo.zone/logos/java/java-ar21.svg" },
  { name: "Python", type: "Language", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg" },
  { name: "JavaScript", type: "Language", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/javascript.svg" },
  { name: "C", type: "Language", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/c.svg" },
  { name: "C++", type: "Language", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/cplusplus.svg" },
  { name: "R", type: "Language", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/r.svg" },
  { name: "Bash", type: "Scripting", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/gnubash.svg" },
  { name: "React", type: "Frontend", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg" },
  { name: "Flask", type: "Backend", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/flask.svg" },
  { name: "Node.js", type: "Backend", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nodedotjs.svg" },
  { name: "Spring Boot", type: "Backend", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/springboot.svg" },
  { name: "Django", type: "Backend", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/django.svg" },
  { name: "Azure", type: "Cloud", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftazure.svg" },
  { name: "AWS", type: "Cloud", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg" },
  { name: "Docker", type: "DevOps", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg" },
  { name: "Kubernetes", type: "DevOps", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/kubernetes.svg" },
  { name: "SQL", type: "Database", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mysql.svg" },
  { name: "MongoDB", type: "Database", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mongodb.svg" },
  { name: "Power BI", type: "Analytics", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftpowerbi.svg" },
  { name: "IBM SPSS", type: "Analytics", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/ibm.svg" },
];

const projects = [
  {
    category: "Software Engineering Foundations",
    description: "Built a strong foundation in system design, testing strategies, version control, collaboration workflows, and structured problem solving through academic and team-based projects.",
    skills: ["Software Engineering", "System Design", "Testing", "Version Control", "Team Collaboration"],
    link: "https://techtitans-bookease-web.vercel.app",
    linkText: "Live Demo",
    previewType: "iframe",
    previewUrl: "https://techtitans-bookease-web.vercel.app",
    previewTitle: "BookEase"
  },
  {
    category: "Learning Web Applications & APIs",
    description: "Learned how web applications communicate with APIs, including endpoint design, request handling, JSON parsing, and error management using modern frontend tools.",
    skills: ["React", "REST APIs", "JSON Parsing", "UI/UX", "Error Handling"],
    link: "https://weather-app-c911e.web.app",
    linkText: "Live Demo",
    previewType: "iframe",
    previewUrl: "https://weather-app-c911e.web.app",
    previewTitle: "Weather App"
  },
  {
    category: "Building Distributed Systems",
    title: "TreeDrive — Personal OneDrive Clone",
    description: "Designed and implemented a distributed cloud storage system using TCP socket programming, custom protocols, and multi-cloud deployment. Web server on AWS, metadata and storage on Azure.",
    skills: ["Python Sockets", "TCP Networking", "Custom Protocols", "AWS", "Azure", "Distributed Systems"],
    link: "https://github.com/HeetPatel07",
    linkText: "Go to Repository",
    previewType: "image",
    previewUrl: "/img.png",
    previewAlt: "TreeDrive Preview"
  },
  {
    category: "Backend Event Monitoring",
    title: "EventSync",
    description: "EventSync is a backend event monitoring service that ingests categorized logs and synchronizes updates to clients in near real time. The notification layer is intentionally decoupled, allowing the polling mechanism to be replaced with email, webhooks, or other delivery channels for real-world production use.",
    skills: ["AWS", "Backend", "Webhooks", "Real-time", "Flask", "Docker", "Event Monitoring"],
    link: "http://18.220.250.180:5000/",
    linkText: "Live Demo",
    previewType: "image",
    previewUrl: "/Event.png",
    previewAlt: "EventSync Preview"
  }
];

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isTechVisible, setIsTechVisible] = useState(false);
  const techRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle visibility based on intersection
        setIsTechVisible(entry.isIntersecting);
      },
      { threshold: 0.15 } // Trigger when 15% of the section is visible
    );

    if (techRef.current) observer.observe(techRef.current);

    return () => observer.disconnect();
  }, []);

  // Animation for Projects Timeline
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-project");
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the item is visible
    );

    const projectRows = document.querySelectorAll(".timeline-row");
    projectRows.forEach((row) => observer.observe(row));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      const response = await fetch("https://formspree.io/f/mjgbvokq", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
  
<>
      <nav className="navbar">
    <div className="nav-inner">
      <a href="#hero" className="logo-link" aria-label="Go to Home">
        <h2 className="logo">
          HE<span>ET</span>
        </h2>
      </a>

      <ul className="nav-links">
        <li><a href="#about" className="nav-link">About</a></li>
        <li><a href="#techstack" className="nav-link">Tech Stack</a></li>
        <li><a href="#projects" className="nav-link">Projects</a></li>
        <li><a href="#contact" className="nav-link">Contact</a></li>
      </ul>
    </div>
  </nav>

     <div className="container">

      <section className="hero" id="hero">
        <h1>Hi, I'm <span>Heet Patel</span></h1>
        <section className="terminal-hero">
            <div className="terminal-window">
              <span className="terminal-text">
                print(<span className="string">"Software Developer"</span>)
              </span>
              <span className="cursor">|</span>
            </div>
          </section>
        <p>A passionate developer learning, building, and growing through real systems.</p>
      </section>


       {/* ABOUT */}
      <section className="about" id="about">
        <div className="about-grid">
          {/* LEFT: terminal window */}
          <div className="code-window" aria-label="About terminal window">
            <div className="code-window__topbar">
              <div className="mac-dots" aria-hidden="true">
                <span className="mac-dot red" />
                <span className="mac-dot yellow" />
                <span className="mac-dot green" />
              </div>

              <div className="code-window__title">about-heet.js</div>

              <div className="code-window__meta" aria-hidden="true">
                ⌘ + K
              </div>
            </div>

              <div className="code-window__body">
                <pre className="code-block">
                  <span className="token-keyword">class</span>{" "}
                  <span className="token-class">HeetPatel</span>{" "}
                  <span className="token-punctuation">{`{`}</span>

                  {"\n  "}
                  <span className="token-function">constructor</span>
                  <span className="token-punctuation">()</span>{" "}
                  <span className="token-punctuation">{`{`}</span>

                  {"\n    "}
                  <span className="token-keyword">this</span>
                  <span className="token-operator">.</span>
                  <span className="token-property">role</span>{" "}
                  <span className="token-operator">=</span>{" "}
                  <span className="token-string">"Software Developer"</span>
                  <span className="token-punctuation">;</span>

                  {"\n    "}
                  <span className="token-keyword">this</span>
                  <span className="token-operator">.</span>
                  <span className="token-property">degree</span>{" "}
                  <span className="token-operator">=</span>{" "}
                  <span className="token-string">"Computer Science"</span>
                  <span className="token-punctuation">;</span>

                  {"\n    "}
                  <span className="token-keyword">this</span>
                  <span className="token-operator">.</span>
                  <span className="token-property">university</span>{" "}
                  <span className="token-operator">=</span>{" "}
                  <span className="token-string">"University of Manitoba"</span>
                  <span className="token-punctuation">;</span>

                  {"\n    "}
                  <span className="token-keyword">this</span>
                  <span className="token-operator">.</span>
                  <span className="token-property">location</span>{" "}
                  <span className="token-operator">=</span>{" "}
                  <span className="token-string">"Winnipeg, Canada"</span>
                  <span className="token-punctuation">;</span>

                  {"\n    "}
                  <span className="token-keyword">this</span>
                  <span className="token-operator">.</span>
                  <span className="token-property">email</span>{" "}
                  <span className="token-operator">=</span>{" "}
                  <span className="token-string">"heet.patel1@umanitoba.ca"</span>
                  <span className="token-punctuation">;</span>

                  {"\n    "}
                  <span className="token-keyword">this</span>
                  <span className="token-operator">.</span>
                  <span className="token-property">focus</span>{" "}
                  <span className="token-operator">=</span>{" "}
                  <span className="token-punctuation">[</span>
                  <span className="token-string">"Distributed Systems"</span>
                  <span className="token-punctuation">,</span>{" "}
                  <span className="token-string">"Backend"</span>
                  <span className="token-punctuation">,</span>{" "}
                  <span className="token-string">"Cloud"</span>
                  <span className="token-punctuation">]</span>
                  <span className="token-punctuation">;</span>

                  {"\n  "}
                  <span className="token-punctuation">{`}`}</span>

                  {"\n\n  "}
                  <span className="token-function">mindset</span>
                  <span className="token-punctuation">()</span>{" "}
                  <span className="token-punctuation">{`{`}</span>

                  {"\n    "}
                  <span className="token-keyword">return</span>{" "}
                  <span className="token-punctuation">[</span>

                  {"\n      "}
                  <span className="token-string">
                    "Build it right, then make it fast"
                  </span>
                  <span className="token-punctuation">,</span>

                  {"\n      "}
                  <span className="token-string">"Ship clean and iterate"</span>
                  <span className="token-punctuation">,</span>

                  {"\n      "}
                  <span className="token-string">
                    "Learn by building real systems"
                  </span>

                  {"\n    "}
                  <span className="token-punctuation">]</span>
                  <span className="token-punctuation">;</span>

                  {"\n  "}
                  <span className="token-punctuation">{`}`}</span>

                  {"\n"}
                  <span className="token-punctuation">{`}`}</span>
                </pre>
              </div>

            {/* subtle glow edge */}
            <div className="code-window__glow" aria-hidden="true" />
          </div>

          {/* RIGHT: story */}
          <div className="about-copy">
            <h2>About Me</h2>

            <p>
                I’m a Computer Science graduate from{" "}
                <a
                  className="about-link"
                  href="https://umanitoba.ca/"
                  target="_blank"
                  rel="noreferrer"
                >
                  the University of Manitoba
                </a>
                , with a minor in Mathematics and Statistics, and a strong interest in backend
                development and scalable systems.
              </p>

              <p>
                I enjoy working on problems where I can spend time understanding how things work
                before building solutions. There’s a lot of satisfaction for me in seeing a
                system come together after thinking through its design and working through
                challenges.
              </p>

              <p>
                I’m particularly interested in backend engineering, distributed systems, APIs,
                and cloud-based applications. When I get stuck, I step back, break the problem
                down, and visualize what’s happening before moving forward.
              </p>

              <p>
                Outside of coding, I enjoy playing games, spending time outdoors, hanging out
                with friends, and watching hockey.
            </p>


          <div className="about-links">
              <a
                href="https://github.com/HeetPatel07"
                target="_blank"
                rel="noreferrer"
                className="social-box"
                aria-label="GitHub"
              >
               <img src={githubIcon} alt="GitHub" />
                
              </a>

              <a
                href="https://www.linkedin.com/in/heet1/"
                target="_blank"
                rel="noreferrer"
                className="social-box"
                aria-label="LinkedIn"
              >
               <img src={linkedinIcon} alt="LinkedIn" />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=heet.patel1@umanitoba.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="social-box"
                aria-label="Email"
              >
                <img src={mailIcon} alt="Email" />
              </a>
            </div>


          </div>
        </div>
      </section>

      <section id="techstack" className="tech-section" ref={techRef}>
        <div className={`tech-box ${isTechVisible ? "in-view" : ""}`}>
          <h2>Tech Stack</h2>
          <div className="tech-grid">
            {techStack.map((tech, index) => (
              <div className="tech-card" key={index} style={{ animationDelay: `${index * 100}ms` }}>
                <img src={tech.url} alt={tech.name} className="tech-icon" />
                <span className="tech-name">{tech.name}</span>
                <span className="tech-type">{tech.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


<section className="timeline" id="projects">
  <div className="timeline-header">
    <h2>Projects</h2>
    <h3>Everyone starts somewhere</h3>
  </div>

  {projects.map((project, index) => (
    <div className="timeline-row" key={index}>
      <div className="timeline-marker">
        <span className="timeline-dot" />
      </div>

      <div className="timeline-content">
        <div className="timeline-card">
          <h3>{project.category}</h3>
          {project.title && <h4>{project.title}</h4>}

          <p>{project.description}</p>

          <div className="timeline-skills">
            {project.skills.map((skill, sIndex) => (
              <span key={sIndex}>{skill}</span>
            ))}
          </div>

          <div className="timeline-links">
            <a href={project.link} target="_blank" rel="noreferrer">
              {project.linkText}
            </a>
          </div>

          <div className={`timeline-preview ${project.previewType === 'image' ? 'image-preview-container' : ''}`}>
            {project.previewType === "iframe" ? (
              <iframe src={project.previewUrl} title={project.previewTitle} />
            ) : (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer" 
                className="project-preview-link"
              >
                <img src={project.previewUrl} alt={project.previewAlt} className="project-img" />
                <div className="project-overlay">
                  <span>{project.linkText === "Live Demo" ? "Open Website" : "View Repository"}</span>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  ))}

  {/* FINAL */}
  <div className="timeline-row timeline-final">
    <div className="timeline-marker">
      <span className="timeline-dot timeline-dot-final" />
    </div>

    <div className="timeline-content timeline-content-final">
      <div className="timeline-end">
        <h3 className="timeline-end-title">Still learning and growing</h3>

        <div className="timeline-terminal" aria-label="More projects loading terminal">
          <div className="timeline-terminal__topbar">
            <div className="timeline-terminal__dots" aria-hidden="true">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            <div className="timeline-terminal__label">status</div>
          </div>

          <div className="timeline-terminal__body">
            <span className="timeline-terminal__prompt">&gt;</span>
            <span className="timeline-terminal__text">more projects loading</span>
            <span className="timeline-terminal__loading" aria-hidden="true" />
            <span className="timeline-terminal__cursor" aria-hidden="true">█</span>
          </div>
        </div>
      </div>

    </div>
  </div>

</section>


      <section id="contact">
        <div className="contact-container">
          <h2>Get In Touch</h2>
          {isSubmitted ? (
            <div className="thank-you-message">
              <h3>Thank You!</h3>
              <p>I will get back to you soon.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name<span className="required">*</span></label>
              <input type="text" id="name" name="name" required placeholder="Enter your name" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email<span className="required">*</span></label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                placeholder="Enter your email" 
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="How can I help you?"></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
          )}
        </div>
      </section>

    </div>

</>
  );
}

export default App;
