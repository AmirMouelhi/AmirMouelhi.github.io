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
  Button,
} from "@once-ui-system/core";
import { baseURL, about, person, upcomingProjects } from "@/resources";
import { Projects } from "@/components/work/Projects";
import { UpcomingProjects } from "@/components/work/UpcomingProjects";

const projectsData = {
  path: "/projects",
  title: "My Projects",
  description: `Web development projects by ${person.name} - Full Stack Developer specializing in Laravel, Vue.js, and MERN stack`,
};

const stats = [
  { label: "Completed Projects", value: "3+" },
  { label: "Technologies Used", value: "15+" },
  { label: "Years Experience", value: "2+" },
];

export async function generateMetadata() {
  return Meta.generate({
    title: projectsData.title,
    description: projectsData.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(projectsData.title)}`,
    path: projectsData.path,
  });
}

export default function ProjectsPage() {
  return (
    <Column maxWidth="m" paddingTop="24" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={projectsData.path}
        title={projectsData.title}
        description={projectsData.description}
        image={`/api/og/generate?title=${encodeURIComponent(projectsData.title)}`}
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
              <span>🚀</span> Projects
            </Row>
          </Badge>
        </RevealFx>
        <RevealFx translateY="4" delay={0.1}>
          <Heading variant="heading-strong-xl" align="center">
            My Projects
          </Heading>
        </RevealFx>
        <RevealFx translateY="4" delay={0.15}>
          <Text
            onBackground="neutral-weak"
            align="center"
            style={{ maxWidth: "600px" }}
          >
            I love to build cool projects. Here, you&apos;ll find a curated
            collection of my creative endeavors and technical projects. Each
            piece represents a journey of innovation, problem-solving, and
            continuous learning.
          </Text>
        </RevealFx>
      </Column>

      {/* Stats */}
      <RevealFx translateY="8">
        <Row
          fillWidth
          gap="24"
          horizontal="center"
          paddingX="l"
          s={{ direction: "column" }}
        >
          {stats.map((stat) => (
            <Column
              key={stat.label}
              horizontal="center"
              padding="24"
              radius="l"
              border="neutral-alpha-weak"
              background="surface"
              flex={1}
            >
              <Text
                variant="display-strong-m"
                onBackground="brand-medium"
              >
                {stat.value}
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {stat.label}
              </Text>
            </Column>
          ))}
        </Row>
      </RevealFx>

      {/* Completed Projects Section */}
      <Column fillWidth gap="m" marginTop="xl">
        <RevealFx translateY="8">
          <Row fillWidth paddingX="l" horizontal="between" vertical="center">
            <Heading as="h2" variant="heading-strong-l">
              Completed Projects
            </Heading>
            <Badge
              background="success-alpha-weak"
              onBackground="success-medium"
              arrow={false}
            >
              Live
            </Badge>
          </Row>
        </RevealFx>
        <RevealFx translateY="8" delay={0.1}>
          <Text onBackground="neutral-weak" paddingX="l" marginBottom="m">
            Projects I&apos;ve completed during internships and personal work.
          </Text>
        </RevealFx>
        <Projects />
      </Column>

      {/* Divider */}
      <Row fillWidth horizontal="center" marginY="xl">
        <Line maxWidth={200} />
      </Row>

      {/* Upcoming Projects Section */}
      <UpcomingProjects projects={upcomingProjects} />

      {/* CTA Section */}
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
            Have a project in mind?
          </Heading>
          <Text onBackground="neutral-weak" align="center">
            I&apos;m always open to discussing new projects and opportunities.
          </Text>
          <Button
            href="/contact"
            variant="primary"
            size="l"
            prefixIcon="email"
            style={{ marginTop: "var(--static-space-16)" }}
          >
            Let&apos;s Talk
          </Button>
        </Column>
      </RevealFx>
    </Column>
  );
}
