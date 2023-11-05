/* eslint-disable react/prop-types */
//import CardSection from "../components/CardSection";
import BGImage from '../assets/images/PixelBG.png';
import {Button} from "@nextui-org/react";

export default function Home() {
    return (
        <>
    <div className="w-full bg-cover bg-no-repeat relative aspect-video hidden" style={{ backgroundImage: `url(${BGImage})`}}>
      <div className="flex flex-col items-center justify-center z-50 absolute top-0 left-0">
        <Button className="glassmorphism-button text-black rounded-full p-4 mb-2 bg-opacity-60" style={{ fontFamily: 'Thirteen Pixel Font', backdropFilter: 'blur(10px)' }}>
          New Game
        </Button>
        <Button className="glassmorphism-button text-white rounded-full p-4 mb-2" style={{ fontFamily: 'Thirteen Pixel Font' }}>
          Leader Score
        </Button>
        <Button className="glassmorphism-button text-black rounded-full p-4" style={{ fontFamily: 'Thirteen Pixel Font' }}>
          Login
        </Button>
      </div>
    </div>
    <div className='flex flex-row-reverse'>
    <Button className="glassmorphism-button text-black rounded-full p-4 mb-2 bg-opacity-60" style={{ fontFamily: 'Thirteen Pixel Font', backdropFilter: 'blur(10px)' }}>
          New Game
        </Button>
        <Button className="glassmorphism-button text-white rounded-full p-4 mb-2" style={{ fontFamily: 'Thirteen Pixel Font' }}>
          Leader Score
        </Button>
        <Button className="glassmorphism-button text-black rounded-full p-4" style={{ fontFamily: 'Thirteen Pixel Font' }}>
          Login
        </Button>
    </div>
    
    <div className='flex flex-col gap-10 '>
        <Button>
            Harun
        </Button>
        <Button>
            Harun
        </Button>
        <Button>
            Harun
        </Button>
        <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
      Button
    </Button>
    </div>
   
   
      </>
    );
  }
