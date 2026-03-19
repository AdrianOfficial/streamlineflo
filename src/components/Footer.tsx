const Footer = () => {
  return (
    <footer className="border-t border-[#e5e7eb] bg-white py-8">
      <div className="container mx-auto px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <img src="/logo.png" alt="StreamlineFlo" className="h-7 w-auto" />
          <div className="flex items-center gap-6 text-sm text-[#9ca3af]">
            <a href="mailto:hello@streamlineflo.com" className="hover:text-[#111827] transition-colors">
              hello@streamlineflo.com
            </a>
            <a
              href="https://www.linkedin.com/in/adrian-zaporojan-9358642a9/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#111827] transition-colors"
            >
              LinkedIn
            </a>
            <span>© {new Date().getFullYear()} StreamlineFlo</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
