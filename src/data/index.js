// Components
import { FaUsers, FaChartBar, FaUniversity } from "react-icons/fa";

// Images
import gallery1 from "../assets/images/gallery-1.jpeg";
import gallery2 from "../assets/images/gallery-2.jpeg";
import gallery3 from "../assets/images/gallery-3.jpeg";
import gallery4 from "../assets/images/gallery-4.jpeg";
import gallery5 from "../assets/images/gallery-5.jpeg";
import gallery6 from "../assets/images/gallery-6.jpeg";
import gallery7 from "../assets/images/gallery-7.jpeg";
import gallery8 from "../assets/images/gallery-8.jpeg";
import gallery9 from "../assets/images/gallery-9.jpeg";
import gallery10 from "../assets/images/gallery-10.jpeg";
import gallery11 from "../assets/images/gallery-11.jpeg";
import gallery12 from "../assets/images/gallery-12.jpeg";
import gallery13 from "../assets/images/gallery-13.jpeg";
import gallery14 from "../assets/images/gallery-14.jpeg";
import gallery15 from "../assets/images/gallery-15.jpeg";
import gallery16 from "../assets/images/gallery-16.jpeg";
import gallery17 from "../assets/images/gallery-17.jpeg";
import gallery18 from "../assets/images/gallery-18.jpeg";
import gallery19 from "../assets/images/gallery-19.jpeg";
import gallery20 from "../assets/images/gallery-20.jpeg";
import gallery21 from "../assets/images/gallery-21.jpeg";
import gallery22 from "../assets/images/gallery-22.jpeg";
import gallery23 from "../assets/images/gallery-23.jpeg";
import gallery24 from "../assets/images/gallery-24.jpeg";
import gallery25 from "../assets/images/gallery-25.jpeg";
import gallery26 from "../assets/images/gallery-26.jpeg";
import gallery27 from "../assets/images/gallery-27.jpeg";
import gallery28 from "../assets/images/gallery-28.jpeg";
import gallery29 from "../assets/images/gallery-29.jpeg";
import gallery30 from "../assets/images/gallery-30.jpeg";
import gallery31 from "../assets/images/gallery-31.jpeg";
import gallery32 from "../assets/images/gallery-32.jpeg";
import gallery33 from "../assets/images/gallery-33.jpeg";
import gallery34 from "../assets/images/gallery-34.jpeg";
import gallery35 from "../assets/images/gallery-35.jpeg";
import gallery36 from "../assets/images/gallery-36.jpeg";
import gallery37 from "../assets/images/gallery-37.jpeg";
import gallery38 from "../assets/images/gallery-38.jpeg";
import gallery39 from "../assets/images/gallery-39.jpeg";
import gallery40 from "../assets/images/gallery-40.jpeg";
import gallery41 from "../assets/images/gallery-41.jpeg";
import gallery42 from "../assets/images/gallery-42.jpeg";
import gallery43 from "../assets/images/gallery-43.jpeg";
import gallery44 from "../assets/images/gallery-44.jpeg";
import gallery45 from "../assets/images/gallery-45.jpeg";
import gallery46 from "../assets/images/gallery-46.jpeg";
import gallery47 from "../assets/images/gallery-47.jpeg";
import gallery48 from "../assets/images/gallery-48.jpeg";
import gallery49 from "../assets/images/gallery-49.jpeg";
import gallery50 from "../assets/images/gallery-50.jpeg";

// Navbar Items
export const NAVBAR_ITEMS = [
  { id: 1, label: "Intro", to: "/#intro" },
  { id: 2, label: "Services", to: "/#services" },
  { id: 3, label: "Portfolio", to: "/#portfolio" },
  { id: 4, label: "Testimonials", to: "/#testimonials" },
  { id: 5, label: "Gallery", to: "/#gallery" },
  { id: 6, label: "contact", to: "/#contact" },
];

// GALLERY ITEMS
export const GALLERY_ITEMS = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
  gallery15,
  gallery16,
  gallery17,
  gallery18,
  gallery19,
  gallery20,
  gallery21,
  gallery22,
  gallery23,
  gallery24,
  gallery25,
  gallery26,
  gallery27,
  gallery28,
  gallery29,
  gallery30,
  gallery31,
  gallery32,
  gallery33,
  gallery34,
  gallery35,
  gallery36,
  gallery37,
  gallery38,
  gallery39,
  gallery40,
  gallery41,
  gallery42,
  gallery43,
  gallery44,
  gallery45,
  gallery46,
  gallery47,
  gallery48,
  gallery49,
  gallery50,
].map((gallery) => ({ original: gallery, thumbnail: gallery }));

// Social Links
export const SOCIAL_LINKS = [
  { id: 1, label: "X", to: "www.x.com" },
  { id: 2, label: "Github", to: "www.github.com" },
  {
    id: 3,
    label: "Linkedin",
    to: "https://www.linkedin.com/in/timothy-ogunleye/",
  },
  { id: 4, label: "Resume", to: "www.resume.com" },
  { id: 5, label: "Email", to: "thompsondx@gmail.com" },
  { id: 6, label: "Publication", to: "www.publication.com" },
  { id: 7, label: "Youtube", to: "https://www.youtube.com/@timothy.ogunley" },
  {
    id: 8,
    label: "Google Scholar",
    to: "https://scholar.google.com/citations?user=j42dVZsAAAAJ",
  },
  {
    id: 9,
    label: "Research Gate",
    to: "https://www.researchgate.net/profile/Timothy-Ogunleye",
  },
  {
    id: 10,
    label: "ORCID",
    to: "https://orcid.org/0000-0002-2782-382X",
  },
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

// Testimonials Items
export const TESTIMONIALS_ITEMS = [
  {
    id: 1,
    testimonial:
      "Timothy’s attention to detail and commitment to delivering top-notch solutions has been a game-changer for us. His ability to simplify complex data into digestible visualizations is truly remarkable.",
    author: "Jennifer Smith",
    organization: "DataTech Innovations",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    id: 2,
    testimonial:
      "Working with Timothy has been a fantastic experience. His technical expertise and problem-solving mindset helped us streamline our development processes and improve overall efficiency.",
    author: "Michael Johnson",
    organization: "BuildNow Solutions",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
  },
  {
    id: 3,
    testimonial:
      "Timothy consistently delivers high-quality work on time, even under tight deadlines. His dedication to excellence is evident in every project he tackles.",
    author: "Laura Thompson",
    organization: "ClearView Analytics",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  },
  {
    id: 4,
    testimonial:
      "Timothy’s work in developing data visualization tools for our research team has significantly improved our ability to analyze and present complex data sets. He’s a true expert in his field.",
    author: "Dr. Emily Carter",
    organization: "Global Insights Center",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
  },
  {
    id: 5,
    testimonial:
      "Timothy’s ability to adapt to new challenges and deliver innovative solutions has made a huge impact on our projects. His contributions have been invaluable.",
    author: "Robert Wilson",
    organization: "TechWorks Labs",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
];
