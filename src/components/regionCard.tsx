import Image from 'next/image'
// import {TextLink} from '@adv-re/ui/text-link' ⚠️ ¿este componente no está publicado en Panot?
import Link from 'next/link';

interface RegionCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

export default function RegionCard({ 
  title, 
  description, 
  imageUrl, 
  imageAlt, 
  links 
}: RegionCardProps) {
  const defaultImageUrl = imageUrl || `https://picsum.photos/320/224?random=${Math.floor(Math.random() * 1000) + 1}`;
  
  const groupedLinks = [];
  if (links && links.length > 0) {
    for (let i = 0; i < links.length; i += Math.ceil(links.length / 4)) {
      groupedLinks.push(links.slice(i, i + Math.ceil(links.length / 4)));
    }
  }
  
  return (
    <div className="bg-surface rounded-lg shadow-sm overflow-hidden flex gap-xl flex-row">
       <Image
          src={defaultImageUrl}
          width={320}
          height={224}
          alt={imageAlt || "Region image"}
          className='min-w-320'
      />
      <div className="flex flex-col text-on-surface gap-md text-left py-xl">
        <h3 className='text-headline-1'>{title}</h3>
        <p className="text-body-1">{description}</p>
        <div className="grid grid-cols-4 gap-lg text-main text-body-2-link">
          {groupedLinks.map((group, groupIndex) => (
            <ul key={groupIndex} className="grid gap-sm">
              {group.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  )
}
