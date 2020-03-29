import React from 'react';
import { Card, Typography } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import {
    PieChart, Pie, Sector, Cell,
} from 'recharts';

const Card4 = () => {
    const container = {
        width: '250px',
        height: '200px',
        background: '#fff',

        margin: 0,
        padding: 0
    }

    const display = {

        display: 'grid',
        gridTemplateColumns: '1fr 1fr'
    }

    const data = [{ name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 }];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


    const RADIAN = Math.PI / 180;
    return (
        <Card style={container}>
            <CardContent>
                <Typography style={{ marginBottom: 0 }}>
                    Revenue Overview
                </Typography>
                <div style={display}>

                    <PieChart width={110} height={125}>
                        <Pie
                            data={data}
                            cx={50}
                            cy={70}
                            innerRadius={30}
                            outerRadius={40}
                            fill="#8884d8"
                            paddingAngle={5}
                        >

                            {
                                data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
                            }
                        </Pie>
                    </PieChart>
                    <div>

                        {data.map((x, index) => {
                            const value = <p style={{ color: COLORS[index % COLORS.length] }}>{x.name}: {x.value}</p>;
                            return value;
                        })}
                    </div>

                </div>

            </CardContent>
        </Card>
    );
};

export default Card4;