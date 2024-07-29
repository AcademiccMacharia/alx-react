import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';


describe('<Login />', () => {
    it('renders without crashing', () => {
        const login = shallow(<Login />);
        expect(login).toBeDefined();
    });

    it('renders two input tags', () => {
        const login = shallow(<Login />);
        expect(login.find('input').length).toBe(2);
    });

    it('renders two label tags', () => {
        const login = shallow(<Login />);
        expect(login.find('label').length).toBe(2);
    });
});