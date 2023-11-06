/* eslint-disable react/prop-types */
import { Card, CardBody, Image, Skeleton } from "@nextui-org/react";

export default function PokemonCard({ sprite, name, isLoading }) {
  return (
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
              shadow="sm"
              radius="lg"
              width="100%"
              alt={name.english}
              className="w-full object-fit h-[210px]"
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
  );
}
