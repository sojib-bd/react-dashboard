import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart
} from 'recharts';

const Card5 = () => {
    const data = [
        { name: 'Page A', uv: 4000, pv: 2500, amt: 2400 },
        { name: 'Page B', uv: 3000, pv: 2000, amt: 2210 },
        { name: 'Page C', uv: 2000, pv: 2100, amt: 2290 },
        { name: 'Page D', uv: 2780, pv: 1908, amt: 2000 },
        { name: 'Page E', uv: 1890, pv: 2100, amt: 2181 },
        { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
        { name: 'Page A', uv: 4000, pv: 1300, amt: 2400 },
        { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
    ];
    return (
        <div>
            <LineChart width={1050} height={300} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" />
                <YAxis />
                {/* <CartesianGrid strokeDasharray="3 3" /> */}

                <Tooltip />

                <Line name="pv of pages" type="monotone" dataKey="pv" stroke="#FFBE55" strokeWidth={2} />
                <Line name="uv of pages" type="monotone" dataKey="uv" stroke="#7C8FFE" strokeWidth={2} dot={false} />

            </LineChart>
        </div>
    );
};

export default Card5;