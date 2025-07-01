'use client'
import {Button} from '@adv-re/ui/button'
import CityCard from '../components/cityCard';
import RegionCard from '../components/regionCard';
import AgentCard from '../components/agentCard';
import NewsCard from '../components/newsCard';
import Link from 'next/link';
import Image from 'next/image';
// No había podido usar este componente, Andrés me ayudó añadiendo 'use client'
import {
  Select,
  SelectLabel,
  SelectItem,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue
} from '@adv-re/ui/select'

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
                <Button  className="min-h-44 min-w-min" variant="outlined" intent="surface">Publica tu anuncio</Button>
                <Select>
                <SelectTrigger className="w-[190px]">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select your language</SelectLabel>
                    <SelectItem value="catala">Català</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="francais">Français</SelectItem>
                    <SelectItem value="deutch">Deutch</SelectItem>
                    <SelectItem value="italiano">Italiano</SelectItem>
                    <SelectItem value="portuges">Portugês</SelectItem>
                    <SelectItem value="dansk">Dansk</SelectItem>
                    <SelectItem value="suomi">Suomi</SelectItem>
                    <SelectItem value="norsk">Norsk</SelectItem>
                    <SelectItem value="nederlands">Nederlands</SelectItem>
                    <SelectItem value="polski">Polski</SelectItem>
                    <SelectItem value="romana">Română</SelectItem>
                    <SelectItem value="pусский">Русский</SelectItem>
                    <SelectItem value="svenska">Svenska</SelectItem>
                    <SelectItem value="Ελληνικά">Ελληνικά</SelectItem>
                    <SelectItem value="中文">中文</SelectItem>
                    <SelectItem value="Українська">Українська</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              </div>
           </header>
           <div className="bg-surface w-full">
            <div className='max-w-560 text-center min-h-224 flex justify-center flex-col'>
              <h1 className='text-display-1'>Viviendas en venta en España</h1>
              <p className="text-body-1">Busca entre las 489.684 propiedades en venta publicadas en fotocasa, el portal inmobiliario más grande de España.</p>
            </div>
           </div>
           <div className="items-start mt-3xl">
            <h2 className="text-display-3 pb-xl">Los más buscados</h2>
            <div className="justify-items-start grid grid-cols-3 gap-lg">
              <CityCard
                cityName="Valencia"
                NumberOfAnuncios="3.726"
              />
              <CityCard
                cityName="Málaga"
                NumberOfAnuncios="4.330"
              />
              <CityCard
                cityName="Sevilla"
                NumberOfAnuncios="2.433"
              />
              <CityCard
                cityName="Granada"
                NumberOfAnuncios="4.210"
              />
              <CityCard
                cityName="Ibiza"
                NumberOfAnuncios="42.665"
              />
              <CityCard
                cityName="Alciante"
                NumberOfAnuncios="50.065"
              />
            </div> 
           </div>
           <div className="bg-surface w-full mt-3xl">
            <div className="p-3xl max-w-4xl m-auto">
              <h2 className="text-display-3 pb-xl">489.714 propiedades en España</h2>
              <div className="grid grid-rows-4 gap-xl">
                <RegionCard 
                  title="Islas españolas"
                  description="¿Te gustaría vivir en el paraíso? La temperatura perfecta, playas espectaculares, pueblos con encanto... ¿se puede pedir más? Descubre la mágia de las Baleares y las Canarias."
                  links={[
                    { label: "Ibiza", href: "#" },
                    { label: "El hierro", href: "#" },
                    { label: "Formentera", href: "#" },
                    { label: "Fuerteventura", href: "#" },
                    { label: "Gran Canaria", href: "#" },
                    { label: "Islas Baleares", href: "#" },
                    { label: "Islas Canarias", href: "#" },
                    { label: "La Gomera", href: "#" },
                    { label: "Tenerife", href: "#" }
                  ]}
                />
                <RegionCard 
                  title="Costas españolas"
                  description="Imagina despertarte todos los días mirando al mar. Deja de soñar y cambia ya de vistas. Encuentra una casa de ensueño frente al mar en la costa española, ¡no te arrepentirás!."
                  links={[
                    { label: "Costa Blanca", href: "#" },
                    { label: "Costa Brava", href: "#" },
                    { label: "Costa Cálida", href: "#" },
                    { label: "Costa de Almería", href: "#" },
                    { label: "Costa de Cantabria", href: "#" },
                    { label: "Costa de Garraf", href: "#" },
                    { label: "Costa de la Luz", href: "#" },
                    { label: "Costa de la Muerte", href: "#" },
                    { label: "Costa del Azahar", href: "#" },
                    { label: "Costa del Maresme", href: "#" },
                    { label: "Costa del Sol", href: "#" },
                    { label: "Costa Dorada", href: "#" },
                    { label: "Costa Tropical", href: "#" },
                    { label: "Costa Vasca", href: "#" }
                  ]}
                />
                <RegionCard 
                  title="CCAA españolas"
                  description="Contrastes, pueblos pintorescos, gastronomía y vistas maravillosas. Cada región tiene sus encantos y tesoros que seguro te seducirán."
                  links={[
                    { label: "Andalucía", href: "#" },
                    { label: "Aragón", href: "#" },
                    { label: "Asturias", href: "#" },
                    { label: "Baleares", href: "#" },
                    { label: "Cantabria", href: "#" },
                    { label: "Castilla y León", href: "#" },
                    { label: "Castilla-La Mancha", href: "#" },
                    { label: "Catalunya", href: "#" },
                    { label: "Comunidad Valenciana", href: "#" },
                    { label: "Extremadura", href: "#" },
                    { label: "Galicia", href: "#" },
                    { label: "Islas Canarias", href: "#" },
                    { label: "La Rioja", href: "#" },
                    { label: "Madrid", href: "#" },
                    { label: "Murcia", href: "#" },
                    { label: "Navarra", href: "#" },
                    { label: "País Vasco", href: "#" }
                  ]}
                />
                <RegionCard 
                  title="Provincias españolas"
                  description="Las 50 provincias españolas esconden miles de fiestas y tradiciones espectaculares, ¡conócelas todas! Explora los mejores lugares para encontrar el mejor hogar: casas rústicas, modernos apartamentos, villas de lujo..."
                  links={[
                    { label: "Alicante", href: "#" },
                    { label: "Almería", href: "#" },
                    { label: "Asturias", href: "#" },
                    { label: "Cadiz", href: "#" },
                    { label: "Cantabria", href: "#" },
                    { label: "Castellón", href: "#" },
                    { label: "Girona", href: "#" },
                    { label: "Granada", href: "#" },
                    { label: "Islas Baleares", href: "#" },
                    { label: "Las Palmas", href: "#" },
                    { label: "Madrid", href: "#" },
                    { label: "Málaga", href: "#" },
                    { label: "Murcia", href: "#" },
                    { label: "Santa Cruz de Tenerife", href: "#" },
                    { label: "Sevilla", href: "#" },
                    { label: "Tarragona", href: "#" },
                    { label: "Toledo", href: "#" },
                    { label: "Valencia", href: "#" },
                    { label: "Vizcaya", href: "#" }
                  ]}
                />
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
                  <AgentCard
                    AgencyName="Engel & Völkers Benidorm"
                    NumberOfProperties="65 inmuebles en Fotocasa"
                    AñosInFotocasa="11 años en Fotocasa" 
                  />
                  <AgentCard
                    AgencyName="Fastighetsbyran Torrevieja"
                    NumberOfProperties="21 inmuebles en Fotocasa"
                    AñosInFotocasa="7 años en Fotocasa" 
                  />
                  <AgentCard
                    AgencyName="Inmobiliaria CGI International"
                    NumberOfProperties="92 inmuebles en Fotocasa"
                    AñosInFotocasa="13 años en Fotocasa" 
                  />
                </div> 
              </div>
              <div>
                <h2 className="text-headline-2">Islas Baleares</h2>
                <Link href="/" className="text-main">1.309 Agentes en Islas Baleares</Link>
                <div className="grid grid-cols-3 gap-lg mt-lg ">
                  <AgentCard
                    AgencyName="Kensington Finest Properties International"
                    NumberOfProperties="27 inmuebles en Fotocasa"
                    AñosInFotocasa="2 años en Fotocasa" 
                  />
                  <AgentCard
                    AgencyName="Berkshire Hathaway HomeServices"
                    NumberOfProperties="33 inmuebles en Fotocasa"
                    AñosInFotocasa="25 años en Fotocasa" 
                  />
                  <AgentCard
                    AgencyName="Sandberg Estates"
                    NumberOfProperties="66 inmuebles en Fotocasa"
                    AñosInFotocasa="7 años en Fotocasa" 
                  />
                </div> 
              </div>
              <div>
                <h2 className="text-headline-2">Málaga</h2>
                <Link href="/" className="text-main">2.309 Agentes en Málaga</Link>
                <div className="grid grid-cols-3 gap-lg mt-lg ">
                  <AgentCard
                    AgencyName="Garú Estepona"
                    NumberOfProperties="44 inmuebles en Fotocasa"
                    AñosInFotocasa="16 años en Fotocasa" 
                  />
                  <AgentCard
                    AgencyName="Engel & Völkers Estepona"
                    NumberOfProperties="85 inmuebles en Fotocasa"
                    AñosInFotocasa="7 años en Fotocasa" 
                  />
                  <AgentCard
                    AgencyName="Asset Lighthouse"
                    NumberOfProperties="41 inmuebles en Fotocasa"
                    AñosInFotocasa="5 años en Fotocasa" 
                  />
                </div> 
              </div>
            </div>
           </div>
           <div>
            <h2 className="text-display-3 pb-xl mt-3xl">Noticias del Mercado Inmobiliario Español</h2>
            <div className="flex flex-col gap-2xl">
                <div className="grid grid-cols-3 gap-lg mt-lg ">
                  <NewsCard
                    title="Un tercio del gasto de los hogares se dedica a la vivienda y sus suministros: 11.030 euros anuales"
                    date="26 Junio 2025"
                    description="La vivienda acaparó un tercio del gasto récord de los hogares en 2024, que alcanzó los 34.044 euros, lo que supone un incremento del 4,4% respecto a 2023, según la 'Encuesta de Presupuestos Familiares' publicada por el Instituto Nacional de Estadística (INE). La vivienda, agua, electricidad, gas y otros combustibles incrementaron el gasto en un 6,1% hasta suponer 32,4% de todo el gasto, 11.029 euros anuales en total. Los hogares más humildes dedicaron más del 40% de su presupuesto a vivienda, mientras que los de más capacidad adquisitiva, se queda en el 28,1 %. Baleares, Madrid y País Vasco fueron las CCAA donde más se dedicó al pago de la vivienda..."
                    />
                  <NewsCard
                    title="Ana de Miguel sustituye a Diego Lozano al frente de la Empresa Municipal de Vivienda de Madrid"
                    date="26 Junio 2025"
                    description="La hasta ahora directora general de Relaciones Institucionales y Proyectos Estratégicos del Ayuntamiento de Madrid, Ana de Miguel, ha sido designada nueva CEO de la Empresa Municipal de la Vivienda y Suelo (EMVS), en sustitución de Diego Lozano, quien ha sido nombrado jefe de Gabinete del alcalde de Madrid, José Luis Martínez-Almeida. El nombramiento de De Miguel ha sido aprobado en la última Junta de Gobierno municipal, según confirman fuentes a fotocasa/news..."
                    />
                  <NewsCard
                    title="Un tercio del gasto de los hogares se dedica a la vivienda y sus suministros: 11.030 euros anuales"
                    date="26 Junio 2025"
                    description="En mayo de 2025, el precio medio del metro cuadrado en Cartagena se situó en 1.452 euros, según datos de fotocasa. Esto supone:"
                    />
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
