import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { Link } from 'react-scroll';

const footerLinks = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
];

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/vishank-pathariya-7769a5273/', label: 'LinkedIn' },
  { icon: HiMail, href: 'mailto:vishupathariya146@gmail.com', label: 'Email' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-50 dark:bg-dark-900 border-t border-dark-200/50 dark:border-dark-800/50">
      <div className="section-container px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo / Brand */}
          <div className="text-center md:text-left">
            <Link to="hero" smooth duration={500} className="cursor-pointer">
              <span className="text-2xl font-bold gradient-text">VP</span>
            </Link>
            <p className="text-sm text-dark-500 dark:text-dark-400 mt-2 max-w-xs">
              Building digital experiences with modern web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={500}
                offset={-80}
                className="text-sm text-dark-500 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-dark-100 dark:bg-dark-800 text-dark-500 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-dark-200 dark:hover:bg-dark-700 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark-200/50 dark:border-dark-800/50 mt-8 pt-8">
          <p className="text-center text-sm text-dark-400 dark:text-dark-500 flex items-center justify-center gap-1">
            © {currentYear} Vishank Pathariya. Made with{' '}
            <FaHeart className="text-red-500 text-xs" />
          </p>
        </div>
      </div>
    </footer>
  );
}
