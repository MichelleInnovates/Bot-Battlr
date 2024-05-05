import React from 'react';

const BotSpecs = ({ bot, handleEnlist }) => {
    return (
        <div>
            <h2>Bot Details</h2>
            <img src={bot.avatar_url} alt={bot.name} style={{ width: '200px', height: '200px' }} />
            <h3>{bot.name}</h3>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <p>Class: {bot.bot_class}</p>
            <p>Catchphrase: {bot.catchphrase}</p>
            <button onClick={() => handleEnlist(bot)}>Enlist Bot</button>
        </div>
    );
}

export default BotSpecs;