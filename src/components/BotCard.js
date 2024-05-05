import React from 'react';

const BotCard = ({ bot, onEnlist, onSpecs }) => {
  const handleEnlistClick = () => {
    onEnlist(bot);
  };

  const handleSpecsClick = () => {
    onSpecs(bot);
  };

  return (
    <div className="bot-card" onClick={handleSpecsClick}>
      <h3>{bot.name}</h3>
      <img src={bot.avatar_url} alt={bot.name} />
      <button onClick={handleEnlistClick}>Enlist</button>
    </div>
  );
};

export default BotCard;