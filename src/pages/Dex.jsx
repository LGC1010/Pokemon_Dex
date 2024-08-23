import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Dashboard from '../component/Dashboard';
import PokemonList from '../component/PoketmonList';
import MOCK_DATA from '../mock';

const Dex = () => {

  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = function(pokemon) {
    const newPoketMonList = MOCK_DATA.find((lists) => {
      return lists.id == pokemon.id;
    });
    setSelectedPokemon([...selectedPokemon, newPoketMonList])
    console.log(newPoketMonList);
  }

  const removePokemon = function(pokemon){
    const removePoketMonList = selectedPokemon.filter((item) => {
      return item.id !== pokemon.id;
    });
    console.log(removePoketMonList);
    setSelectedPokemon(removePoketMonList)
  }

  const navigate = useNavigate();

  return (
    <div className='inner_box'>
      <Dashboard selectedPokemon={selectedPokemon} onRemovePokemon={removePokemon} />
      <PokemonList pokemonList={MOCK_DATA} onAddPokemon={addPokemon} />
      <button className='btn_home' onClick={()=>{navigate("/")}}>홈으로이동</button>
    </div>
  )
}

export default Dex