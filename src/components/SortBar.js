import React, { useState } from 'react';

const SortBar = ({ onSort }) => {
    const [sortBy, setSortBy] = useState('health');

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
        onSort(event.target.value);
    };

    return (
        <div>
            <h3>Sort Bots</h3>
            <label>
                <input
                    type="radio"
                    name="sortBy"
                    value="health"
                    checked={sortBy === 'health'}
                    onChange={handleSortChange}
                />
                Health
            </label>
            <label>
                <input
                    type="radio"
                    name="sortBy"
                    value="damage"
                    checked={sortBy === 'damage'}
                    onChange={handleSortChange}
                />
                Damage
            </label>
            <label>
                <input
                    type="radio"
                    name="sortBy"
                    value="armor"
                    checked={sortBy === 'armor'}
                    onChange={handleSortChange}
                />
                Armor
            </label>
        </div>
    );
};

export default SortBar;