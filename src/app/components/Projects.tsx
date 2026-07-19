import { useState } from "react"
import { motion } from "motion/react"
import { BookOpen, ExternalLink, Github } from "lucide-react"
import AppLink from "./AppLink"

type Project = {
  title: string
  description: string
  tags: string[]
  image: string
  github: string
  live?: string
  caseStudy?: string
}

const projects: Project[] = [
  {
    title: "QuickQR",
    description:
      "Paste a link, get a big scannable QR code instantly. A zero-backend web tool for handing someone a URL across the room — no app needed to scan.",
    tags: ["JavaScript", "Client-Side", "Static Web App", "QR Codes"],
    image:
      "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/KingAdam707/quickqr",
    live: "https://kingadam707.github.io/quickqr/",
    caseStudy: "/projects/quickqr",
  },
  {
    title: "MunchMatch",
    description:
      "A real-time multiplayer restaurant-voting app — describe the vibe, AI finds restaurants, and the group swipes until everyone agrees on where to eat.",
    tags: ["Next.js", "TypeScript", "Firestore", "GPT-4o-mini"],
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/KingAdam707/MunchMatch",
    live: "https://munch-match-two.vercel.app",
    caseStudy: "/projects/munchmatch",
  },
  {
    title: "BorrowBuddy (Android)",
    description:
      "A loan tracking app for items you lend or borrow, with due-date status, reminders, QR sharing, and history timelines.",
    tags: ["Android", "Jetpack Compose", "Room", "WorkManager"],
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/KingAdam707/BorrowBuddy",
    caseStudy: "/projects/borrowbuddy",
  },
]

const orbs = [
  {
    className: "absolute -top-20 right-[8%] h-96 w-96 rounded-full bg-emerald-500/25 blur-3xl",
    animate: { scale: [1, 1.2, 1], x: [0, -90, 0], y: [0, 70, 0] },
    duration: 22,
  },
  {
    className: "absolute -bottom-24 left-[6%] h-[30rem] w-[30rem] rounded-full bg-teal-500/20 blur-3xl",
    animate: { scale: [1, 1.3, 1], x: [0, 100, 0], y: [0, -60, 0] },
    duration: 26,
  },
  {
    className: "absolute top-[38%] -left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl",
    animate: { scale: [1, 1.15, 1], x: [0, 70, 0], y: [0, 90, 0] },
    duration: 24,
  },
  {
    className: "absolute bottom-[8%] -right-24 h-80 w-80 rounded-full bg-green-500/15 blur-3xl",
    animate: { scale: [1, 1.25, 1], x: [0, -60, 0], y: [0, -70, 0] },
    duration: 20,
  },
]

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <div className="relative min-h-screen overflow-hidden bg-[color:var(--bg)]">
      <div className="vt-bg absolute inset-0 overflow-hidden">
        {orbs.map((orb, index) => (
          <motion.div
            key={index}
            className={orb.className}
            animate={orb.animate}
            transition={{ duration: orb.duration, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(var(--grid)_1px,transparent_1px),linear-gradient(90deg,var(--grid)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="vt-content relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-24 sm:px-6 sm:pb-24 sm:pt-32">
        <div className="mb-12 max-w-2xl">
          <h1 className="text-4xl font-light text-[color:var(--text)] sm:text-5xl md:text-6xl">
            Featured Projects
          </h1>
          <p className="mt-4 text-base text-[color:var(--text-muted)] sm:text-lg">
            A small selection of projects I build for fun and curiosity, exploring AI systems,
            security analytics, and data-rich product ideas.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] transition hover:border-[color:var(--border-strong)] hover:bg-[color:var(--surface-hover)]"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-48 overflow-hidden sm:h-56">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                  animate={{ scale: hoveredProject === index ? 1.1 : 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
                <motion.div
                  animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute inset-0 hidden items-center justify-center gap-4 bg-black/70 backdrop-blur-sm md:flex"
                >
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
                    aria-label={`${project.title} on GitHub`}
                  >
                    <Github size={18} />
                  </motion.a>
                  {project.live ? (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center justify-center rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
                      aria-label={`${project.title} live site`}
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  ) : null}
                  {project.caseStudy ? (
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <AppLink
                        to={project.caseStudy}
                        className="flex items-center justify-center rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
                        aria-label={`${project.title} case study`}
                      >
                        <BookOpen size={18} />
                      </AppLink>
                    </motion.div>
                  ) : null}
                </motion.div>
              </div>
              <div className="space-y-4 p-5 sm:p-6">
                <h3 className="text-lg font-light text-[color:var(--text)] sm:text-xl">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-[color:var(--text-muted)]">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[color:var(--text-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 pt-1 md:hidden">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[color:var(--text)] transition hover:border-[color:var(--border-strong)] hover:bg-[color:var(--surface-hover)]"
                  >
                    <Github size={14} /> Code
                  </a>
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[color:var(--text)] transition hover:border-[color:var(--border-strong)] hover:bg-[color:var(--surface-hover)]"
                    >
                      <ExternalLink size={14} /> Live
                    </a>
                  ) : null}
                  {project.caseStudy ? (
                    <AppLink
                      to={project.caseStudy}
                      className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[color:var(--text)] transition hover:border-[color:var(--border-strong)] hover:bg-[color:var(--surface-hover)]"
                    >
                      <BookOpen size={14} /> Details
                    </AppLink>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
