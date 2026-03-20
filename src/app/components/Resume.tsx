import { motion } from "motion/react"
import { Download, ExternalLink } from "lucide-react"

const resumeUrl = "/resume.pdf"

const orbs = [
  {
    className: "absolute -left-20 -top-16 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl",
    animate: { scale: [1, 1.2, 1], x: [0, 80, 0], y: [0, -60, 0] },
    duration: 24,
  },
  {
    className: "absolute -bottom-24 -right-16 h-[28rem] w-[28rem] rounded-full bg-indigo-500/15 blur-3xl",
    animate: { scale: [1, 1.25, 1], x: [0, -70, 0], y: [0, 70, 0] },
    duration: 28,
  },
  {
    className: "absolute -right-24 top-[40%] h-72 w-72 rounded-full bg-blue-500/15 blur-3xl",
    animate: { scale: [1, 1.15, 1], x: [0, -50, 0], y: [0, -80, 0] },
    duration: 20,
  },
]

export default function Resume() {
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
        <div className="mb-10 max-w-3xl">
          <h1 className="text-4xl font-light text-[color:var(--text)] sm:text-5xl md:text-6xl">
            Curriculum Vitae
          </h1>
          <p className="mt-4 text-base text-[color:var(--text-muted)] sm:text-lg">
            View or download the latest version of my CV. The preview is embedded below for a
            seamless read-through.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <motion.a
              href={resumeUrl}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex w-full items-center gap-3 rounded-full bg-[color:var(--text)] px-6 py-3 text-xs uppercase tracking-[0.2em] text-[color:var(--bg)] sm:w-auto"
            >
              Download PDF
              <Download size={16} />
            </motion.a>
            <motion.a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex w-full items-center gap-3 rounded-full border border-[color:var(--border)] px-6 py-3 text-xs uppercase tracking-[0.2em] text-[color:var(--text)] transition hover:border-[color:var(--border-strong)] hover:bg-[color:var(--surface-hover)] sm:w-auto"
            >
              Open in New Tab
              <ExternalLink size={16} />
            </motion.a>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] backdrop-blur-sm">
          <iframe
            title="Adam Soong CV"
            src={resumeUrl}
            className="h-[65vh] w-full sm:h-[70vh]"
          />
        </div>
        <p className="mt-4 text-xs uppercase tracking-[0.3em] text-[color:var(--text-muted)]">
          If the preview does not load, use the download button above.
        </p>
      </div>
    </div>
  )
}
