import { useContext } from "react";
import { PoketmonContext } from "../context/poketmonContext";
import styled from "styled-components";

const ConBox = styled.div`
    margin: 30px 0;
    padding: 40px;
    box-sizing: border-box;
    background: skyblue;
    border-radius: 10px;
`
const Dashboard = () => {

  const data = useContext(PoketmonContext);

  return (
    <ConBox>
      <h1 className="title">나만의 포켓몬</h1>
      {data.selectedPokemon.length == 0 ? (
        <p className="no_data">선택된 포켓몬이 없습니다</p>
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
                <button className="btn_del" onClick={()=>{data.removePokemon(list)}}>삭제</button>
              </li>
            );
          })}
        </ul>
      )}
    </ConBox>
  );
};

export default Dashboard;
