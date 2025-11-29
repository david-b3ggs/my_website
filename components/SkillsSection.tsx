interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['Python', 'Go', 'Java', 'C', 'C++', 'JavaScript/TypeScript'],
  },
  {
    title: 'Frontend Frameworks',
    skills: ['React', 'Next.js', 'Remix', 'Web Assembly', 'HTML/CSS', 'Tailwind CSS'],
  },
  {
    title: 'Backend Frameworks',
    skills: ['Node.js', 'Django', 'Gin', 'Springboot'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'DynamoDB'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', "Cloudflare", 'Paperspace', '(Some) GCP', "Github Actions", 'Docker'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git','Datadog', 'Claude Code', 'GitHub Actions'],
  },
  {
    title: 'Leadership',
    skills: ['Team Building', 'Agile/Scrum', 'Technical Strategy', 'Hiring', 'Mentorship'],
  },
  {
    title: 'AI Infra',
    skills: ['RAG', 'Parameter-efficient fine-tuning', 'Image Generation Tools'],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen px-6 md:px-24 py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
          Skills
        </h2>
        <p className="text-xl text-secondary max-w-3xl mb-16">
          Technical expertise spanning full-stack development, cloud architecture, and engineering leadership.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <h3 className="text-lg font-display font-bold border-b-2 border-tertiary pb-2">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-secondary hover:text-tertiary transition-smooth cursor-default"
                  >
                    {skill}
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
