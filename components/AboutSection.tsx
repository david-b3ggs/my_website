export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen px-6 md:px-24 py-24 bg-secondary/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
          About
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            <p className="text-xl text-secondary leading-relaxed">
              Engineering leader with 6+ years of experience building products,
              scaling teams, and driving technical strategy. Passionate about creating
              engineering cultures where people do their best work.
            </p>
            <p className="text-xl text-secondary leading-relaxed">
              In college, I interned building internal logistics tooling at JB Hunt 
              and developed email processing infrastructure at CBORD. After graduation, I spent a year 
              working on military communication systems for large-scale mission aircraft. My security 
              clearance has since expired.
            </p>
            <p className="text-xl text-secondary leading-relaxed">
              I then joined Influxer as employee #1 and founding engineer, helping build 
              an e-commerce platform with dynamically generated storefronts, 
              a custom fulfillment pipeline, a custom CRM, iOS and web applications, and a
              headless Shopify storefront supporting over 3M products.
            </p>
            <p className="text-xl text-secondary leading-relaxed">
              I have an eclectic technical background, but my passion lies in 
              creatively engineering solutions (I love a eureka moment).
              I now work primarily at a managerial level in mid to large-sized organizations—being a capable leader is something 
              I've been passionate about for years. Technically, I'm a senior full-stack engineer and software 
              architect with much still to learn.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-display font-bold mb-4">Philosophy</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-tertiary mt-1">▸</span>
                  <span className="text-secondary">
                    <strong>People First:</strong> Great teams create great products 
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-tertiary mt-1">▸</span>
                  <span className="text-secondary">
                    <strong>Freedom and Excellence:</strong> Space and autonomy with accountability and ownership
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-tertiary mt-1">▸</span>
                  <span className="text-secondary">
                    <strong>Iterative Approach:</strong> Ship fast, learn faster, improve continuously
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-tertiary mt-1">▸</span>
                  <span className="text-secondary">
                    <strong>Transparent Communication:</strong> Context enables better decisions
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-display font-bold mb-4">Experience</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-tertiary pl-4">
                  <p className="font-bold">Chief Technology Officer</p>
                  <p className="text-sm text-secondary/60">Current Role</p>
                </div>
                <div className="border-l-4 border-secondary/20 pl-4">
                  <p className="font-bold">Head of Engineering</p>
                  <p className="text-sm text-secondary/60">Previous Role</p>
                </div>
                <div className="border-l-4 border-secondary/20 pl-4">
                  <p className="font-bold">Software Engineer</p>
                  <p className="text-sm text-secondary/60">Earlier Role</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
