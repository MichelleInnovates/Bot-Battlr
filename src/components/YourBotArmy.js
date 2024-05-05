import React from 'react';

const YourBotArmy = ({ army, handleRelease }) => {
    return (
        <div>
            <h2>Your Bot Army</h2>
            {army.map(bot => (
                <div key={bot.id} style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
                    <img src={bot.avatar_url} alt={bot.name} style={{ width: '100px', height: '100px' }} />
                    <h3>{bot.name}</h3>
                    <p>Health: {bot.health}</p>
                    <p>Damage: {bot.damage}</p>
                    <p>Armor: {bot.armor}</p>
                    <p>Class: {bot.bot_class}</p>
                    <button onClick={() => handleRelease(bot)}>Release</button>
                </div>
            ))}
        </div>
    );
}

export default YourBotArmy;