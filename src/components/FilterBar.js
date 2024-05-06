// components/FilterBar.js
import React from 'react';

function FilterBar({ botClasses, handleFilter }) {
  return (
    <div>
      <h3>Filter Bots By Class:</h3>
      {botClasses.map((botClass) => (
        <label key={botClass}>
          <input type="checkbox" value={botClass} onChange={handleFilter} />
          {botClass}
        </label>
      ))}
    </div>
  );
}

export default FilterBar;