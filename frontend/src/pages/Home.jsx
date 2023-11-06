/* eslint-disable react/prop-types */
//import CardSection from "../components/CardSection";
import BGImage from '../assets/images/PixelBG.png';
import {Button} from "@nextui-org/react";
import {useNavigate} from 'react-router-dom';

export default function Home() {
const navigate = useNavigate();


    return (
        <>
    <div className="w-full bg-cover bg-no-repeat relative aspect-video " style={{ backgroundImage: `url(${BGImage})`}}>
      <div className="flex flex-col gap-5 items-center justify-center h-screen">
        <Button onClick={() => navigate('/pokemons')}  className="custome-cursor glassmorphism-button text-black rounded-full p-4 mb-2 bg-opacity-60" style={{ fontFamily: 'G1', backdropFilter: 'blur(10px)' , fontSize:'3rem', width:'400px'}}>
          New Game
        </Button>
       {/*} <Button className="glassmorphism-button rounded-full p-10 mb-2" style={{ fontFamily: 'G1' , color:'black', fontSize:'3rem'}}>
          Leader Score
    </Button>*/}
        <Button onClick={() => navigate('/login')} className="glassmorphism-button text-black rounded-full p-4" style={{ fontFamily: 'G1',fontSize:'3rem', width:'400px' }}>
          Login
        </Button>
      </div>
    </div>
      </>
    );
  }