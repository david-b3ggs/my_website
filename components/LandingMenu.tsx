import Link from 'next/link';

interface MenuItem {
  title: string;
  href: string;
}

const menuItems: MenuItem[] = [
  {
    title: 'Work',
    href: '/work',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Resume',
    href: '/resume',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];

export default function LandingMenu() {
  return (
    <nav className="flex flex-col items-start gap-6">
      {menuItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group text-5xl md:text-7xl font-display font-bold hover:text-tertiary transition-smooth"
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
