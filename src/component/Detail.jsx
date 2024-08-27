import React from "react";
import {useNavigate, useSearchParams } from "react-router-dom";
import MOCK_DATA from "../mock";
import styled from "styled-components";

const Detail = () => {
  const navigator = useNavigate();
  // querystring은 searchParams를 사용
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id'); 
  console.log(id)

  const DetailBox = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: skyblue;
  `;

  const Details = MOCK_DATA.find((poketmonId) => {
    return poketmonId.id == id;
  });

  return (
    <DetailBox>
      <div className="content_box">
        <img src={Details.img_url} alt={Details.korean_name} />
        <p>타입 : {Details.types}</p>
        <p>{Details.description}</p>
        <button className="btn_back" onClick={()=>{navigator("/Dex")}}>뒤로가기</button>
      </div>
    </DetailBox>
  );
};

export default Detail;
