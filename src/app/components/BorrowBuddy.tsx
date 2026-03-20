import { motion } from "motion/react"
import { ArrowLeft, ExternalLink, Github, Sparkles } from "lucide-react"
import AppLink from "./AppLink"

const orbs = [
  {
    className: "absolute -left-20 -top-16 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl",
    animate: { scale: [1, 1.2, 1], x: [0, 80, 0], y: [0, -60, 0] },
    duration: 24,
  },
  {
    className: "absolute -bottom-24 -right-16 h-[28rem] w-[28rem] rounded-full bg-sky-500/15 blur-3xl",
    animate: { scale: [1, 1.25, 1], x: [0, -70, 0], y: [0, 70, 0] },
    duration: 28,
  },
  {
    className: "absolute -right-24 top-[40%] h-72 w-72 rounded-full bg-blue-500/15 blur-3xl",
    animate: { scale: [1, 1.15, 1], x: [0, -50, 0], y: [0, -80, 0] },
    duration: 20,
  },
]

const highlightStats = [
  { label: "Active Build", value: "WIP" },
  { label: "Core Tabs", value: "4+" },
  { label: "Share Mode", value: "QR" },
]

const coreFeatures = [
  "Lend & borrow tracking with due-date status labels.",
  "Quick-add suggestions for recent people and items.",
  "History timeline grouped by month with filters.",
  "Share loans via QR code or secure link invites.",
  "CameraX + ML Kit scanning for fast import.",
  "WorkManager reminders with nudges and toggles.",
]

const appFlow = [
  "Set your profile name so shared loans show who sent them.",
  "Track loans in Out (lent) or In (borrowed) tabs.",
  "Add a loan with optional due date and share as needed.",
  "Scan a shared invite to instantly import a loan.",
  "Review History to see returned items by month.",
]

const architecture = [
  "UI built with Jetpack Compose + Material 3.",
  "Local persistence using Room (LoanEntity + LoanDao).",
  "Firebase backend for auth, database, friend requests, and multi-user sync.",
  "Background reminders managed by WorkManager.",
  "Sharing via ZXing QR generation and deep link invites.",
  "Scanning handled by CameraX + ML Kit.",
]

const techStack = [
  "Kotlin",
  "Jetpack Compose",
  "Material 3",
  "Room",
  "WorkManager",
  "Firebase",
  "CameraX",
  "ML Kit",
  "ZXing",
]

const backendHighlights = [
  "Firebase Authentication handles user identity and account linking.",
  "Firebase database keeps loans and friend requests in sync across devices.",
  "Push notifications delivered via Firebase Cloud Messaging for reminders and updates.",
]

const futureIdeas = [
  "Cloud sync / export",
  "Per-loan notes or photos",
  "NFC share shortcuts",
  "Home screen widgets",
  "Theming support",
]

const screenshots = [
  {
    src: "/screenshots/BorrowBuddy_Loans.jpeg",
    alt: "BorrowBuddy loans overview screen",
    label: "Loans Overview",
  },
  {
    src: "/screenshots/BorrowBuddy_Adding.jpeg",
    alt: "BorrowBuddy add loan flow",
    label: "Add a Loan",
  },
  {
    src: "/screenshots/BorrowBuddy_Settings.jpeg",
    alt: "BorrowBuddy settings screen",
    label: "Settings & Reminders",
  },
]

export default function BorrowBuddy() {
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
              BorrowBuddy • Android
            </div>
            <h1 className="text-4xl font-light text-[color:var(--text)] sm:text-5xl md:text-6xl">
              BorrowBuddy
            </h1>
            <p className="text-base text-[color:var(--text-muted)] sm:text-lg">
              BorrowBuddy helps people track items they lend or borrow so nothing gets forgotten. It
              combines thoughtful reminders, clear status labels, and shareable invites to keep every
              loan visible and actionable.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="https://github.com/KingAdam707/BorrowBuddy"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex w-full items-center gap-3 rounded-full bg-[color:var(--text)] px-6 py-3 text-xs uppercase tracking-[0.2em] text-[color:var(--bg)] sm:w-auto"
              >
                View GitHub
                <Github size={16} />
              </motion.a>
              <motion.a
                href="https://github.com/KingAdam707/BorrowBuddy"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex w-full items-center gap-3 rounded-full border border-[color:var(--border)] px-6 py-3 text-xs uppercase tracking-[0.2em] text-[color:var(--text)] transition hover:border-[color:var(--border-strong)] hover:bg-[color:var(--surface-hover)] sm:w-auto"
              >
                Read README
                <ExternalLink size={16} />
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
          <h2 className="text-2xl font-light text-[color:var(--text)]">Backend & Sync</h2>
          <ul className="mt-6 space-y-3 text-sm text-[color:var(--text-muted)]">
            {backendHighlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--border-strong)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8">
          <h2 className="text-2xl font-light text-[color:var(--text)]">Screenshots</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {screenshots.map((shot) => (
              <motion.div
                key={shot.src}
                whileHover={{ y: -6 }}
                className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)]"
              >
                <div className="bg-[color:var(--surface)] p-4">
                  <img src={shot.src} alt={shot.alt} className="w-full h-auto" />
                </div>
                <div className="border-t border-[color:var(--border)] px-4 py-3 text-xs uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
                  {shot.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 sm:p-8">
          <h2 className="text-2xl font-light text-[color:var(--text)]">Future Ideas</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {futureIdeas.map((idea) => (
              <div key={idea} className="flex items-start gap-3 text-sm text-[color:var(--text-muted)]">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--border-strong)]" />
                <span>{idea}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
