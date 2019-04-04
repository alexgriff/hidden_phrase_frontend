import React from 'react';
import WordCard from './WordCard';

const MasterWordCard = ({ card }) => {
  return <WordCard player={false} card={card} identity={card.identity} />;
};
export default MasterWordCard;
