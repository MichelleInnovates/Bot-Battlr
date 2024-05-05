import React from 'react';

const BotCollection = ({ bots, handleEnlist, handleViewDetails }) => {
    return (
        <div>
            <h2>Bot Collection</h2>
            {bots.map(bot => (
                <div key={bot.id} style={{ border: '1px solid black', padding: '10px', margin: '10px' }} onClick={() => handleViewDetails(bot)}>
                    <img src={bot.avatar_url} alt={bot.name} style={{ width: '100px', height: '100px' }} />
                    <h3>{bot.name}</h3>
                    <p>Health: {bot.health}</p>
                    <p>Damage: {bot.damage}</p>
                    <p>Armor: {bot.armor}</p>
                    <p>Class: {bot.bot_class}</p>
                    <button onClick={(e) => {
                        e.stopPropagation();
                        handleEnlist(bot);
                    }}>Enlist</button>
                </div>
            ))}
        </div>
    );
};

export default BotCollection;