import React from 'react';
import { shallow } from 'enzyme';
import Header from "./Header";

describe('Header tests', () => {

    it('should be defined', () => {
        expect(Header).toBeDefined();
    });

    it('should match to snapshot', () => {
        const wrapper = shallow(
            <Header />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should match the DOM structure', () => {
        const wrapper = shallow(
            <Header />
        );
        expect(wrapper.find('header').length).toBe(1);
        expect(wrapper.find('header a').length).toBe(1);
        expect(wrapper.find('a').length).toBe(1);
        expect(wrapper.find('a').text()).toEqual("Project A");
        expect(wrapper.find('a').prop('href')).toEqual("https://www.project-a.com");
    });

});
