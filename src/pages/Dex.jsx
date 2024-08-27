import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../component/Dashboard";
import PokemonList from "../component/PoketmonList";
import MOCK_DATA from "../mock";
import styled from "styled-components";
import { PoketmonContext } from "../context/poketmonContext";

const InnerBox = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = function (pokemon) {
    const newPoketMonList = MOCK_DATA.find((list) => {
      return list.id == pokemon.id;
    });
    const overLap = selectedPokemon.some((list) => {
      return list.id == pokemon.id;
    });
    if (overLap) {
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
    setSelectedPokemon(removePoketMonList);
  };

  const navigate = useNavigate();

  return (
    <InnerBox>
      <PoketmonContext.Provider value={{addPokemon, removePokemon, selectedPokemon, setSelectedPokemon, MOCK_DATA}}>
        <Dashboard/>
        <PokemonList/>
      </PoketmonContext.Provider>
      <button className="btn_home" onClick={() => {navigate("/");}}>홈으로이동</button>
    </InnerBox>
  );
};

export default Dex;
