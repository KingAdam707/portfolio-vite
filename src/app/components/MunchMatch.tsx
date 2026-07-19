import { motion } from "motion/react"
import { ArrowLeft, ExternalLink, Github, Sparkles } from "lucide-react"
import AppLink from "./AppLink"

const orbs = [
  {
    className: "absolute -left-20 -top-16 h-96 w-96 rounded-full bg-rose-500/20 blur-3xl",
    animate: { scale: [1, 1.2, 1], x: [0, 80, 0], y: [0, -60, 0] },
    duration: 24,
  },
  {
    className: "absolute -bottom-24 -right-16 h-[28rem] w-[28rem] rounded-full bg-orange-500/15 blur-3xl",
    animate: { scale: [1, 1.25, 1], x: [0, -70, 0], y: [0, 70, 0] },
    duration: 28,
  },
  {
    className: "absolute -right-24 top-[40%] h-72 w-72 rounded-full bg-amber-500/15 blur-3xl",
    animate: { scale: [1, 1.15, 1], x: [0, -50, 0], y: [0, -80, 0] },
    duration: 20,
  },
]

const highlightStats = [
  { label: "Status", value: "Live" },
  { label: "Group Size", value: "Up to 10" },
  { label: "Login", value: "None" },
]

const coreFeatures = [
  "Free-text prompt describing the group's vibe, parsed by GPT-4o-mini into structured preferences.",
  "Google Places API fetches up to 5 matching restaurants for the session.",
  "Shareable session link with a live lobby while friends join.",
  "Tinder-style swipe cards with drag, ✗/✓ buttons, and arrow-key navigation.",
  "Real-time match detection — the first unanimous yes wins.",
  "Match reveal with photo, rating, Google Maps link, and UberEats order link.",
]

const appFlow = [
  "The host describes the vibe — cuisine, budget, group size, location.",
  "AI extracts structured preferences and restaurants are fetched.",
  "The host shares the session link and friends join the lobby.",
  "Everyone swipes yes or no on each restaurant card.",
  "The moment all active participants accept the same place, the match is revealed.",
]

const architecture = [
  "Next.js App Router with sensitive work in Server Actions — API keys never reach the browser.",
  "Firebase anonymous auth: every visitor gets a UID automatically, no login required.",
  "Cloud Firestore real-time subscriptions drive the lobby, voting, and match screens.",
  "Session state machine: lobby → active → match / no match, with an error + retry path.",
  "Pure-function match detection over votes and active participant UIDs.",
  "Firestore writes retry with exponential backoff; disconnected users go inactive after 30s.",
]

const techStack = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Firebase Auth",
  "Cloud Firestore",
  "Vercel AI SDK",
  "GPT-4o-mini",
  "Google Places API",
  "Zod",
]

const qualityHighlights = [
  "Tested with Jest, React Testing Library, and Playwright end-to-end runs.",
  "Accessibility checks with jest-axe, plus keyboard alternatives to every swipe gesture.",
  "Property-based testing with fast-check for the match-detection logic.",
]

export default function MunchMatch() {
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
              MunchMatch • Web
            </div>
            <h1 className="text-4xl font-light text-[color:var(--text)] sm:text-5xl md:text-6xl">
              MunchMatch
            </h1>
            <p className="text-base text-[color:var(--text-muted)] sm:text-lg">
              MunchMatch is a real-time multiplayer restaurant-voting app — think Tinder for
              deciding where to eat. A group describes what they&apos;re in the mood for, AI turns
              it into restaurant suggestions, and everyone swipes until the whole group agrees on
              a place.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="https://munch-match-two.vercel.app"
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
                href="https://github.com/KingAdam707/MunchMatch"
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
            <h2 className="text-2xl font-light text-[color:var(--text)]">App Flow</h2>
            <ul className="mt-6 space-y-3 text-sm text-[color:var(--text-muted)]">
              {appFlow.map((step) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--border-strong)]" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 sm:p-8">
            <h2 className="text-2xl font-light text-[color:var(--text)]">Architecture</h2>
            <ul className="mt-6 space-y-3 text-sm text-[color:var(--text-muted)]">
              {architecture.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--border-strong)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

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
        </div>

        <div className="mt-10 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 sm:p-8">
          <h2 className="text-2xl font-light text-[color:var(--text)]">Testing & Quality</h2>
          <ul className="mt-6 space-y-3 text-sm text-[color:var(--text-muted)]">
            {qualityHighlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--border-strong)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
