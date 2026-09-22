import { motion } from "motion/react"
import { Award, Briefcase, Calendar, ExternalLink, GraduationCap } from "lucide-react"
import PageShell from "./PageShell"

const education = [
  {
    degree: "Industry Placement - AI Engineer Intern",
    school: "Rapid7",
    location: "Belfast, Northern Ireland",
    period: "Jun 2025 - Jun 2026",
    gpa: "Completed",
    icon: Briefcase,
    description:
      "Worked on alert triage models, clustering, anomaly detection, and agentic workflow experimentation to improve security operations.",
    achievements: [
      "Modeled alert triage and prioritization systems",
      "Ran agentic workflow experiments for faster analysis",
      "Applied clustering + anomaly detection for security insights",
    ],
  },
  {
    degree: "BSc Data Science",
    school: "Queen's University Belfast",
    location: "Belfast, Northern Ireland",
    period: "Sep 2023 - Present (Final Year)",
    gpa: "In progress",
    icon: GraduationCap,
    awardLabel: "William Hamilton Data Science Prize",
    awardUrl:
      "https://www.fionabrowncommunications.com/news/liberty-it-honours-tech-leader-with-new-qub-student-bursary/",
    description:
      "Blending mathematics and computer science with advanced linear algebra, statistics, and model selection. Built a strong foundation in AI, data structures, algorithms, and object-oriented programming.",
    achievements: [
      "Advanced stats models, linear algebra, and applied ML evaluation",
      "Core CS foundations: OOP, data structures, and algorithms",
      "Languages used across modules: C++, Java, Python",
      "Recipient of the William Hamilton Data Science Prize for top academic performance",
    ],
  },
  {
    degree: "A-Levels",
    school: "Portadown College",
    location: "Portadown, Northern Ireland",
    period: "2019 - 2023",
    gpa: "Further Mathematics, Mathematics, Computer Science, Chemistry",
    icon: GraduationCap,
    description:
      "Built a strong mathematical foundation and discovered a love for computer science. Competed in UKMT junior, intermediate, and senior mathematics challenges.",
    achievements: [
      "Introduced to CS fundamentals and problem solving",
      "UKMT Maths Challenge participation (Junior, Intermediate, Senior)",
      "Developed early interest in AI and mathematical modeling",
    ],
  },
]

const orbs = [
  {
    className: "absolute -left-24 -top-16 h-[30rem] w-[30rem] rounded-full bg-orange-500/25 blur-3xl",
    animate: { scale: [1, 1.2, 1], x: [0, 80, 0], y: [0, -70, 0] },
    duration: 24,
  },
  {
    className: "absolute -bottom-24 right-[6%] h-96 w-96 rounded-full bg-amber-500/20 blur-3xl",
    animate: { scale: [1, 1.3, 1], x: [0, -70, 0], y: [0, 80, 0] },
    duration: 28,
  },
  {
    className: "absolute top-[36%] -right-24 h-80 w-80 rounded-full bg-yellow-500/15 blur-3xl",
    animate: { scale: [1, 1.15, 1], x: [0, -80, 0], y: [0, -90, 0] },
    duration: 20,
  },
  {
    className: "absolute bottom-[8%] -left-20 h-72 w-72 rounded-full bg-red-500/15 blur-3xl",
    animate: { scale: [1, 1.25, 1], x: [0, 90, 0], y: [0, 70, 0] },
    duration: 26,
  },
]

export default function Education() {
  return (
    <PageShell orbs={orbs} maxWidth="max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl font-light text-[color:var(--text)] sm:text-5xl md:text-6xl">
            Education
          </h1>
          <p className="mt-4 text-base text-[color:var(--text-muted)] sm:text-lg">
            Academic milestones that shaped my technical foundation and research mindset.
          </p>
        </div>

        <div className="space-y-10">
          {education.map((item, index) => {
            const Icon = item.icon ?? GraduationCap
            return (
            <div key={item.degree} className="relative flex gap-6">
              {index !== education.length - 1 ? (
                <div className="absolute left-[23px] top-16 hidden h-full w-px bg-gradient-to-b from-[color:var(--border-strong)] to-transparent sm:block" />
              ) : null}
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="relative hidden sm:block">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--border-strong)] bg-[color:var(--surface)]">
                  <Icon size={20} className="text-[color:var(--text)]" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex-1 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 backdrop-blur-sm transition hover:border-[color:var(--border-strong)] hover:bg-[color:var(--surface-hover)] sm:p-8"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-light text-[color:var(--text)]">{item.degree}</h3>
                  {item.awardLabel ? (
                    <a
                      href={item.awardUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-[color:var(--border-strong)] bg-[color:var(--surface)] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[color:var(--text)] transition hover:bg-[color:var(--surface-hover)]"
                    >
                      {item.awardLabel}
                    </a>
                  ) : null}
                </div>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
                  {item.school} - {item.location}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
                    <Calendar size={14} /> {item.period}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
                    <Award size={14} /> {item.gpa}
                  </span>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-[color:var(--text-muted)]">
                  {item.description}
                </p>
                {item.awardUrl ? (
                  <a
                    href={item.awardUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[color:var(--text-muted)] transition hover:text-[color:var(--text)]"
                  >
                    Read about the award <ExternalLink size={14} />
                  </a>
                ) : null}
                <div className="mt-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--text-muted)]">
                    Key Achievements:
                  </p>
                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    {item.achievements.map((achievement) => (
                      <div key={achievement} className="flex items-start gap-3 text-sm text-[color:var(--text-muted)]">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--border-strong)]" />
                        {item.awardUrl && achievement.includes("William Hamilton") ? (
                          <a
                            href={item.awardUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="underline decoration-[color:var(--border-strong)] underline-offset-2 transition hover:text-[color:var(--text)]"
                          >
                            {achievement}
                          </a>
                        ) : (
                          <span>{achievement}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
            )
          })}
        </div>

        <div className="mt-16 grid gap-6 border-t border-[color:var(--border)] pt-16 md:grid-cols-3">
          {[
            { value: "3", label: "Languages Used", url: undefined },
            { value: "AI Engineer Intern", label: "Rapid7 Placement", url: undefined },
            {
              value: "William Hamilton",
              label: "Data Science Prize",
              url: "https://www.fionabrowncommunications.com/news/liberty-it-honours-tech-leader-with-new-qub-student-bursary/",
            },
          ].map((stat) =>
            stat.url ? (
              <a
                key={stat.label}
                href={stat.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 text-center transition hover:border-[color:var(--border-strong)] hover:bg-[color:var(--surface-hover)] sm:p-8"
              >
                <div className="text-3xl font-light text-[color:var(--text)] sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
                  {stat.label}
                </div>
              </a>
            ) : (
              <div
                key={stat.label}
                className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 text-center sm:p-8"
              >
                <div className="text-3xl font-light text-[color:var(--text)] sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
                  {stat.label}
                </div>
              </div>
            ),
          )}
        </div>
    </PageShell>
  )
}
