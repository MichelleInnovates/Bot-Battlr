// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
    fetch('https://json-bot-server-anl5.onrender.com/bots')
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
    fetch(`https://json-bot-server-anl5.onrender.com/bots/${botId}`, { method: 'DELETE' }).then(() => {
      setEnlistedBots((prevEnlistedBots) =>
        prevEnlistedBots.filter((bot) => bot.id !== botId)
      );
      setBots((prevBots) =>
        prevBots.filter((bot) => bot.id !== botId)
      );
    });
  };

  const goBackToList = () => setSelectedBot(null);
      {/* Show BotSpecs when a bot is selected */}

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
      <Routes>
    <Route
      path="//Bot-Battlr/"
      element={<> <YourBotArmy
        enlistedBots={enlistedBots}
        releaseBot={releaseBot}
        dischargeBot={dischargeBot}
      />
<SortBar sortBots={setSortBy} />
      <FilterBar botClasses={botClasses} handleFilter={handleFilter} />
<BotCollection  
        bots={sortedBots}
        enlistBot={enlistBot}
        setSelectedBot={setSelectedBot}   /></>}
    />
    <Route
    
      path="/Bot-Battlr/bots/:id" element={<BotSpecs bot={selectedBot} goBackToList={goBackToList} />}/>
  </Routes>
         </div>
  );
}

export default App;