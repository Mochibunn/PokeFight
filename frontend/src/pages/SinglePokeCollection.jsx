import { useEffect, useState } from "react";
import { useParams, useNavigate,useLocation } from "react-router-dom";
import { getSinglePokemon} from "../lib/dbClient";
import { Button, Card, CardBody, Image, Progress } from "@nextui-org/react";
import Logo from "../components/Logo";
import LoadingPage from "../components/LoadingPage";
import Parse from "../components/TypeMap";
import BGImage from '../assets/images/PixelBG.png';



const SinglePokeCollection = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  const [loaded, setLoaded] = useState(false);




  useEffect(() => {
    try {
      if (!+id) throw new Error(`🔢 ID must be an integer value`);
      getSinglePokemon(id).then((data) => {
        console.log(`🟢🐰 Single pokémon fetched!`);
        setPokemon(data);
        setLoaded(true);
      });
    } catch (error) {
      console.error(`🛑🐰 Oops, that's an error!\n`, error.message);
    }
  }, [id]);

  const goBackToPokeIndex = () => {
    navigate(`/pokemon`);
  };

  // console.log(`📍Debug \n👀🐰 Single pokémon info:\n`, pokemon);

  return (
    <>
      {!loaded ? (
        <LoadingPage />
      ) : (
        <div className="relative w-full bg-no-repeat bg-cover aspect-video" style={{ backgroundImage: `url(${BGImage})` }}>
    
    <Logo/>
        <div className="flex-col items-center justify-center h-screen" style={{marginTop:'100px'}}>
          
          <div className="flex justify-center w-full p-0 mx-auto my-0">
            <div className="pr-2">
              <Card className="glassmorphism-card">
                <CardBody className="p-0">
                  <Image
                    className="aspect-square h-[300px]"
                    width="100%"
                    src={pokemon.sprite}
                  />
                </CardBody>
              </Card>
              <h1 className="p-0 pt-1">{pokemon.name.english}</h1>
            </div>
            <div className="w-1/2">
              <div>
                <Progress
                  color="primary"
                  value={pokemon.base.Attack}
                  aria-label="Attack"
                  className="w-full mb-2"
                  label="ATK:"
                  showValueLabel={true}
                  formatOptions={{ style: `decimal` }}
									maxValue={255}
                />
              </div>
              <div>
                <Progress
                  color="success"
                  value={pokemon.base.Defense}
                  aria-label="Defense"
                  className="w-full mb-2"
                  label="DEF:"
                  showValueLabel={true}
                  formatOptions={{ style: `decimal` }}
									maxValue={255}
                />
              </div>
              <div>
                <Progress
                  color="danger"
                  value={pokemon.base.HP}
                  aria-label="Health points"
                  className="w-full mb-2"
                  label="HP:"
                  showValueLabel={true}
                  formatOptions={{ style: `decimal` }}
									maxValue={255}
                />
              </div>
              <div>
                <Progress
                  color="secondary"
                  value={pokemon.base[`Sp. Attack`]}
                  aria-label="Special attack"
                  className="w-full mb-2"
                  label="SP. ATK:"
                  showValueLabel={true}
                  formatOptions={{ style: `decimal` }}
									maxValue={255}
                />
              </div>
              <div>
                <div className="flex justify-between">
                <h3>SP. DEF:</h3><h3>{pokemon.base[`Sp. Defense`]}</h3>
                </div>
                <Progress
                  color="warning"
                  value={pokemon.base[`Sp. Defense`]}
                  aria-label="Special defense"
                  className="w-full mb-2"
                />
                {/* //TODO refactor the rest of the stats */}
              </div>
              <div>
                <Progress
                  color="default"
                  value={pokemon.base.Speed}
                  aria-label="Speed"
                  className="w-full mb-5"
                  label="SPD:"
                  showValueLabel={true}
                  formatOptions={{ style: `decimal` }}
									maxValue={255}
                />
              </div>
              <h3>Types:</h3>
              <Parse array={pokemon.type} />
            </div>
          </div>
          {/* CTA buttons */}
          <div className="flex mt-8 justify-evenly">
            <Button  style={{ fontFamily: 'G1', fontSize: '1rem' , backgroundColor: '#ffcc01' }}
             onClick={goBackToPokeIndex}>Go Back</Button>
           { /* <Button  style={{ fontFamily: 'G1', fontSize: '1rem' , backgroundColor: '#ffcc01' }}>Add to Collection</Button> */}
            <Button  style={{ fontFamily: 'G1', fontSize: '1rem' , backgroundColor: '#ffcc01' }}  onClick={() => navigate(`/pokemon/pokecollection/arena/${id}`)} >Battle</Button>
          </div>
        </div>
        </div>
        
      )}
    </>
  );
};

export default SinglePokeCollection;