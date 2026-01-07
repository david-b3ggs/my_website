export default function ResumeSection() {
  return (
    <section id="resume" className="min-h-screen px-6 md:px-24 py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
          Resume
        </h2>
        <p className="text-xl text-secondary mb-12">
          Download my resume tailored to your needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-secondary/5 border-2 border-secondary/20 p-8 space-y-8 hover:border-tertiary transition-smooth">
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
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-display font-bold">
                Technical Resume
              </h3>
              <p className="text-secondary/60">
                Deep dive into technical skills, engineering projects, and hands-on development work
              </p>
            </div>

            <a
              href="/docs/Resume - Technical - David Beggs.docx (1).pdf"
              download="David_Beggs_Technical_Resume.pdf"
              className="inline-block px-8 py-3 bg-tertiary text-primary font-display font-bold hover:bg-tertiary/90 transition-smooth"
            >
              Download Technical
            </a>
          </div>

          <div className="bg-secondary/5 border-2 border-secondary/20 p-8 space-y-8 hover:border-tertiary transition-smooth">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-display font-bold">
                Leadership Resume
              </h3>
              <p className="text-secondary/60">
                Focus on product strategy, team leadership, and organizational impact
              </p>
            </div>

            <a
              href="/docs/Resume - Product - David Beggs.docx.pdf"
              download="David_Beggs_Leadership_Resume.pdf"
              className="inline-block px-8 py-3 bg-tertiary text-primary font-display font-bold hover:bg-tertiary/90 transition-smooth"
            >
              Download Leadership
            </a>
          </div>
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
