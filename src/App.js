import "./App.css";
import githubIcon from "./assets/icons/github.svg";
import mailIcon from "./assets/icons/minutemailer.svg";
import linkedinIcon from "./assets/icons/linkedin.svg"


function App() {
  return (
  
<>
      <nav className="navbar">
    <div className="nav-inner">
      <a href="#about" className="logo-link" aria-label="Go to About section">
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

      <section className="hero">
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
               <img src={linkedinIcon} alt="GitHub" />
              </a>

              <a
                href="mailto:heet.patel1@umanitoba.ca"
                className="social-box"
                aria-label="Email"
              >
                <img src={mailIcon} alt="Email" />
              </a>
            </div>


          </div>
        </div>
      </section>

      <section id="tech">
        <div className="tech-placeholder">
          {/* Tech stack coming soon */}
        </div>
      </section>


<section className="timeline" id="projects">



  {/* EVENT 1 */}
  <div className="timeline-row">
    <div className="timeline-marker">
      <span className="timeline-dot" />
    </div>

    <div className="timeline-content">
      <h2>Projects</h2>
      <h3>Everyone starts somewhere</h3>
    
      <div className="timeline-card">
        
        <h4>Software Engineering Foundations</h4>

        <p>
          Built a strong foundation in system design, testing strategies,
          version control, collaboration workflows, and structured problem
          solving through academic and team-based projects.
        </p>

        <div className="timeline-skills">
          <span>Software Engineering</span>
          <span>System Design</span>
          <span>Testing</span>
          <span>Version Control</span>
          <span>Team Collaboration</span>
        </div>

        <div className="timeline-links">
          <a
            href="https://techtitans-bookease-web.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </div>

        <div className="timeline-preview">
          <iframe
            src="https://techtitans-bookease-web.vercel.app"
            title="BookEase"
          />
        </div>
      </div>
    </div>
  </div>

  {/* EVENT 2 */}
  <div className="timeline-row">
    <div className="timeline-marker">
      <span className="timeline-dot" />
    </div>

    <div className="timeline-content">
      <div className="timeline-card">
        <h3>Learning Web Applications & APIs</h3>

        <p>
          Learned how web applications communicate with APIs, including endpoint
          design, request handling, JSON parsing, and error management using
          modern frontend tools.
        </p>

        <div className="timeline-skills">
          <span>React</span>
          <span>REST APIs</span>
          <span>JSON Parsing</span>
          <span>UI/UX</span>
          <span>Error Handling</span>
        </div>

        <div className="timeline-links">
          <a
            href="https://weather-app-c911e.web.app"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </div>

        <div className="timeline-preview">
          <iframe
            src="https://weather-app-c911e.web.app"
            title="Weather App"
          />
        </div>
      </div>
    </div>
  </div>

  {/* EVENT 3 */}
  <div className="timeline-row">
    <div className="timeline-marker">
      <span className="timeline-dot" />
    </div>

    <div className="timeline-content">
      <div className="timeline-card">
        <h3>Building Distributed Systems</h3>
        <h4>TreeDrive — Personal OneDrive Clone</h4>

        <p>
          Designed and implemented a distributed cloud storage system using TCP
          socket programming, custom protocols, and multi-cloud deployment.
          Web server on AWS, metadata and storage on Azure.
        </p>

        <div className="timeline-skills">
          <span>Python Sockets</span>
          <span>TCP Networking</span>
          <span>Custom Protocols</span>
          <span>AWS</span>
          <span>Azure</span>
          <span>Distributed Systems</span>
        </div>

        <div className="timeline-links">
          <a
            href="http://18.220.250.180:8196/"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </div>

        <div className="timeline-preview">
          <iframe
            src="http://18.220.250.180:8196/"
            title="TreeDrive"
          />
        </div>
      </div>
    </div>
  </div>

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
          <div className="contact-placeholder"></div>
        </section>

    </div>

</>
  );
}

export default App;
