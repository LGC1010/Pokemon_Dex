import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PoketmonContext } from "../context/poketmonContext";

const PoketmonCard = ({ mokaData, addPokemon}) => {

  const data = useContext(PoketmonContext);

  console.log(data)

  return (
    <li className="poketmon_item">
      <Link to={`${mokaData.id}`}>
        <img src={mokaData.img_url} alt={mokaData.korean_name} />
        <div className="text_box">
          <strong>{mokaData.korean_name}</strong>
          <span>No. {mokaData.id}</span>
        </div>
      </Link>
      <button className="btn_add" onClick={() => {data.addPokemon(mokaData);}}>추가</button>
    </li>
  );
};

export default PoketmonCard;
