/* eslint-disable react/prop-types */
//import CardSection from "../components/CardSection";
import BGImage from '../assets/images/PixelBG.png';
import {Button} from "@nextui-org/react";
import {useNavigate} from 'react-router-dom';
import { useState, useEffect} from 'react';
import IntroVideo from '../components/Video'
import Logo from '../components/Logo';

export default function Home() {
  const [loading, setLoading] = useState(true);
const navigate = useNavigate();

const handleSkipVideo = () => {
  navigate('/');
};

useEffect(() => {
  setTimeout(() => {
    setLoading(false); 
  }, 1000); 
}, []);


    return (
        <>
          {loading ? ( 
           <div className="intro-container">
           <IntroVideo />
           <Button onClick={handleSkipVideo} className="skip-button">
             Skip Intro
           </Button>
         </div>
      ) : ( 
        
    <div className="w-full bg-cover bg-no-repeat relative aspect-video " style={{ backgroundImage: `url(${BGImage})`}}>
      <Logo/>
      <div className="flex flex-col gap-5 items-center justify-center h-screen">
      
        <Button onClick={() => navigate('/pokemon')}  className="text-black rounded-full p-10"
                  style={{ fontFamily: 'G1', fontSize: '2rem' , backgroundColor: '#ffcc01' }}>
          New Game
        </Button>
       {/*} <Button className="glassmorphism-button rounded-full p-10 mb-2" style={{ fontFamily: 'G1' , color:'black', fontSize:'3rem'}}>
          Leader Score
    </Button>*/}
        <Button onClick={() => navigate('/login')} className="text-black rounded-full p-10"
                  style={{ fontFamily: 'G1', fontSize: '2rem' , backgroundColor: '#ffcc01' }}>
          Login
        </Button>
      </div>
    </div> ) }
      </>
    );
  }