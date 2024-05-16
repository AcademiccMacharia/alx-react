import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
    it('renders without crashing', () => {
        const notifications = shallow(<Notifications />);
        expect(notifications).toBeDefined();
    });

    it('renders the text "Here is the list of notifications"', () => {
        const notifications = shallow(<Notifications />);
        expect(notifications.find('p').text()).toEqual('Here is the list of notifications');
    });

    it('renders NotificationItem elements', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find(NotificationItem)).toHaveLength(3);
    });

    it('first NotificationItem element renders the right html', () => {
        const wrapper = shallow(<Notifications />);
        const firstNotificationItem = wrapper.find(NotificationItem).at(0);
        expect(firstNotificationItem.prop('type')).toBe('default');
        expect(firstNotificationItem.prop('value')).toBe('New course available');
    });
});