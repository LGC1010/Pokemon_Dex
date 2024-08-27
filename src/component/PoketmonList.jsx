import React, { useContext } from 'react'
import PoketmonCard from './PoketmonCard'
import { PoketmonContext } from '../context/poketmonContext';
import styled from 'styled-components';

const ConBox = styled.div`
    margin: 30px 0;
    padding: 40px;
    box-sizing: border-box;
    background: skyblue;
    border-radius: 10px;

`
const poketmonList = () => {

  const data = useContext(PoketmonContext)

  return (
    <ConBox>
      <ul className="poketmon_list">
        {data.MOCK_DATA.map((mokaData) => {
          return <PoketmonCard key={mokaData.id} mokaData={mokaData}/>;
        })}
      </ul>
    </ConBox>
  );
};

export default poketmonList;

