import {
  Column,
  Heading,
  Meta,
  Schema,
  Text,
  Row,
  Line,
  RevealFx,
  SmartLink,
  Icon,
  Badge,
} from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";

const moreData = {
  path: "/more",
  title: "More",
  description: `Additional resources and links related to ${person.name}`,
};

const resourceCategories = [
  {
    title: "Professional Profiles",
    icon: "user",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/AmirMouelhi",
        description: "View my code repositories and open source contributions",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mouelhi-amir-82b1002a6/",
        description: "Connect with me professionally",
      },
    ],
  },
  {
    title: "Resume & Documents",
    icon: "document",
    links: [
      {
        name: "Download Resume (PDF)",
        url: "/documents/Amir_Mouelhi_Resume.pdf",
        description: "Get my full resume in PDF format - Updated July 2026",
      },
    ],
  },
  {
    title: "Learning Resources",
    icon: "book",
    links: [
      {
        name: "freeCodeCamp",
        url: "https://www.freecodecamp.org",
        description: "Where I learned web development fundamentals",
      },
      {
        name: "MDN Web Docs",
        url: "https://developer.mozilla.org",
        description: "My go-to reference for web technologies",
      },
      {
        name: "Laravel Documentation",
        url: "https://laravel.com/docs",
        description: "Official Laravel framework documentation",
      },
      {
        name: "React Documentation",
        url: "https://react.dev",
        description: "Official React documentation and tutorials",
      },
    ],
  },
  {
    title: "Tools I Use",
    icon: "wrench",
    links: [
      {
        name: "VS Code",
        url: "https://code.visualstudio.com",
        description: "My primary code editor",
      },
      {
        name: "Postman",
        url: "https://www.postman.com",
        description: "API development and testing tool",
      },
      {
        name: "Git",
        url: "https://git-scm.com",
        description: "Version control system",
      },
      {
        name: "Docker",
        url: "https://www.docker.com",
        description: "Containerization platform",
      },
    ],
  },
];

const funFacts = [
  "I love solving complex coding challenges",
  "Always eager to learn new technologies",
  "Believe in clean, maintainable code",
  "Enjoy collaborating with other developers",
  "Passionate about building user-friendly applications",
];

export async function generateMetadata() {
  return Meta.generate({
    title: moreData.title,
    description: moreData.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(moreData.title)}`,
    path: moreData.path,
  });
}

export default function MorePage() {
  return (
    <Column maxWidth="m" paddingTop="24" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={moreData.path}
        title={moreData.title}
        description={moreData.description}
        image={`/api/og/generate?title=${encodeURIComponent(moreData.title)}`}
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
              <span>🌟</span> More
            </Row>
          </Badge>
        </RevealFx>
        <RevealFx translateY="4" delay={0.1}>
          <Heading variant="heading-strong-xl" align="center">
            Additional Resources
          </Heading>
        </RevealFx>
        <RevealFx translateY="4" delay={0.15}>
          <Text onBackground="neutral-weak" align="center">
            Useful links, resources, and interesting stuff about me
          </Text>
        </RevealFx>
      </Column>

      {/* Resource Categories */}
      <Column fillWidth gap="xl" paddingX="l">
        {resourceCategories.map((category, index) => (
          <RevealFx
            key={category.title}
            translateY="8"
            delay={index * 0.1}
          >
            <Column fillWidth gap="m">
              <Row gap="12" vertical="center">
                <Icon
                  name="globe"
                  onBackground="brand-medium"
                  size="l"
                />
                <Heading as="h2" variant="heading-strong-l">
                  {category.title}
                </Heading>
              </Row>
              <Column gap="12" paddingLeft="xl">
                {category.links.map((link) => (
                  <Row
                    key={link.name}
                    fillWidth
                    padding="16"
                    radius="m"
                    border="neutral-alpha-weak"
                    background="surface"
                  >
                    <Column gap="4" flex={1}>
                      {link.name.includes("Resume") ? (
                        <a
                          href={link.url}
                          download
                          style={{ textDecoration: "none" }}
                        >
                          <Text
                            variant="heading-strong-s"
                            onBackground="brand-medium"
                            style={{ display: "flex", alignItems: "center", gap: "8px" }}
                          >
                            {link.name}
                            <span>↓</span>
                          </Text>
                        </a>
                      ) : (
                        <SmartLink
                          href={link.url}
                          suffixIcon="arrowUpRightFromSquare"
                        >
                          <Text variant="heading-strong-s">{link.name}</Text>
                        </SmartLink>
                      )}
                      <Text variant="body-default-s" onBackground="neutral-weak">
                        {link.description}
                      </Text>
                    </Column>
                  </Row>
                ))}
              </Column>
            </Column>
          </RevealFx>
        ))}
      </Column>

      {/* Divider */}
      <Row fillWidth horizontal="center">
        <Line maxWidth={200} />
      </Row>

      {/* Fun Facts */}
      <RevealFx translateY="8">
        <Column fillWidth gap="m" paddingX="l">
          <Heading as="h2" variant="heading-strong-l">
            Quick Facts About Me
          </Heading>
          <Column gap="12" paddingLeft="l">
            {funFacts.map((fact, index) => (
              <Row key={index} gap="12" vertical="center">
                <Text variant="body-default-l" onBackground="brand-medium">
                  •
                </Text>
                <Text variant="body-default-m">{fact}</Text>
              </Row>
            ))}
          </Column>
        </Column>
      </RevealFx>

      {/* Tech Stack Summary */}
      <RevealFx translateY="8">
        <Column
          fillWidth
          gap="m"
          padding="32"
          radius="l"
          border="brand-alpha-weak"
          background="brand-alpha-weak"
          horizontal="center"
          marginX="l"
          marginBottom="40"
        >
          <Heading as="h2" variant="heading-strong-m" align="center">
            Current Tech Stack
          </Heading>
          <Row gap="12" wrap horizontal="center" marginTop="m">
            {["Laravel", "Vue.js", "React", "Node.js", "MongoDB", "MySQL"].map(
              (tech) => (
                <Badge
                  key={tech}
                  background="surface"
                  onBackground="neutral-strong"
                  paddingX="16"
                  paddingY="8"
                  arrow={false}
                >
                  {tech}
                </Badge>
              )
            )}
          </Row>
          <Text
            variant="body-default-s"
            onBackground="neutral-weak"
            align="center"
            marginTop="m"
          >
            Always exploring new technologies and improving my skills
          </Text>
        </Column>
      </RevealFx>
    </Column>
  );
}
