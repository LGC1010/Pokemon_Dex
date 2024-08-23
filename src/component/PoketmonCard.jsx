import React from "react";

const PoketmonCard = ({mokaData, onAddPokemon}) => {

  return (
    <li className="poketmon_item">
      <img src={mokaData.img_url} alt={mokaData.korean_name} />
      <div className="text_box">
        <strong>{mokaData.korean_name}</strong>
        <span>No. {mokaData.id}</span>
      </div>

      <button
        className="btn_add"
        onClick={()=>{onAddPokemon(mokaData)}}
      >
        추가
      </button>
    </li>
  );
};

export default PoketmonCard;
