import { useNavigate } from 'react-router-dom';
import ArenaBG from '../assets/images/pokemonarena.webp';
import { Button } from "@nextui-org/react";
import { useParams } from 'react-router-dom';

const Arena = () => {
const navigate = useNavigate();
const {id} = useParams();

  return (
    <div className='relative w-full h-screen bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${ArenaBG})` }}>
      <div className='absolute left-1/2 transform -translate-x-1/2 /2 text-4xl text-white' style={{marginTop:'190px'}}>
        Vs.
      </div>
      <div className='flex justify-around absolute bottom-10 left-1/2 transform -translate-x-1/2'>
      <Button
          onClick={() => navigate('/pokemon')}
          className="text-black rounded-full px-10 py-5"
          style={{ fontFamily: 'G1', fontSize: '2rem', backgroundColor: '#ffcc01' }}
        >
       Go Back
        </Button>
        <Button
          onClick={() => navigate('/pokemon/battle')}
          className="text-black rounded-full px-10 py-5"
          style={{ fontFamily: 'G1', fontSize: '2rem', backgroundColor: '#ffcc01' }}
        >
         Choose Opponent
        </Button>
        <Button
          onClick={() => navigate('/pokemon/battle')}
          className="text-black rounded-full px-10 py-5"
          style={{ fontFamily: 'G1', fontSize: '2rem', backgroundColor: '#ffcc01' }}
        >
         Battle
        </Button>
      </div>
    </div>
  );
};

export default Arena;
