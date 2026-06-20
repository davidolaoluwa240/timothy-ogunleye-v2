export const siteConfig = {
  author: {
    name: "Dr. Timothy Ogunleye",
    title: "Professor of Computer Science and Artificial Intelligence",
    email: "t.ogunleye@university.edu",
    phone: "+1 (555) 123-4567",
    office: "Room 404, Advanced Sciences Building, University of Tech",
    consultation: "Tuesdays and Thursdays, 2:00 PM - 5:00 PM"
  },

  menu: [
    { title: "HOME", path: "/", subItems: [
      { title: "Profile Summary", id: "profile-summary" },
      { title: "Research Highlights", id: "research-highlights" },
      { title: "Latest News", id: "latest-news" },
      { title: "Quick Links", id: "quick-links" }
    ]},
    { title: "ABOUT", path: "/about/", subItems: [
      { title: "Biography", id: "biography" },
      { title: "Education", id: "education" },
      { title: "Experience", id: "experience" },
      { title: "Memberships", id: "memberships" },
      { title: "Awards", id: "awards" },
      { title: "Leadership", id: "leadership" }
    ]},
    { title: "RESEARCH", path: "/research/", subItems: [
      { title: "Research Interests", id: "research-interests" },
      { title: "Projects", id: "projects" },
      { title: "Grants", id: "grants" },
      { title: "Collaborations", id: "collaborations" },
      { title: "Research Impact", id: "research-impact" }
    ]},
    { title: "PUBLICATIONS & RESOURCES", path: "/publications/", subItems: [
      { title: "Journal Articles", id: "journal-articles" },
      { title: "Books", id: "books" },
      { title: "Conferences", id: "conferences" },
      { title: "Downloads", id: "downloads" },
      { title: "Academic Profiles", id: "academic-profiles" }
    ]},
    { title: "TEACHING & STUDENTS", path: "/teaching/", subItems: [
      { title: "Courses", id: "courses" },
      { title: "Teaching Philosophy", id: "teaching-philosophy" },
      { title: "Supervision", id: "supervision" },
      { title: "Trainings", id: "trainings" },
      { title: "Testimonials", id: "testimonials" }
    ]},
    { title: "NEWS & EVENTS", path: "/news-events/", subItems: [
      { title: "News", id: "news" },
      { title: "Events", id: "events" },
      { title: "Gallery", id: "gallery" },
      { title: "Consultancy", id: "consultancy" }
    ]},
    { title: "CONTACT", path: "/contact/", subItems: [
      { title: "Contact", id: "contact" },
      { title: "Social Media", id: "social-media" }
    ]}
  ],

  metrics: [
    { label: "Years of Research", value: "18+", detail: "AI systems, robotics, and data science" },
    { label: "Citations", value: "8,740", detail: "Indexed journals and conference proceedings" },
    { label: "Competitive Funding", value: "$9.8M", detail: "As PI, Co-PI, and consortium lead" },
    { label: "Researchers Mentored", value: "64", detail: "Ph.D., M.Sc., postdoctoral, and visiting scholars" }
  ],

  profileSummary: [
    "Dr. Timothy Ogunleye works at the intersection of artificial intelligence, dependable machine learning, computer vision, and human-centered intelligent systems.",
    "His research group builds models that can be inspected, deployed, audited, and defended in environments where mistakes matter: clinics, classrooms, infrastructure, robotics labs, and low-resource computing settings.",
    "He is known for rigorous supervision, high-volume publication discipline, and a lab culture that expects prototypes, datasets, papers, and real-world validation to move together."
  ],

  biography: "Dr. Timothy Ogunleye is a distinguished Professor of Computer Science at the University of Tech, holding the endowed Chair in Artificial Intelligence. His research program has advanced neuro-symbolic reasoning, resource-efficient vision models, explainable decision systems, and AI governance frameworks for high-stakes deployment. His laboratory is organized around a demanding standard: a model is not finished until it can be explained to users, evaluated by peers, stress-tested by adversaries, and deployed responsibly.",

  education: [
    { degree: "Ph.D. in Computer Science", institution: "Massachusetts Institute of Technology", year: "2010 - 2014", description: "Dissertation on scalable neural architectures for real-time multimodal inference.", achievements: ["Outstanding Doctoral Dissertation nomination", "MIT Presidential Fellowship", "Three journal papers before graduation"] },
    { degree: "M.Sc. in Artificial Intelligence", institution: "Stanford University", year: "2008 - 2010", description: "Specialized in computer vision, statistical learning, and probabilistic reasoning for autonomous systems.", achievements: ["Graduated with distinction", "Research assistant, Stanford AI Lab", "Best graduate project in intelligent systems"] },
    { degree: "B.Sc. in Computer Engineering", institution: "University of Excellence", year: "2004 - 2008", description: "First Class Honors with a capstone project on sensor fusion for autonomous robotics.", achievements: ["Departmental valedictorian", "National Engineering Scholar", "Winner, Student Robotics Challenge"] }
  ],

  experience: [
    { role: "Full Professor and Endowed Chair in Artificial Intelligence", organization: "University of Tech", year: "2020 - Present", description: "Leads the Intelligent Systems and Responsible AI Laboratory, directs cross-faculty AI initiatives, and supervises doctoral research across machine learning, health AI, and robotics.", highlights: ["Secured more than $6M in active grants", "Launched the Responsible AI Clinic", "Built an international doctoral exchange program"] },
    { role: "Associate Professor of Computer Science", organization: "University of Tech", year: "2015 - 2020", description: "Expanded the graduate AI curriculum, established the machine learning systems track, and published extensively on explainable and efficient learning methods.", highlights: ["Created 4 graduate courses", "Published 38 peer-reviewed papers", "Won faculty teaching excellence award"] },
    { role: "Senior Research Scientist", organization: "Global AI Labs", year: "2014 - 2015", description: "Led algorithm development for predictive healthcare models and collaborated with engineering teams on deployable clinical decision support tools.", highlights: ["Filed 2 patents", "Led a 9-person applied research team", "Delivered first production-grade risk model"] },
    { role: "Visiting Research Fellow", organization: "Oxford Institute for Machine Intelligence", year: "2012", description: "Worked on logic-guided learning systems and early reproducibility protocols for neural-symbolic experiments.", highlights: ["Co-authored benchmark evaluation protocol", "Delivered invited seminar series"] }
  ],

  memberships: [
    { name: "Fellow, IEEE", detail: "Recognition for contributions to dependable intelligent systems and AI education." },
    { name: "Senior Member, ACM", detail: "Active in SIGAI and computing education working groups." },
    { name: "Member, Association for the Advancement of Artificial Intelligence", detail: "Reviewer and program committee contributor." },
    { name: "Board Member, Global AI Ethics Consortium", detail: "Advises on public-sector AI governance and procurement standards." },
    { name: "Member, International Society for Bayesian Analysis", detail: "Supports probabilistic modeling and uncertainty estimation research." }
  ],

  awards: [
    { year: "2025", title: "Distinguished AI Leadership Medal", organization: "International Council for Intelligent Systems", description: "Awarded for translating laboratory research into institution-wide AI capacity." },
    { year: "2024", title: "Outstanding Researcher Award", organization: "National Science Foundation", description: "Recognized for sustained contributions to trustworthy machine learning." },
    { year: "2023", title: "Best Paper Award", organization: "International Conference on Machine Learning Systems", description: "Paper on certifiable model compression for edge inference." },
    { year: "2021", title: "Excellence in Doctoral Supervision", organization: "University of Tech", description: "Recognized for completion rates, student placements, and research output." },
    { year: "2018", title: "Faculty Teaching Excellence Prize", organization: "University of Tech", description: "Awarded for redesigning graduate AI instruction around reproducible research." }
  ],

  leadership: [
    { role: "Department Chair", organization: "Computer Science Department, University of Tech", duration: "2021 - Present", scope: "Oversees faculty recruitment, graduate programs, research strategy, and academic partnerships." },
    { role: "Director", organization: "Center for Responsible and Deployable AI", duration: "2022 - Present", scope: "Coordinates labs working on safety, governance, health AI, and computational infrastructure." },
    { role: "General Chair", organization: "International Conference on Applied AI Systems", duration: "2024", scope: "Led technical programming, sponsorship, keynote curation, and doctoral consortium." },
    { role: "Chair, Graduate Curriculum Committee", organization: "University of Tech", duration: "2018 - 2021", scope: "Modernized graduate requirements around reproducibility and systems evaluation." }
  ],

  researchInterests: [
    { title: "Neuro-symbolic AI", description: "Combining neural learning with logic, constraints, and interpretable reasoning." },
    { title: "Explainable Machine Learning", description: "Models that justify predictions under clinical, legal, and operational scrutiny." },
    { title: "Computer Vision for Health", description: "Image analysis systems for low-resource and mobile diagnostic contexts." },
    { title: "Robotics and Autonomy", description: "Verification-aware decision systems for safe navigation and manipulation." },
    { title: "Edge AI", description: "Compressed models for real-time inference on constrained hardware." },
    { title: "AI Governance", description: "Auditing, documentation, risk controls, and responsible deployment frameworks." }
  ],

  projects: [
    { title: "AutoVision: Real-time Medical Imaging Analysis", status: "Ongoing", funding: "NIH, $2.4M", description: "Lightweight diagnostic vision models for rural hospitals with unreliable connectivity.", outputs: ["12-site validation protocol", "Open-source compression toolkit", "Clinical workflow dashboard"] },
    { title: "NeuroSymbolic AI for Autonomous Navigation", status: "Ongoing", funding: "DARPA, $1.9M", description: "Hybrid neural and symbolic control policies that expose verifiable decision traces for robots.", outputs: ["Safety benchmark suite", "Simulation-to-real transfer pipeline", "Two patent disclosures"] },
    { title: "Civic NLP Observatory", status: "Ongoing", funding: "National Research Council, $950K", description: "Language models and dashboards for tracking misinformation, civic risk signals, and public sentiment.", outputs: ["Weekly risk reports", "Dataset of 48M public posts", "Policy briefing templates"] },
    { title: "Learning Under Scarcity", status: "Completed", funding: "Google Research Gift, $420K", description: "Few-shot learning methods for domains where labels are expensive or ethically difficult to collect.", outputs: ["Benchmark paper", "Graduate reading group", "Reusable evaluation harness"] },
    { title: "Explainable Robotics Verification", status: "Completed", funding: "NSF, $850K", description: "Auditable robotics decision pipelines for inspection, warehouse, and field environments.", outputs: ["Formal verification module", "Robotics demonstrator", "Industry transfer report"] }
  ],

  grants: [
    { title: "Scalable AI for Global Health", agency: "National Institutes of Health", amount: "$2.4M", period: "2023 - 2027", role: "Principal Investigator", impact: "Deployable diagnostic pipelines for resource-constrained clinics." },
    { title: "Trustworthy Autonomy Verification", agency: "Defense Advanced Research Projects Agency", amount: "$1.9M", period: "2024 - 2028", role: "Principal Investigator", impact: "Certified reasoning traces for robotic decisions." },
    { title: "Responsible AI Infrastructure", agency: "National Science Foundation", amount: "$1.6M", period: "2022 - 2026", role: "Co-PI", impact: "Institutional auditing tools and reproducibility infrastructure." },
    { title: "AI for Public Health Surveillance", agency: "Wellcome Trust", amount: "$1.2M", period: "2021 - 2025", role: "Consortium Lead", impact: "Privacy-preserving outbreak intelligence systems." },
    { title: "Efficient Learning Under Scarce Labels", agency: "Google Research", amount: "$420K", period: "2020 - 2023", role: "Principal Investigator", impact: "Few-shot benchmarks and compact model training recipes." },
    { title: "Robotics for Infrastructure Inspection", agency: "National Robotics Initiative", amount: "$650K", period: "2018 - 2021", role: "Co-PI", impact: "Vision-guided field robotics for bridges and industrial sites." }
  ],

  collaborations: [
    { partner: "Oxford University AI Labs", region: "United Kingdom", topic: "Cross-lingual LLM evaluations and safety taxonomies.", outcome: "Joint benchmark and doctoral exchange." },
    { partner: "Max Planck Institute for Intelligent Systems", region: "Germany", topic: "Robotic swarm logic and decentralized reasoning.", outcome: "Shared simulation infrastructure." },
    { partner: "University of Cape Town Data Science Institute", region: "South Africa", topic: "Low-resource health AI and equitable model evaluation.", outcome: "Regional data governance framework." },
    { partner: "National Hospital Research Network", region: "United States", topic: "Clinical validation of compact medical imaging models.", outcome: "Prospective trial protocol." },
    { partner: "Tokyo Robotics Center", region: "Japan", topic: "Explainable autonomy for service robots.", outcome: "Visiting scholar and lab demonstrator." },
    { partner: "Open Science Infrastructure Alliance", region: "Global", topic: "Reproducibility checklists and artifact review workflows.", outcome: "Adopted review template." }
  ],

  researchImpact: {
    statement: "The lab's models, datasets, and evaluation tools have been used by clinics, infrastructure teams, civic data groups, and academic laboratories to make AI systems more reliable under pressure.",
    points: [
      "Three open-source healthcare imaging tools integrate lab-developed compression and uncertainty modules.",
      "More than 400 clinics have tested or adopted components from the AutoVision deployment toolkit.",
      "Responsible AI documentation templates from the lab are used in graduate courses and review boards.",
      "Public benchmark datasets have supported over 80 external papers and reproducibility reports."
    ],
    numbers: [
      { value: "400+", label: "Clinics reached" },
      { value: "80+", label: "External papers using lab datasets" },
      { value: "23", label: "Open-source releases" },
      { value: "14", label: "Policy and technical briefs" }
    ]
  },

  publications: {
    articles: [
      { year: "2026", citation: "Ogunleye, T., Rao, P., and Mensah, L. Certifiable Compression for Safety-Critical Edge Vision. IEEE Transactions on Pattern Analysis and Machine Intelligence, 48(2), 211-238.", link: "#" },
      { year: "2025", citation: "Ogunleye, T. and Smith, J. Explainable AI in Clinical Imaging: A Reproducible Survey. Journal of Artificial Intelligence Research, 76, 112-169.", link: "#" },
      { year: "2025", citation: "Adebayo, K., Ogunleye, T., and Li, W. Evaluating Language Models Under Civic Risk Constraints. ACM Transactions on Intelligent Systems and Technology, 16(4), 1-31.", link: "#" },
      { year: "2024", citation: "Doe, A., Ogunleye, T., and Chen, M. Optimizing Convolutional Networks for Rural Edge Devices. IEEE Transactions on Medical Imaging, 43(8), 2101-2115.", link: "#" },
      { year: "2024", citation: "Ogunleye, T., Fernandes, R., and Okafor, I. Neuro-Symbolic Control Policies for Explainable Robot Navigation. International Journal of Robotics Research, 43(11), 1442-1478.", link: "#" },
      { year: "2023", citation: "Jenkins, S., Ogunleye, T., and Chang, M. Adversarial Robustness in Low-Resource NLP Pipelines. Computational Linguistics, 49(3), 621-658.", link: "#" },
      { year: "2023", citation: "Ogunleye, T. Reproducibility Debt in Applied Machine Learning. Communications of the ACM, 66(12), 52-61.", link: "#" },
      { year: "2022", citation: "Ogunleye, T. and Patel, S. Uncertainty-Aware Triage Models for Mobile Diagnostics. Nature Machine Intelligence, 4(9), 766-779.", link: "#" }
    ],
    books: [
      { year: "2026", citation: "Ogunleye, T. Trustworthy Machine Learning Systems: Design, Audit, and Deployment. Academic Press.", link: "#" },
      { year: "2024", citation: "Ogunleye, T. and Mensah, L. Practical Neuro-Symbolic AI. MIT Press.", link: "#" },
      { year: "2022", citation: "Ogunleye, T. Foundations of Modern Machine Learning. Academic Press. ISBN: 978-0-12345-678-9.", link: "#" },
      { year: "2021", citation: "Ogunleye, T. Chapter 8: Explainability in Medical Imaging. In Handbook of Applied Artificial Intelligence. Springer.", link: "#" }
    ]
  },

  conferences: [
    { year: "2026", event: "NeurIPS", role: "Tutorial Chair", title: "Auditable Learning Systems for High-Stakes Domains", location: "San Diego, CA" },
    { year: "2025", event: "International Conference on Machine Learning", role: "Invited Speaker", title: "Compression Without Losing Accountability", location: "Vancouver, Canada" },
    { year: "2024", event: "AAAI", role: "Senior Program Committee", title: "Responsible Evaluation of Foundation Models", location: "Vancouver, Canada" },
    { year: "2024", event: "CVPR", role: "Panelist", title: "Trustworthy Computer Vision in Clinical Workflows", location: "Seattle, WA" },
    { year: "2023", event: "Robotics: Science and Systems", role: "Workshop Organizer", title: "Explainable Autonomy at Scale", location: "Daegu, South Korea" },
    { year: "2023", event: "ACM FAccT", role: "Keynote Speaker", title: "From Model Cards to Institutional Accountability", location: "Chicago, IL" }
  ],

  downloads: [
    { title: "Complete Curriculum Vitae", type: "PDF", size: "2.4 MB", url: "#" },
    { title: "Research Group Prospectus", type: "PDF", size: "4.8 MB", url: "#" },
    { title: "Selected Publications BibTeX", type: "BIB", size: "180 KB", url: "#" },
    { title: "Prospective Ph.D. Student Guide", type: "PDF", size: "1.2 MB", url: "#" },
    { title: "Press Photo and Bio Pack", type: "ZIP", size: "8.1 MB", url: "#" }
  ],

  academicProfiles: [
    { name: "Google Scholar", id: "t-ogunleye", stat: "8,740 citations", url: "#" },
    { name: "ORCID", id: "0000-0002-1234-5678", stat: "Verified researcher ID", url: "#" },
    { name: "Scopus", id: "5720-OGUNLEYE", stat: "h-index 42", url: "#" },
    { name: "ResearchGate", id: "Timothy-Ogunleye", stat: "142,000 reads", url: "#" },
    { name: "GitHub", id: "togunleye-lab", stat: "23 repositories", url: "#" },
    { name: "DBLP", id: "Timothy Ogunleye", stat: "Indexed publications", url: "#" }
  ],

  teachingPhilosophy: "I believe serious teaching should feel like apprenticeship into disciplined thinking. Students in my courses are expected to read difficult papers, reproduce results, debate assumptions, implement models from scratch, and defend design decisions under questioning. The goal is not just competence. The goal is scholarly courage backed by technical precision.",

  courses: [
    { code: "CS 701", name: "Trustworthy Machine Learning Systems", level: "Doctoral", enrollment: "18", description: "Advanced treatment of reliability, uncertainty, interpretability, and deployment controls for ML systems.", outcomes: ["Write reproducibility reports", "Build model audit artifacts", "Defend deployment risk assessments"] },
    { code: "CS 612", name: "Neuro-Symbolic Artificial Intelligence", level: "Graduate", enrollment: "34", description: "Hybrid reasoning, differentiable logic, constraint-aware learning, and explainable planning.", outcomes: ["Implement hybrid reasoners", "Evaluate logic-guided models", "Present current research papers"] },
    { code: "CS 520", name: "Computer Vision for Real-World Deployment", level: "Graduate", enrollment: "42", description: "Vision pipelines for noisy data, limited compute, model compression, and clinical evaluation.", outcomes: ["Train compact CNNs", "Design evaluation protocols", "Document dataset limitations"] },
    { code: "CS 420", name: "Machine Learning Engineering", level: "Undergraduate", enrollment: "96", description: "Production-oriented ML foundations with testing, versioning, monitoring, and responsible release practices.", outcomes: ["Ship a tested ML service", "Run ablation studies", "Write technical postmortems"] }
  ],

  supervision: [
    { student: "Sarah Jenkins", degree: "Ph.D.", status: "Current", topic: "Adversarial Robustness in Low-Resource Natural Language Processing", currentRole: "Doctoral researcher, Responsible AI Lab" },
    { student: "Michael Chang", degree: "Ph.D.", status: "Graduated 2023", topic: "Efficient Attention Mechanisms for Medical Image Analysis", currentRole: "Research Scientist at Google DeepMind" },
    { student: "Amina Okafor", degree: "Ph.D.", status: "Graduated 2024", topic: "Uncertainty Estimation for Mobile Diagnostics", currentRole: "Assistant Professor, University of Lagos" },
    { student: "Pedro Alvarez", degree: "Ph.D.", status: "Current", topic: "Formal Verification for Neural Control Policies", currentRole: "Visiting scholar, Tokyo Robotics Center" },
    { student: "Leah Mensah", degree: "M.Sc.", status: "Graduated 2025", topic: "Data Documentation Standards for Clinical AI", currentRole: "ML Governance Lead, HealthNet Analytics" },
    { student: "Wei Li", degree: "Postdoctoral Fellow", status: "Current", topic: "Benchmarking Civic Risk in Language Models", currentRole: "Postdoctoral researcher, Civic NLP Observatory" }
  ],

  trainings: [
    { title: "Summer Institute for Responsible AI Research", audience: "Graduate students", duration: "4 weeks", description: "An intensive research bootcamp covering paper reproduction, benchmark design, and artifact review." },
    { title: "Clinical AI Deployment Workshop", audience: "Hospital technical teams", duration: "3 days", description: "Hands-on training for model documentation, uncertainty reporting, and workflow integration." },
    { title: "Machine Learning Systems Audit Clinic", audience: "Industry and public-sector teams", duration: "2 days", description: "Practical audit exercises for data lineage, model monitoring, and governance documentation." },
    { title: "Doctoral Writing and Defense Lab", audience: "Ph.D. candidates", duration: "10 weeks", description: "A demanding seminar on scholarly argument, methods transparency, and oral defense pressure testing." }
  ],

  testimonials: [
    { text: "Dr. Ogunleye's mentorship fundamentally changed my research standards. He does not let students hide behind vague claims; every argument needs evidence, implementation, and clarity.", author: "Michael Chang, Ph.D. alumnus" },
    { text: "His courses are difficult in the best possible way. You leave with code that runs, papers you understand deeply, and the confidence to defend your work.", author: "Amina Okafor, Ph.D. alumna" },
    { text: "The lab culture is intense, generous, and unusually precise. Feedback is direct, but it always moves the work forward.", author: "Sarah Jenkins, doctoral candidate" }
  ],

  news: [
    { date: "May 18, 2026", title: "Responsible AI Lab releases clinical model audit toolkit", summary: "The lab published a new open-source toolkit for uncertainty reporting, documentation review, and deployment readiness scoring.", tag: "Software" },
    { date: "Mar 04, 2026", title: "Dr. Ogunleye appointed Director of the Center for Responsible and Deployable AI", summary: "The appointment formalizes a cross-faculty initiative spanning computer science, medicine, law, and public policy.", tag: "Leadership" },
    { date: "Jan 22, 2026", title: "Doctoral student wins best paper for edge vision research", summary: "Sarah Jenkins received best paper recognition for robustness work on compact diagnostic models.", tag: "Award" },
    { date: "Oct 15, 2025", title: "Lab secures $2.4M NIH grant", summary: "The new award supports deployment-ready AI for mobile medical imaging in low-resource clinics.", tag: "Grant" },
    { date: "Aug 02, 2025", title: "Keynote delivered at International Conference on Machine Learning", summary: "The keynote addressed accountability-preserving model compression and reproducible evaluation.", tag: "Talk" }
  ],

  events: [
    { date: "Jul 12, 2026", title: "Responsible AI Research Open Day", location: "University of Tech, Main Auditorium", type: "Public Lecture", description: "Lab demos, student presentations, and a public lecture on trustworthy AI systems." },
    { date: "Sep 08, 2026", title: "Clinical AI Deployment Workshop", location: "Advanced Sciences Building", type: "Workshop", description: "A technical workshop for hospital engineers and data teams." },
    { date: "Nov 18, 2026", title: "Doctoral Consortium on Auditable AI", location: "Hybrid", type: "Consortium", description: "A one-day doctoral event focused on model evaluation, reproducibility, and research defense." },
    { date: "Jan 15, 2027", title: "AI Governance Symposium Panel", location: "Virtual", type: "Panel", description: "A policy and technical panel on institutional accountability for AI deployments." }
  ],

  gallery: [
    { url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80", caption: "University research quad before the Responsible AI Open Day", category: "Campus" },
    { url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80", caption: "Students validating model outputs in the Intelligent Systems Lab", category: "Lab" },
    { url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80", caption: "Graduate seminar on reproducible machine learning", category: "Teaching" },
    { url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80", caption: "International AI conference keynote session", category: "Conference" },
    { url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80", caption: "Interdisciplinary review meeting with clinical partners", category: "Collaboration" },
    { url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80", caption: "Prototype testing for mobile diagnostic workflows", category: "Health AI" }
  ],

  consultancy: {
    statement: "Available for high-level technical advisory work where rigorous AI strategy, model review, governance design, or expert analysis is required.",
    services: [
      "AI strategy and technical due diligence for boards, universities, and research consortia.",
      "Independent review of machine learning systems before high-stakes deployment.",
      "Expert witness support for algorithmic accountability, model validation, and data governance.",
      "Executive briefings on AI risk, procurement, evaluation, and institutional readiness."
    ],
    process: ["Discovery briefing", "Technical evidence review", "Risk and opportunity memo", "Executive presentation"]
  },

  socialMedia: [
    { platform: "LinkedIn", url: "#", handle: "/in/timothy-ogunleye", icon: "linkedin" },
    { platform: "Google Scholar", url: "#", handle: "t-ogunleye", icon: "graduation-cap" },
    { platform: "ORCID", url: "#", handle: "0000-0002-1234-5678", icon: "fingerprint" },
    { platform: "ResearchGate", url: "#", handle: "Timothy-Ogunleye", icon: "library" },
    { platform: "GitHub", url: "#", handle: "togunleye-lab", icon: "github" },
    { platform: "X / Twitter", url: "#", handle: "@togunleye_ai", icon: "message-circle" }
  ],

  quickLinks: [
    { title: "Download Full CV", url: "#", description: "Appointments, publications, grants, supervision, invited talks, and service record.", icon: "file-down" },
    { title: "Google Scholar Profile", url: "#", description: "Citation metrics, indexed publications, and co-author network.", icon: "graduation-cap" },
    { title: "Prospective Students Guide", url: "#", description: "Research fit, application expectations, writing sample guidance, and lab culture.", icon: "users" },
    { title: "Responsible AI Lab", url: "#", description: "Projects, datasets, software releases, and student profiles.", icon: "microscope" },
    { title: "Book Advisory Meeting", url: "#", description: "Consulting, invited talks, doctoral examinations, and institutional workshops.", icon: "calendar-check" },
    { title: "Publication Archive", url: "/publications/journal-articles/", description: "Peer-reviewed articles, books, chapters, proceedings, and resources.", icon: "book-open" }
  ]
};
