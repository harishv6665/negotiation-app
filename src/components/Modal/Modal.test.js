import React from 'react';
import { shallow, mount } from 'enzyme';
import Modal from "./Modal";

describe('Modal tests', () => {
    const MODAL_TITLE = "Success!";
    const MODAL_TEMPERATURE = "208";
    const MODAL_CONTENT = "Modal content text";

    it('should be defined', () => {
        expect(Modal).toBeDefined();
    });

    it('should match to snapshot', () => {
        const wrapper = shallow(
            <Modal
                title={MODAL_TITLE}
                temperature={MODAL_TEMPERATURE}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should match the DOM structure', () => {
        const wrapper = mount(
            <Modal
                title={MODAL_TITLE}
                temperature={MODAL_TEMPERATURE}
            >
                <p className="content">{MODAL_CONTENT}</p>
            </Modal>
        );
        expect(wrapper.find('h4').text()).toEqual(MODAL_TITLE);
        expect(wrapper.find('.content').text()).toEqual(MODAL_CONTENT);
        expect(wrapper.find('footer p strong').text()).toEqual(`${MODAL_TEMPERATURE}°C`);
        expect(wrapper.find('footer button').text()).toEqual("Done");
    });

    it('should simulate button click', () => {
        const mockFn = jest.fn();
        const wrapper = mount(
            <Modal
                title={MODAL_TITLE}
                temperature={MODAL_TEMPERATURE}
                onClose={mockFn}
            />
        );
        wrapper.find('footer button').simulate('click');
        expect(mockFn).toHaveBeenCalled();
    });

});
