import { Github, Instagram, Linkedin } from 'lucide-react';
import { IconLink } from '../ui/IconLink';
import { socialLinks } from '../../data/siteContent';

const iconMap = {
  linkedin: <Linkedin className="h-5 w-5" />,
  instagram: <Instagram className="h-5 w-5" />,
  github: <Github className="h-5 w-5" />,
} as const;

export function SocialLinks() {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-900">Follow me</h3>
      <nav aria-label="Social links" className="mt-4 flex gap-3">
        {socialLinks.map((link) => (
          <IconLink
            key={link.id}
            href={link.href}
            label={link.label}
            icon={iconMap[link.id]}
          />
        ))}
      </nav>
    </div>
  );
}
