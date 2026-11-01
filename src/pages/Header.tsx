import me from '../assets/me.png'

export const Header = () => {
  return (
    <header className="relative min-h-[90svh] flex flex-col justify-center gap-10 overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0" />
      </div>
      <div className="relative flex flex-col gap-8">
        <div className="flex items-center gap-6">
          <img
            src={me}
            alt="Rae Allen Retuta"
            className="size-16 sm:size-20 object-cover object-top rounded-full ring-1 ring-[#e5e5e5]"
          />
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.02em] leading-tight">
              Rae Allen Retuta
            </h1>
            <p className="text-base sm:text-lg text-[#6b6b6b]">
              Software Engineer · AI Automation Engineer
            </p>
          </div>
        </div>
        <p className="max-w-2xl text-lg sm:text-xl leading-relaxed text-[#1a1a1a]">
          I build minimal, reliable web applications and AI-driven automations—focusing on
          clean interfaces, thoughtful systems, and pragmatic solutions.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <a
            href="mailto:allenretuta10@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-[#e5e5e5] px-4 py-2 hover:bg-[#f5f5f5] transition-colors"
          >
            Get in touch
            <span aria-hidden="true">→</span>
          </a>
          <a
            href="#experience"
            className="inline-flex items-center gap-2 px-2 py-2 text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors"
          >
            View work
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;