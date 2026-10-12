const experience = [
  {
    company: "Amora",
    role: "Content Creator / Creative Content Strategist",
    date: "Sep 2025 — Present",
    summary:
      "Develops relationship, dating and lifestyle content from audience research and ideation through scripting, production, editing, publishing and performance review.",
    number: "01",
  },
  {
    company: "Oxygen Films",
    role: "Assistant Video Editor / Production Assistant",
    date: "Sep 2023 — Aug 2024",
    summary:
      "Supported film, corporate and event productions across content capture, production logistics and post-production, shaping raw footage into polished visual stories.",
    number: "02",
  },
  {
    company: "Marketing Edge",
    role: "Story Writer / Content Writer",
    date: "Sep 2022 — Aug 2023",
    summary:
      "Researched and wrote timely stories on marketing, advertising, brands and business, translating interviews and industry events into compelling editorial content.",
    number: "03",
  },
  {
    company: "LoveWorld Plus (LXP)",
    role: "Content Creator / TV Host / Scriptwriter",
    date: "Sep 2021 — Aug 2022",
    summary:
      "Conceptualised and delivered a 20-episode television programme while writing scripts and promotional copy, hosting on screen and coordinating production.",
    number: "04",
  },
  {
    company: "Benson Idahosa University",
    role: "Editor-in-Chief · Mass Communication Department",
    date: "2023",
    summary:
      "Led editorial planning, commissioned and edited student-focused stories, coordinated contributors and maintained a consistent publishing workflow.",
    number: "05",
  },
];

const expertise = [
  "Content ideation",
  "Creative concept development",
  "Social media content",
  "Content writing",
  "Copywriting",
  "Scriptwriting",
  "Short-form video",
  "Video editing",
  "Carousel concepts",
  "Brand storytelling",
  "Content strategy",
  "Hooks & captions",
  "Audience research",
  "Content optimization",
  "Performance analysis",
];

const certifications = [
  ["Content Marketing", "HubSpot Academy"],
  ["Social Media Marketing", "HubSpot Academy"],
  ["Fundamentals of Digital Marketing", "Google"],
  ["Content Marketing", "Semrush Academy"],
];

const work = [
  {
    title:
      "Asharami receives ISO certifications, promotes downstream sustainability",
    category: "Business & Sustainability",
    publication: "Marketing Edge",
    href: "https://marketingedge.com.ng/asharami-receives-iso-certifications-promotes-downstream-sustainability/",
    tone: "bg-[#ded7c9]",
  },
  {
    title: "ARCON is not mandated to regulate social media — Odenigbo",
    category: "Media & Regulation",
    publication: "Marketing Edge",
    href: "https://marketingedge.com.ng/arcon-is-not-mandated-to-regulate-social-media-odenigbo/",
    tone: "bg-[#d7dfd3]",
  },
];

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={`h-5 w-5 transition-transform duration-300 ${
        diagonal
          ? "group-hover:-translate-y-1 group-hover:translate-x-1"
          : "group-hover:translate-x-1"
      }`}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d={diagonal ? "M7 17 17 7M8 7h9v9" : "M5 12h14m-5-5 5 5-5 5"}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function App() {
  return (
    <main className="overflow-hidden bg-[#f2efe8] text-[#171713]">
      <section className="relative min-h-screen border-b border-black/15">
        <div className="page-grid absolute inset-0 opacity-50" />
        <nav className="relative z-10 mx-auto flex max-w-[1440px] items-center justify-between px-6 py-7 md:px-12 lg:px-16">
          <a
            className="font-display text-xl leading-none font-semibold tracking-tight"
            href="#top"
          >
            NO<span className="text-[#d95735]">.</span>
          </a>
          <div className="hidden items-center gap-8 text-xs font-semibold tracking-[0.14em] uppercase sm:flex">
            <a className="nav-link" href="#about">
              About
            </a>
            <a className="nav-link" href="#work">
              Work
            </a>
            <a className="nav-link" href="#experience">
              Experience
            </a>
            <a
              className="nav-link"
              href="/nicole/nicole-okolie-cv.pdf"
              target="_blank"
            >
              CV
            </a>
          </div>
          <a
            className="group flex items-center gap-2 border-b border-black pb-1 text-xs font-semibold tracking-[0.14em] uppercase"
            href="mailto:nicoleokolie555@gmail.com"
          >
            Let’s talk
            <ArrowIcon diagonal />
          </a>
        </nav>

        <div
          className="relative z-[1] mx-auto flex min-h-[calc(100vh-92px)] max-w-[1440px] flex-col justify-end px-6 pb-10 md:px-12 md:pb-12 lg:px-16"
          id="top"
        >
          <div className="mb-auto grid w-full items-start gap-6 pt-[5vh] md:grid-cols-[1fr_auto_1fr]">
            <p className="max-w-[240px] text-xs leading-relaxed font-semibold tracking-[0.15em] uppercase">
              Creating stories that move
              <br />
              people & shape culture
            </p>
            <figure className="relative ml-auto h-[32vh] min-h-[245px] w-[185px] overflow-hidden border-[6px] border-white shadow-[0_18px_50px_rgba(23,23,19,0.16)] md:mx-auto md:h-[38vh] md:min-h-[290px] md:w-[230px]">
              <img
                alt="Nicole Okolie seated on a television studio set"
                className="h-full w-full object-cover object-[center_42%]"
                fetchPriority="high"
                src="/nicole/nicole-okolie-headshot.jpg"
              />
              <figcaption className="absolute right-0 bottom-0 left-0 bg-[#171713]/85 px-3 py-2 text-[9px] font-bold tracking-[0.14em] text-white uppercase backdrop-blur-sm">
                Content creator / Strategist
              </figcaption>
            </figure>
            <div className="hidden h-24 w-24 items-center justify-center justify-self-end rounded-full border border-black/25 text-center text-[10px] leading-tight font-semibold tracking-[0.15em] uppercase md:flex">
              Based in
              <br />
              Nigeria
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-medium tracking-[0.18em] text-[#d95735] uppercase md:mb-1">
              Nicole Okolie
            </p>
            <h1 className="font-display max-w-[1180px] text-[clamp(4rem,11vw,10.5rem)] leading-[0.78] font-medium tracking-[-0.055em]">
              Creative
              <span className="block pl-[12vw] italic">storyteller.</span>
            </h1>
            <div className="mt-8 flex flex-col gap-6 border-t border-black/20 pt-5 md:flex-row md:items-center md:justify-between">
              <p className="max-w-xl text-base leading-relaxed text-black/65">
                Content creator, social media content strategist and writer
                crafting thoughtful stories across digital, television and
                editorial platforms.
              </p>
              <div className="flex flex-wrap items-center gap-7">
                <a
                  className="nav-link text-xs font-bold tracking-[0.14em] uppercase"
                  href="/nicole/nicole-okolie-cv.pdf"
                  target="_blank"
                >
                  Download CV
                </a>
                <a
                  className="group flex w-fit items-center gap-4 text-sm font-bold tracking-[0.12em] uppercase"
                  href="#work"
                >
                  Explore work
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d95735] text-white">
                    <ArrowIcon />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="mx-auto grid max-w-[1440px] gap-12 px-6 py-24 md:px-12 md:py-32 lg:grid-cols-[0.7fr_1.3fr] lg:px-16"
        id="about"
      >
        <div>
          <p className="section-label">01 / About</p>
        </div>
        <div>
          <h2 className="font-display text-[clamp(2.6rem,5.5vw,5.5rem)] leading-[0.98] tracking-[-0.035em]">
            Stories are where ideas become{" "}
            <span className="italic text-[#d95735]">connection.</span>
          </h2>
          <div className="mt-12 grid gap-8 border-t border-black/15 pt-8 md:grid-cols-2">
            <p className="text-lg leading-relaxed">
              I develop ideas and turn them into engaging written, visual and
              video content that helps people understand a message, feel its
              relevance and remember it.
            </p>
            <p className="leading-relaxed text-black/60">
              From research and creative development to scripting, production,
              editing, publishing and performance review, I understand the
              full content journey—and how to adapt a strong idea across social
              formats.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#d95735] text-[#fffaf1]">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
          <div className="relative min-h-[570px] overflow-hidden lg:min-h-[780px]">
            <img
              alt="Behind the scenes of Nicole's studio production work"
              className="absolute inset-0 h-full w-full object-cover"
              src="/nicole/studio-production-02.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <p className="absolute bottom-7 left-7 text-xs font-bold tracking-[0.15em] uppercase md:bottom-10 md:left-10">
              Behind the scenes / Production
            </p>
          </div>
          <div className="flex flex-col justify-between px-6 py-16 md:px-12 md:py-20 lg:px-16">
            <div>
              <p className="section-label text-white/70">Impact in numbers</p>
              <h2 className="font-display mt-6 text-5xl leading-[0.95] tracking-[-0.04em] md:text-7xl">
                Content that earns attention.
              </h2>
            </div>
            <div className="mt-16">
              <div className="grid grid-cols-2 border-t border-white/35">
                {[
                  ["11.8M", "Post views"],
                  ["493.4K", "Likes"],
                  ["5.2M", "Total viewers"],
                  ["4.5M", "New viewers"],
                ].map(([value, label]) => (
                  <div
                    className="border-b border-white/35 py-6 odd:border-r odd:pr-5 even:pl-5 md:py-8"
                    key={label}
                  >
                    <strong className="font-display block text-4xl font-normal tracking-tight md:text-6xl">
                      {value}
                    </strong>
                    <span className="mt-2 block text-xs font-bold tracking-[0.14em] text-white/65 uppercase">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-7 max-w-lg text-sm leading-relaxed text-white/70">
                Organic social performance includes 8.8M views in 60 days and
                multiple posts reaching six- and seven-figure audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1b1b17] px-6 py-24 text-[#f2efe8] md:px-12 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="section-label text-white/50">The proof</p>
              <h2 className="font-display mt-5 max-w-sm text-5xl leading-none tracking-[-0.04em] md:text-6xl">
                Built for the scroll.
              </h2>
              <p className="mt-7 max-w-sm leading-relaxed text-white/50">
                Audience-led ideas, sharp hooks and continuous performance
                review turned social storytelling into sustained reach.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {[
                ["/nicole/creator-profile.jpg", "Social content profile"],
                ["/nicole/top-posts.jpg", "Top-performing posts"],
                ["/nicole/performance-60-days.jpg", "60-day performance"],
              ].map(([src, alt], index) => (
                <figure
                  className={`overflow-hidden bg-black ${
                    index === 2 ? "col-span-2 md:col-span-1" : ""
                  }`}
                  key={src}
                >
                  <img
                    alt={alt}
                    className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                    loading="lazy"
                    src={src}
                  />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1b1b17] px-6 py-24 text-[#f2efe8] md:px-12 md:py-32 lg:px-16" id="work">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <p className="section-label text-white/50">02 / Selected work</p>
              <h2 className="font-display mt-5 text-5xl tracking-[-0.04em] md:text-7xl">
                Published stories
              </h2>
            </div>
            <p className="hidden max-w-[250px] text-right text-sm leading-relaxed text-white/50 md:block">
              A selection of reporting and editorial work published by
              Marketing Edge.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {work.map((item, index) => (
              <a
                className={`group flex min-h-[420px] flex-col justify-between p-7 text-[#171713] transition-transform duration-500 hover:-translate-y-1 md:min-h-[520px] md:p-10 ${item.tone}`}
                href={item.href}
                key={item.title}
                rel="noreferrer"
                target="_blank"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.15em] uppercase">
                    {item.category}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-black/25">
                    <ArrowIcon diagonal />
                  </span>
                </div>
                <div>
                  <span className="mb-5 block font-display text-7xl text-black/10">
                    0{index + 1}
                  </span>
                  <h3 className="font-display max-w-xl text-3xl leading-[1.05] tracking-[-0.025em] md:text-[2.75rem]">
                    {item.title}
                  </h3>
                  <p className="mt-7 border-t border-black/20 pt-4 text-xs font-bold tracking-[0.14em] uppercase">
                    Published in {item.publication}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section
        className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32 lg:px-16"
        id="experience"
      >
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="section-label">03 / Experience</p>
            <h2 className="font-display mt-5 max-w-xs text-5xl leading-none tracking-[-0.04em]">
              Along the way.
            </h2>
          </div>
          <div className="border-t border-black">
            {experience.map((item) => (
              <div
                className="group grid gap-x-5 gap-y-3 border-b border-black/20 py-7 transition-colors md:grid-cols-[45px_1fr_1.35fr] md:py-9"
                key={item.company}
              >
                <span className="text-xs text-black/35 md:pt-1">
                  {item.number}
                </span>
                <div>
                  <h3 className="font-display text-2xl tracking-tight transition-transform duration-300 group-hover:translate-x-1 md:text-3xl">
                    {item.company}
                  </h3>
                  <p className="mt-1 text-[11px] font-bold tracking-[0.12em] text-[#d95735] uppercase">
                    {item.date}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold">{item.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-black/50">
                    {item.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/15 bg-[#ded7c9] px-6 py-24 md:px-12 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="section-label">04 / Creative toolkit</p>
              <h2 className="font-display mt-5 text-5xl tracking-[-0.04em] md:text-7xl">
                From idea to impact.
              </h2>
              <div className="mt-12 flex flex-wrap gap-2">
                {expertise.map((skill) => (
                  <span
                    className="rounded-full border border-black/25 px-4 py-2.5 text-xs font-semibold"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <p className="mt-10 max-w-lg text-sm leading-relaxed text-black/55">
                Comfortable across social platforms, video and graphic editing
                software, content management tools, analytics, SEO, digital
                research, voiceover and audio production.
              </p>
            </div>

            <div className="grid content-start gap-12 md:grid-cols-2 lg:pt-20">
              <div>
                <p className="section-label mb-6">Education</p>
                <div className="border-t border-black pt-5">
                  <h3 className="font-display text-3xl leading-tight">
                    B.Sc. Mass Communication
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/55">
                    Benson Idahosa University
                    <br />
                    2019 — 2023
                  </p>
                </div>
              </div>
              <div>
                <p className="section-label mb-6">Certifications</p>
                <div className="border-t border-black">
                  {certifications.map(([name, issuer]) => (
                    <div
                      className="border-b border-black/20 py-4"
                      key={`${name}-${issuer}`}
                    >
                      <p className="text-sm font-semibold">{name}</p>
                      <p className="mt-1 text-xs text-black/50">{issuer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#d95735] px-6 py-24 text-[#fffaf1] md:px-12 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-xs font-bold tracking-[0.15em] uppercase">
            Strategy · Writing · Production
          </p>
          <h2 className="font-display mt-12 max-w-5xl text-[clamp(3.5rem,8.5vw,8.5rem)] leading-[0.88] tracking-[-0.05em]">
            Have a story worth telling?
          </h2>
          <div className="mt-16 flex flex-col gap-8 border-t border-white/35 pt-7 md:flex-row md:items-center md:justify-between">
            <p className="max-w-md text-lg leading-relaxed text-white/80">
              Let’s shape it into content your audience will want to read,
              watch and share.
            </p>
            <a
              className="group flex items-center gap-4 text-sm font-bold tracking-[0.14em] uppercase"
              href="mailto:nicoleokolie555@gmail.com"
            >
              nicoleokolie555@gmail.com
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fffaf1] text-[#d95735]">
                <ArrowIcon diagonal />
              </span>
            </a>
          </div>
        </div>
      </section>

      <footer className="flex flex-col gap-4 bg-[#1b1b17] px-6 py-8 text-xs tracking-[0.12em] text-white/50 uppercase md:flex-row md:items-center md:justify-between md:px-12 lg:px-16">
        <p>© {new Date().getFullYear()} Nicole Okolie</p>
        <p>Content with clarity, character & purpose</p>
      </footer>
    </main>
  );
}
