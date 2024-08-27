import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';

const Home = () => {

  const navigate = useNavigate();

  const CntBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: skyblue;
  `;

  return (
    <CntBox>
      <h1 className='logo'><span className="blind">포켓몬 도감</span></h1>
      <button className='btn_dex' onClick={()=>{navigate("/Dex")}}>포켓몬 도감 시작하기</button>
    </CntBox>
  )
}

export default Home
