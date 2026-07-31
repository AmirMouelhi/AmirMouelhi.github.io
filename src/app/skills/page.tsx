import {
  Column,
  Heading,
  Meta,
  Schema,
  Text,
  Row,
  Badge,
  Line,
  RevealFx,
} from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";

const skillsData = {
  path: "/skills",
  title: "My Skills",
  description: `Technical skills and expertise of ${person.name} - Full Stack Developer`,
};

// Skills organized by category with Devicon URLs
const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Spring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    ],
  },
  {
    title: "Mobile Development",
    skills: [
      { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    ],
  },
];

const softSkills = [
  "Problem Solving",
  "Team Collaboration",
  "Communication",
  "Time Management",
  "Adaptability",
  "Attention to Detail",
  "Critical Thinking",
  "Self-Motivation",
];

const roles = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "MERN Stack Developer",
  "PHP/Laravel Developer",
];

export async function generateMetadata() {
  return Meta.generate({
    title: skillsData.title,
    description: skillsData.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(skillsData.title)}`,
    path: skillsData.path,
  });
}

export default function SkillsPage() {
  return (
    <Column maxWidth="m" paddingTop="24" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={skillsData.path}
        title={skillsData.title}
        description={skillsData.description}
        image={`/api/og/generate?title=${encodeURIComponent(skillsData.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Header with Badge */}
      <Column horizontal="center" gap="8">
        <RevealFx translateY="4">
          <Badge
            background="brand-alpha-weak"
            onBackground="brand-medium"
            paddingX="16"
            paddingY="8"
            arrow={false}
          >
            <Row gap="8" vertical="center">
              <span>💡</span> My Skills
            </Row>
          </Badge>
        </RevealFx>
        <RevealFx translateY="4" delay={0.1}>
          <Heading variant="heading-strong-xl" align="center">
            My Technical Experience & Skills
          </Heading>
        </RevealFx>
        <RevealFx translateY="4" delay={0.15}>
          <Text
            onBackground="neutral-weak"
            align="center"
            style={{ maxWidth: "600px" }}
          >
            I have a solid understanding of modern web technologies and specialize
            in building scalable applications using JavaScript, PHP, React, Vue,
            Laravel, and Node.js.
          </Text>
        </RevealFx>
      </Column>

      {/* Professional Roles */}
      <RevealFx translateY="8">
        <Column fillWidth gap="m" paddingX="l">
          <Heading as="h2" variant="heading-strong-l">
            Professional Roles
          </Heading>
          <Row gap="12" wrap>
            {roles.map((role) => (
              <Badge
                key={role}
                background="brand-alpha-weak"
                onBackground="brand-medium"
                paddingX="16"
                paddingY="8"
                arrow={false}
              >
                {role}
              </Badge>
            ))}
          </Row>
        </Column>
      </RevealFx>

      {/* Divider */}
      <Row fillWidth horizontal="center">
        <Line maxWidth={200} />
      </Row>

      {/* Technical Skills Grid */}
      <Column fillWidth gap="xl" paddingX="l">
        {skillCategories.map((category, categoryIndex) => (
          <RevealFx
            key={category.title}
            translateY="8"
            delay={categoryIndex * 0.1}
          >
            <Column fillWidth gap="m" marginBottom="16">
              <Heading as="h2" variant="heading-strong-l" marginBottom="8">
                {category.title}
              </Heading>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
                  gap: "24px",
                }}
              >
                {category.skills.map((skill) => (
                  <Column
                    key={skill.name}
                    horizontal="center"
                    gap="16"
                    padding="24"
                    radius="m"
                    border="neutral-alpha-weak"
                    background="surface"
                    style={{
                      transition: "transform 0.2s ease, box-shadow 0.2s ease",
                      cursor: "default",
                    }}
                    className="skill-card"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      width={56}
                      height={56}
                      style={{ objectFit: "contain" }}
                    />
                    <Text variant="body-default-s" align="center" weight="medium">
                      {skill.name}
                    </Text>
                  </Column>
                ))}
              </div>
            </Column>
          </RevealFx>
        ))}
      </Column>

      {/* Divider */}
      <Row fillWidth horizontal="center">
        <Line maxWidth={200} />
      </Row>

      {/* Soft Skills */}
      <RevealFx translateY="8">
        <Column fillWidth gap="m" paddingX="l" marginBottom="40">
          <Heading as="h2" variant="heading-strong-l">
            Soft Skills
          </Heading>
          <Row gap="12" wrap>
            {softSkills.map((skill) => (
              <Badge
                key={skill}
                background="neutral-alpha-weak"
                onBackground="neutral-strong"
                paddingX="16"
                paddingY="8"
                arrow={false}
              >
                {skill}
              </Badge>
            ))}
          </Row>
        </Column>
      </RevealFx>
    </Column>
  );
}
