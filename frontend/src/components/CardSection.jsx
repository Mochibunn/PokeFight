/* eslint-disable react/prop-types */
import React,{ useState, useEffect } from 'react';
import PokemonCard from "../components/PokemonCard";

export default function CardSection({ data, component,userName }) {
  const [isLoading, setIsLoading] = useState(true);

console.log(userName);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="grid grid-cols-5 gap-4">
      {isLoading
        ? Array(10).fill().map((_, index) => (
            <PokemonCard key={index} isLoading={isLoading} userName={userName} />
          ))
        : data.map((pokemon) => (
            React.createElement(component, {
              key: pokemon.id,
              id: pokemon.id,
              name: pokemon.name,
              sprite: pokemon.sprite,
              base: pokemon.base,
              userName: userName,
              ...pokemon
            })
          ))
      }
    </div>
  );
}