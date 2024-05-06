// components/BotSpecs.js
import React from 'react';
import { Link } from 'react-router-dom';

function BotSpecs({ bot, goBackToList, enlistBot }) {
  return (
    <div>
      <h2>Bot Details</h2>
      <div className="bot-card">
        <img src={bot.avatar_url} alt={bot.name} />
        <h3>{bot.name}</h3>
        <p>Health: {bot.health}</p>
        <p>Damage: {bot.damage}</p>
        <p>Armor: {bot.armor}</p>
        <Link to = "/">
        <button onClick={goBackToList}>Go Back</button></Link>
        
      </div>
    </div>
  );
}

export default BotSpecs;