import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, handleClick, handleDelete }) {
  //your bot army code here...
  const displayCards = bots.map((bot) => {
    return (
      <BotCard key={bot.id}
        bot={bot}
        handleClick={handleClick}
        handleDelete={handleDelete}
      />
    );
  });

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          <div className="column">
            Your Bot Army
          </div>
          {displayCards}
        </div>
      </div>
    </div>
  );
}

YourBotArmy.propTypes = {
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

export default YourBotArmy;