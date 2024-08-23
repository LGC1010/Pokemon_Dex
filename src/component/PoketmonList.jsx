import React from 'react'
import PoketmonCard from './PoketmonCard'

const poketmonList = ({pokemonList, onAddPokemon}) => {

  const handleAdd = pokemonList.find((id)=>{
      return pokemonList.id == id;
  })
  // console.log(pokemonList)

  
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

