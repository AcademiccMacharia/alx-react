import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';

const NotificationItem = ({ type, value, html }) => {
    return (
        <li data-notification-type={type} dangerouslySetInnerHTML={html ? html : null}>
            {value}
        </li>
    );
}

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string
    })
};

NotificationItem.defaultProps = {
    type: 'default'
};

export default NotificationItem;
