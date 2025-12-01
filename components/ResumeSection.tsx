export default function ResumeSection() {
  return (
    <section id="resume" className="min-h-screen px-6 md:px-24 py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
          Resume
        </h2>
        <p className="text-xl text-secondary mb-12">
          Download my full resume for detailed work history and accomplishments.
        </p>

        <div className="bg-secondary/5 border-2 border-secondary/20 p-12 space-y-8">
          <div className="space-y-4">
            <div className="w-20 h-20 mx-auto bg-tertiary/20 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-tertiary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>

            <h3 className="text-2xl font-display font-bold">
              Engineering Leadership Resume
            </h3>
            <p className="text-secondary/60">
              Comprehensive overview of experience, skills, and accomplishments
            </p>
          </div>

          <a
            href="/docs/Resume - CTO.docx.pdf"
            download="David_Beggs_Resume.pdf"
            className="inline-block px-10 py-4 bg-tertiary text-primary font-display font-bold hover:bg-tertiary/90 transition-smooth"
          >
            Download Resume (PDF)
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="border-l-4 border-tertiary pl-6">
            <p className="text-3xl font-display font-bold text-tertiary mb-2">7+</p>
            <p className="text-secondary">Years of Experience</p>
          </div>
          <div className="border-l-4 border-tertiary pl-6">
            <p className="text-3xl font-display font-bold text-tertiary mb-2">10+</p>
            <p className="text-secondary">Engineers Led</p>
          </div>
          <div className="border-l-4 border-tertiary pl-6">
            <p className="text-3xl font-display font-bold text-tertiary mb-2">Multiple</p>
            <p className="text-secondary">Successful Products</p>
          </div>
        </div>
      </div>
    </section>
  );
}
