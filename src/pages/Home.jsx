import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className='content_box'>
      <h1>홈</h1>
      <button className='btn_dex' onClick={()=>{navigate("/Dex")}}>포켓몬 도감 시작하기</button>
    </div>
  )
}

export default Home
