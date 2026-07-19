import { motion } from "motion/react"
import { ArrowLeft, ExternalLink, Github, Sparkles } from "lucide-react"
import AppLink from "./AppLink"

const orbs = [
  {
    className: "absolute -left-20 -top-16 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl",
    animate: { scale: [1, 1.2, 1], x: [0, 80, 0], y: [0, -60, 0] },
    duration: 24,
  },
  {
    className: "absolute -bottom-24 -right-16 h-[28rem] w-[28rem] rounded-full bg-sky-500/15 blur-3xl",
    animate: { scale: [1, 1.25, 1], x: [0, -70, 0], y: [0, 70, 0] },
    duration: 28,
  },
  {
    className: "absolute -right-24 top-[40%] h-72 w-72 rounded-full bg-teal-500/15 blur-3xl",
    animate: { scale: [1, 1.15, 1], x: [0, -50, 0], y: [0, -80, 0] },
    duration: 20,
  },
]

const highlightStats = [
  { label: "Status", value: "Live" },
  { label: "Backend", value: "None" },
  { label: "Export", value: "PNG / SVG" },
]

const coreFeatures = [
  "Accepts a URL via paste, typing, or drag-and-drop of selected text.",
  "QR code generates live as you type — no generate button needed.",
  "Displays the QR large, high-contrast, and centered for scanning across a room.",
  "Copy the QR image to the clipboard or download it as PNG or SVG.",
  "Works on any modern browser, laptop or phone, from the same page.",
  "Scannable by any stock phone camera — nothing to install for the recipient.",
]

const designDecisions = [
  "Links-only for v1: a QR code holds only a short string, so a URL fits perfectly and removes every hard problem — hosting, uploads, expiry, privacy.",
  "Static web app with no backend: the whole tool is one page of HTML/CSS/JS drawn entirely in the browser.",
  "Free to deploy anywhere: shipped as-is to GitHub Pages with no build step and no dependencies.",
  "Deliberately finished: v1 is a complete tool, not a stub waiting on server features.",
]

const techStack = [
  "JavaScript",
  "HTML",
  "CSS",
  "Client-Side QR Rendering",
  "GitHub Pages",
]

const roadmap = [
  "Files & images via hosted links (tunnel, cloud storage, or ephemeral host)",
  "Installable PWA with native share-sheet integration",
  "Browser extension to QR the current tab in one click",
  "History of recent codes, QR styling, dark mode",
]

export default function QuickQR() {
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

      <div className="vt-content relative z-10 mx-auto max-w-6xl px-5 pb-20 pt-24 sm:px-6 sm:pb-24 sm:pt-32">
        <div className="mb-8 flex items-center gap-3">
          <AppLink
            to="/projects"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[color:var(--text-muted)] transition hover:text-[color:var(--text)]"
          >
            <ArrowLeft size={14} /> Back to Projects
          </AppLink>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-2 text-xs uppercase tracking-[0.3em] text-[color:var(--text-muted)]">
              <Sparkles size={14} />
              QuickQR • Web
            </div>
            <h1 className="text-4xl font-light text-[color:var(--text)] sm:text-5xl md:text-6xl">
              QuickQR
            </h1>
            <p className="text-base text-[color:var(--text-muted)] sm:text-lg">
              Paste a link, get a QR code. QuickQR is the fastest possible path from &quot;I have a
              link&quot; to &quot;you have the link&quot; — pull up the page, paste your URL, and
              point your screen at whoever needs it. They scan it with their phone camera; no app
              required on either side.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="https://kingadam707.github.io/quickqr/"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex w-full items-center gap-3 rounded-full bg-[color:var(--text)] px-6 py-3 text-xs uppercase tracking-[0.2em] text-[color:var(--bg)] sm:w-auto"
              >
                Try It Live
                <ExternalLink size={16} />
              </motion.a>
              <motion.a
                href="https://github.com/KingAdam707/quickqr"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex w-full items-center gap-3 rounded-full border border-[color:var(--border)] px-6 py-3 text-xs uppercase tracking-[0.2em] text-[color:var(--text)] transition hover:border-[color:var(--border-strong)] hover:bg-[color:var(--surface-hover)] sm:w-auto"
              >
                View GitHub
                <Github size={16} />
              </motion.a>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {highlightStats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-3 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-3"
              >
                <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
                  {stat.label}
                </span>
                <span className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface-hover)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[color:var(--text)]">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 sm:p-8">
            <h2 className="text-2xl font-light text-[color:var(--text)]">Core Features</h2>
            <ul className="mt-6 space-y-3 text-sm text-[color:var(--text-muted)]">
              {coreFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--border-strong)]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 sm:p-8">
            <h2 className="text-2xl font-light text-[color:var(--text)]">Design Decisions</h2>
            <ul className="mt-6 space-y-3 text-sm text-[color:var(--text-muted)]">
              {designDecisions.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--border-strong)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 sm:p-8">
            <h2 className="text-2xl font-light text-[color:var(--text)]">Tech Stack</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[color:var(--text-muted)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 sm:p-8">
            <h2 className="text-2xl font-light text-[color:var(--text)]">Roadmap</h2>
            <ul className="mt-6 space-y-3 text-sm text-[color:var(--text-muted)]">
              {roadmap.map((idea) => (
                <li key={idea} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--border-strong)]" />
                  <span>{idea}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
