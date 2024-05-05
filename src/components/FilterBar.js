import React, { useState } from 'react';

const FilterBar = ({ botClasses, onFilter }) => {
    const [selectedFilters, setSelectedFilters] = useState([]);

    const handleFilterChange = (botClass) => {
        if (selectedFilters.includes(botClass)) {
            setSelectedFilters(selectedFilters.filter(filter => filter !== botClass));
        } else {
            setSelectedFilters([...selectedFilters, botClass]);
        }
        onFilter(selectedFilters);
    };

    return (
        <div>
            <h3>Filter Bots</h3>
            {botClasses.map(botClass => (
                <div key={botClass}>
                    <input
                        type="checkbox"
                        checked={selectedFilters.includes(botClass)}
                        onChange={() => handleFilterChange(botClass)}
                    />
                    <label>{botClass}</label>
                </div>
            ))}
        </div>
    );
};

export default FilterBar;