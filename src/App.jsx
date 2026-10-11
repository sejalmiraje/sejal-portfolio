
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { motion } from "motion/react";

const pages = [
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Certificates", path: "/certificates" },
  { name: "Internships", path: "/internships" },
  { name: "Projects", path: "/projects" },
  { name: "Websites", path: "/websites" },
];

function Home() {
  return (
    <main className="hero" id="home">
      <div className="hero-glow" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="eyebrow">
          <span className="status-dot" />
          COMPUTER SCIENCE ENGINEERING
        </div>

        <p className="intro">Hello, I'm Sejal Miraje.</p>

        <h1>
          Turning curiosity
          <br />
          into <span>creation.</span>
        </h1>

        <p className="hero-description">
          Exploring the intersection of technology, thoughtful design,
          and meaningful digital experiences.
        </p>

        <div className="hero-actions">
          <Link to="/projects" className="button button-primary">
            Explore my work <span>↗</span>
          </Link>

          <Link to="/about" className="button button-secondary">
            More about me <span>↗</span>
          </Link>
        </div>

        <div className="focus-area">
          <span>MY FOCUS</span>
          <div>
            <p>Software Development</p>
            <i />
            <p>Web Technologies</p>
            <i />
            <p>Continuous Learning</p>
          </div>
        </div>
      </motion.div>

      <div className="hero-index">PORTFOLIO — 2026</div>
      <div className="hero-orbit orbit-one" />
      <div className="hero-orbit orbit-two" />
    </main>
  );
}


function AboutPage() {
  const values = [
    {
      number: "01",
      title: "Learn with intention",
      description:
        "Build a strong foundation in computer science and understand the reasoning behind the code, not just the syntax.",
    },
    {
      number: "02",
      title: "Build through practice",
      description:
        "Turn concepts into practical projects, experiment with new technologies, and learn from the process.",
    },
    {
      number: "03",
      title: "Grow with consistency",
      description:
        "Keep improving through deliberate practice, honest reflection, and a willingness to tackle difficult problems.",
    },
  ];

  return (
    <main className="about-page">
      <motion.section
        className="about-intro"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="eyebrow">
          <span className="status-dot" />
          A LITTLE ABOUT ME
        </div>

        <div className="about-heading">
          <div>
            <p className="about-kicker">The person behind the code</p>
            <h1>
              Curious by nature.
              <br />
              <span>Driven to create.</span>
            </h1>
          </div>

          <div className="about-number">
            <span>01</span>
            <div />
            <span>ABOUT</span>
          </div>
        </div>

        <div className="about-opening">
          <p className="about-lead">
            I'm Sejal, a Computer Science Engineering student with
            an interest in software development and creating useful
            digital experiences.
          </p>

          <p className="about-copy">
            I'm working toward becoming a capable software engineer
            by strengthening my fundamentals, exploring technologies,
            and turning what I learn into projects. For me, progress
            means understanding more deeply, building more confidently,
            and improving one step at a time.
          </p>
        </div>
      </motion.section>

      <motion.section
        className="journey-panel"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="journey-label">
          <span>01 / THE JOURNEY</span>
          <span>Always becoming</span>
        </div>

        <div className="journey-content">
          <div className="journey-mark">SM<span>.</span></div>

          <div>
            <h2>
              From learning the fundamentals
              <br />
              to building with purpose.
            </h2>
            <p>
              My journey in computing has grown from learning
              technical foundations to exploring software development
              through coursework and practical projects. I'm now
              focused on connecting what I learn in the classroom
              with the skills needed to build real applications.
            </p>
          </div>
        </div>
      </motion.section>

      <section className="values-section">
        <div className="section-heading">
          <div>
            <p className="about-kicker">My approach</p>
            <h2>What moves me forward.</h2>
          </div>
          <span className="section-index">02 — 04</span>
        </div>

        <div className="values-grid">
          {values.map((value, index) => (
            <motion.article
              key={value.number}
              className="value-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.12 }}
            >
              <span className="value-number">{value.number}</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
              <span className="value-arrow">↗</span>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="exploring-panel">
        <div>
          <p className="about-kicker">Right now</p>
          <h2>Curiosity, in progress.</h2>
          <p>
            I'm exploring the technologies and practices that will
            help me become a stronger developer.
          </p>
        </div>

        <div className="exploring-tags">
          <span>Software Development</span>
          <span>Web Technologies</span>
          <span>Problem Solving</span>
          <span>Building Projects</span>
          <span>Continuous Learning</span>
        </div>
      </section>

      <footer className="about-footer">
        <span>THOUGHTFULLY LEARNING. PURPOSEFULLY BUILDING.</span>
        <Link to="/projects">Explore my projects ↗</Link>
      </footer>
    </main>
  );
}



function PlaceholderPage({ title }) {
  return (
    <main className="page-placeholder">
      <section className="placeholder-section">
        <div className="eyebrow">
          <span className="status-dot" />
          {title}
        </div>
        <h1>Coming soon</h1>
        <p>This section is currently being built.</p>
      </section>
    </main>
  );
}


function SkillsPage() {
  const skillGroups = [
    {
      number: "01",
      title: "Programming",
      subtitle: "LANGUAGES & FUNDAMENTALS",
      skills: ["Java", "Python", "JavaScript", "Data Structures"],
      note: "Building stronger programming fundamentals through practice.",
    },
    {
      number: "02",
      title: "Web development",
      subtitle: "FRONTEND TECHNOLOGIES",
      skills: ["HTML", "CSS", "React", "Tailwind CSS"],
      note: "Learning to create responsive, polished web experiences.",
    },
    {
      number: "03",
      title: "Tools & workflow",
      subtitle: "DEVELOPMENT ENVIRONMENT",
      skills: ["Git", "GitHub", "VS Code", "npm"],
      note: "Practising version control and modern development workflows.",
    },
    {
      number: "04",
      title: "Backend & data",
      subtitle: "SERVER-SIDE DEVELOPMENT",
      skills: ["Node.js", "Express", "SQL", "MongoDB"],
      note: "Developing my understanding of APIs, servers, and databases.",
    },
  ];

  return (
    <main className="skills-page">
      <motion.section
        className="skills-intro"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="eyebrow">
          <span className="status-dot" />
          SKILLS & TECHNOLOGIES
        </div>

        <div className="skills-heading">
          <p className="about-kicker">My technical toolkit</p>
          <h1>
            Knowledge in progress.
            <br />
            <span>Skills in the making.</span>
          </h1>
          <p className="skills-description">
            A growing collection of technologies and fundamentals
            I'm learning, practising, and applying through projects.
          </p>
        </div>

        <div className="skills-meta">
          <span>FOUNDATIONS</span>
          <span className="skills-meta-line" />
          <span>EXPERIMENTATION</span>
          <span className="skills-meta-line" />
          <span>CONTINUOUS GROWTH</span>
        </div>
      </motion.section>

      <section className="skill-groups">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.number}
            className="skill-group"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <div className="skill-group-top">
              <span className="skill-group-number">{group.number}</span>
              <span className="skill-group-subtitle">{group.subtitle}</span>
            </div>

            <h2>{group.title}</h2>

            <div className="skill-pills">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>

            <p className="skill-group-note">{group.note}</p>
          </motion.article>
        ))}
      </section>

      <section className="skills-note-panel">
        <span className="skills-note-symbol">✳</span>
        <div>
          <p className="about-kicker">A note on my approach</p>
          <h2>Depth over labels.</h2>
          <p>
            I'm focused on understanding concepts, practising consistently,
            and using technology to build things that work. This page will
            evolve as my knowledge and hands-on experience grow.
          </p>
        </div>
      </section>

      <footer className="about-footer">
        <span>LEARN. PRACTISE. BUILD. REPEAT.</span>
        <Link to="/projects">Projects in progress ↗</Link>
      </footer>
    </main>
  );
}


function CertificatesPage() {
  
const certificates = [
  
{
  title: "Water and Carbon Footprint Calculator",
  issuer: "Journal of Emerging Technologies and Innovative Research (JETIR)",
  date: "March 13, 2025",
  category: "Certificate of Publication",
  file: "/certificates/jetir-publication.pdf",
  publication: "https://www.jetir.org/view?paper=JETIR2503221",
},

  {
    title: "Climate Change Induced Disasters",
    issuer: "Indian Institute of Remote Sensing (IIRS), ISRO",
    date: "October 8, 2026",
    category: "Online Course",
    file: "/certificates/iirs-climate-change-disasters.pdf",
  },
  {
    title: "Advanced Software Engineering Job Simulation",
    issuer: "Forage",
    date: "June 14, 2026",
    category: "Certificate of Completion",
    file: "/certificates/forage-software-engineering.pdf",
  },
  {
    title: "Drowsiness Detection Using OpenCV",
    issuer: "NoviTech R&D Private Limited",
    date: "Date not specified",
    category: "Bootcamp Completion",
    file: "/certificates/novitech-drowsiness-detection.pdf",
  },
];

    

  return (
    <main className="certificates-page">
      <section className="certificates-heading">
        <p className="section-eyebrow">THE LEARNING ARCHIVE</p>
        <h1>
          Certificates & Achievements
          <br />
        </h1>
        <p className="certificates-intro">
          Every milestone represents a step forward in my
          journey of learning, exploration, and growth in technology.
        </p>
      </section>

      <section className="certificates-grid">
        {certificates.map((certificate, index) => (
          <article className="certificate-card" key={certificate.title}>
            

            <div className="certificate-details">
              <div>
                <p className="certificate-category">{certificate.category}</p>
                <h3>{certificate.title}</h3>
                <p className="certificate-meta">{certificate.issuer}</p>
              </div>

              <a
  className="certificate-link"
  href={certificate.file}
  target="_blank"
  rel="noreferrer"
>
  View certificate <span aria-hidden="true">↗</span>
</a>
              <span className="certificate-number">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </article>
        ))}
      </section>

      <p className="certificates-note">
        Your real certificates will replace these design placeholders.
      </p>
    </main>
  );
}


function InternshipsPage() {
  const internships = [
    {
      company: "Cognifyz Technologies",
      role: "Full Stack Development Intern",
      status: "Ongoing",
      statusClass: "ongoing",
      number: "01",
    },
    {
      company: "Multispark Technology",
      role: "Web Development",
      status: "Completed",
      statusClass: "completed",
      number: "02",
    },
    {
      company: "iStudio",
      role: "AWS Internship",
      status: "Selected · Not Started",
      statusClass: "selected",
      number: "03",
    },
  ];

  return (
    <main className="internships-page">
      <section className="internships-heading">
        <p className="section-eyebrow">PROFESSIONAL EXPERIENCE</p>
        <h1>Internships<span>.</span></h1>
        <p>
          My internship journey, learning opportunities,
          and professional experiences.
        </p>
      </section>

      <section className="internships-grid">
        {internships.map((internship) => (
          <article
            className="internship-card"
            key={internship.number}
          >
            <div className="internship-card-top">
              <span className="internship-number">
                {internship.number}
              </span>

              <span
                className={`internship-status ${internship.statusClass}`}
              >
                {internship.status}
              </span>
            </div>

            <div className="internship-card-content">
              <p className="internship-label">ORGANIZATION</p>
              <h2>{internship.company}</h2>
              <p className="internship-role">{internship.role}</p>
            </div>

            <div className="internship-card-footer">
              <span>Internship Experience</span>
              <span aria-hidden="true">↗</span>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}



function App() {
  return (
    <BrowserRouter>
      <div className="site-shell">
        <header className="navbar">
          <Link to="/" className="brand" aria-label="Home">
            SM<span>.</span>
          </Link>

          <nav className="nav-links">
            {pages.map((page) => (
              <Link key={page.path} to={page.path}>
                {page.name}
              </Link>
            ))}
          </nav>

          <a
            href="mailto:your-sejalmiraje08@gmail.com"
            className="nav-contact"
          >
            Let's connect <span>↗</span>
          </a>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          
          
{pages.map((page) => (
  <Route
    key={page.path}
    path={page.path}
    element={
      page.path === "/about" ? (
  <AboutPage />
) : page.path === "/skills" ? (
  <SkillsPage />
) : page.path === "/certificates" ? (
  <CertificatesPage />
) : page.path === "/internships" ? (
  <InternshipsPage />
) : (
  <PlaceholderPage title={page.name} />
)

    }
  />
))}


        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
