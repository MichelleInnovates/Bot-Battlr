// App.js
import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';
import SortBar from './components/SortBar';
import FilterBar from './components/FilterBar';
import styles from './components/App.module.css';

function App() {
  const [enlistedBots, setEnlistedBots] = useState([]);
  const [bots, setBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [sortBy, setSortBy] = useState('name');
  const [filterBy, setFilterBy] = useState([]);

  useEffect(() => {
    // Fetch bot data from the server
    fetch('https://api.npoint.io/9cb020dad156662e04c5/bots/')
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const enlistBot = (selectedBot) => {
    if (
      !enlistedBots.some((bot) => bot.bot_class === selectedBot.bot_class) &&
      !selectedBot.enlisted
    ) {
      setEnlistedBots((prevEnlistedBots) => [...prevEnlistedBots, selectedBot]);
      setBots((prevBots) =>
        prevBots.map((bot) =>
          bot.id === selectedBot.id ? { ...bot, enlisted: true } : bot
        )
      );
    }
  };

  const releaseBot = (botId) => {
    setEnlistedBots((prevEnlistedBots) =>
      prevEnlistedBots.filter((bot) => bot.id !== botId)
    );
    setBots((prevBots) =>
      prevBots.map((bot) => (bot.id === botId ? { ...bot, enlisted: false } : bot))
    );
  };

  const dischargeBot = (botId) => {
    fetch(`http://localhost:3000/bots/${botId}`, { method: 'DELETE' }).then(() => {
      setEnlistedBots((prevEnlistedBots) =>
        prevEnlistedBots.filter((bot) => bot.id !== botId)
      );
      setBots((prevBots) =>
        prevBots.filter((bot) => bot.id !== botId)
      );
    });
  };

  const goBackToList = () => setSelectedBot(null);

  const handleFilter = (event) => {
    const { value } = event.target;
    setFilterBy((prevFilter) =>
      prevFilter.includes(value)
        ? prevFilter.filter((filter) => filter !== value)
        : [...prevFilter, value]
    );
  };

  const botClasses = [
    'Support',
    'Medic',
    'Assault',
    'Defender',
    'Captain',
    'Witch',
  ];

  // Filter bots based on the selected classes
  const filteredBots = filterBy.length
    ? bots.filter((bot) => filterBy.includes(bot.bot_class))
    : bots;

  // Sort bots based on the selected sorting option
  const sortedBots = filteredBots.sort((a, b) => a[sortBy] - b[sortBy]);

  return (
    <div className={styles.App}>
      <h1>Welcome to Bot Battlr</h1>
      {/* Show BotSpecs when a bot is selected */}
      {selectedBot ? (
        <BotSpecs bot={selectedBot} goBackToList={goBackToList} enlistBot={enlistBot} />
      ) : (
        <>
          {/* Render SortBar */}
          <SortBar sortBots={setSortBy} />

          {/* Render FilterBar */}
          <FilterBar botClasses={botClasses} handleFilter={handleFilter} />

          {/* Render YourBotArmy */}
          <YourBotArmy
            enlistedBots={enlistedBots}
            releaseBot={releaseBot}
            dischargeBot={dischargeBot}
          />

          {/* Render BotCollection */}
          <BotCollection
            bots={sortedBots}
            enlistBot={enlistBot}
            setSelectedBot={setSelectedBot}
          />
        </>
      )}
    </div>
  );
}

export default App;