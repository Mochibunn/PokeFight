//import { Progress } from "@nextui-org/react";
import PokeballGif from '../assets/spinner/pokeball.gif';
import BGImage from '../assets/images/PixelBG.png';

export default function LoadingPage() { 
    return (
      <div className="flex flex-col items-center justify-center h-screen w-screen" style={{ backgroundImage: `url(${BGImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',}}>
        <img
          src={PokeballGif}
          width="200"
          height="200"
          alt="pokeball spinning"
        />
        {/* <Progress
          size="sm"
          isIndeterminate
          aria-label="Loading bar"
          className="max-w-md"
          color="warning"
        /> */}
        <h1 className="text-2xl font-semibold mt-4">loading..</h1>
      </div>
    )
  }






