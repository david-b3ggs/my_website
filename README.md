# Engineering Manager / CTO Portfolio

A modern, minimalist portfolio website showcasing engineering leadership, technical projects, and professional experience. Built with Next.js and deployed on AWS Amplify.

## Features

- **Responsive Design**: Mobile-first design that looks great on all devices
- **Modern Tech Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Sections**:
  - Hero landing with professional headline
  - Work: Engineering projects showcase
  - Leadership: Management experience and team building
  - Skills: Technical expertise and tools
  - About: Professional background and philosophy
  - Resume: Downloadable PDF with quick stats
  - Contact: Social links and email

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Run development server with hot reloading
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
# Create production build
npm run build

# Serve production build locally
npx serve@latest out
```

## Customization

### Update Content

All placeholder content can be customized in the component files:

- `components/Hero.tsx` - Main headline and tagline
- `components/WorkSection.tsx` - Engineering projects
- `components/LeadershipSection.tsx` - Leadership experience
- `components/SkillsSection.tsx` - Technical skills and tools
- `components/AboutSection.tsx` - Professional bio and philosophy
- `components/ResumeSection.tsx` - Resume stats and download
- `app/page.tsx` - Contact information and links
- `components/Footer.tsx` - Footer links

### Add Resume PDF

Place your resume file at `public/resume.pdf` for the download link to work.

### Update Colors

Edit the color palette in `tailwind.config.ts` and `app/globals.css`:

- `background`: #ece7e1 (cream/beige)
- `foreground`: #1a1818 (dark text)
- `accent`: #0099ff (blue for links/highlights)

### Update Social Links

Update your social media links in:
- `app/page.tsx` - Contact section
- `components/Footer.tsx` - Footer section

## Deployment to AWS Amplify

1. Push your code to GitHub
2. Log in to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
3. Click "New app" → "Host web app"
4. Connect your GitHub repository
5. Amplify will automatically detect the `amplify.yml` configuration
6. Click "Save and deploy"

The site will automatically rebuild and deploy on every push to your main branch.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **Fonts**: Inter, Montserrat (Google Fonts)
- **Deployment**: AWS Amplify (static export)

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with fonts
│   ├── page.tsx         # Home page with all sections
│   └── globals.css      # Global styles and Tailwind
├── components/
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── WorkSection.tsx
│   ├── LeadershipSection.tsx
│   ├── SkillsSection.tsx
│   ├── AboutSection.tsx
│   ├── ResumeSection.tsx
│   └── Footer.tsx
├── public/              # Static assets (add resume.pdf here)
├── amplify.yml          # AWS Amplify build configuration
├── next.config.js       # Next.js configuration
└── tailwind.config.ts   # Tailwind CSS configuration
```

## License

ISC
