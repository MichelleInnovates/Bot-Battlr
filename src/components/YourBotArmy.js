// components/YourBotArmy.js
import React from 'react';
import styles from './YourBotArmy.module.css';

function YourBotArmy({ enlistedBots, releaseBot, dischargeBot }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <div className={styles['bot-army']}>
        {enlistedBots.map((bot) => (
          <div key={bot.id} className="card" style={{width: "18rem"}}>
          <img className="card-img-top" src={bot.avatar_url} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">{bot.name}</h5>
            <p className="card-text">{bot.catchphrase}</p>
            <p className="card-text">health: {bot.health} </p>
            <p className="card-text"> damage: {bot.damage} </p>
            <p className="card-text"> armor: {bot.armor}</p>
            <button className="btn btn-secondary me-2" onClick={() => releaseBot(bot.id)}>release</button> 
            <button className="btn btn-danger" onClick={() => dischargeBot(bot.id)}>discharge</button> 
          </div>
          </div>
        
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
