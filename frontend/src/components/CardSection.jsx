/* eslint-disable react/prop-types */
import { useState, useEffect,createElement } from 'react';
import PokemonCard from "../components/PokemonCard";


export default function CardSection({ data, component}) {

  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="grid grid-cols-5 gap-4">
      {isLoading
        ? Array(10).fill().map((_, index) => (
            <PokemonCard key={index} isLoading={isLoading} />
          ))
        : data.map((pokemon) => (
            createElement(component, {
              key: pokemon.id,
              id: pokemon.id,
              name: pokemon.name,
              sprite: pokemon.sprite,
              base: pokemon.base,
              ...pokemon
            })
          ))
      }
    </div>
  );
}