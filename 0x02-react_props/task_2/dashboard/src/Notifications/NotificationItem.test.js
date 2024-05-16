// src/components/NotificationItem.test.js

import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem component', () => {
    it('renders without crashing', () => {
        shallow(<NotificationItem type="default" />);
    });

    it('renders the correct html when passing type and value props', () => {
        const wrapper = shallow(<NotificationItem type="default" value="test" />);
        expect(wrapper.find('li').text()).toBe('test');
        expect(wrapper.find('li').prop('data-notification-type')).toBe('default');
    });

    it('renders the correct html when passing html prop', () => {
        const wrapper = shallow(<NotificationItem type="default" html={{ __html: '<u>test</u>' }} />);
        expect(wrapper.find('li').html()).toContain('<li data-notification-type="default"><u>test</u></li>');
    });
});
