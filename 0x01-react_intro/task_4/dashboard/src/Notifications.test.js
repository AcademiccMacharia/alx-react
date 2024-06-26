import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('<Notifications />', () => {
    it('renders without crashing', () => {
        const notifications = shallow(<Notifications />);
        expect(notifications).toBeDefined();
    });

    it('renders three list items', () => {
        const notifications = shallow(<Notifications />);
        expect(notifications.find('li').length).toEqual(3);
    });

    it('renders the text "Here is the list of notifications"', () => {
        const notifications = shallow(<Notifications />);
        expect(notifications.find('p').text()).toEqual('Here is the list of notifications');
    });
});