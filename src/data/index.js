// Components
import { FaUsers, FaChartBar, FaUniversity } from "react-icons/fa";

// Navbar Items
export const NAVBAR_ITEMS = [
  { id: 1, label: "Intro", to: "/#intro" },
  { id: 2, label: "Services", to: "/#services" },
  { id: 3, label: "Portfolio", to: "/#portfolio" },
  { id: 4, label: "Testimonials", to: "/#testimonials" },
  { id: 5, label: "contact", to: "/#contact" },
];

// Social Links
export const SOCIAL_LINKS = [
  { id: 1, label: "X", to: "www.x.com" },
  { id: 2, label: "Github", to: "www.github.com" },
  { id: 3, label: "Linkedin", to: "www.linkedin.com" },
  { id: 4, label: "Resume", to: "www.resume.com" },
  { id: 5, label: "Email", to: "test@email.com" },
  { id: 6, label: "Publication", to: "www.publication.com" },
  { id: 7, label: "Youtube", to: "https://www.youtube.com/@timothy.ogunley" },
];

// Work Experience Items
export const WORK_EXPERIENCE_ITEMS = [
  {
    id: 1,
    role: "Academic Staff Member",
    org: "Osun State University",
    year: 2022,
  },
  {
    id: 2,
    role: "Academic Staff Member",
    org: "Augustine University",
    year: 2016,
  },
  {
    id: 3,
    role: "E-Tutor",
    org: "Centre for Open and Distance Learning",
    year: 2021,
  },
  {
    id: 4,
    role: "Executive Director",
    org: "Tim-R Programming Consult",
    year: 2020,
  },
  {
    id: 5,
    role: "Principal Statistician",
    org: "Local Government Service Commission",
    year: 2006,
  },
];

// Services Items
export const SERVICES_ITEMS = [
  {
    id: 1,
    icon: FaUsers,
    title: "Talking",
    summary:
      "Hire me to talk about programming or data visualization. I ❤️ it!",
    description:
      "I have a genuine passion for programming and data visualization. If you're seeking an <strong>enthusiastic and knowledgeable speaker</strong> for your conference, count me in!",
    help: {
      title: "I can help you if",
      items: [
        "You're seeking a dynamic speaker for a conference on data science, software engineering, or data visualization.",
        "You're looking to elevate the skills of your team members.",
      ],
    },
    example: {
      title: "Example",
      items: [
        "<i>Choosing the right chart for your data:</i> The process to build an insightful graph. Invited speaker for the MIT.",
        "<i>R in the dataviz universe:</i> A tour of the dataviz tool ecosystem. Keynote at the R french national conference.",
        "<i>Building great charts with R:</i> Talk for the Advanced Data and Information Visualization course of Harvard university.",
      ],
    },
    modalTitle: "talking",
  },
  {
    id: 2,
    icon: FaChartBar,
    title: "Consulting",
    summary:
      "Need a custom interactive graph? Some R or React work? Creating beautiful reports with Quarto?",
    description:
      "I'm a recognized expert in data visualization, occasionally taking on freelance projects to help clients elevate their data visualization to the next level.",
    help: {
      title: "I can help you with",
      items: [
        "Creation and review of graphs for scientific publications.",
        "Development of data-centric applications using R Shiny, JavaScript, and React.",
        "Design of custom web-based data visualizations using d3.js.",
      ],
    },
    example: {
      title: "Example",
      items: [
        "<i>A Shiny App describing research results on mental disorders comorbidity.</i>",
        "<i>Data to viz:</i> A decision tree leading to the most appropriate chart type for your data.",
        "<i>See many more examples in the portfolio section of this website.</i>",
      ],
    },
    modalTitle: "consulting",
  },
  {
    id: 3,
    icon: FaUniversity,
    title: "Teaching & Training",
    summary:
      "Short talks or multi-day courses on dataviz, R, ggplot2, data analytics and more.",
    description:
      "Short talks or multi-day courses on dataviz, R, ggplot2, data analytics and more.  I've also developed extensive educational content that you might benefit from.",
    help: {
      title: "I can help you with",
      items: [
        "Creation and review of teaching materials in your institution",
        "Training in different areas of data analytics",
        "Free educational content that might benefit you",
      ],
    },
    example: {
      title: "Example",
      items: [
        "Creating data stories with quarto and github pages <a class='text-blue border-b border-blue' href='https://www.youtube.com/watch?v=5G-vc4Bx1bA' target='_blank'>Youtube<a/>",
        "Positron - Data manipulation with python <a class='text-blue border-b border-blue' href='https://www.youtube.com/watch?v=TWlsrSPmxWM' target='_blank'>Youtube<a/>",
        "Positron - Machine learning frontend <a class='text-blue border-b border-blue' href='https://www.youtube.com/watch?v=5G-vc4Bx1bA' target='_blank'>Youtube<a/>",
      ],
    },
    modalTitle: "training",
  },
];
