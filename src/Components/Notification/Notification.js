import React from 'react';
import CustomizedSnackbars from './NotificationCard';

const Notification = () => {
    const bars = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gridGap: 30
    }
    return (
        <div style={bars}>
            <CustomizedSnackbars title="Notification Types Example" />
            <CustomizedSnackbars title="Notification Types Example" />
            <CustomizedSnackbars title="Notification Types Example" />
        </div>
    );
};

export default Notification;