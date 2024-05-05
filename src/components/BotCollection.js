import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, handleClick, handleDelete }) {
  // Your code here
  const displayCards = bots.map((bot) => {
    return (
      <BotCard
        key={bot.id}
        bot={bot}
        handleClick={handleClick}
        handleDelete={handleDelete}
      />
    );
  });

  return (
    <div className="ui four column grid">
      <div className="row">
        {displayCards}
      </div>
    </div>
  );
}

BotCollection.propTypes = {
  bots: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      health: PropTypes.number.isRequired,
      damage: PropTypes.number.isRequired,
      armor: PropTypes.number.isRequired,
      isAdded: PropTypes.bool.isRequired,
    })
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default BotCollection;