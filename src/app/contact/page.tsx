import {
  Column,
  Heading,
  Meta,
  Schema,
  Text,
  Row,
  Button,
  Icon,
  Line,
  RevealFx,
  Badge,
  Card,
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";

const contactData = {
  path: "/contact",
  title: "Contact Me",
  description: `Get in touch with ${person.name} - Full Stack Developer`,
};

const contactMethods = [
  {
    name: "Email",
    value: person.email,
    href: `mailto:${person.email}`,
    icon: "email",
    description: "Send me a direct email",
    color: "brand",
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/mouelhi-amir",
    href: "https://www.linkedin.com/in/mouelhi-amir-82b1002a6/",
    icon: "linkedin",
    description: "Connect with me professionally",
    color: "info",
  },
  {
    name: "GitHub",
    value: "github.com/AmirMouelhi",
    href: "https://github.com/AmirMouelhi",
    icon: "github",
    description: "Check out my code",
    color: "neutral",
  },
  {
    name: "Resume",
    value: "Download PDF",
    href: "/documents/Amir_Mouelhi_Resume.pdf",
    icon: "document",
    description: "Get my full resume",
    color: "success",
    download: true,
  },
];

export async function generateMetadata() {
  return Meta.generate({
    title: contactData.title,
    description: contactData.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(contactData.title)}`,
    path: contactData.path,
  });
}

export default function ContactPage() {
  return (
    <Column maxWidth="m" paddingTop="24" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={contactData.path}
        title={contactData.title}
        description={contactData.description}
        image={`/api/og/generate?title=${encodeURIComponent(contactData.title)}`}
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
              <span>📧</span> Contact
            </Row>
          </Badge>
        </RevealFx>
        <RevealFx translateY="4" delay={0.1}>
          <Heading variant="heading-strong-xl" align="center">
            Get In Touch
          </Heading>
        </RevealFx>
        <RevealFx translateY="4" delay={0.15}>
          <Text
            onBackground="neutral-weak"
            align="center"
            style={{ maxWidth: "500px" }}
          >
            Have a project in mind or want to collaborate? Feel free to reach
            out through any of the channels below.
          </Text>
        </RevealFx>
      </Column>

      {/* Contact Cards */}
      <Column fillWidth gap="l" paddingX="l">
        <Row fillWidth gap="24" s={{ direction: "column" }}>
          {contactMethods.map((method, index) => (
            <RevealFx
              key={method.name}
              translateY="8"
              delay={index * 0.1}
              flex={1}
            >
              <a
                href={method.href}
                target={method.name !== "Email" && method.name !== "Resume" ? "_blank" : undefined}
                rel={method.name !== "Email" && method.name !== "Resume" ? "noopener noreferrer" : undefined}
                download={method.name === "Resume" ? true : undefined}
                style={{ textDecoration: "none" }}
              >
                <Card
                  fillWidth
                  padding="24"
                  radius="l"
                  border="neutral-medium"
                  background="surface"
                >
                  <Column gap="16">
                    <Row gap="12" vertical="center">
                      <Icon
                        name={method.icon}
                        size="l"
                        onBackground={
                          method.color === "brand"
                            ? "brand-medium"
                            : method.color === "info"
                            ? "brand-medium"
                            : method.color === "accent"
                            ? "accent-medium"
                            : method.color === "success"
                            ? "success-medium"
                            : "neutral-medium"
                        }
                      />
                      <Heading as="h3" variant="heading-strong-m">
                        {method.name}
                      </Heading>
                    </Row>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {method.description}
                    </Text>
                    <Text
                      variant="body-default-s"
                      onBackground={
                        method.color === "brand"
                          ? "brand-medium"
                          : method.color === "success"
                          ? "success-medium"
                          : "neutral-strong"
                      }
                    >
                      {method.value}
                    </Text>
                  </Column>
                </Card>
              </a>
            </RevealFx>
          ))}
        </Row>
      </Column>

      {/* Divider */}
      <Row fillWidth horizontal="center">
        <Line maxWidth={200} />
      </Row>

      {/* Availability Section */}
      <RevealFx translateY="8">
        <Column
          fillWidth
          gap="m"
          padding="32"
          radius="l"
          border="success-alpha-weak"
          background="success-alpha-weak"
          horizontal="center"
          marginX="l"
        >
          <Row gap="12" vertical="center">
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "var(--success-medium)",
                animation: "pulse 2s infinite",
              }}
            />
            <Heading as="h2" variant="heading-strong-m">
              Available for Opportunities
            </Heading>
          </Row>
          <Text
            variant="body-default-m"
            onBackground="neutral-weak"
            align="center"
          >
            I&apos;m currently open to new opportunities and collaborations.
            Whether you have a project in mind or just want to connect,
            I&apos;d love to hear from you!
          </Text>
          <Row gap="16" marginTop="24" wrap horizontal="center">
            <Button
              href={`mailto:${person.email}`}
              variant="primary"
              size="l"
              prefixIcon="email"
            >
              Send Email
            </Button>
            <Button
              href="https://www.linkedin.com/in/mouelhi-amir-82b1002a6/"
              variant="secondary"
              size="l"
              prefixIcon="linkedin"
            >
              Connect on LinkedIn
            </Button>
          </Row>
        </Column>
      </RevealFx>

      {/* Location */}
      <RevealFx translateY="8">
        <Column
          fillWidth
          gap="m"
          horizontal="center"
          marginBottom="40"
        >
          <Row gap="8" vertical="center">
            <Icon name="globe" onBackground="neutral-weak" />
            <Text variant="body-default-m" onBackground="neutral-weak">
              Based in Tunisia • Open to remote work
            </Text>
          </Row>
        </Column>
      </RevealFx>
    </Column>
  );
}
