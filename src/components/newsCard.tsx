import {Button} from '@adv-re/ui/button'
import Image from 'next/image'

interface NewsCardProps {
  title: string;
  date: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
}

export default function NewsCard({ 
  title, 
  date,
  description, 
  imageUrl,  
}: NewsCardProps){
  const defaultImageUrl = imageUrl || `https://picsum.photos/320/224?random=${Math.floor(Math.random() * 1000) + 1}`;

return (
    <>
      <div className="flex bg-surface text-on-surface text-left rounded-lg overflow-hidden shadow-sm items-left flex-col w-320 gap-sm">
        <Image
          src={defaultImageUrl}
          width={320}
          height={180}
          alt="Picture of the author"
        />
        <div className="p-xl description flex flex-col gap-md">
          <h3 className="text-headline-2">{title}</h3>
          <p className="text-body-2 text-neutral">{date}</p>
          <p className="text-body-2">{description}</p>
          <Button intent="main" variant="outlined" className="w-min mt-md">Leer más</Button>
        </div>
      </div>
    </>
  )
}
