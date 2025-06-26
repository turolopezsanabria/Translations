import Image from 'next/image'
import {TextLink} from '@adv-re/ui/text-link'
// ¿este componente no está publicado en Panot?
import Link from 'next/link';

export default function RegionCard() {
const randomImageId = Math.floor(Math.random() * 1000) + 1;
const bgImage = `https://picsum.photos/320/224?random=${randomImageId}`;
  
  return (
    <div className="bg-surface rounded-lg shadow-sm overflow-hidden flex gap-xl flex-row">
       <Image
          src={bgImage}
          width={320}
          height={224}
          alt="Picture of the author"
      />
      <div className="flex flex-col text-on-surface gap-md text-left py-xl">
        <h3 className='text-headline-1'>Costas españolas</h3>
        <p className="text-body-1">¿Te gustaría vivir en el paraíso? La temperatura perfecta, playas espectaculares, pueblos con encanto... ¿se puede pedir más? Descubre la mágia de las Baleares y las Canarias.</p>
        <div className="grid grid-cols-4 gap-lg text-body-2-link">
          <ul className="text-main grid gap-sm">
            <li><Link href="/">Ibiza</Link></li>
            <li><Link href="/">El hierro</Link></li>
            <li><Link href="/">Formentera</Link></li>
            <li><Link href="/">Fuerteventura</Link></li>
          </ul>
          <ul className="text-main grid gap-sm">
            <li><Link href="/">Gran Canaria</Link></li>
            <li><Link href="/">Islas Baleares</Link></li>
            <li><Link href="/">Islas Canarias</Link></li>
            <li><Link href="/">La Gomera</Link></li>
          </ul>
          <ul className="text-main grid gap-sm">
            <li><Link href="/">La Palma</Link></li>
            <li><Link href="/">Lanzarote</Link></li>
            <li><Link href="/">Mallorca</Link></li>
            <li><Link href="/">Menorca</Link></li>
          </ul>
          <ul className="text-main grid gap-sm">
            <li><Link href="/">Tenerife</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
