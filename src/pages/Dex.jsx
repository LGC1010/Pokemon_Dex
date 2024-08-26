import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../component/Dashboard";
import PokemonList from "../component/PoketmonList";
import MOCK_DATA from "../mock";
import { PoketmonContext } from "../context/poketmonContext";

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = function (pokemon) {
    const newPoketMonList = MOCK_DATA.find((list) => {
      return list.id == pokemon.id;
    });
    const overLap = selectedPokemon.some((list) => {
      return list.id == pokemon.id;
    });
    if (overLap == true) {
      alert("이미 포켓몬이 있어요");
    } else if (selectedPokemon.length < 6) {
      setSelectedPokemon([...selectedPokemon, newPoketMonList]);
    } else {
      alert("최대 6개까지 선택 가능합니다");
    }
  };

  const removePokemon = function (pokemon) {
    const removePoketMonList = selectedPokemon.filter((item) => {
      return item.id !== pokemon.id;
    });
    console.log(removePoketMonList);
    setSelectedPokemon(removePoketMonList);
  };

  const navigate = useNavigate();

  return (
    <div className="inner_box">
      <PoketmonContext.Provider value={{addPokemon, removePokemon, selectedPokemon, setSelectedPokemon, MOCK_DATA}}>
        <Dashboard/>
        <PokemonList/>
      </PoketmonContext.Provider>
      {/* <Dashboard selectedPokemon={selectedPokemon} onRemovePokemon={removePokemon}/>
      <PokemonList pokemonList={MOCK_DATA} onAddPokemon={addPokemon} /> */}
      <button className="btn_home" onClick={() => {navigate("/");}}>홈으로이동</button>
    </div>
  );
};

export default Dex;
