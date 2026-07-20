// Adam Soong — CV
// Source of truth for public/resume.pdf. Edit this file, then run:
//   typst compile cv/resume.typ public/resume.pdf

#set page(width: 8.5in, height: 11in, margin: (top: 0.22in, bottom: 0.08in, left: 0.55in, right: 0.55in))
#set text(font: "Helvetica", size: 8.5pt, fill: rgb("#1a1a1a"))
#set par(justify: false, leading: 0.34em)

#let accent = rgb("#1d4ed8")
#let muted = rgb("#555555")
#let rule = rgb("#d0d0d0")

#let section(title) = [
  #v(0.08em)
  #text(size: 9.6pt, weight: "bold", fill: accent, tracking: 0.5pt)[#upper(title)]
  #v(-0.55em)
  #line(length: 100%, stroke: 0.6pt + rule)
  #v(0.03em)
]

#let sidesection(title) = [
  #v(0.18em)
  #text(size: 9.2pt, weight: "bold", fill: accent, tracking: 0.5pt)[#upper(title)]
  #v(-0.5em)
  #line(length: 100%, stroke: 0.6pt + rule)
  #v(0.06em)
]

#let role(title, org, dates) = [
  #grid(
    columns: (1fr, auto),
    text(weight: "bold", size: 9.8pt)[#title], text(size: 9pt, fill: muted)[#dates],
  )
  #text(size: 9pt, style: "italic", fill: muted)[#org]
]

#let bullets(items) = {
  for it in items {
    grid(columns: (8pt, 1fr), text(fill: accent)[•], text(size: 8.8pt)[#it])
    v(0.03em)
  }
}

// ---------- Header ----------
#align(center)[
  #text(size: 20pt, weight: "bold")[Adam Soong]
  #v(0.03em)
  #text(size: 10pt, fill: muted)[Data Science Student at Queen's University Belfast]
  #v(0.03em)
  #text(size: 8.3pt, fill: muted)[University Rd, Belfast BT7 1NN]
  #v(0.12em)
  #text(size: 8.5pt)[
    asoong5108\@gmail.com #h(0.6em) · #h(0.6em) +44 7484 357690 #h(0.6em) · #h(0.6em) linkedin.com/in/adamsoong
  ]
]
#v(0.15em)
#line(length: 100%, stroke: 0.8pt + rule)
#v(0.15em)

// ---------- Two-column body ----------
#grid(
  columns: (69%, 3%, 28%),
  // ===== Left column =====
  [
    #section("Summary")
    #par(text(size: 9pt)[
      Final-year Data Science student at Queen's University Belfast, having just completed a
      year-long placement as an AI Engineer Intern at Rapid7, where I was offered a graduate
      role to return to after graduation. Looking for part-time work during my final year —
      reliable, organised, and experienced working in fast-paced, team-based environments
      from both a global tech placement and prior retail work.
    ])

    #section("Experience")
    #role("AI Engineer Intern", "Rapid7, Belfast", "Jun 2025 – Jun 2026")
    #v(0.05em)
    #bullets((
      [Designed and built a shared software tool that standardised how my team tracks and compares machine learning results — adopted across multiple projects and still in use.],
      [Ran data analysis and experiments on real security data to help automatically filter out harmless alerts, cutting manual review workload for the security team.],
      [Presented my work directly to senior leadership twice, including leading a live demo and Q\&A session for the AI leadership team.],
      [Rewrote outdated training material so future interns wouldn't hit the same setup problems I did.],
      [Worked daily as part of a team split between Belfast and the US, keeping communication clear across time zones.],
      [Secured a graduate job offer to return to Rapid7 after graduating.],
    ))

    #v(0.08em)
    #role("Retail Worker", "China Treasure House, Portadown", "Aug 2021 – Jun 2025")
    #v(0.05em)
    #bullets((
      [Managed customer orders and handled cash payments accurately in a fast-paced environment.],
      [Worked closely with colleagues to keep operations running smoothly during busy periods.],
      [Resolved customer queries efficiently and adapted quickly to changing demands under pressure.],
    ))

    #section("Academic Projects")
    #bullets((
      [*Databases* — Built a MySQL database for managing student work-placement records, progressed through normalisation to 3rd Normal Form.],
      [*Object-Oriented Programming* — Built a Java application for storing and retrieving image data, applying inheritance, polymorphism, and encapsulation.],
    ))

    #section("Volunteering")
    #bullets((
      [*Oasis Youth Centre* — Designed and built the centre's website (Wix), including a volunteer sign-up form, to improve accessibility and their online presence.],
    ))

    #section("Education")
    #role("BSc Data Science with a Year of Professional Experience", "Queen's University Belfast", "Sep 2023 – Present")
    #v(0.03em)
    #text(size: 8.2pt, weight: "bold")[Level 2 Modules (TBC):]
    #text(size: 8.2pt)[ Data Structures \& Algorithms in C++, Intro to AI \& Machine Learning, Linear Algebra, Professional \& Transferable Skills, Statistical Inference, Theory of Computation]
    #v(0.05em)
    #text(size: 8.2pt, weight: "bold")[Level 1 Modules (Completed):]
    #text(size: 8.2pt)[ Procedural Programming in Java (87%), Databases in MySQL (66%), OOP in Java (75%), Intro to Statistics \& Probability (66%), Intro to Linear Algebra \& Analysis (69%)]
    #v(0.06em)
    #text(size: 8.2pt, weight: "bold")[A-Levels (2023):]
    #text(size: 8.2pt)[ Mathematics (A\*), Further Mathematics (A), Computer Science (A), Chemistry (B)]
  ],
  [], // gutter
  // ===== Right sidebar =====
  [
    #sidesection("Technical Skills")
    #text(size: 8.3pt, weight: "bold")[Programming:] #text(size: 8.3pt)[Python, Java, C++, SQL]
    #v(0.3em)
    #text(size: 8.3pt, weight: "bold")[Data \& ML Libraries:] #text(size: 8.3pt)[Pandas, NumPy, TensorFlow, Scikit-learn, XGBoost, Matplotlib/Seaborn]
    #v(0.3em)
    #text(size: 8.3pt, weight: "bold")[ML/AI Tools:] #text(size: 8.3pt)[MLflow, CrewAI (agentic workflows)]
    #v(0.3em)
    #text(size: 8.3pt, weight: "bold")[Platforms:] #text(size: 8.3pt)[AWS SageMaker, Git/GitHub, JIRA, Confluence, Metabase]
    #v(0.3em)
    #text(size: 8.3pt, weight: "bold")[Dev Environments:] #text(size: 8.3pt)[Jupyter Notebooks, VS Code, Anaconda, Google Colab]

    #sidesection("Awards & Certifications")
    #text(size: 8.3pt)[
      • The William Hamilton Data Science Prize (2024)\
      • Multi AI Agent Systems with crewAI (DeepLearning.AI, 2025)\
      • Practical Multi AI Agents \& Advanced Use Cases (DeepLearning.AI, 2025)\
      • Complete A.I. \& Machine Learning, Data Science Bootcamp (Udemy, 2024)\
      • Duke of Edinburgh Gold (TBC)\
      • OCN Youth Work Level 1 (2022)\
      • British Sign Language Level 1 (2023)
    ]

    #sidesection("Soft Skills")
    #text(size: 8.3pt)[Teamwork \& Collaboration, Communication, Problem Solving, Adaptability, Leadership, Willingness to Learn]

    #sidesection("Interests")
    #text(size: 8.3pt)[LeetCode, GitHub, QUB Badminton Society, Machine Learning, Computer Hardware, Travelling]

    #sidesection("Additional Information")
    #text(size: 8.3pt)[
      Full UK Driving Licence\
      English (Fluent)\
      Mandarin (Conversational)\
      Japanese (Beginner)\
      GCSE (2021): 10 GCSEs incl.\
      Mathematics (A\*), Further Mathematics (A\*)
    ]

    #sidesection("References")
    #text(size: 8.3pt)[
      *Anna Jurek-Loughrey* — Data Science Director\
      a.jurek\@qub.ac.uk
    ]
    #v(0.2em)
    #text(size: 8.3pt)[
      *Darryl Stewart* — EEECS Director\
      dw.stewart\@qub.ac.uk
    ]
  ]
)
