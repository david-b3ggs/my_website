import ContributionHeatmap from './ContributionHeatmap';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  impact: string;
}

// Projects to highlight----------------
// POS, Online, and consolidated fulfillment / inventory management

const projects: Project[] = [
  {
    id: 1,
    title: 'Influxer Platform Architecture and Creation',
    description: 'Architected a scalable event based system to support storefront creation from 0 to 50k athletes with headless Shopify + additional sales channels.',
    technologies: ['Python', 'Go', 'MySQL', 'AWS', 'Shopify', 'Cloudflare'],
    impact: 'Scaled from 0 to 15M+ Revenue',
  },
  {
    id: 2,
    title: 'Fully Refactored Partner iOS Application',
    description: 'Redesigned legacy UI-Kit & PHP stack for an iOS app into SwiftUI and a NodeJS API deployed on AWS Lambda.',
    technologies: ['AWS', 'SwiftUI', 'Firebase', 'NodeJS'],
    impact: 'From 2.5k users to over 40k with thousands of DAU',
  },
  {
    id: 3,
    title: 'Full Stack Custom CRM',
    description: "Created a fullstack custom CRM for managing thousands of stores and millions of products, including financial tracking, AI powered product/store generation and state management, and much more",
    technologies: ['Vite', 'React', 'AWS Lambda', 'Docker', 'NodeJS', 'Go', 'Python', 'Claude'],
    impact: '3M+ Products'
  },
  {
    id: 4,
    title: 'Custom Shopify Golang SDK',
    description: 'Architected a custom, self rate limiting graphql Shopify SDK in Golang to support mass operations.',
    technologies: ['Golang', 'Shopify', 'GraphQL', 'EC2'],
    impact: '~3x store generation capacity',
  },
  {
    id: 5,
    title: 'Deployment Optimization',
    description: 'Architected a system to use Github actions and a reverse proxy for on demand horizontal scaling and reducing downtime for deployment pipelines on the core service.',
    technologies: ['AWS', 'Github Actions', 'Bash', 'Traefik'],
    impact: 'Zero downtime',
  },
  {
    id: 6,
    title: 'Custom Order Fulfillment Pipeline',
    description: 'Implemented a system for multivendor custom fulfillment coordinated from a single Shopify instance for usability.',
    technologies: ['Shopify', 'Golang', 'Python'],
    impact: 'Reduced order fulfillment time by 55%',
  },
  {
    id: 7,
    title: 'Partner Web Application',
    description: 'Designed a partner web application with parity to the iOS application to capture 25% marketshare that didn\'t have iPhones',
    technologies: ['Vite', 'Tanstack', 'Firebase', 'Typescript'],
    impact: 'Increased TAM by ~25%',
  },
  {
    id: 8,
    title: 'Aircraft Communication System Refactor',
    description: 'Built a tool to transpile communications applications for large scale aircraft from C to Java.',
    technologies: ['Python', 'Java', 'Ant', 'Gradle', 'Multicast Systems'],
    impact: 'Reduced crossplatform deployment timeline by 75%',
  },
  {
    id: 9,
    title: 'Earthquake Detection & Response System',
    description: 'Built an LSTM machine learning detection model for de-noising, detecting, and triangulating epicenters for earthquakes >= 5.0 on the Richter scale with SMS text updates.',
    technologies: ['Python', 'Java', 'Keras', 'Twilio'],
    impact: 'In Simulations, lowest false positive rate currently employed for early earthquake detection systems.',
  },
  {
    id: 10,
    title: 'Quantum Electron Simulation Parsing',
    description: 'Assisted in a PHD project to meaningfully parse and model output for asymmetric, mixed-valence molecules for spectroscopic readout of quantum-dot cellular automata to analyze quantum transistor feasibility.',
    technologies: ['Python'],
    impact: 'Research paper published to IOP Nanoscience',
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="min-h-screen px-6 md:px-24 py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
          Work
        </h2>
        <p className="text-xl text-secondary max-w-3xl mb-16">
          Impactful projects in engineering leadership, technical strategy, and product development. These works include
          projects I designed, architected, built, or implemented.
        </p>

        <ContributionHeatmap />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border-2 border-secondary/20 p-8 hover:border-tertiary transition-smooth group"
            >
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 group-hover:text-tertiary transition-smooth">
                {project.title}
              </h3>
              <p className="text-secondary mb-6">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-bold mb-2 text-secondary/60">TECHNOLOGIES</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-secondary/10 border border-secondary/20 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-secondary/10">
                <p className="text-sm font-bold text-tertiary">{project.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
