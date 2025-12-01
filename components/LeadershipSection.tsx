interface LeadershipArea {
  id: number;
  title: string;
  description: string;
  highlights: string[];
}

// Business impact
// Building a department
// Establishing a culture/methodology
// Business orientation beyond engineering

const leadershipAreas: LeadershipArea[] = [
  { // Building a department
    id: 1,
    title: 'Team Building & Scaling',
    description: 'Building lean, high-performing technical departments from the ground up',
    highlights: [
      'Scaled engineering org from 0 to 10+ engineers',
      'Designed a custom interview process and hiring pipeline across diverse technical disciplines',
      'Established engineering career ladder and IDP (Individual Development Plans)',
      'Strategically used contracting help to hit business deadlines within budget'
    ],
  },
  { // Establishing a management style 
    id: 2,
    title: 'My Management Style',
    description: 'Feature and initiative oriented, connecting engineers to business impact, and giving individual contributors space to do so.',
    highlights: [
      'Created a culture of ownership, personal responsibility, high performance, and freedom.',
      'Simple effective soulutions that highlight progress over perfection',
      'Established clear, open channels of communication and responsibility distribution',
      'Built culture of experimentation and continuous learning',
    ],
  },
  { // Methodology & Philosophy
    id: 3,
    title: 'Process & Methodology',
    description: 'Streamlining delivery while maintaining quality and velocity',
    highlights: [
      'Implemented lightweight scrum practices to stay organized while limiting overhead',
      'Feature driven development for smaller teams, logical domain ownership with stack expertise as we scale',
      'Created and partook in incident response and on-call processes',
      'I will never use arbitrary story points.',
    ],
  },
  { // How we orient around the business
    id: 4,
    title: 'Business Oreinted',
    description: 'Aligning technical direction with buiness needs',
    highlights: [
      'Daily collaberation as needed with weekly report generation and data translation to business direction',
      'Maintained a budget of $1.3 M including infra-costs, payroll and benefits, and hardware/auxillary expendetures',
      'Maintained auto updating dashboard tracking necessary KPI\'s ',
      'Consistently coordinated cross functionally, between marketing strategy and resource allocation, store operations, and business development to align on larger initiatives.',
    ],
  },
];

export default function LeadershipSection() {
  return (
    <section id="leadership" className="min-h-screen px-6 md:px-24 py-24 bg-secondary/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
          Leadership
        </h2>
        <p className="text-xl text-secondary max-w-3xl mb-16">
          Building teams, attracting talent, establishing processes and communication channels, and fostering a culture condusive to good work.
        <br /> 
        <br />
        <div className="text-tertiary">Over 17 M in revenue, 1.1 M shopping sessions, 50k athletes, 30 countries, on every platform.</div>
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {leadershipAreas.map((area) => (
            <div key={area.id} className="bg-primary p-8 border-2 border-secondary/10">
              <h3 className="text-2xl font-display font-bold mb-3">
                {area.title}
              </h3>
              <p className="text-secondary mb-6">
                {area.description}
              </p>
              <ul className="space-y-3">
                {area.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-tertiary mt-1">▸</span>
                    <span className="text-secondary/80">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
