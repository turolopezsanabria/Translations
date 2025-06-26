import {Button} from '@adv-re/ui/button'
import Image from 'next/image'

export default function NewsCard() {
const randomImageId = Math.floor(Math.random() * 1000) + 1;
const newsImage = `https://picsum.photos/320/224?random=${randomImageId}`;

return (
    <>
      <div className="flex bg-surface text-on-surface text-left rounded-lg overflow-hidden shadow-sm items-left flex-col w-320 gap-sm">
        <Image
          src={newsImage}
          width={320}
          height={180}
          alt="Picture of the author"
        />
        <div className="p-xl description flex flex-col gap-md">
          <h3 className="text-headline-2">Barcelona</h3>
          <p className="text-body-2 text-neutral">24 Junio 2025</p>
          <p className="text-body-2">El Índice de Precios (IPV) correspondiente al primer trimestre de 2025, publicado hoy por el Instituto Nacional de Estadística (INE), refleja una variación trimestral del 3,5% y un incremento anual del 12,2%...</p>
          <Button intent="main" variant="outlined" className="w-min mt-md">Leer más</Button>
        </div>
      </div>
    </>
  )
}
