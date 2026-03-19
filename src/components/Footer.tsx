import { Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-100 bg-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <img
            src="/logo.png"
            alt="StreamlineFlo"
            className="h-8 w-auto"
          />

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:hello@streamlineflo.com"
              className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors"
            >
              <Mail className="w-4 h-4" />
              hello@streamlineflo.com
            </a>
            <a
              href="https://www.linkedin.com/in/adrian-zaporojan-9358642a9/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} StreamlineFlo
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
