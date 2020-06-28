import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('App tests', () => {

    it('should be defined', () => {
        expect(App).toBeDefined();
    });

    it('should match to snapshot', () => {
        const wrapper = mount(<App />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should match the DOM structure', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Header').length).toBe(1);
        expect(wrapper.find('div').length).toBe(1);
        expect(wrapper.find('div Header').length).toBe(1);
        expect(wrapper.find('main').length).toBe(1);
        expect(wrapper.find('Home').length).toBe(1);
        expect(wrapper.find('div main Home').length).toBe(1);
    })

});
