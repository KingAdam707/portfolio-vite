import { motion } from "motion/react"
import { ArrowLeft } from "lucide-react"
import AppLink from "./AppLink"
import PageShell from "./PageShell"

const orbs = [
  {
    className: "absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-fuchsia-500/15 blur-3xl",
    animate: { scale: [1, 1.2, 1], x: [0, 70, 0], y: [0, -60, 0] },
    duration: 22,
  },
  {
    className: "absolute bottom-1/3 right-1/4 h-[28rem] w-[28rem] rounded-full bg-sky-500/15 blur-3xl",
    animate: { scale: [1, 1.25, 1], x: [0, -80, 0], y: [0, 80, 0] },
    duration: 26,
  },
]

export default function NotFound() {
  return (
    <PageShell
      orbs={orbs}
      contentClassName="vt-content relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 text-center"
    >
      <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--text-muted)]">404</p>
      <h1 className="mt-4 text-5xl font-light text-[color:var(--text)] md:text-6xl">
        This page drifted off course.
      </h1>
      <p className="mt-4 text-lg text-[color:var(--text-muted)]">
        The link doesn’t point to a valid route. Let’s get you back to the portfolio.
      </p>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-8">
        <AppLink
          to="/"
          className="inline-flex items-center gap-3 rounded-full border border-[color:var(--border)] px-6 py-3 text-xs uppercase tracking-[0.2em] text-[color:var(--text)] transition hover:border-[color:var(--border-strong)] hover:bg-[color:var(--surface-hover)]"
        >
          <ArrowLeft size={16} />
          Back Home
        </AppLink>
      </motion.div>
    </PageShell>
  )
}
