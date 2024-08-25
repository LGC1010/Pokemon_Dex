import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import MOCK_DATA from "../mock";

const Detail = () => {
  const params = useParams();
  const Details = MOCK_DATA.find((poketmonId) => {
    return poketmonId.id === Number(params.id);
  });

  const navigator = useNavigate();

  return (
    <div className="detail_box">
      <img src={Details.img_url} alt={Details.korean_name} />
      <p>타입 :{Details.types}</p>
      <p>{Details.description}</p>
      <button onClick={()=>{navigator("/Dex")}}>뒤로가기</button>
    </div>
  );
};

export default Detail;
