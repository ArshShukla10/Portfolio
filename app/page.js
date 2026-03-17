"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-black via-gray-900 to-black text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="font-bold text-lg">Arsh</h1>
          <div className="space-x-6 text-sm">
            <a href="#about" className="hover:text-indigo-400">About</a>
            <a href="#projects" className="hover:text-indigo-400">Projects</a>
            <a href="#contact" className="hover:text-indigo-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Hi, I'm Arsh 👋
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl opacity-80 mb-6"
        >
          Developer | Always Curious about how it works!🚀
        </motion.p>

        {/* SOCIAL ICONS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex gap-6 text-2xl mb-6"
        >
          <a href="https://github.com/dashboard" target="_blank"  rel="noopener noreferrer"
>
            <FaGithub className="hover:text-indigo-400 cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/in/arsh-shukla-183206376/" target="_blank"  rel="noopener noreferrer"
>
            <FaLinkedin className="hover:text-indigo-400 cursor-pointer" />
          </a>
        </motion.div>

        <a href="#projects">
          <button className="px-6 py-3 bg-indigo-600 rounded-xl hover:bg-indigo-700 transition hover:shadow-[0_0_20px_rgba(99,102,241,0.7)]">
            View My Work
          </button>
        </a>

      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-semibold mb-4"
        >
          About Me
        </motion.h2>

        <p className="opacity-80 leading-relaxed">
          I'm a coder learning languages to decide with whom to move forward :) 
          Always Happy To Solve tough Questions and Make Something new
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6 bg-white/5">
        <h2 className="text-3xl font-semibold text-center mb-10">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {/* PROJECT CARD */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 rounded-xl overflow-hidden shadow-lg"
          >
            <div className="h-40 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
            <div className="p-4">
              <h3 className="text-xl font-bold">Portfolio Website</h3>
              <p className="opacity-80 text-sm">First Try</p>
              <a href="#" className="text-indigo-400 text-sm">View Project →</a>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 rounded-xl overflow-hidden shadow-lg"
          >
            <div className="h-40 bg-gradient-to-r from-pink-500 to-red-500"></div>
            <div className="p-4">
              <h3 className="text-xl font-bold">Mini Project for SEM II</h3>
              <p className="opacity-80 text-sm">Still Thinking</p>
              <a href="#" className="text-indigo-400 text-sm">View Project →</a>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 rounded-xl overflow-hidden shadow-lg"
          >
            <div className="h-40 bg-gradient-to-r from-green-400 to-blue-500"></div>
            <div className="p-4">
              <h3 className="text-xl font-bold">Coming Soon</h3>
              <p className="opacity-80 text-sm">More projects coming 🚀</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
        <p className="opacity-80 mb-6">
          Let’s connect and build something amazing!
        </p>

        <a href="shuklaarsh10june@gmail.com">
          <button className="px-6 py-3 bg-indigo-600 rounded-xl hover:bg-indigo-700 transition hover:shadow-[0_0_20px_rgba(99,102,241,0.7)]">
            Email Me 📩
          </button>
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center opacity-60 text-sm">
        © 2026 Arsh. Built with Next.js ⚡
      </footer>

    </main>
  );
}