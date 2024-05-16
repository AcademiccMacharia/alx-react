import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('<Header />', () => {
    it('renders without crashing', () => {
        const header = shallow(<Header />);
        expect(header).toBeDefined();
    });

    it('renders an img', () => {
        const header = shallow(<Header />);
        expect(header.find('img').length).toBeDefined();
    });

    it('renders an h1', () => {
        const header = shallow(<Header />);
        expect(header.find('h1').length).toBeDefined();
    });
})