import {Button} from '@adv-re/ui/button'
import CityCard from '../components/cityCard';
import RegionCard from '../components/regionCard';
import AgentCard from '../components/agentCard';
import NewsCard from '../components/newsCard';
import Link from 'next/link';
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className="flex gap-3xl flex-col items-center flex-nowrap">
          <header className="justify-between px-xl flex items-center bg-main w-full">
              <a className="gap-md flex items-center" href="#">
                <Image
                    src="https://frtassets.fotocasa.es/statics/img/fotocasa_anniversary_logo.svg"
                    width={32}
                    height={32}
                    alt="Picture of the author"
                />
                <Image
                    src="https://frtassets.fotocasa.es/statics/img/logo.svg"
                    width={124}
                    height={24}
                    alt="Picture of the author"
                />
              </a>
              <div className="gap-md p-lg flex items-center bg-main">
                <Button variant="outlined" intent="surface">Publica tu anuncio</Button>
                <Button variant="outlined" intent="surface">English</Button>
              </div>
           </header>
           <div className="items-start mt-3xl">
            <h2 className="text-display-3 pb-xl">Los más buscados</h2>
            <div className="justify-items-start grid grid-cols-3 gap-lg">
              <CityCard />
              <CityCard />
              <CityCard />
              <CityCard />
              <CityCard />
              <CityCard />
            </div> 
           </div>
           <div className="bg-surface w-full mt-3xl">
            <div className="p-3xl max-w-4xl m-auto">
              <h2 className="text-display-3 pb-xl">489.714 propiedades en España</h2>
              <div className="grid grid-rows-4 gap-xl">
                <RegionCard />
                <RegionCard />
                <RegionCard />
                <RegionCard />
              </div> 
           </div>
           </div>
           <div>
            <h2 className="text-display-3 pb-xl mt-3xl">Agentes y expertos inmobiliarios en España</h2>
            <div className="flex flex-col gap-2xl">
              <div>
                <h2 className="text-headline-2">Alicante</h2>
                <Link href="/" className="text-main">2.177 Agentes en Alicante</Link>
                <div className="grid grid-cols-3 gap-lg mt-lg ">
                  <AgentCard />
                  <AgentCard />
                  <AgentCard />
                </div> 
              </div>
              <div>
                <h2 className="text-headline-2">Islas Baleares</h2>
                <Link href="/" className="text-main">1.309 Agentes en Islas Baleares</Link>
                <div className="grid grid-cols-3 gap-lg mt-lg ">
                  <AgentCard />
                  <AgentCard />
                  <AgentCard />
                </div> 
              </div>
              <div>
                <h2 className="text-headline-2">Málaga</h2>
                <Link href="/" className="text-main">2.309 Agentes en Málaga</Link>
                <div className="grid grid-cols-3 gap-lg mt-lg ">
                  <AgentCard />
                  <AgentCard />
                  <AgentCard />
                </div> 
              </div>
            </div>
           </div>
           <div>
            <h2 className="text-display-3 pb-xl mt-3xl">Noticias del Mercado Inmobiliario Español</h2>
            <div className="flex flex-col gap-2xl">
                <div className="grid grid-cols-3 gap-lg mt-lg ">
                  <NewsCard/>
                  <NewsCard/>
                  <NewsCard/>
                </div>
            </div>
           </div>
           <footer className="justify-between mt-3xl p-xl flex items-center bg-main w-full">
              <a className="gap-md flex items-center" href="#">
                <img className="w-auto h-32" src="https://frtassets.fotocasa.es/statics/img/fotocasa_anniversary_logo.svg" alt="Fotocasa Imagotype"/>
                <img className="w-auto h-24" src="https://frtassets.fotocasa.es/statics/img/logo.svg" alt="Logo de Fotocasa"/>
              </a>
           </footer>
      </div>
    </div>
  );
}
