import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button tests', () => {
    const BUTTON_TITLE = "click here";

    it('should be defined', () => {
        expect(Button).toBeDefined();
    });

    it('should match to snapshot', () => {
        const wrapper = shallow(
            <Button title={BUTTON_TITLE} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should match with button title', () => {
        const wrapper = shallow(
            <Button title={BUTTON_TITLE} />
        );
        const button = wrapper.find('button');
        expect(button).toHaveLength(1);
        expect(button.text()).toEqual(BUTTON_TITLE);
    });

    it('should simulate button click', () => {
        const mockFn = jest.fn();
        const wrapper = shallow(
            <Button title={BUTTON_TITLE} onClick={mockFn} />
        );
        wrapper.simulate('click');
        expect(mockFn).toHaveBeenCalled();
    });

});
