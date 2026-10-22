
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Globe,
  Layers3,
  Mail,
  Menu,
  Moon,
  Sun,
  X,
  Zap,
} from 'lucide-react';

import IntroSplash from './IntroSplash';
import './App.css';

const projects = [
  {
    number: '01',
    category: 'COMMUNITY · WEB DEVELOPMENT',
    name: 'GDGoC TKIET',
    description:
      'A chapter website connecting student developers, events, and community initiatives.',
    tags: ['React', 'Vite', 'Motion', 'Vercel'],
    link: 'https://gdgoc-tkiet-website.vercel.app/',
    github: 'https://github.com/sejalmiraje/gdgoc-tkiet-website',
    visual: 'project-community',
    status: 'LIVE PROJECT',
  },
  {
    number: '02',
    category: 'E-COMMERCE · WEB DESIGN',
    name: 'VELVET',
    description:
      'A separate storefront project exploring refined branding and a premium shopping experience.',
    tags: ['React', 'UI Design', 'Web Development'],
    link: 'https://velvet-storefront.vercel.app/',
    visual: 'project-velvet',
    status: 'IN DEVELOPMENT',
  },
  {
    number: '03',
    category: 'EXPERIMENTS · PROBLEM SOLVING',
    name: 'Beyond the interface',
    description:
      'Exploring practical technology through student projects, intelligent systems, and creative coding.',
    tags: ['JavaScript', 'Python', 'Learning by Building'],
    visual: 'project-lab',
    status: 'SELECTED WORK',
  },
];

const capabilities = [
  {
    number: '01',
    icon: Code2,
    title: 'Web development',
    text: 'Responsive interfaces, React applications, and clean component-based experiences.',
  },
  {
    number: '02',
    icon: Layers3,
    title: 'UI & interaction',
    text: 'Thoughtful layouts, strong visual hierarchy, and motion with a purpose.',
  },
  {
    number: '03',
    icon: Globe,
    title: 'From code to live',
    text: 'Git, GitHub, deployment workflows, and turning an idea into a working website.',
  },
];

function Reveal({ children, className = '', delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0 : 0.75,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <Reveal delay={index * 0.08} className="project-reveal">
      <article className="project-card">
        <div className={`project-visual ${project.visual}`}>
          <div className="project-visual-top">
            <span>{project.status}</span>
            <span>{project.number} / 03</span>
          </div>

          {index === 0 && (
            <div className="visual-community">
              <span className="visual-overline">BUILD TOGETHER.</span>
              <strong>Google<br />Developer<br />Groups.</strong>
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />
              <span className="visual-dot dot-blue" />
              <span className="visual-dot dot-red" />
              <span className="visual-dot dot-yellow" />
              <span className="visual-dot dot-green" />
            </div>
          )}

          {index === 1 && (
            <div className="visual-velvet">
              <span>THE ART OF LESS.</span>
              <strong>VELVET</strong>
              <div className="velvet-line" />
              <small>FORM · FEELING · FUNCTION</small>
            </div>
          )}

          {index === 2 && (
            <div className="visual-lab">
              <Zap size={42} strokeWidth={1.2} />
              <strong>IDEAS → REALITY</strong>
              <span>AN ONGOING PRACTICE</span>
              <div className="lab-grid" />
            </div>
          )}
        </div>

        <div className="project-details">
          <span className="project-category">{project.category}</span>
          <h3>{project.name}</h3>
          <p>{project.description}</p>

          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          {project.link ? (
            <div className="project-actions">
              <a href={project.link} target="_blank" rel="noreferrer">
                View live site <ArrowUpRight size={16} />
              </a>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.name} source on GitHub`}
                >
                </a>
              )}
            </div>
          ) : (
            <span className="project-note">
              More details coming as the project develops.
            </span>
          )}
        </div>
      </article>
    </Reveal>
  );
}

export default function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('sejal-theme');
    return saved ? saved === 'dark' : true;
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    document.body.dataset.theme = dark ? 'dark' : 'light';
    localStorage.setItem('sejal-theme', dark ? 'dark' : 'light');
  }, [dark]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <IntroSplash />

      <div className="portfolio" id="top">
        <header className="site-header">
          <a href="#top" className="brand" onClick={closeMenu}>
            <span className="brand-mark">S<span>.</span></span>
            <span>SEJAL MIR AJE</span>
          </a>

          <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
            {[
              ['Work', '#work'],
              ['Approach', '#approach'],
              ['About', '#about'],
              ['Contact', '#contact'],
            ].map(([label, href]) => (
              <a key={label} href={href} onClick={closeMenu}>
                {label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <button
              className="theme-toggle"
              onClick={() => setDark((value) => !value)}
              aria-label={`Switch to ${dark ? 'light' : 'dark'} theme`}
              title={`Switch to ${dark ? 'light' : 'dark'} theme`}
            >
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <a href="#contact" className="header-cta">
              Let's talk <ArrowUpRight size={15} />
            </a>

            <button
              className="menu-toggle"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </header>

        <main>
          <section className="hero section-shell">
            <div className="hero-grid" />

            <div className="hero-content">
              <Reveal>
                <div className="availability">
                  <span className="availability-dot" />
                  <span>CSE STUDENT · DEVELOPER IN PROGRESS</span>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <h1>
                  I turn ideas
                  <br />
                  into <span className="hero-accent">digital</span>
                  <br />
                  experiences<span className="hero-period">.</span>
                </h1>
              </Reveal>

              <Reveal delay={0.16}>
                <p className="hero-description">
                  I'm Sejal — a computer science student building thoughtful
                  websites, exploring technology, and learning by shipping
                  real projects.
                </p>
              </Reveal>

              <Reveal delay={0.23}>
                <div className="hero-actions">
                  <a className="button-primary" href="#work">
                    Explore my work <ArrowDownRight size={17} />
                  </a>
                  <a className="button-secondary" href="#contact">
                    Have a project? <ArrowUpRight size={16} />
                  </a>
                </div>
              </Reveal>

              <div className="hero-meta">
                <span>BASED IN INDIA</span>
                <span>DESIGN-MINDED. CODE-DRIVEN.</span>
              </div>
            </div>

            <div className="hero-art" aria-hidden="true">
              <div className="electric-ring ring-outer" />
              <div className="electric-ring ring-middle" />
              <div className="electric-ring ring-inner" />
              <div className="electric-core">
                <Zap size={76} strokeWidth={1.05} />
              </div>
              <div className="electric-ray ray-one" />
              <div className="electric-ray ray-two" />
              <div className="electric-ray ray-three" />
              <span className="art-caption">ENERGY INTO EXECUTION</span>
              <span className="art-index">SM—026</span>
            </div>

            <a className="scroll-cue" href="#work">
              <span className="scroll-line" />
              SCROLL TO EXPLORE
            </a>
          </section>

          <section className="marquee-strip" aria-label="Areas of interest">
            <div className="marquee-track">
              {Array.from({ length: 2 }).map((_, index) => (
                <div className="marquee-group" key={index}>
                  {['DESIGN', 'DEVELOPMENT', 'EXPERIMENTATION', 'DEPLOYMENT'].map(
                    (word) => (
                      <span key={word}>
                        {word} <i>✳</i>
                      </span>
                    )
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="work-section section-shell" id="work">
            <Reveal>
              <div className="section-heading">
                <div>
                  <span className="eyebrow">01 / SELECTED WORK</span>
                  <h2>Made with <span>intention.</span></h2>
                </div>
                <p>
                  A growing collection of ideas turned into interfaces,
                  experiences, and working products.
                </p>
              </div>
            </Reveal>

            <div className="projects-grid">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.number}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </section>

          <section className="approach-section" id="approach">
            <div className="section-shell">
              <Reveal>
                <div className="section-heading">
                  <div>
                    <span className="eyebrow">02 / WHAT I BRING</span>
                    <h2>Curiosity meets <span>craft.</span></h2>
                  </div>
                  <p>
                    Not just how it looks. How it works, how it feels, and
                    what it makes possible.
                  </p>
                </div>
              </Reveal>

              <div className="capabilities-list">
                {capabilities.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <Reveal key={item.number} delay={index * 0.07}>
                      <article className="capability">
                        <span className="capability-number">{item.number}</span>
                        <div className="capability-icon">
                          <Icon size={23} strokeWidth={1.5} />
                        </div>
                        <div className="capability-copy">
                          <h3>{item.title}</h3>
                          <p>{item.text}</p>
                        </div>
                        <ArrowUpRight className="capability-arrow" size={21} />
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="about-section section-shell" id="about">
            <Reveal>
              <div className="about-layout">
                <div className="about-label">
                  <span className="eyebrow">03 / A LITTLE ABOUT ME</span>
                  <div className="about-monogram">S<span>.</span></div>
                </div>

                <div className="about-copy">
                  <h2>
                    Still learning.
                    <br />
                    Always <span>building.</span>
                  </h2>
                  <p>
                    I'm pursuing Computer Science at TKIET, developing my
                    skills in frontend engineering, and contributing to
                    developer communities. I care about details, meaningful
                    interactions, and the process of making an idea real.
                  </p>
                  <a
                    className="text-link"
                    href="https://github.com/sejalmiraje"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Follow my journey on GitHub <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </Reveal>
          </section>

          <section className="contact-section" id="contact">
            <div className="contact-glow" />
            <div className="section-shell contact-inner">
              <Reveal>
                <span className="eyebrow">04 / YOUR IDEA, NEXT</span>
                <h2>
                  Have something
                  <br />
                  <span>in mind?</span>
                </h2>
                <p>
                  Let's talk about your website, an idea you're exploring,
                  or something worth building together.
                </p>

                <a
                  className="contact-button"
                  href="mailto:sejalmiraje08@gmail.com?subject=Let's%20build%20something"
                >
                  Start a conversation <ArrowUpRight size={18} />
                </a>
              </Reveal>
            </div>
          </section>
        </main>

        <footer className="site-footer section-shell">
          <a href="#top" className="footer-brand">
            SEJAL<span>.</span>
          </a>

          <p>Built with curiosity and a lot of iteration.</p>

          <div className="footer-links">
            <a
              href="https://github.com/sejalmiraje"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
          >
            </a>
            <a
              href="mailto:sejalmiraje08@gmail.com"
              aria-label="Email Sejal"
            >
              <Mail size={18} />
            </a>
            <a href="#top" aria-label="Back to top">
              <ArrowRight size={18} className="footer-up-arrow" />
            </a>
          </div>

          <span className="copyright">© 2026 SEJAL MIR AJE</span>
        </footer>
      </div>
    </>
  );
}
