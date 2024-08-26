import React, { useContext } from 'react'
import PoketmonCard from './PoketmonCard'
import { PoketmonContext } from '../context/poketmonContext';

const poketmonList = ({MOCK_DATA}) => {

  const data = useContext(PoketmonContext)

  return (
    <div className="content">
      <ul className="poketmon_list">
        {data.MOCK_DATA.map((mokaData) => {
          return <PoketmonCard key={mokaData.id} mokaData={mokaData}/>;
        })}
      </ul>
    </div>
  );
};

export default poketmonList;

