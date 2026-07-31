"use client";

import {
  Column,
  Row,
  Heading,
  Text,
  Badge,
  Tag,
  Flex,
  RevealFx,
} from "@once-ui-system/core";

interface UpcomingProject {
  title: string;
  description: string;
  status: "In Development" | "Planning" | "Concept";
  progress: number;
  technologies: string[];
  expectedCompletion: string;
}

interface UpcomingProjectsProps {
  projects: UpcomingProject[];
}

const statusConfig = {
  "In Development": {
    background: "warning-alpha-weak" as const,
    onBackground: "warning-medium" as const,
    icon: "🚧",
  },
  Planning: {
    background: "info-alpha-weak" as const,
    onBackground: "brand-medium" as const,
    icon: "📋",
  },
  Concept: {
    background: "neutral-alpha-weak" as const,
    onBackground: "neutral-medium" as const,
    icon: "💡",
  },
};

export function UpcomingProjects({ projects }: UpcomingProjectsProps) {
  if (!projects || projects.length === 0) return null;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      <RevealFx translateY="8">
        <Row fillWidth horizontal="between" vertical="center">
          <Column gap="4">
            <Heading as="h2" variant="heading-strong-xl">
              In Progress & Upcoming
            </Heading>
            <Text onBackground="neutral-weak">
              Projects I&apos;m currently working on or planning to build
            </Text>
          </Column>
          <Badge
            arrow={false}
            background="brand-alpha-weak"
            onBackground="brand-medium"
          >
            {projects.length} project{projects.length > 1 ? "s" : ""} in pipeline
          </Badge>
        </Row>
      </RevealFx>

      <Column fillWidth gap="l">
        {projects.map((project, index) => {
          const statusStyle = statusConfig[project.status];
          return (
            <RevealFx key={project.title} translateY="8" delay={index * 0.1}>
              <Column
                fillWidth
                padding="24"
                radius="l"
                border="neutral-medium"
                background="surface"
                gap="m"
              >
                <Row
                  fillWidth
                  horizontal="between"
                  vertical="start"
                  gap="16"
                  s={{ direction: "column" }}
                >
                  <Column gap="4">
                    <Heading as="h3" variant="heading-strong-m">
                      {project.title}
                    </Heading>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      Expected: {project.expectedCompletion}
                    </Text>
                  </Column>
                  <Badge
                    arrow={false}
                    background={statusStyle.background}
                    onBackground={statusStyle.onBackground}
                  >
                    <Row gap="8" vertical="center">
                      <span>{statusStyle.icon}</span>
                      {project.status}
                    </Row>
                  </Badge>
                </Row>

                <Text variant="body-default-m" onBackground="neutral-weak">
                  {project.description}
                </Text>

                {/* Progress Bar */}
                <Column gap="8">
                  <Row horizontal="between">
                    <Text variant="label-default-s" onBackground="neutral-weak">
                      Progress
                    </Text>
                    <Text variant="label-default-s" onBackground="neutral-weak">
                      {project.progress}%
                    </Text>
                  </Row>
                  <div
                    style={{
                      width: "100%",
                      height: "6px",
                      borderRadius: "9999px",
                      backgroundColor: "var(--neutral-alpha-weak)",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        backgroundColor: "var(--brand-medium)",
                        width: `${project.progress}%`,
                        transition: "width 0.5s ease-out",
                      }}
                    />
                  </div>
                </Column>

                {/* Technologies */}
                <Flex gap="8" wrap>
                  {project.technologies.map((tech) => (
                    <Tag key={tech} size="s" variant="secondary">
                      {tech}
                    </Tag>
                  ))}
                </Flex>
              </Column>
            </RevealFx>
          );
        })}
      </Column>
    </Column>
  );
}
