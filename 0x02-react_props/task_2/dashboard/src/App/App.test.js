import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toBeDefined();
    });

    it('renders the header component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Header').length).toBe(1);
    });

    it('renders the footer component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Footer').length).toBe(1);
    });

    it('renders the login component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Login').length).toBe(1);
    });

    it('renders the notifications component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Notifications').length).toBe(1);
    });
})
