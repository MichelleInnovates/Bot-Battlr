// components/SortBar.js
import React from 'react';

function SortBar({ sortBots }) {
  return (
    <div>
      <h3>Sort Bots By:</h3>
      <button onClick={() => sortBots('health')}>Health</button>
      <button onClick={() => sortBots('damage')}>Damage</button>
      <button onClick={() => sortBots('armor')}>Armor</button>
    </div>
  );
}

export default SortBar;