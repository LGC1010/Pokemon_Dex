import React from 'react'
import PoketmonCard from './PoketmonCard'

const poketmonList = ({pokemonList, onAddPokemon}) => {
  
  return (
    <div className="content">
      <ul className="poketmon_list">
        {pokemonList.map((mokaData) => {
          return <PoketmonCard key={mokaData.id} pokemonList={pokemonList} mokaData={mokaData} onAddPokemon={onAddPokemon} />;
        })}
      </ul>
    </div>
  );
};

export default poketmonList;

