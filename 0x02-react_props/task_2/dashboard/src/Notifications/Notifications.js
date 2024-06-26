import React from 'react';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

const Notifications = () => {
    return (
        <div className='Notifications'>
            <button aria-label='Close' onClick={() => console.log("Close button has been clicked")}>
                <img src='/close-icon.png' alt='close-icon' />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <NotificationItem type="default" value="New course available" />
                <NotificationItem type="urgent" value="New resume available" />
                <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
            </ul>
        </div>
    )
}

export default Notifications;
