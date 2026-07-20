// Adam Soong — CV
// Source of truth for public/resume.pdf. Edit this file, then run:
//   typst compile cv/resume.typ public/resume.pdf

#set page(width: 8.5in, height: 11in, margin: (top: 0.55in, bottom: 0.5in, left: 0.6in, right: 0.6in))
#set text(font: "Helvetica", size: 10pt, fill: rgb("#1a1a1a"))
#set par(justify: false, leading: 0.65em)

#let accent = rgb("#1d4ed8")
#let muted = rgb("#555555")
#let rule = rgb("#d0d0d0")

#let section(title) = [
  #v(0.5em)
  #text(size: 11pt, weight: "bold", fill: accent, tracking: 0.5pt)[#upper(title)]
  #v(-0.6em)
  #line(length: 100%, stroke: 0.6pt + rule)
  #v(0.25em)
]

#let sidesection(title) = [
  #v(0.45em)
  #text(size: 10pt, weight: "bold", fill: accent, tracking: 0.5pt)[#upper(title)]
  #v(-0.55em)
  #line(length: 100%, stroke: 0.6pt + rule)
  #v(0.2em)
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
    grid(columns: (8pt, 1fr), text(fill: accent)[•], text(size: 10pt)[#it])
    v(0.4em)
  }
}

// ---------- Header ----------
#align(center)[
  #text(size: 24pt, weight: "bold")[Adam Soong]
  #v(0.1em)
  #text(size: 11pt, fill: muted)[Data Science Student at Queen's University Belfast]
  #v(0.1em)
  #text(size: 9pt, fill: muted)[University Rd, Belfast BT7 1NN]
  #v(0.25em)
  #text(size: 9.3pt)[
    asoong5108\@gmail.com #h(0.6em) · #h(0.6em) +44 7484 357690 #h(0.6em) · #h(0.6em) linkedin.com/in/adamsoong
  ]
]
#v(0.4em)
#line(length: 100%, stroke: 0.8pt + rule)
#v(0.4em)

// ---------- Two-column body ----------
#grid(
  columns: (63%, 4%, 33%),
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
    #v(0.25em)
    #bullets((
      [Designed and built a shared software tool that standardised how my team tracks and compares machine learning results — adopted across multiple projects and still in use.],
      [Ran data analysis and experiments on real security data to help automatically filter out harmless alerts, cutting manual review workload for the security team.],
      [Presented my work directly to senior leadership twice, including leading a live demo and Q\&A session for the AI leadership team.],
      [Rewrote outdated training material so future interns wouldn't hit the same setup problems I did.],
      [Worked daily as part of a team split between Belfast and the US, keeping communication clear across time zones.],
      [Secured a graduate job offer to return to Rapid7 after graduating.],
    ))

    #v(0.4em)
    #role("Retail Worker", "China Treasure House, Portadown", "Aug 2021 – Jun 2025")
    #v(0.25em)
    #bullets((
      [Managed customer orders and handled cash payments accurately in a fast-paced environment.],
      [Worked closely with colleagues to keep operations running smoothly during busy periods.],
      [Resolved customer queries efficiently and adapted quickly to changing demands under pressure.],
    ))

    #section("Academic Projects")
    #block(breakable: false, bullets((
      [*Databases* — Built a MySQL database for managing student work-placement records, progressed through normalisation to 3rd Normal Form.],
      [*Object-Oriented Programming* — Built a Java application for storing and retrieving image data, applying inheritance, polymorphism, and encapsulation.],
    )))

    #section("Volunteering")
    #block(breakable: false, bullets((
      [*Oasis Youth Centre* — Designed and built the centre's website (Wix), including a volunteer sign-up form, to improve accessibility and their online presence.],
    )))

    #section("Education")
    #role("BSc Data Science with a Year of Professional Experience", "Queen's University Belfast", "Sep 2023 – Present")
    #v(0.25em)
    #text(size: 9pt, weight: "bold")[Level 2 Modules (TBC):]
    #text(size: 9pt)[ Data Structures \& Algorithms in C++, Intro to AI \& Machine Learning, Linear Algebra, Professional \& Transferable Skills, Statistical Inference, Theory of Computation]
    #v(0.35em)
    #text(size: 9pt, weight: "bold")[Level 1 Modules (Completed):]
    #text(size: 9pt)[ Procedural Programming in Java (87%), Databases in MySQL (66%), OOP in Java (75%), Intro to Statistics \& Probability (66%), Intro to Linear Algebra \& Analysis (69%)]
    #v(0.4em)
    #grid(columns: (1fr, auto), text(size: 9.3pt, weight: "bold")[A-Levels], text(size: 9pt, fill: muted)[2023])
    #text(size: 9pt)[Mathematics (A\*), Further Mathematics (A), Computer Science (A), Chemistry (B)]
    #v(0.3em)
    #grid(columns: (1fr, auto), text(size: 9.3pt, weight: "bold")[GCSE], text(size: 9pt, fill: muted)[2021])
    #text(size: 9pt)[10 GCSEs, including Mathematics (A\*), Digital Technology Programming (A), and Further Mathematics (A\*)]
  ],
  [], // gutter
  // ===== Right sidebar =====
  [
    #sidesection("Technical Skills")
    #text(size: 9pt, weight: "bold")[Programming:] #text(size: 9pt)[Python, Java, C++, SQL]
    #v(0.3em)
    #text(size: 9pt, weight: "bold")[Data \& ML Libraries:] #text(size: 9pt)[Pandas, NumPy, TensorFlow, Scikit-learn, XGBoost, Matplotlib/Seaborn]
    #v(0.3em)
    #text(size: 9pt, weight: "bold")[ML/AI Tools:] #text(size: 9pt)[MLflow, CrewAI (agentic workflows)]
    #v(0.3em)
    #text(size: 9pt, weight: "bold")[Platforms:] #text(size: 9pt)[AWS SageMaker, Git/GitHub, JIRA, Confluence, Metabase]
    #v(0.3em)
    #text(size: 9pt, weight: "bold")[Dev Environments:] #text(size: 9pt)[Jupyter Notebooks, VS Code, Anaconda, Google Colab]

    #sidesection("Awards & Certifications")
    #text(size: 9pt)[
      • The William Hamilton Data Science Prize (2024)\
      • Multi AI Agent Systems with crewAI (DeepLearning.AI, 2025)\
      • Practical Multi AI Agents \& Advanced Use Cases (DeepLearning.AI, 2025)\
      • Complete A.I. \& Machine Learning, Data Science Bootcamp (Udemy, 2024)\
      • Duke of Edinburgh Gold (TBC)\
      • OCN Youth Work Level 1 (2022)\
      • British Sign Language Level 1 (2023)
    ]

    #sidesection("Soft Skills")
    #text(size: 9pt)[Teamwork \& Collaboration, Communication, Problem Solving, Adaptability, Leadership, Willingness to Learn]

    #sidesection("Interests")
    #text(size: 9pt)[LeetCode, GitHub, QUB Badminton Society, Machine Learning, Computer Hardware, Travelling]

    #sidesection("Additional Information")
    #text(size: 9pt)[
      Full UK Driving Licence\
      English (Fluent)\
      Mandarin (Conversational)\
      Japanese (Beginner)
    ]
  ]
)

#v(0.5em)
#section("References")
#grid(
  columns: (1fr, 1fr),
  column-gutter: 1em,
  text(size: 9pt)[*Anna Jurek-Loughrey* — Data Science Director\ a.jurek\@qub.ac.uk],
  text(size: 9pt)[*Darryl Stewart* — EEECS Director\ dw.stewart\@qub.ac.uk],
)
