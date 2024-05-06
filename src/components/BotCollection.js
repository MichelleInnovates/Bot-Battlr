// components/BotCollection.js
import React from 'react';
import styles from './BotCollection.module.css';

function BotCollection({ bots, enlistBot }) {
  return (
    <div>
      <h2>Available Bots</h2>
      <div className={styles['bot-collection']}>
        {bots.map((bot) => (
          <div key={bot.id} className={styles['bot-card']}>
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            {/* Add an "Enlist" button to enlist the bot */}
            <button onClick={() => enlistBot(bot)}>Enlist</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;