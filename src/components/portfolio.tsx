import { useEffect, useState, type ReactNode } from "react";
import {
  Github,
  Mail,
  Linkedin,
  Download,
  GraduationCap,
  Award,
  Menu,
  X,
  Code2,
} from "lucide-react";

/* ---- Easily replaceable placeholders ---- */
export const LINKS = {
  resume: "/resume.pdf",
  email: "navadaapoorva90@gmail.com",
  linkedin: "https://linkedin.com/in/your-username",
  github: "https://github.com/your-username",
};

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-border/60 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-5xl px-5">
        <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
        {subtitle ? <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{subtitle}</p> : null}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-border/70 bg-card/60 p-5 shadow-[var(--shadow-card)] backdrop-blur transition-colors hover:border-primary/40 ${className}`}
    >
      {children}
    </div>
  );
}

type BtnProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  download?: boolean;
  className?: string;
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  download,
  className = "",
}: BtnProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
  const styles = {
    primary:
      "bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-90",
    outline: "border border-border bg-card/50 text-foreground hover:border-primary/50 hover:bg-accent",
    ghost: "text-muted-foreground hover:text-foreground",
  }[variant];
  const cls = `${base} ${styles} ${className}`;
  if (href)
    return (
      <a
        href={href}
        className={cls}
        download={download}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer"
      >
        {children}
      </a>
    );
  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled ? "border-b border-border/70 bg-background/85 backdrop-blur" : ""
      }`}
    >
      <nav className="mx-auto grid max-w-5xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5">
        <a href="#home" className="flex min-w-0 items-center gap-2">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[image:var(--gradient-primary)] text-primary-foreground">
            <Code2 className="h-4 w-4" />
          </span>
          <span className="truncate font-display text-sm font-semibold tracking-tight">Apoorva R Navda</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border md:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-border/70 bg-background/95 backdrop-blur md:hidden">
          <div className="mx-auto flex max-w-5xl flex-col px-5 py-2">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm text-muted-foreground hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

export function ProjectCard({
  title,
  description,
  tech,
  github,
  demo,
}: {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
}) {
  return (
    <Card className="flex h-full flex-col">
      <h3 className="font-display text-base font-semibold">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-border/70 bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </Card>
  );
}

export { Github, Mail, Linkedin, Download, GraduationCap, Award };
