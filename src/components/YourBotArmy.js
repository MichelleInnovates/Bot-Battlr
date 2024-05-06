// components/YourBotArmy.js
import React from 'react';
import styles from './YourBotArmy.module.css';

function YourBotArmy({ enlistedBots, releaseBot, dischargeBot }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <div className={styles['bot-army']}>
        {enlistedBots.map((bot) => (
          <div key={bot.id} className={styles['bot-card']}>
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            {/* Add a "Release" button to release the bot */}
            <button onClick={() => releaseBot(bot)}>Release</button>
            {/* Add a "Discharge" button to discharge the bot */}
            <button onClick={() => dischargeBot(bot)}>Discharge</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;