import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
  Icon,
  IconButton,
} from "@once-ui-system/core";
import { home, about, person, baseURL, rotatingRoles } from "@/resources";
import { Projects } from "@/components/work/Projects";
import { UpcomingProjects } from "@/components/work/UpcomingProjects";
import { upcomingProjects, social } from "@/resources";
import { TextRotator } from "@/components/TextRotator";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  const nameParts = person.name.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* HERO SECTION - Inspired by taqui-786 */}
      <Row
        fillWidth
        gap="xl"
        vertical="center"
        s={{ direction: "column" }}
        paddingX="l"
      >
        {/* LEFT SIDE - Text Content */}
        <Column flex={1} gap="m" s={{ horizontal: "center" }}>
          <RevealFx translateY="4">
            <Text variant="heading-default-m" onBackground="neutral-weak">
              Hello, I&apos;m
            </Text>
          </RevealFx>

          <RevealFx translateY="4" delay={0.1}>
            <Heading
              variant="display-strong-xl"
              style={{
                background: "linear-gradient(135deg, var(--brand-medium) 0%, var(--accent-medium) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {firstName}
            </Heading>
          </RevealFx>

          <RevealFx translateY="4" delay={0.15}>
            <Heading
              variant="display-strong-xl"
              onBackground="neutral-strong"
            >
              {lastName}
            </Heading>
          </RevealFx>

          <RevealFx translateY="4" delay={0.2}>
            <TextRotator items={rotatingRoles} prefix="I am a" />
          </RevealFx>

          <RevealFx translateY="4" delay={0.25}>
            <Text
              variant="body-default-l"
              onBackground="neutral-weak"
              style={{ maxWidth: "500px" }}
            >
              A passionate developer from Tunisia crafting scalable web solutions
              with modern technologies. I transform complex challenges into
              user-friendly applications.
            </Text>
          </RevealFx>

          {/* Social Links */}
          <RevealFx translateY="4" delay={0.3}>
            <Row gap="12" marginTop="m">
              {social
                .filter((item) => item.essential)
                .map((item) => (
                  <IconButton
                    key={item.name}
                    href={item.link}
                    icon={item.icon}
                    size="l"
                    variant="secondary"
                    tooltip={item.name}
                  />
                ))}
            </Row>
          </RevealFx>

          {/* CTA Buttons */}
          <RevealFx translateY="4" delay={0.35}>
            <Row gap="16" marginTop="l" wrap>
              <Button
                href="/projects"
                variant="primary"
                size="l"
                prefixIcon="grid"
              >
                View My Work
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                size="l"
                prefixIcon="email"
              >
                Get In Touch
              </Button>
            </Row>
          </RevealFx>
        </Column>

        {/* RIGHT SIDE - Avatar/Image */}
        <Column
          flex={1}
          horizontal="center"
          vertical="center"
          s={{ hide: true }}
        >
          <RevealFx translateY="4" delay={0.2}>
            <div
              style={{
                position: "relative",
                width: "350px",
                height: "350px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "4px solid var(--brand-alpha-medium)",
                boxShadow: "0 0 60px var(--brand-alpha-weak)",
              }}
            >
              <Avatar
                src={person.avatar}
                size="custom"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </RevealFx>
        </Column>
      </Row>

      {/* Featured Badge */}
      {home.featured.display && (
        <RevealFx translateY="8" delay={0.4}>
          <Badge
            background="brand-alpha-weak"
            paddingX="16"
            paddingY="8"
            onBackground="neutral-strong"
            textVariant="label-default-m"
            arrow={false}
            href={home.featured.href}
          >
            <Row gap="12" vertical="center">
              {home.featured.title}
            </Row>
          </Badge>
        </RevealFx>
      )}

      {/* Divider */}
      <Row fillWidth horizontal="center" marginY="xl">
        <Line maxWidth={300} />
      </Row>

      {/* Featured Projects Section with Carousel */}
      <RevealFx translateY="16" delay={0.2}>
        <Projects range={[1, 1]} />
      </RevealFx>

      {/* Divider */}
      <Row fillWidth horizontal="center" marginY="xl">
        <Line maxWidth={300} />
      </Row>

      {/* Skills Preview Section */}
      <RevealFx translateY="8">
        <Column fillWidth gap="m" paddingX="l" horizontal="center">
          <Heading as="h2" variant="heading-strong-xl" align="center">
            Tech Stack
          </Heading>
          <Text onBackground="neutral-weak" align="center" marginBottom="m">
            Technologies I work with on a daily basis
          </Text>
          <Row gap="16" wrap horizontal="center">
            {["React", "Vue.js", "Laravel", "Node.js", "MongoDB", "MySQL"].map(
              (tech) => (
                <Badge
                  key={tech}
                  background="neutral-alpha-weak"
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
          <Button
            href="/skills"
            variant="secondary"
            size="m"
            style={{ marginTop: "var(--static-space-24)" }}
          >
            View All Skills
          </Button>
        </Column>
      </RevealFx>

      {/* Divider */}
      <Row fillWidth horizontal="center" marginY="xl">
        <Line maxWidth={300} />
      </Row>

      {/* Upcoming Projects Section */}
      <UpcomingProjects projects={upcomingProjects} />
    </Column>
  );
}
