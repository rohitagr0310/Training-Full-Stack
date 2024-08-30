// src/pages/HomePage.jsx
import React, { useState } from 'react';
import DaySelector from '../components/Day15/DaySelector';
import Day14Page from './Day14Page.jsx';
// import Day15Page from './Day15Page'; // Uncomment if Day 15 has a specific task

const HomePage = () => {
    const [selectedDay, setSelectedDay] = useState(null);

    const handleSelectDay = (day) => {
        setSelectedDay(day);
    };

    return (
        <div>
            {!selectedDay ? (
                <DaySelector onSelectDay={handleSelectDay} />
            ) : selectedDay === 14 ? (
                <Day14Page />
            ) : (
                // selectedDay === 15 ? <Day15Page /> : null // Uncomment if Day 15 has a specific task
                <p>No content available for Day {selectedDay}</p>
            )}
        </div>
    );
};

export default HomePage;
