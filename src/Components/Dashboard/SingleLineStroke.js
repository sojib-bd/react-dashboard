import React from 'react';
import { LineChart, Line } from 'recharts';

const SingleLineStroke = () => {
    const data = [
        { name: 'Page A', uv: 4000, pv: 14, amt: 2400 },
        { name: 'Page B', uv: 3000, pv: 25, amt: 2210 },
        { name: 'Page C', uv: 2000, pv: 20, amt: 2290 },
        { name: 'Page D', uv: 2780, pv: 30, amt: 2000 },

    ];
    return (
        <LineChart width={40} height={40} data={data}>
            <Line type='monotone' dot={false} dataKey='pv' stroke='#8884d8' strokeWidth={2} />
        </LineChart>
    );
};

export default SingleLineStroke;