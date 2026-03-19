const Footer = () => {
  return (
    <footer className="bg-[#0e0e0e] border-t border-[#1e1e1e] px-8 lg:px-14 py-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <img
          src="/logo.png"
          alt="StreamlineFlo"
          className="h-6 w-auto"
          style={{ filter: 'brightness(0) invert(0.35)' }}
        />
        <div className="flex flex-wrap items-center gap-6 text-xs text-[#2e2e2e]">
          <a
            href="mailto:hello@streamlineflo.com"
            className="hover:text-[#5a5a5a] transition-colors"
          >
            hello@streamlineflo.com
          </a>
          <a
            href="https://www.linkedin.com/in/adrian-zaporojan-9358642a9/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#5a5a5a] transition-colors"
          >
            LinkedIn
          </a>
          <span>© {new Date().getFullYear()} StreamlineFlo</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
