export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 md:px-24 border-t border-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-secondary/60">
            © {currentYear} All rights reserved.
          </div>

          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/david-w-beggs-v-337004180/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent hover:text-tertiary transition-smooth"
            >
              LinkedIn
            </a>
            {/* <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent hover:text-tertiary transition-smooth"
            >
              GitHub
            </a> */}
            <a
              href="mailto:david.beggs96@gmail.com"
              className="text-sm text-accent hover:text-tertiary transition-smooth"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
