import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toBeDefined();
    });

    it('renders a header', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('App-header').length).toBeDefined();
    });

    it('renders a body', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('App-body').length).toBeDefined();
    });

    it('renders a footer', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('App-footer').length).toBeDefined();
    });
})
