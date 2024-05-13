import React from 'react';
import "./Notifications.css";
import { getLatestNotification } from './utils';

const Notifications = () => {
    return (
        <div className='Notifications'>
            <button aria-label='Close' onClick={() => console.log("Close button has been clicked")}>
                <img src='/close-icon.png' alt='close-icon' />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data="default">New course available</li>
                <li data="urgent">New resume available</li>
                <li data="urgent"
                    dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
                ></li>
            </ul>
        </div>
    )
}

export default Notifications