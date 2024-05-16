import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('<Footer />', () => {
    it('renders without crashing', () => {
        const footer = shallow(<Footer />);
        expect(footer).toBeDefined();
    });

    it('renders at the very least the text "Copyright"', () => {
        const footer = shallow(<Footer />);
        expect(footer.text().includes('Copyright')).toBe(true);
    });
});