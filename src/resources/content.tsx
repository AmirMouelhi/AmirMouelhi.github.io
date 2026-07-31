import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

// ============================================================
// 1. BASIC INFORMATION - Person
// ============================================================
const person: Person = {
  firstName: "Amir",
  lastName: "Mouelhi",
  name: "Amir Mouelhi",
  role: "Full Stack Developer",
  avatar: "/images/avatar1.jpg",
  email: "amirmouelhi2@gmail.com",
  location: "Africa/Tunis",
  languages: ["Arabic", "French", "English"],
  locale: "en",
};

// ============================================================
// 2. SOCIAL MEDIA LINKS
// ============================================================
const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/AmirMouelhi",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mouelhi-amir-82b1002a6/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/amirmouelhi3/",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

// ============================================================
// 3. NEWSLETTER (Disabled - set display: false)
// ============================================================
const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My newsletter about web development and technology</>,
};

// ============================================================
// 4. HOME PAGE CONFIGURATION
// ============================================================
const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} - Full Stack Developer`,
  description: `Portfolio of ${person.name}, a Full Stack Developer specializing in Laravel, Vue.js, and the MERN stack.`,
  headline: <>{person.name}</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">360DMMC</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/projects",
  },
  subline: (
    <>
      Full Stack Developer from Tunisia specializing in{" "}
      <Text as="span" size="xl" weight="strong">Laravel</Text>,{" "}
      <Text as="span" size="xl" weight="strong">Vue.js</Text>, and the{" "}
      <Text as="span" size="xl" weight="strong">MERN stack</Text>
    </>
  ),
};

// Roles for text rotator
const rotatingRoles = [
  "Gamer",
  "Cinephile",
  "Author",
  "Contributor",
  "Freelance",
];

// ============================================================
// 5. ABOUT PAGE CONFIGURATION
// ============================================================
const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Tunisia`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "About Me",
    description: (
      <>
        I&apos;m a creative technologist based in Tunisia who thrives at the intersection of code, storytelling, and digital experiences. 
        Whether I&apos;m architecting a full-stack application, crafting narratives, or diving deep into the latest indie game, 
        I bring the same level of passion and curiosity to everything I do.
        <br /><br />
        My journey in tech has been anything but conventional. From building AI-powered recruitment platforms that streamline 
        hiring processes to developing robust audit management systems, I&apos;ve learned that the best solutions come from 
        understanding people first, then writing the code that serves them.
        <br /><br />
        Beyond the screen, I&apos;m a cinephile who appreciates the art of visual storytelling, an author who believes in the 
        power of words, and a gamer who sees every challenge as a puzzle waiting to be solved. These diverse interests 
        fuel my creativity and bring a unique perspective to my technical work.
        <br /><br />
        As a contributor to open-source communities and a freelancer who values meaningful collaborations, I&apos;m always 
        looking for projects that push boundaries and create real impact. If you&apos;re building something interesting 
        with <strong>Laravel</strong>, <strong>Vue.js</strong>, <strong>React</strong>, or <strong>Node.js</strong>{" "}
        — or just want to debate the best films of the decade — let&apos;s connect.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "360DMMC",
        timeframe: "February 2026 - May 2026",
        role: "Web Development Intern",
        achievements: [
          <>Designed and developed an intelligent recruitment platform using the MERN stack</>,
          <>Developed AI-powered features including CV analysis, candidate matching, and real-time interview simulations</>,
          <>Implemented HR analytics, recruitment pipeline management, role-based access control, and communication automation</>,
          <>Enabled recruiters to work more efficiently and reduce manual work by 50%</>,
        ],
        images: [
          {
            src: "/images/projects/project-01/my360hire.jpg",
            alt: "My360Hire Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Sagemcom",
        timeframe: "January 2025 - February 2025",
        role: "Web Development Intern",
        achievements: [
          <>Designed and developed an audit management application using Laravel, Vue.js, and Bootstrap</>,
          <>Participated in all development phases, including database design, responsive UI development, CRUD functionalities, and audit tracking</>,
          <>Developed a user-friendly interface for auditors to efficiently manage and track audits, improving overall productivity and accuracy and reduce manual work by 30%</>,
        ],
        images: [],
      },
      {
        company: "Tunisie Telecom",
        timeframe: "January 2024 - February 2024",
        role: "Intern",
        achievements: [
          <>Contributed to network optimization and payment system management activities</>,
          <>Developed a static HTML/CSS website showcasing internal company services for a Tunisie Telecom Branch</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false,
    title: "Education",
    institutions: [],
  },
  technical: {
    display: false,
    title: "Technical Skills",
    skills: [],
  },
};

// ============================================================
// 6. BLOG (Disabled)
// ============================================================
const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

// ============================================================
// 7. WORK PAGE CONFIGURATION
// ============================================================
const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Web development projects by ${person.name} - Full Stack Developer specializing in Laravel, Vue.js, and MERN stack`,
};

// ============================================================
// 8. UPCOMING/IN-PROGRESS PROJECTS
// ============================================================
const upcomingProjects = [
  {
    title: "Campify",
    description: "A social camping companion app that helps outdoor enthusiasts discover hidden campsites, plan trips with friends, and share their adventures. Features include offline maps, weather alerts, gear checklists, and a community-driven review system for campsites.",
    status: "In Development" as const,
    progress: 25,
    technologies: ["React Native", "Node.js", "MongoDB", "Mapbox", "Firebase"],
    expectedCompletion: "Q1 2027",
  },
  {
    title: "Knight's Valor",
    description: "A medieval jousting action game with physics-based combat, customizable knights, and tournament progression. Players compete in single-player campaigns and online multiplayer arenas, unlocking armor, weapons, and steeds as they rise through the ranks to become the realm's champion.",
    status: "Planning" as const,
    progress: 15,
    technologies: ["Unity", "C#", "Photon Networking", "Blender"],
    expectedCompletion: "Q2 2027",
  },
  {
    title: "ShelfLife",
    description: "A smart pantry and recipe assistant that tracks food expiration dates, suggests recipes based on ingredients you already have, and helps reduce food waste. Uses computer vision to scan grocery receipts and barcode recognition for quick inventory management.",
    status: "Concept" as const,
    progress: 5,
    technologies: ["Flutter", "Python", "TensorFlow", "PostgreSQL", "OpenAI API"],
    expectedCompletion: "Q3 2027",
  },
];

// ============================================================
// 9. GALLERY (Disabled)
// ============================================================
const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [],
};

// ============================================================
// EXPORTS
// ============================================================
export { person, social, newsletter, home, about, blog, work, gallery, upcomingProjects, rotatingRoles };
