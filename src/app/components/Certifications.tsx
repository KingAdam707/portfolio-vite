import { motion } from "motion/react"
import { Award, Calendar, CheckCircle, ExternalLink } from "lucide-react"

const certifications = [
  {
    title: "Complete A.I. & Machine Learning, Data Science Bootcamp",
    issuer: "Zero To Mastery Academy (Udemy)",
    date: "Sep 2024",
    credentialId: "UC-74ec18ee-a54f-4747-b45b-6e27f160f889",
    description:
      "Comprehensive bootcamp covering machine learning foundations, deep learning, and applied data science workflows. Built end-to-end projects with Python and TensorFlow, emphasizing model evaluation.",
    skills: ["Machine Learning", "TensorFlow", "Python", "Model Evaluation"],
    verifyUrl: "https://www.udemy.com/certificate/UC-74ec18ee-a54f-4747-b45b-6e27f160f889/",
  },
  {
    title: "Unsupervised Machine Learning",
    issuer: "IBM (Coursera)",
    date: "Jan 2025",
    credentialId: "D2F1TL2E6FDQ",
    description:
      "Focused on clustering, dimensionality reduction, and pattern discovery in unlabeled data. Applied unsupervised techniques to reveal structure and anomalies.",
    skills: ["Unsupervised Learning", "Clustering", "Dimensionality Reduction"],
    verifyUrl: "https://www.coursera.org/account/accomplishments/certificate/D2F1TL2E6FDQ",
  },
  {
    title: "Supervised Machine Learning: Regression",
    issuer: "IBM (Coursera)",
    date: "Dec 2024",
    credentialId: "WPVSG9QJP89X",
    description:
      "Trained and evaluated regression models for predictive tasks with a focus on feature engineering. Practiced error analysis to improve generalization.",
    skills: ["Regression", "Supervised Learning", "Feature Engineering"],
    verifyUrl: "https://www.coursera.org/account/accomplishments/certificate/WPVSG9QJP89X",
  },
  {
    title: "Exploratory Data Analysis for Machine Learning",
    issuer: "IBM (Coursera)",
    date: "Nov 2024",
    credentialId: "V5WOK4RW80NR",
    description:
      "Hands-on EDA techniques to understand distributions, relationships, and anomalies. Built intuition for data quality before model selection.",
    skills: ["EDA", "Data Visualization", "Data Cleaning"],
    verifyUrl: "https://www.coursera.org/account/accomplishments/certificate/V5WOK4RW80NR",
  },
  {
    title: "Deep Learning and Reinforcement Learning",
    issuer: "IBM (Coursera)",
    date: "Feb 2025",
    credentialId: "CZ0K5SH2JPRD",
    description:
      "Covered neural network architectures and reinforcement learning fundamentals. Implemented policy and value methods for sequential decision-making.",
    skills: ["Deep Learning", "Reinforcement Learning", "Neural Networks"],
    verifyUrl: "https://www.coursera.org/account/accomplishments/certificate/CZ0K5SH2JPRD",
  },
  {
    title: "Supervised Machine Learning: Classification",
    issuer: "IBM (Coursera)",
    date: "Jan 2025",
    credentialId: "KLJHX9G59BQ6",
    description:
      "Built classification pipelines with metric-driven evaluation and threshold tuning. Addressed class imbalance and model interpretability.",
    skills: ["Classification", "Model Evaluation", "Imbalanced Data"],
    verifyUrl: "https://www.coursera.org/account/accomplishments/certificate/KLJHX9G59BQ6",
  },
  {
    title: "Multi AI Agent Systems with crewAI",
    issuer: "DeepLearning.AI • crewAI",
    date: "Nov 2025",
    credentialId: "aeb580e2-71aa-44a7-9997-3c768f75240e",
    description:
      "Designed multi-agent workflows for task automation and retrieval-augmented generation. Explored agent coordination patterns and tooling.",
    skills: ["Agents", "RAG", "Task Automation", "GenAI"],
    verifyUrl: "https://learn.deeplearning.ai/accomplishments/aeb580e2-71aa-44a7-9997-3c768f75240e",
  },
  {
    title: "Practical Multi AI Agents and Advanced Use Cases",
    issuer: "DeepLearning.AI • crewAI",
    date: "Oct 2025",
    credentialId: "6f7ebe21-4e86-40bd-8ecc-f744a1b746cf",
    description:
      "Built applied agentic systems for chatbots and automation workflows. Practiced orchestration strategies across multiple GenAI use cases.",
    skills: ["Agents", "Chatbots", "Workflow Orchestration"],
    verifyUrl: "https://learn.deeplearning.ai/accomplishments/6f7ebe21-4e86-40bd-8ecc-f744a1b746cf",
  },
]

const orbs = [
  {
    className: "absolute -top-20 right-[8%] h-[32rem] w-[32rem] rounded-full bg-indigo-500/25 blur-3xl",
    animate: { scale: [1, 1.2, 1], x: [0, -85, 0], y: [0, 75, 0] },
    duration: 25,
  },
  {
    className: "absolute -bottom-24 left-[6%] h-96 w-96 rounded-full bg-violet-500/20 blur-3xl",
    animate: { scale: [1, 1.3, 1], x: [0, 90, 0], y: [0, -65, 0] },
    duration: 27,
  },
  {
    className: "absolute top-[36%] -left-24 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl",
    animate: { scale: [1, 1.15, 1], x: [0, 75, 0], y: [0, -85, 0] },
    duration: 23,
  },
  {
    className: "absolute bottom-[8%] -right-24 h-72 w-72 rounded-full bg-fuchsia-500/15 blur-3xl",
    animate: { scale: [1, 1.25, 1], x: [0, -65, 0], y: [0, 80, 0] },
    duration: 21,
  },
]

export default function Certifications() {
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
        <div className="mb-12 max-w-2xl">
          <h1 className="text-4xl font-light text-[color:var(--text)] sm:text-5xl md:text-6xl">
            Certifications
          </h1>
          <p className="mt-4 text-base text-[color:var(--text-muted)] sm:text-lg">
            Proof of ongoing learning across machine learning, security analytics, and agentic AI systems.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="relative rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 backdrop-blur-sm transition hover:border-[color:var(--border-strong)] hover:bg-[color:var(--surface-hover)] sm:p-8"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="absolute -right-4 -top-4 flex h-16 w-16 items-center justify-center rounded-full border border-[color:var(--border-strong)] bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm"
              >
                <Award size={28} className="text-[color:var(--text)]" />
              </motion.div>
              <h3 className="pr-12 text-lg font-light text-[color:var(--text)] sm:text-xl">
                {cert.title}
              </h3>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
                {cert.issuer}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
                  <Calendar size={14} /> {cert.date}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
                  <CheckCircle size={14} /> {cert.credentialId}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[color:var(--text-muted)]">
                {cert.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[color:var(--text-muted)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <motion.a
                href={cert.verifyUrl}
                whileHover={{ x: 5 }}
                className="mt-6 inline-flex items-center gap-2 text-sm text-[color:var(--text-muted)] hover:text-[color:var(--text)]"
                target="_blank"
                rel="noreferrer"
              >
                Verify credential <ExternalLink size={16} />
              </motion.a>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 border-t border-[color:var(--border)] pt-16 md:grid-cols-4">
          {[
            { value: "8", label: "Total Certifications" },
            { value: "3", label: "Learning Platforms" },
            { value: "2025", label: "Latest Earned" },
            { value: "500+", label: "Hours Invested" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 text-center sm:p-6"
            >
              <div className="text-3xl font-light text-[color:var(--text)]">{stat.value}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
