export const siteConfig = {
  // 1. GLOBAL SITE INFORMATION
  author: {
    name: "Dr. Timothy Ogunleye",
    title: "Professor of Computer Science & AI",
    email: "t.ogunleye@university.edu",
    phone: "+1 (555) 123-4567",
    office: "Room 404, Advanced Sciences Building, University of Tech"
  },

  // 2. MAIN NAVIGATION MENU
  menu: [
    { title: 'Home', path: '#home' },
    { title: 'About', path: '#about' },
    { title: 'Research', path: '#research' },
    { title: 'Publications', path: '#publications' },
    { title: 'Teaching', path: '#teaching' },
    { title: 'Gallery', path: '#gallery' },
    { title: 'Contact', path: '#contact' }
  ],

  // 3. PAGE DATA & LISTS
  
  socialMedia: [
    { platform: "LinkedIn", url: "#", iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>` },
    { platform: "Twitter/X", url: "#", iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>` },
    { platform: "Google Scholar", url: "#", iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.42 10.922a2 2 0 0 1-.01 3.13l-8.54 7.54a2 2 0 0 1-2.66 0L1.6 13.922a2 2 0 0 1-.01-3.13l8.6-7.46a2 2 0 0 1 2.58 0l8.65 7.6z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>` },
    { platform: "ResearchGate", url: "#", iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>` }
  ],

  gallery: [
    { url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80", caption: "University Campus" },
    { url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80", caption: "Research Laboratory" },
    { url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80", caption: "Guest Lecture" },
    { url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80", caption: "International AI Conference" }
  ],

  quickLinks: [
    { title: "Download Full CV", url: "#" },
    { title: "Google Scholar Profile", url: "#" },
    { title: "Prospective Students Guide", url: "#" }
  ],

  profileSummary: [
    "I am a passionate researcher and educator dedicated to advancing the field of Artificial Intelligence and Machine Learning. With over 15 years of experience in academia and industry, I strive to bridge the gap between theoretical research and practical applications.",
    "My work focuses on developing innovative solutions that impact society positively, mentoring the next generation of scholars, and collaborating with global industry leaders to deploy scalable AI systems."
  ],

  // ABOUT SECTION
  education: [
    {
      degree: "Ph.Degree in Computer Science",
      institution: "Massachusetts Institute of Technology (MIT)",
      year: "2010 - 2014",
      description: "Dissertation: 'Scalable Neural Architectures for Real-Time Processing'. Advised by Dr. Alan Turing Awardee."
    },
    {
      degree: "M.Sc. in Artificial Intelligence",
      institution: "Stanford University",
      year: "2008 - 2010",
      description: "Focus on Computer Vision and Predictive Modeling. Graduated with highest honors."
    },
    {
      degree: "B.Sc. in Computer Engineering",
      institution: "University of Excellence",
      year: "2004 - 2008",
      description: "First Class Honors. Capstone project on autonomous robotics."
    }
  ],

  experience: [
    {
      role: "Full Professor",
      organization: "University of Tech",
      year: "2020 - Present",
      description: "Lead the AI Research Lab, securing over $2M in NSF funding. Supervised 12 PhD candidates to completion."
    },
    {
      role: "Associate Professor",
      organization: "University of Tech",
      year: "2015 - 2020",
      description: "Developed 3 new graduate courses. Published 40+ peer-reviewed articles."
    },
    {
      role: "Senior Research Scientist",
      organization: "Global AI Labs",
      year: "2014 - 2015",
      description: "Led the algorithmic development team for predictive healthcare models."
    }
  ],

  awards: [
    { year: "2023", title: "Outstanding Researcher Award", organization: "National Science Foundation" },
    { year: "2021", title: "Best Paper Award", organization: "International Conference on Machine Learning (ICML)" },
    { year: "2018", title: "Excellence in Teaching", organization: "University of Tech" }
  ],

  // RESEARCH SECTION
  researchInterests: [
    "Artificial Intelligence",
    "Machine Learning",
    "Computer Vision",
    "Human-Computer Interaction",
    "Robotics",
    "Data Science"
  ],

  projects: [
    {
      title: "AutoVision: Real-time Medical Imaging Analysis",
      status: "Ongoing",
      funding: "NIH Grant ($1.5M)",
      description: "Developing lightweight neural networks capable of running on edge devices in rural hospitals to diagnose anomalies in X-Ray scans in under 2 seconds."
    },
    {
      title: "NeuroSymbolic AI for Autonomous Navigation",
      status: "Completed",
      funding: "DARPA",
      description: "A hybrid framework combining deep learning with symbolic reasoning to ensure explainable decision-making in autonomous drones."
    },
    {
      title: "SmartEdu: Adaptive Learning Systems",
      status: "Ongoing",
      funding: "EdTech Foundation",
      description: "Creating reinforcement learning agents that dynamically adjust curriculum difficulty based on student engagement and performance metrics."
    }
  ],

  // PUBLICATIONS SECTION
  publications: {
    articles: [
      {
        year: "2024",
        citation: "Ogunleye, T., & Smith, J. 'Explainable AI in Healthcare: A Comprehensive Survey.' Journal of Artificial Intelligence Research, 52(3), 112-145.",
        link: "#"
      },
      {
        year: "2023",
        citation: "Doe, A., Ogunleye, T., et al. 'Optimizing Convolutional Networks for Edge Devices.' IEEE Transactions on Pattern Analysis, 45(8), 2101-2115.",
        link: "#"
      },
      {
        year: "2021",
        citation: "Ogunleye, T. 'Neuro-symbolic architectures for robust planning.' Artificial Intelligence, 298, 103504.",
        link: "#"
      }
    ],
    books: [
      {
        year: "2022",
        citation: "Ogunleye, T. 'Foundations of Modern Machine Learning'. Academic Press. ISBN: 978-0-12345-678-9.",
        link: "#"
      }
    ]
  },

  // TEACHING SECTION
  teachingPhilosophy: "I believe that education is not merely the transmission of facts, but the ignition of curiosity. My classroom is a collaborative laboratory where students are encouraged to question assumptions, break things, and rebuild them better. True understanding comes from hands-on implementation.",
  
  courses: [
    {
      code: "CS 501",
      name: "Advanced Artificial Intelligence",
      level: "Graduate",
      description: "Deep dive into reinforcement learning, GANs, and transformer architectures."
    },
    {
      code: "CS 420",
      name: "Computer Vision Fundamentals",
      level: "Undergraduate",
      description: "Image processing techniques, feature extraction, and convolutional neural networks."
    },
    {
      code: "CS 699",
      name: "Research Seminar in AI",
      level: "PhD Level",
      description: "Weekly paper reading and critical analysis of state-of-the-art AI literature."
    }
  ]
};
