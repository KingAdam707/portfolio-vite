import { useEffect, useState } from "react"
import AppLink from "./AppLink"
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react"
import {
  Bot,
  BrainCircuit,
  ChartLine,
  Copy,
  Database,
  Github,
  Linkedin,
  Mail,
  Rocket,
  Shield,
} from "lucide-react"

const floatingCards = [
  {
    label: "ML Modeling",
    icon: BrainCircuit,
    top: "15%",
    left: "10%",
    posX: 0.1,
    posY: 0.15,
    delay: 0,
  },
  {
    label: "Agentic Workflows",
    icon: Bot,
    top: "12%",
    right: "6%",
    posX: 0.95,
    posY: 0.18,
    delay: 0.1,
  },
  {
    label: "Security Analytics",
    icon: Shield,
    bottom: "30%",
    left: "8%",
    posX: 0.08,
    posY: 0.7,
    delay: 0.2,
  },
  {
    label: "Insight Generation",
    icon: ChartLine,
    top: "60%",
    right: "10%",
    posX: 0.9,
    posY: 0.6,
    delay: 0.3,
  },
  {
    label: "Data Pipelines",
    icon: Database,
    bottom: "15%",
    right: "15%",
    posX: 0.85,
    posY: 0.85,
    delay: 0.4,
  },
]

const stats = [
  { value: "2+", label: "Years Learning AI" },
  { value: "1", label: "Active Project" },
  { value: "8", label: "Certifications Earned" },
]

const skills = [
  "Python",
  "TensorFlow",
  "PyTorch",
  "Supervised Learning",
  "Unsupervised Learning",
  "Regression & Classification",
  "Exploratory Data Analysis",
  "Feature Engineering",
  "Model Evaluation",
  "Reinforcement Learning",
  "Agentic Workflows",
  "RAG Pipelines",
  "Data Visualization",
  "SQL & Databases",
]

const orbs = [
  {
    className: "absolute -left-20 -top-20 h-96 w-96 rounded-full bg-purple-500/30 blur-3xl",
    animate: { scale: [1, 1.2, 1], x: [0, 100, 0], y: [0, -50, 0] },
    duration: 20,
  },
  {
    className: "absolute -bottom-24 -right-16 h-[32rem] w-[32rem] rounded-full bg-blue-500/25 blur-3xl",
    animate: { scale: [1, 1.3, 1], x: [0, -80, 0], y: [0, 80, 0] },
    duration: 25,
  },
  {
    className: "absolute -right-24 top-[35%] h-80 w-80 rounded-full bg-pink-500/20 blur-3xl",
    animate: { scale: [1, 1.1, 1], x: [0, -50, 0], y: [0, -80, 0] },
    duration: 18,
  },
  {
    className: "absolute bottom-[6%] -left-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl",
    animate: { scale: [1, 1.15, 1], x: [0, 60, 0], y: [0, 100, 0] },
    duration: 22,
  },
  {
    className: "absolute right-[6%] top-[5%] h-[28rem] w-[28rem] rounded-full bg-violet-500/15 blur-3xl",
    animate: { scale: [1, 1.25, 1], x: [0, -70, 0], y: [0, -60, 0] },
    duration: 28,
  },
]

export default function Home() {
  const emailAddress = "asoong5108@gmail.com"
  const emailSubject = "Hello Adam"
  const emailBody = "Hi Adam,%0A%0A"
  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
    emailSubject,
  )}&body=${emailBody}`
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    emailAddress,
  )}&su=${encodeURIComponent(emailSubject)}&body=${emailBody}`
  const outlookLink = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(
    emailAddress,
  )}&subject=${encodeURIComponent(emailSubject)}&body=${emailBody}`
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 150 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)
  const glowX = useTransform(x, (value) => value * 1.2)
  const glowY = useTransform(y, (value) => value * 1.2)
  const floatX = useTransform(x, (value) => value * 0.6)
  const floatY = useTransform(y, (value) => value * 0.6)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0, width: 0, height: 0 })
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const updateSize = () => {
      setMousePosition((prev) => ({
        ...prev,
        width: window.innerWidth,
        height: window.innerHeight,
      }))
    }

    const handleMove = (event: MouseEvent) => {
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      const offsetX = (event.clientX - centerX) / 25
      const offsetY = (event.clientY - centerY) / 25
      mouseX.set(offsetX)
      mouseY.set(offsetY)
      setMousePosition((prev) => ({
        ...prev,
        x: event.clientX,
        y: event.clientY,
      }))
    }

    updateSize()
    window.addEventListener("resize", updateSize)
    window.addEventListener("mousemove", handleMove)
    return () => {
      window.removeEventListener("resize", updateSize)
      window.removeEventListener("mousemove", handleMove)
    }
  }, [mouseX, mouseY])

  useEffect(() => {
    if (!copied) return
    const timer = window.setTimeout(() => setCopied(false), 1500)
    return () => window.clearTimeout(timer)
  }, [copied])

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

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
        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--glow)] blur-3xl"
          style={{ x: glowX, y: glowY }}
        />
      </div>

      <div className="vt-content relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-24 sm:px-6 sm:pb-24 sm:pt-32">
        <div className="relative pb-12 sm:pb-16" style={{ minHeight: "65vh" }}>
          <div className="hidden lg:block">
            {floatingCards.map((card) => {
              const Icon = card.icon
              const cardX = mousePosition.width * card.posX
              const cardY = mousePosition.height * card.posY
              const distance = Math.hypot(mousePosition.x - cardX, mousePosition.y - cardY)
              const scale = Math.max(0.9, 1 - distance / 2000)
              const rotate = distance < 200 ? 5 : 0

              return (
                <motion.div
                  key={card.label}
                  className="absolute"
                  style={{
                    top: card.top,
                    left: card.left,
                    right: card.right,
                    bottom: card.bottom,
                    x: floatX,
                    y: floatY,
                  }}
                  initial={false}
                  animate={{ scale, rotate }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="group relative flex items-center gap-3 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-3 backdrop-blur-md"
                  >
                    <span className="absolute inset-0 rounded-full bg-[color:var(--surface-hover)] opacity-0 blur-xl transition group-hover:opacity-100" />
                    <Icon size={18} className="relative text-[color:var(--text)]" />
                    <span className="relative text-xs uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
                      {card.label}
                    </span>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1.5 text-[10px] uppercase tracking-[0.24em] text-[color:var(--text-muted)] backdrop-blur-sm sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.3em]">
              <motion.span
                animate={{ y: [0, -4, 0], rotate: [0, -6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-[color:var(--text)]"
              >
                <Rocket size={14} />
              </motion.span>
              Exploring AI + Data Science
            </div>

            <h1 className="text-4xl font-light tracking-tight text-[color:var(--text)] sm:text-6xl md:text-7xl lg:text-8xl">
              Adam Soong
            </h1>
            <div className="my-6 h-px w-full bg-[linear-gradient(to_right,transparent,var(--divider),transparent)]" />
            <h2 className="text-lg font-light text-[color:var(--text-muted)] sm:text-xl md:text-2xl lg:text-3xl">
              <span className="block">Data Science at Queen's University Belfast.</span>
              <span className="mt-1 block">AI Engineer Intern at Rapid7.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[color:var(--text-muted)] sm:text-base md:text-lg">
              I love how AI/ML turns raw data into systems that can adapt, learn, and make life safer.
              The mix of math, experimentation, and real-world impact keeps me constantly curious.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <AppLink
                  to="/projects"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[color:var(--text)] px-6 py-3 text-sm uppercase tracking-[0.2em] text-[color:var(--bg)] sm:w-auto sm:px-8"
                >
                  View My Work
                </AppLink>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex"
              >
                <AppLink
                  to="/resume"
                  className="inline-flex w-full items-center justify-center rounded-full border border-[color:var(--border)] px-6 py-3 text-sm uppercase tracking-[0.2em] text-[color:var(--text)] backdrop-blur-sm transition hover:border-[color:var(--border-strong)] hover:bg-[color:var(--surface-hover)] sm:w-auto sm:px-8"
                >
                  View CV
                </AppLink>
              </motion.div>
            </div>

            <div className="mt-10 mb-8 flex items-center justify-center gap-3 sm:mb-0 sm:gap-4">
              {[
                { label: "GitHub", href: "https://github.com/KingAdam707", icon: Github },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/adamsoong/", icon: Linkedin },
              ].map((link) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="flex items-center justify-center rounded-full border border-[color:var(--border)] p-3 text-[color:var(--text)] backdrop-blur-sm transition hover:border-[color:var(--border-strong)] hover:bg-[color:var(--surface-hover)]"
                    aria-label={link.label}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}

              <div className="group relative">
                <motion.button
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="flex items-center justify-center rounded-full border border-[color:var(--border)] p-3 text-[color:var(--text)] backdrop-blur-sm transition hover:border-[color:var(--border-strong)] hover:bg-[color:var(--surface-hover)]"
                  aria-label="Email options"
                  type="button"
                >
                  <Mail size={20} />
                </motion.button>

                <div className="pointer-events-none absolute right-0 top-10 w-60 origin-top-right translate-y-2 rounded-2xl border border-[color:var(--border)] bg-[color:var(--nav)] p-2 opacity-0 shadow-lg backdrop-blur-lg transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100 before:absolute before:-top-4 before:left-0 before:h-4 before:w-full before:content-['']">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs uppercase tracking-[0.2em] text-[color:var(--text-muted)] transition hover:bg-[color:var(--surface-hover)] hover:text-[color:var(--text)]"
                  >
                    Copy Email
                    <Copy size={14} />
                  </button>
                  <a
                    href={gmailLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs uppercase tracking-[0.2em] text-[color:var(--text-muted)] transition hover:bg-[color:var(--surface-hover)] hover:text-[color:var(--text)]"
                  >
                    Gmail
                    <span className="text-[10px] text-[color:var(--text-muted)]">Web</span>
                  </a>
                  <a
                    href={outlookLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs uppercase tracking-[0.2em] text-[color:var(--text-muted)] transition hover:bg-[color:var(--surface-hover)] hover:text-[color:var(--text)]"
                  >
                    Outlook
                    <span className="text-[10px] text-[color:var(--text-muted)]">Web</span>
                  </a>
                  <a
                    href={mailtoLink}
                    className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs uppercase tracking-[0.2em] text-[color:var(--text-muted)] transition hover:bg-[color:var(--surface-hover)] hover:text-[color:var(--text)]"
                  >
                    Apple / Default
                    <span className="text-[10px] text-[color:var(--text-muted)]">Mail</span>
                  </a>
                </div>

                {copied ? (
                  <div className="pointer-events-none absolute right-0 top-24 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-1 text-[10px] uppercase tracking-[0.3em] text-[color:var(--text-muted)] backdrop-blur-sm">
                    Copied
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 mb-16 grid gap-6 md:grid-cols-3 sm:mt-0 sm:mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 backdrop-blur-sm transition hover:border-[color:var(--border-strong)] hover:bg-[color:var(--surface-hover)] sm:p-8"
            >
              <div className="text-3xl font-light text-[color:var(--text)] sm:text-4xl md:text-5xl">
                {stat.value}
              </div>
              <div className="mt-3 text-sm uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-[color:var(--border)] py-16 sm:py-24">
          <div className="mb-12 flex flex-col gap-3">
            <h3 className="text-2xl font-light text-[color:var(--text)] sm:text-3xl md:text-4xl">
              Skills &amp; Expertise
            </h3>
            <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--text-muted)]">
              Technologies I work with
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <AnimatePresence>
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="relative rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-3 text-xs uppercase tracking-[0.2em] text-[color:var(--text-muted)] backdrop-blur-sm transition hover:border-[color:var(--border-strong)] hover:bg-[color:var(--surface-hover)] hover:text-[color:var(--text)] hover:shadow-[0_0_18px_rgba(56,189,248,0.25)] sm:px-6"
                >
                  {skill}
                </motion.span>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
