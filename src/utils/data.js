import { Code2, GraduationCap, Briefcase, Award, Rocket, Heart, Coffee, BookOpen, Zap, Database, Server, Cloud, Mail, MapPin, Phone, Laptop, Brain, Palette } from "lucide-react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

import IMG_1 from '../assets/images/pic1.jpg'

export const SKILLS_CATEGORY = [
    {
        title : "Frontend Development",
        icon : Code2,
        description : "Building responsive and interactive interfaces", 
        skill : [
            { name : "ReactJS", level : 90, color : "bg-blue-500" },
            { name : "JavaScript", level : 88, color : "bg-yellow-600" },
            { name : "HTML/CSS", level : 92, color : "bg-orange-500" },
            { name : "TailwindCSS", level : 85, color : "bg-cyan-500" },
            { name : "Bootstrap", level : 87, color : "bg-purple-500" },
        ]
    },
    {
        title : "Backend Development",
        icon : Server,
        description : "Creating robust server-side applications", 
        skill : [
            { name : "Python", level : 95, color : "bg-blue-600" },
            { name : "Django", level : 92, color : "bg-green-600" },
            { name : "Django REST", level : 90, color : "bg-red-500" },
            { name : "Next.js", level : 80, color : "bg-gray-800" },
            { name : "Celery", level : 78, color : "bg-green-500" },
        ]
    },
    {
        title : "Data Science & AI",
        icon : Brain,
        description : "Developing intelligent data-driven solutions", 
        skill : [
            { name : "GenAI/LLMs", level : 88, color : "bg-purple-500" },
            { name : "Machine Learning", level : 85, color : "bg-pink-500" },
            { name : "NLP", level : 82, color : "bg-indigo-500" },
            { name : "Pandas/NumPy", level : 90, color : "bg-blue-500" },
            { name : "Scikit-learn", level : 85, color : "bg-orange-500" },
        ]
    },
    {
        title : "Database & Cloud",
        icon : Database,
        description : "Managing data storage and deployment", 
        skill : [
            { name : "PostgreSQL", level : 88, color : "bg-blue-600" },
            { name : "SQLite", level : 90, color : "bg-gray-600" },
            { name : "Redis", level : 80, color : "bg-red-500" },
            { name : "Firebase", level : 82, color : "bg-yellow-500" },
            { name : "AWS EC2", level : 75, color : "bg-orange-600" },
        ]
    }
]

//todo: also add the techstack icons


export const TECKSTACK = [
    "Git",
    "Jupyter",
    "Langchain",
    "Streamlit",
    "CI/CD",
    "Slack",
    "Figma",
    "Jira",
    "Gemini API",
    "Vapi",
    "Razorpay",
    "PayPal",
]

export const STATS = [
    { number : "10+", label : "Projects Completed"},
    { number : "2+", label : "Years Experience"},
    { number : "15+", label : "Technologies"},
    { number : "3", label : "Certifications"},
]

export const PROJECTS = [
  {
    id: 1,
    title: "AI Interviewer",
    description:
      "GenAI-powered interview platform with voice agent integration using Gemini LLM API, Vapi, and modern web technologies for realistic interview simulations.",
    image: IMG_1,
    tags: ["Gemini API", "Vapi", "ReactJS", "Next.js", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "GenAI",
  },
  {
    id: 2,
    title: "E-Commerce Backend API",
    description:
      "Scalable Django REST API with CI/CD pipeline, JWT authentication, background tasks using Celery, Redis caching, and rate limiting for optimal performance.",
    image: IMG_1,
    tags: ["Django", "AWS EC2", "Celery", "Redis", "JWT"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "Backend",
  },
  {
    id: 3,
    title: "Shoppy - Full Stack E-Commerce",
    description:
      "Complete e-commerce solution with Django backend, React frontend, and PayPal payment integration featuring user authentication and responsive design.",
    image: IMG_1,
    tags: ["Django", "ReactJS", "DRF", "PostgreSQL", "PayPal"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 4,
    title: "Summary Quality Analysis",
    description:
      "NLP-based data science project analyzing text summary quality using machine learning algorithms, LLM APIs, and advanced natural language processing techniques.",
    image: IMG_1,
    tags: ["NLP", "ML", "LLM API", "Pandas", "Scikit-learn"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Data Science",
  },
  {
    id: 5,
    title: "Lapkart - E-Commerce Platform",
    description:
      "Django-powered e-commerce website with Ajax-based interactions, PostgreSQL database, Razorpay payment gateway, and modern UI/UX design.",
    image: IMG_1,
    tags: ["Django", "Ajax", "PostgreSQL", "Razorpay", "Bootstrap"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 6,
    title: "Modern Landing Page",
    description:
      "Responsive landing page built with ReactJS and TailwindCSS featuring smooth animations, modern UI components using Shadcn UI library.",
    image: IMG_1,
    tags: ["ReactJS", "TailwindCSS", "Shadcn UI", "HTML"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Frontend",
  },
  {
    id: 7,
    title: "House Price Prediction",
    description:
      "Machine learning project predicting house prices using scikit-learn algorithms, with Django and Streamlit interfaces for data visualization and predictions.",
    image: IMG_1,
    tags: ["Python", "ML", "Django", "Streamlit", "Scikit-learn"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Data Science",
  },
  {
    id: 8,
    title: "Invoice Extractor",
    description:
      "AI-powered invoice data extraction tool using Gemini LLM and Langchain for automated document processing and information retrieval.",
    image: IMG_1,
    tags: ["Gemini API", "Python", "Langchain", "LLM"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "GenAI",
  },
];

export const JOURNEY_STEPS = [
  {
    year: "2018-2020",
    title: "MSc Mathematics",
    company: "Farook College",
    description:
      "Completed Master's degree in Mathematics, building strong analytical and problem-solving foundations. Also earned certification in Data Analysis with R and Excel.",
    icon: GraduationCap,
    color: "bg-yellow-500",
  },
  {
    year: "2023-2024",
    title: "Training Bootcamp",
    company: "Specialized Training Program",
    description:
      "Intensive training in modern web development, data science, and AI technologies. Built multiple projects and gained hands-on experience with industry-standard tools.",
    icon: Code2,
    color: "bg-blue-500",
  },
  {
    year: "Feb 2024",
    title: "AI Development Intern",
    company: "IPSR Solutions Ltd",
    description:
      "Gained practical experience in AI development, working on machine learning projects and exploring GenAI applications with industry mentors.",
    icon: Brain,
    color: "bg-purple-500",
  },
  {
    year: "Mar-Nov 2024",
    title: "Python Developer",
    company: "Stackerbee Technologies",
    description:
      "Developed robust Python applications, worked with Django framework, and contributed to various backend development projects.",
    icon: Server,
    color: "bg-green-500",
  },
  {
    year: "Nov 2024-May 2025",
    title: "Python Django Developer",
    company: "Hybrix Technologies (Freelance)",
    description:
      "Freelanced on Django projects, building scalable web applications with REST APIs, database optimization, and modern deployment practices.",
    icon: Briefcase,
    color: "bg-orange-500",
  },
  {
    year: "June 2025-Present",
    title: "Software Engineer",
    company: "GreenTorque, Kuwait",
    description:
      "Currently working as a Software Engineer, developing enterprise-level applications and implementing cutting-edge solutions for international clients.",
    icon: Rocket,
    color: "bg-red-500",
  },

];

export const PASSIONS = [
  {
    icon: Brain,
    title: "GenAI & LLM Development",
    description: "Building intelligent applications powered by cutting-edge AI models.",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Creating end-to-end web solutions with Python, Django, and React.",
  },
  {
    icon: Database,
    title: "Data Science & Analytics",
    description: "Extracting insights from data using ML algorithms and visualization.",
  },
  {
    icon: Zap,
    title: "Prompt Engineering",
    description: "Crafting effective prompts to maximize AI model performance.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Always exploring new technologies and mastering emerging tools.",
  },
];


export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com/sahlaanas",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://linkedin.com/in/sahlavalillath",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-500/10",
  },
  {
    name: "Leetcode",
    icon: SiLeetcode,
    url: "https://leetcode.com/u/SahlaAnas",
    color: "hover:text-sky-400",
    bgColor: "hover:bg-sky-500/10",
  },
];

export const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "Sahlavalillath@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8086299049",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Calicut, Kerala, India",
  },
];
