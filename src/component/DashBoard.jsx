import React, { useContext } from "react";
import MOCK_DATA from "../mock";
import { PoketmonContext } from "../context/poketmonContext";

const Dashboard = ({ selectedPokemon, onRemovePokemon }) => {

  const data = useContext(PoketmonContext);
  console.log(data)

  return (
    <div className="content">
      <h1 className="title">나만의 포켓몬</h1>
      {data.selectedPokemon.length == 0 ? (
        <p>선택된 포켓몬이 없습니다</p>
      ) : (
        <ul className="dash_poketmon_list">
          {data.selectedPokemon.map((list) => {
            return (
              <li key={list.id} className="dash_poketmon_item">
                <img src={list.img_url} alt={list.korean_name} />
                <div className="text_box">
                  <strong>{list.korean_name}</strong>
                  <span>No. {list.id}</span>
                </div>

                <button className="btn_del" onClick={()=>{data.onRemovePokemon(list)}}>삭제</button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
