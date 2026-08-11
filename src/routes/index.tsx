import { createFileRoute } from "@tanstack/react-router";
import {
  Award,
  Button,
  Card,
  Download,
  GraduationCap,
  Github,
  Linkedin,
  LINKS,
  Mail,
  Navbar,
  ProjectCard,
  Section,
} from "@/components/portfolio";

const TITLE = "Apoorva R Navda — Computer Science Engineering Student";
const DESC =
  "Portfolio of Apoorva R Navda, a CSE student focused on software development, programming and problem solving. Projects, skills, education and contact.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SKILLS = ["Java", "Python (Basics)", "C (Basics)", "SQL (Basics)", "HTML & CSS (Basics)"];

const PROJECTS = [
  {
    title: "Iris Authentication System",
    description:
      "Iris-based authentication system that verifies identity using computer vision and machine learning for secure, contactless access.",
    tech: ["Python", "Computer Vision", "Machine Learning"],
  },
  {
    title: "Student Timetable & StudyMate",
    description:
      "A student timetable and study planning platform that organises classes, tracks study sessions and keeps academic work on schedule.",
    tech: ["Java", "SQL", "HTML & CSS"],
  },
  {
    title: "Math Crew",
    description:
      "An educational platform designed to help children learn mathematics through simple, interactive and engaging practice.",
    tech: ["HTML & CSS", "Python"],
  },
];

const ACHIEVEMENTS = [
  { title: "Achievement Title", note: "Add your achievement details here — event, role and outcome." },
  { title: "Certification Name", note: "Add issuing organisation and year of completion." },
  { title: "Course / Workshop", note: "Add course name, platform and key skills learned." },
  { title: "Award / Recognition", note: "Add award name and the reason it was received." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section id="home" className="relative scroll-mt-20 overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="pointer-events-none absolute inset-x-0 -top-32 h-72 bg-[image:var(--gradient-hero)] blur-3xl" />
        <div className="relative mx-auto w-full max-w-5xl px-5">
          <span className="inline-flex items-center rounded-full border border-border/70 bg-card/60 px-3 py-1 text-xs text-muted-foreground">
            Open to internships & placements
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-6xl">
            Apoorva R Navda
          </h1>
          <p className="mt-3 bg-[image:var(--gradient-primary)] bg-clip-text text-base font-medium text-transparent sm:text-lg">
            Computer Science Engineering Student
          </p>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            I build practical software with a focus on clean code, strong programming fundamentals and
            problem solving. I enjoy turning ideas into working applications and continuously sharpening my
            skills in development and data structures.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects">View Projects</Button>
            <Button href={LINKS.resume} variant="outline" download>
              <Download className="h-4 w-4" /> Download Resume
            </Button>
            <Button href="#contact" variant="outline">
              <Mail className="h-4 w-4" /> Contact Me
            </Button>
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" title="About">
        <Card>
          <p className="text-sm leading-relaxed text-muted-foreground">
            I am a Computer Science and Engineering student with a strong interest in software development,
            programming and problem solving. I focus on writing readable, maintainable code and building
            projects that solve real problems — from computer vision systems to student productivity tools.
            Alongside coursework, I practise programming fundamentals regularly and enjoy learning new tools
            and technologies. I am currently looking for opportunities where I can contribute to a
            development team, learn from experienced engineers and grow as a software engineer.
          </p>
        </Card>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills" subtitle="Languages and technologies I work with.">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {SKILLS.map((s) => (
            <Card key={s} className="p-4">
              <p className="text-sm font-medium">{s}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects" subtitle="A selection of things I have built.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" title="Education">
        <Card className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-5 p-6">
          <div className="flex min-w-0 items-start gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary">
              <GraduationCap className="h-5 w-5 text-primary" />
            </span>
            <div className="min-w-0">
              <h3 className="font-display text-base font-semibold">
                B.E. Computer Science &amp; Engineering
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                KSIT — K. S. Institute of Technology
              </p>
            </div>
          </div>
          <div className="rounded-xl border border-primary/30 bg-[image:var(--gradient-primary)] px-4 py-3 text-center">
            <p className="text-[11px] uppercase tracking-wider text-primary-foreground/80">CGPA</p>
            <p className="font-display text-2xl font-bold text-primary-foreground">9.17</p>
          </div>
        </Card>
      </Section>

      {/* Achievements */}
      <Section
        id="achievements"
        title="Achievements & Certifications"
        subtitle="Placeholder cards — replace with your actual achievements and certifications."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {ACHIEVEMENTS.map((a) => (
            <Card key={a.title} className="flex gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-secondary">
                <Award className="h-4 w-4 text-primary" />
              </span>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold">{a.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{a.note}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Resume */}
      <Section id="resume" title="Resume" subtitle="Download a copy of my latest resume.">
        <Card className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 p-6">
          <p className="min-w-0 text-sm text-muted-foreground">
            PDF resume with education, skills, projects and contact details.
          </p>
          <Button href={LINKS.resume} download>
            <Download className="h-4 w-4" /> Download Resume
          </Button>
        </Card>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact" subtitle="Feel free to reach out for roles or collaboration.">
        <div className="grid gap-4 sm:grid-cols-3">
          <Card>
            <Mail className="h-4 w-4 text-primary" />
            <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">Email</p>
            <a href={`mailto:${LINKS.email}`} className="mt-1 block truncate text-sm hover:text-primary">
              {LINKS.email}
            </a>
          </Card>
          <Card>
            <Linkedin className="h-4 w-4 text-primary" />
            <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">LinkedIn</p>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="mt-1 block truncate text-sm hover:text-primary"
            >
              /in/your-username
            </a>
          </Card>
          <Card>
            <Github className="h-4 w-4 text-primary" />
            <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">GitHub</p>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="mt-1 block truncate text-sm hover:text-primary"
            >
              @your-username
            </a>
          </Card>
        </div>
      </Section>

      <footer className="border-t border-border/60 py-8">
        <p className="mx-auto max-w-5xl px-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Apoorva R Navda. Built with React, TypeScript & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}
