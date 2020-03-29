import React from 'react';
import Card1 from './Card1';
import Card2 from './Card2'
import Card3 from './Card3';
import Card4 from './Card4';
import Card5 from './Card5';

const Dashboard = () => {
    const cardDisplay = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        marginBottom: 50
    }
    return (
        <div>
            <h1>Dash Board Section</h1>
            <div style={cardDisplay}>
                <Card1 />
                <Card2 />
                <Card3 />
                <Card4 />
            </div>
            <Card5 />
        </div>
    );
};

export default Dashboard;