"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

const skills = [
  "C",
  "C++",
  "Python",
  "HTML",
  "Git",
  "GitHub",
  "VS Code",
  "Pandas",
  "Seaborn",
  "OOP",
];

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built to showcase my profile, skills, links, and learning journey in a clean and responsive format.",
    tech: ["Next.js", "Tailwind", "Framer Motion", "Vercel"],
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    link: "https://github.com/ArshShukla10/Portfolio",
  },
  {
    title: "Python Practice Projects",
    description:
      "A growing collection of beginner-friendly Python programs focused on logic building, problem solving, functions, loops, and core programming practice.",
    tech: ["Python", "Functions", "Loops", "Logic Building"],
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    link: "#",
  },
  {
    title: "Next Project in Progress",
    description:
      "Currently planning my next practical project to strengthen my understanding of programming and add more hands-on work to my portfolio.",
    tech: ["Learning", "Planning", "Building"],
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    link: "#",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-[#030303] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-5%] h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute right-[-10%] top-[10%] h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute bottom-[10%] left-[20%] h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-lg font-bold tracking-wide text-transparent">
            Arsh
          </h1>

          <div className="hidden gap-8 text-sm text-white/80 md:flex">
            <a href="#about" className="transition hover:text-indigo-400">
              About
            </a>
            <a href="#skills" className="transition hover:text-indigo-400">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-indigo-400">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-indigo-400">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section className="relative flex min-h-screen items-center justify-center px-6 pt-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-md"
            >
              <span className="mr-2 h-2 w-2 rounded-full bg-emerald-400" />
              First-Year B.Tech CSE Student
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-5 text-5xl font-bold leading-tight md:text-7xl"
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Arsh
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="mb-4 text-xl font-semibold text-white/90 md:text-2xl"
            >
              Aspiring Software Developer | Learning, Building, Improving
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="mb-8 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
            >
              I&apos;m a Computer Science student focused on strengthening my
              programming fundamentals, exploring web development, and building
              practical projects step by step.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="mb-8 flex flex-wrap gap-4"
            >
              <a href="#projects">
                <button className="group inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-6 py-3 font-medium transition hover:bg-indigo-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.55)]">
                  View Projects
                  <FaArrowRight className="transition group-hover:translate-x-1" />
                </button>
              </a>

              <a href="/Arsh_Shukla_Resume.docx" download>
                <button className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white/90 backdrop-blur-md transition hover:border-indigo-400/50 hover:bg-white/10">
                  <FaDownload />
                  Resume
                </button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="flex items-center gap-5 text-2xl text-white/70"
            >
              <a
                href="https://github.com/ArshShukla10"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:scale-110 hover:text-indigo-400"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/arsh-shukla-183206376/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:scale-110 hover:text-cyan-400"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:arshshukla10june@gmail.com"
                className="transition hover:scale-110 hover:text-pink-400"
              >
                <FaEnvelope />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <div className="space-y-4 font-mono text-sm text-white/80">
                <p>
                  <span className="text-cyan-400">const</span>{" "}
                  <span className="text-purple-400">developer</span> = {"{"}
                </p>
                <p className="pl-4">
                  name: <span className="text-emerald-400">&quot;Arsh&quot;</span>,
                </p>
                <p className="pl-4">
                  role:{" "}
                  <span className="text-emerald-400">
                    &quot;B.Tech CSE Student&quot;
                  </span>
                  ,
                </p>
                <p className="pl-4">
                  skills:{" "}
                  <span className="text-emerald-400">
                    [&quot;C&quot;, &quot;C++&quot;, &quot;Python&quot;,
                    &quot;HTML&quot;]
                  </span>
                  ,
                </p>
                <p className="pl-4">
                  currentFocus:{" "}
                  <span className="text-emerald-400">
                    &quot;Projects + Fundamentals + Growth&quot;
                  </span>
                  ,
                </p>
                <p>{"};"}</p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-2xl font-bold text-indigo-400">9.09</p>
                  <p className="text-sm text-white/60">Current SGPA</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-2xl font-bold text-cyan-400">2029</p>
                  <p className="text-sm text-white/60">Expected Graduation</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-12"
          >
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-indigo-400">
              About Me
            </p>
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">
              Building my foundation, one project at a time.
            </h2>
            <p className="max-w-3xl text-base leading-8 text-white/75 md:text-lg">
              I&apos;m a first-year Computer Science Engineering student with a
              strong interest in coding, problem solving, and learning how
              software works. I&apos;m currently building my foundation in C,
              C++, Python, and web basics while exploring practical development
              through projects, GitHub, and continuous learning.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-400"
          >
            Skills
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-3xl font-bold md:text-4xl"
          >
            Tools and technologies I&apos;m learning and using
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {skills.map((skill, index) => (
              <span
                key={index}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80 shadow-lg backdrop-blur-md transition hover:-translate-y-1 hover:border-indigo-400/50 hover:bg-white/10"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="projects" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-purple-400">
              Projects
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">
              A few things I&apos;ve built and started
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-xl"
              >
                <div
                  className={`h-44 bg-gradient-to-r ${project.gradient} opacity-90 transition duration-300 group-hover:scale-105`}
                />

                <div className="p-6">
                  <h3 className="mb-3 text-xl font-semibold">{project.title}</h3>

                  <p className="mb-5 text-sm leading-7 text-white/70">
                    {project.description}
                  </p>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.tech.map((item, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {project.link !== "#" ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 transition hover:text-indigo-300"
                    >
                      View Project <FaArrowRight className="text-xs" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-white/40">
                      Coming Soon
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl md:p-12">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-indigo-400">
            Contact
          </p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Let&apos;s connect
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-white/70">
            I&apos;m always open to learning, collaborating, and connecting with
            people who love building and growing in tech.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="mailto:arshshukla10june@gmail.com">
              <button className="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-6 py-3 font-medium transition hover:bg-indigo-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.55)]">
                <FaEnvelope />
                Email Me
              </button>
            </a>

            <a
              href="https://github.com/ArshShukla10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white/90 transition hover:bg-white/10">
                GitHub
              </button>
            </a>

            <a
              href="https://www.linkedin.com/in/arsh-shukla-183206376/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white/90 transition hover:bg-white/10">
                LinkedIn
              </button>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-6 text-center text-sm text-white/50">
        © 2026 Arsh Ghanshyam Shukla. Built with Next.js and improved with
        consistency ⚡
      </footer>
    </main>
  );
}