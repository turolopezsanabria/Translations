import {Button} from '@adv-re/ui/button'
import Image from 'next/image'

export default function AgentCard({ 
  AgencyName, 
  NumberOfProperties,
  AñosInFotocasa, 
  logoImageUrl, 
  logoImageAlt,  
}: AgentCardProps){
  const defaultLogoImageUrl = logoImageUrl || `https://picsum.photos/320/224?random=${Math.floor(Math.random() * 1000) + 1}`;

return (
    <>
      <div className="bg-surface rounded-lg shadow-sm flex justify-end center items-center gap-md flex-col pb-lg w-320 h-224 relative">
         <Image
          src={defaultLogoImageUrl}
          width={48}
          height={32}
          alt="Picture of the author"
        />
        <h3 className="text-body-1 text-main text-center">{AgencyName}</h3>
        <div className="description">
          <p className="text-body-2 text-on-surface text-center">{NumberOfProperties}</p>
          <p className="text-body-2 text-on-surface text-center">{AñosInFotocasa}</p>
        </div>
        <Button className="m-md w-min">Explorar</Button>
      </div>
    </>
  )
}
