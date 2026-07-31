import {
  Column,
  Heading,
  Meta,
  Schema,
  Text,
  Row,
  Line,
  RevealFx,
  Badge,
} from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";

const educationData = {
  path: "/education",
  title: "Education",
  description: `Academic background and qualifications of ${person.name}`,
};

const educationItems = [
  {
    institution: "ISET Djerba",
    degree: "National Bachelor's Degree in Information Technology",
    specialization: "Information Systems Development (ISD)",
    period: "2023 - 2026",
    current: true,
    location: "Djerba, Tunisia",
    description:
      "Specialized in Information Systems Development with focus on web development, database management, and software engineering.",
    courses: [
      "Web Development",
      "Database Management",
      "Software Engineering",
      "Object-Oriented Programming",
      "System Analysis and Design",
    ],
  },
  {
    institution: "Mourouj 6 High School",
    degree: "Baccalaureate",
    specialization: "Experimental Sciences",
    period: "2022 - 2023",
    current: false,
    location: "Tunisia",
    description: "Completed secondary education with focus on experimental sciences.",
    courses: [],
  },
];

const certifications: Array<{
  name: string;
  issuer: string;
  date: string;
  url: string;
}> = [
  // Add your certifications here when you have them
];

export async function generateMetadata() {
  return Meta.generate({
    title: educationData.title,
    description: educationData.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(educationData.title)}`,
    path: educationData.path,
  });
}

export default function EducationPage() {
  return (
    <Column maxWidth="m" paddingTop="24" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={educationData.path}
        title={educationData.title}
        description={educationData.description}
        image={`/api/og/generate?title=${encodeURIComponent(educationData.title)}`}
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
              <span>🎓</span> Education
            </Row>
          </Badge>
        </RevealFx>
        <RevealFx translateY="4" delay={0.1}>
          <Heading variant="heading-strong-xl" align="center">
            My Academic Journey
          </Heading>
        </RevealFx>
        <RevealFx translateY="4" delay={0.15}>
          <Text onBackground="neutral-weak" align="center">
            My educational background and qualifications
          </Text>
        </RevealFx>
      </Column>

      {/* Education Timeline */}
      <Column fillWidth gap="xl" paddingX="l">
        {educationItems.map((item, index) => (
          <RevealFx
            key={item.institution}
            translateY="8"
            delay={index * 0.1}
          >
            <Column
              fillWidth
              gap="m"
              padding="24"
              radius="l"
              border="neutral-medium"
              background="surface"
            >
              <Row
                fillWidth
                horizontal="between"
                vertical="start"
                gap="16"
                s={{ direction: "column" }}
              >
                <Column gap="4">
                  <Heading as="h2" variant="heading-strong-m">
                    {item.institution}
                  </Heading>
                  <Text variant="body-default-m" onBackground="brand-weak">
                    {item.degree}
                  </Text>
                </Column>
                <Column horizontal="end" s={{ horizontal: "start" }} gap="4">
                  <Badge
                    arrow={false}
                    background={
                      item.current ? "brand-alpha-weak" : "neutral-alpha-weak"
                    }
                    onBackground={
                      item.current ? "brand-medium" : "neutral-medium"
                    }
                  >
                    {item.period}
                  </Badge>
                  {item.current && (
                    <Text variant="label-default-s" onBackground="brand-medium">
                      Currently Studying
                    </Text>
                  )}
                </Column>
              </Row>

              <Text variant="body-default-s" onBackground="neutral-weak">
                <strong>Specialization:</strong> {item.specialization}
              </Text>

              <Text variant="body-default-s" onBackground="neutral-weak">
                <strong>Location:</strong> {item.location}
              </Text>

              <Text variant="body-default-m">{item.description}</Text>

              {item.courses.length > 0 && (
                <Column gap="8" marginTop="m">
                  <Text variant="heading-strong-xs">Key Courses:</Text>
                  <Row gap="8" wrap>
                    {item.courses.map((course) => (
                      <Badge
                        key={course}
                        arrow={false}
                        background="neutral-alpha-weak"
                        onBackground="neutral-medium"
                        paddingX="12"
                        paddingY="4"
                      >
                        {course}
                      </Badge>
                    ))}
                  </Row>
                </Column>
              )}
            </Column>
          </RevealFx>
        ))}
      </Column>

      {/* Certifications Section */}
      {certifications.length > 0 && (
        <>
          <Row fillWidth horizontal="center">
            <Line maxWidth={200} />
          </Row>
          <RevealFx translateY="8">
            <Column fillWidth gap="m" paddingX="l" marginBottom="40">
              <Heading as="h2" variant="heading-strong-l">
                Certifications
              </Heading>
              <Column gap="16">
                {certifications.map((cert) => (
                  <Row
                    key={cert.name}
                    fillWidth
                    horizontal="between"
                    vertical="center"
                  >
                    <Column gap="4">
                      <Text variant="heading-strong-s">{cert.name}</Text>
                      <Text variant="body-default-s" onBackground="neutral-weak">
                        {cert.issuer} • {cert.date}
                      </Text>
                    </Column>
                  </Row>
                ))}
              </Column>
            </Column>
          </RevealFx>
        </>
      )}

      {/* Learning Philosophy */}
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
            Continuous Learning
          </Heading>
          <Text onBackground="neutral-weak" align="center">
            I believe in lifelong learning and constantly updating my skills to
            stay current with the latest technologies and best practices in web
            development.
          </Text>
        </Column>
      </RevealFx>
    </Column>
  );
}
