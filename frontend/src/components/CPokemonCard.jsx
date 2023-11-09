/* eslint-disable react/prop-types */
import { Card, CardBody, Image, Skeleton } from "@nextui-org/react";
import { Link } from "react-router-dom";


export default function CPokemonCard({ id,sprite, name, isLoading,userName }) {
   console.log(userName)
  return (
    <>
    <Link to={`/pokemon/pokecollection/${id}?${userName}`} style={{ textDecoration: 'none' }}>
    <Card
      shadow="sm"
      isPressable
      className="p-0 flex flex-col justify-center align-items gap-5 relative glassmorphism-card m-1"
    >
      <CardBody className="overflow-visible">
        {isLoading ? (
          <Skeleton className="rounded-lg">
            <div className="h-24 rounded-lg bg-default-300"></div>
          </Skeleton>
        ) : (
          <>
            <Image
              radius="lg"
              width="100%"
              alt={name.english}
              className="w-[180px] object-fit h-[180px]"
              src={sprite}
            />
          <div
          className={`absolute text-white bg-gray-700 p-2 rounded-lg text-center font-bold transition-opacity duration-300 opacity-0 hover:opacity-100 name-overlay`}
          style={{ bottom: '10px', left: '10px' }}
        >
          {name.english}
        </div>
          </>
        )}
      </CardBody>
    </Card>
    </Link>
{/*<Link to={`/pokemon/pokecollection/${id}`} style={{ textDecoration: 'none' }}></Link>*/}
</>

  );
}
