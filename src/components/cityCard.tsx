import {LinkBox, LinkBoxLink, LinkBoxRaised} from '@adv-re/ui/link-box'

export default function cityCard({ 
  cityName, 
  NumberOfAnuncios,
  cityImageUrl, 
  cityImageAlt,  
}: AgentCardProps){
  const defaultCityImageUrl = cityImageUrl || `https://picsum.photos/320/224?random=${Math.floor(Math.random() * 1000) + 1}`;

return (
    <>
      <LinkBox className="space-y-md" asChild>
        <div className="flex justify-end center rounded-lg flex-col pb-lg w-320 h-224 relative" style={{ backgroundImage: `url('${defaultCityImageUrl}')` }}>
          <h2 className="text-headline-2 text-on-main text-center">{cityName}</h2>
          <LinkBoxLink href="#" className="text-body-1 text-on-main text-center">{NumberOfAnuncios}</LinkBoxLink>
        </div>
      </LinkBox>
    </>
  )
}
