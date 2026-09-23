import { motion } from "motion/react"
import { ArrowLeft, ExternalLink, Github, Sparkles } from "lucide-react"
import AppLink from "./AppLink"
import PageShell from "./PageShell"

const orbs = [
  {
    className: "absolute -left-20 -top-16 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl",
    animate: { scale: [1, 1.2, 1], x: [0, 80, 0], y: [0, -60, 0] },
    duration: 24,
  },
  {
    className: "absolute -bottom-24 -right-16 h-[28rem] w-[28rem] rounded-full bg-violet-500/15 blur-3xl",
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
  { label: "Status", value: "Live" },
  { label: "Method", value: "3-Step" },
  { label: "Login", value: "None" },
]

const coreFeatures = [
  "Three-step guided method: make the x-term positive, isolate it, divide by the coefficient, never a blank equation field.",
  "Structured RULE builder: pick +, −, ×, ÷, a number, and Apply to both sides instead of typing algebra freehand.",
  "A RULE visibly duplicates onto both sides of the equation, showing exactly why balance is preserved.",
  "Guided term-by-term simplification: pupils resolve one group at a time instead of watching the answer appear.",
  "Misconception-aware feedback distinguishes sign errors, magnitude errors, missing variable terms, and premature division.",
  "Four-level progressive hint ladder, prompt, notice, strategy, model, that never blocks progress or docks score.",
]

const appFlow = [
  "Pick Easy, Medium, or Hard and start a 10-question session.",
  "Work each equation through the three-step method rail, choosing a RULE at every step.",
  "Simplify the resulting expression one group at a time with the number pad.",
  "Ask for a hint at any point, it never resets progress or removes points.",
  "Finish with a calm summary: solved independently, with a hint, or with guidance.",
]

const architecture = [
  "Pure TypeScript domain layer, independent of React: exact rational arithmetic, rule application, simplification, solving, and question generation.",
  "Explicit practice-session state machine drives the three-step rail and persists to versioned localStorage.",
  "Equations are generated backwards from a chosen solution, guaranteeing a valid, testable answer at every difficulty.",
  "A misconception-aware evaluator classifies sign, magnitude, missing-variable, and premature-division errors to drive feedback copy.",
  "Next.js App Router, with the RULE builder and arcade scene as client components and hint copy in a dedicated content layer.",
]

const techStack = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Motion",
  "React 19",
  "Vitest",
  "Playwright",
]

const qualityHighlights = [
  "Domain logic (arithmetic, rules, simplification, solving) unit-tested with Vitest, independent of the UI.",
  "Playwright end-to-end tests cover the full three-step practice flow.",
  "TypeScript strict mode and ESLint enforced alongside typecheck, lint, test, and build verification scripts.",
]

const screenshots = [
  {
    src: "/screenshots/AlgebraArcade_Home.jpg",
    alt: "Algebra Arcade start screen with worked example and difficulty picker",
    label: "Start Screen",
  },
  {
    src: "/screenshots/AlgebraArcade_Practice.jpg",
    alt: "Algebra Arcade practice screen showing the three-step method rail",
    label: "Method Rail",
  },
  {
    src: "/screenshots/AlgebraArcade_RuleBuilder.jpg",
    alt: "Algebra Arcade RULE builder with operation, number pad, and apply button",
    label: "RULE Builder",
  },
]

export default function AlgebraArcade() {
  return (
    <PageShell orbs={orbs} maxWidth="max-w-6xl">
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
              Algebra Arcade • Web
            </div>
            <h1 className="text-4xl font-light text-[color:var(--text)] sm:text-5xl md:text-6xl">
              Algebra Arcade
            </h1>
            <p className="text-base text-[color:var(--text-muted)] sm:text-lg">
              I built Algebra Arcade for my younger brother, a UK Key Stage 3 pupil relearning how
              to solve linear equations. Instead of a blank text box, it walks him through the same
              three-step method every time: choose a RULE, watch it apply to both sides, then
              simplify, so the reasoning sticks, not just the answer.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="https://algebra-arcade.vercel.app"
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
                href="https://github.com/KingAdam707/algebra-arcade"
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
    </PageShell>
  )
}
