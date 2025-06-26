import {LinkBox, LinkBoxLink, LinkBoxRaised} from '@adv-re/ui/link-box'

export default function cityCard() {
const randomImageId = Math.floor(Math.random() * 1000) + 1;
const cityImage = `https://picsum.photos/320/224?random=${randomImageId}`;
  
  return (
    <>
      <LinkBox className="space-y-md" asChild>
      <div className="flex justify-end center rounded-lg flex-col pb-lg w-320 h-224 relative" style={{ backgroundImage: `url('${cityImage}')` }}>
        <h2 className="text-headline-2 text-on-main text-center">Barcelona</h2>
        <LinkBoxLink href="#" className="text-body-1 text-on-main text-center">11.740 anuncios</LinkBoxLink>
      </div>
    </LinkBox>
    </>
  )
}
