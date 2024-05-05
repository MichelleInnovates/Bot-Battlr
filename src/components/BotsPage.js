import React, { useEffect, useState, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import { useSelector, useDispatch } from "react-redux";
import { getBots, deleteBot } from "../../actions/bots";

function BotsPage() {
  const bots = useSelector((state) => state.bots);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBots());
  }, [dispatch]);

  const handleDelete = useCallback((id) => {
    dispatch(deleteBot(id));
  }, [dispatch]);

  const yourBotArmyBots = useMemo(() => {
    return bots.filter((bot) => bot.isAdded);
  }, [bots]);

  return (
    <div>
      <YourBotArmy bots={yourBotArmyBots} handleClick={handleDelete} />
      <BotCollection bots={bots} handleClick={handleDelete} />
    </div>
  );
}

BotsPage.propTypes = {
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
};

export default BotsPage;