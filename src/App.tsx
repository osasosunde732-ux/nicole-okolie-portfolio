const experience = [
  {
    company: "Amora",
    role: "Content Creator / Creative Content Strategist",
    number: "01",
  },
  {
    company: "Oxygen Films",
    role: "Assistant Video Editor / Production Assistant",
    number: "02",
  },
  {
    company: "Marketing Edge",
    role: "Story Writer / Content Writer",
    number: "03",
  },
  {
    company: "LoveWorld Plus (LXP)",
    role: "Content Creator / TV Host / Scriptwriter",
    number: "04",
  },
  {
    company: "Benson Idahosa University",
    role: "Editor-in-Chief · Mass Communication Department",
    number: "05",
  },
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
          <div className="mb-auto flex items-start justify-between pt-[10vh]">
            <p className="max-w-[240px] text-xs leading-relaxed font-semibold tracking-[0.15em] uppercase">
              Creating stories that move
              <br />
              people & shape culture
            </p>
            <div className="hidden h-24 w-24 items-center justify-center rounded-full border border-black/25 text-center text-[10px] leading-tight font-semibold tracking-[0.15em] uppercase md:flex">
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
              <a
                className="group flex w-fit items-center gap-4 text-sm font-bold tracking-[0.12em] uppercase"
                href="#work"
              >
                Explore selected work
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d95735] text-white">
                  <ArrowIcon />
                </span>
              </a>
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
              I create clear, engaging content that helps people understand a
              message, feel its relevance and remember it.
            </p>
            <p className="leading-relaxed text-black/60">
              My experience moves fluidly between content strategy, editorial
              writing, scriptwriting, production and presenting—giving me a
              well-rounded view of how strong stories come to life.
            </p>
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
                className="group grid gap-2 border-b border-black/20 py-7 transition-colors md:grid-cols-[60px_1fr_1.2fr] md:items-center md:py-8"
                key={item.company}
              >
                <span className="text-xs text-black/35">{item.number}</span>
                <h3 className="font-display text-2xl tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                  {item.company}
                </h3>
                <p className="text-sm leading-relaxed text-black/55 md:text-right">
                  {item.role}
                </p>
              </div>
            ))}
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
