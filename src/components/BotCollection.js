// components/BotCollection.js
import React from 'react';
import styles from './BotCollection.module.css';
import { Link } from 'react-router-dom';

function BotCollection({ bots,setSelectedBot, enlistBot }) {
  return (
    <div>
      <h2>Available Bots</h2>
      <div className={styles['bot-collection']}>
        {bots.map((bot) => (
         <div className="card" onClick={() => setSelectedBot(bot)} style={{width: "18rem"}}>
         <Link to={`/Bot-Battlr/bots/${bot.id}`}><img className="card-img-top" src={bot.avatar_url} alt="Card image cap"/></Link>
        
         <div className="card-body">
           <h5 className="card-title">{bot.name}</h5>
           <p className="card-text">{bot.catchphrase}</p>
           <p className="card-text">health: {bot.health} damage: {bot.damage} armor: {bot.armor}</p>
           <button className="btn btn-primary" onClick={() => enlistBot(bot)}>enlist</button> 
         </div>
       </div>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;