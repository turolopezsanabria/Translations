import {Button} from '@adv-re/ui/button'
import {Skeleton} from '@adv-re/ui/skeleton'
import {Badge} from '@adv-re/ui/badge'

export default function Home() {
  return (
    <div>
      <div className="p-lg flex gap-2xl flex-col items-center flex-nowrap">
        {/* Colour */}
        <div className="bg-main text-on-main text-center text-display-3 font-regular">
          Texto
        </div>
        {/* Padding */}
        <div className="bg-main text-on-main text-center text-display-3 font-regular p-lg">
          Texto
        </div>
        {/* Border radius */}
        <div className="bg-main text-on-main text-center text-display-3 font-regular p-lg rounded-md">
          Texto
        </div>
        {/* Min width */}
        <div className="min-w-240 bg-main text-on-main text-center text-display-3 font-regular p-lg rounded-md">
          Texto
        </div>
        {/* Min height */}
        <div className="min-w-240 min-h-160 bg-main text-on-main text-center text-display-3 font-regular p-lg rounded-md">
          Texto
        </div>
        {/* Flex */}
        <div className="min-w-240 min-h-160 flex items-center justify-center bg-main text-on-main text-center text-display-3 font-regular p-lg rounded-md">
          Texto
        </div>
        {/* Shadow */}
        <div className="min-w-240 min-h-160 flex items-center justify-center bg-main text-on-main text-center text-display-3 font-regular p-lg rounded-md shadow-md">
          Texto
        </div>
        {/* Opacity */}
        <div className="min-w-240 min-h-160 flex items-center justify-center bg-main/dim-4 text-on-main text-center text-display-3 font-regular p-lg rounded-md shadow-md">
          Texto
        </div>
        {/* New colour */}
        <div className="min-w-240 min-h-160 flex items-center justify-center bg-surface text-main text-center text-display-3 font-regular p-lg rounded-md shadow-md">
          Texto
        </div>
        {/* Skelleton */}
        <div className="min-w-240 min-h-160 flex items-center justify-center bg-surface text-main text-center p-lg rounded-md shadow-md">
          <Skeleton className="h-32 w-80" />
        </div>
        {/* Button */}
        <div className="min-w-240 min-h-160 flex items-center justify-center bg-surface text-main text-center p-lg rounded-md shadow-md">
          <Button>Crear alerta</Button>  
        </div>
        {/* Button intent and variant*/}
        <div className="min-w-240 min-h-160 flex items-center justify-center bg-surface text-main text-center p-lg rounded-md shadow-md">
          <Button intent="danger" variant="outlined">Delete account</Button>  
        </div>
        {/* Badge */}
        <div className="min-w-240 min-h-160 flex items-center justify-center bg-surface text-main text-center p-lg rounded-md shadow-md">
          <Badge count={84}>
            <Button variant="outlined">Mis alertas</Button>
          </Badge>
        </div>
        {/*  */}
      </div>
      
    </div>
  );
}
