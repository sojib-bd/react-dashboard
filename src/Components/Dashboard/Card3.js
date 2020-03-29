import React from 'react';

import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import { Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent'

const Card3 = () => {
    const container = {
        width: '250px',
        height: '200px',
        background: '#fff',

        margin: 0,
        padding: 0
    }

    const row1 = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        height: 60
    }
    const data = [
        { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Page B', uv: 3050, pv: 1398, amt: 2210 },
        { name: 'Page C', uv: 1350, pv: 9800, amt: 2290 },
        { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
    ];
    return (
        <Card style={container}>
            <CardContent style={{ padding: 0, margin: 0 }}>
                <p style={{ marginBottom: 0 }}>Server overview</p>
                <div style={row1}>
                    <p>Data</p>
                    <AreaChart width={100} height={30} data={data}
                        margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
                        <Area type='monotone' dataKey='uv' stroke='#FF99BC' fill='#FFE0EA' strokeWidth={2} />
                    </AreaChart>
                </div>
                <div style={row1}>
                    <p>Data</p>
                    <AreaChart width={100} height={30} data={data}
                        margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
                        <Area type='monotone' dataKey='pv' stroke='#7489FE' fill='#DDE2FF' strokeWidth={2} />
                    </AreaChart>
                </div>
                <div style={row1}>
                    <p>Data</p>
                    <AreaChart width={100} height={30} data={data}
                        margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
                        <Area type='monotone' dataKey='uv' stroke='#FFD186' fill='#FFF3E1' strokeWidth={2} />
                    </AreaChart>
                </div>
            </CardContent>
        </Card>
    );
};

export default Card3;