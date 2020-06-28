import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

describe('Input tests', () => {
    const INPUT_PLACEHOLDER = "Enter the text";
    const INPUT_VALUE = "test";

    it('should be defined', () => {
        expect(Input).toBeDefined();
    });

    it('should match to snapshot', () => {
        const wrapper = shallow(
            <Input value={INPUT_VALUE} placeholder={INPUT_PLACEHOLDER} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should match the DOM structure', () => {
        const wrapper = shallow(
            <Input value={INPUT_VALUE} placeholder={INPUT_PLACEHOLDER} />
        );
        const input = wrapper.find('input');
        expect(input).toHaveLength(1);
        expect(wrapper.prop('placeholder')).toEqual(INPUT_PLACEHOLDER);
        expect(wrapper.prop('value')).toEqual(INPUT_VALUE);
    });

    it('should simulate input change', () => {
        const mockFn = jest.fn();
        const wrapper = shallow(
            <Input title={INPUT_VALUE} placeholder={INPUT_PLACEHOLDER} onChange={mockFn} />
        );
        wrapper.simulate('change');
        expect(mockFn).toHaveBeenCalled();
    });

});
