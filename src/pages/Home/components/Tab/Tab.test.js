import React from 'react';
import { shallow, mount } from 'enzyme';
import Tab from "./Tab";

describe('App tests', () => {

    it('should be defined', () => {
        expect(Tab).toBeDefined();
    });

    it('should match to snapshot', () => {
        const wrapper = shallow(<Tab />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should match the DOM structure', () => {
        const wrapper = mount(<Tab/>);
        expect(wrapper.find('div ul').length).toBe(1);
        expect(wrapper.find('div ul li').length).toBe(2);
        expect(wrapper.find('div ul li').at(0).text()).toEqual('EMPLOYEE');
        expect(wrapper.find('div ul li').at(1).text()).toEqual('EMPLOYER');

        expect(wrapper.find('div div input').length).toBe(1);
        expect(wrapper.find('div div button').length).toBe(1);
        expect(wrapper.find('div div button').text()).toEqual('Submit');
    });

    it('should simulate input change', () => {
        const mockFn = jest.fn();
        const wrapper = mount(<Tab onSubmit={mockFn} />);

        // Setting employee tab to 1000
        wrapper.find('div div input').value = 1000;
        wrapper.find('div div button').simulate('click');

        // switching to employer tab
        wrapper.find('div ul li').at(1).simulate('click');

        // Setting employer tab to 1000
        wrapper.find('div div input').value = 1000;
        wrapper.find('div div button').simulate('click');

        expect(mockFn).toHaveBeenCalled();
    });

    it('should simulate for tab change actions', () => {
        const wrapper = shallow(<Tab />);

        expect(wrapper.state().activeTab).toEqual('EMPLOYEE');

        // switching to employer tab
        wrapper.find('div ul li').at(1).simulate('click');

        expect(wrapper.state().activeTab).toEqual('EMPLOYER');

        // switching back to employee tab
        wrapper.find('div ul li').at(0).simulate('click');

        expect(wrapper.state().activeTab).toEqual('EMPLOYEE');
    })

    it('should simulate for tab input value change', () => {
        const mockFn = jest.fn();
        const wrapper = mount(<Tab onSubmit={mockFn}/>);

        expect(wrapper.state().employeeTab.value).toEqual('');
        expect(wrapper.state().employeeTab.isSubmitted).toEqual(false);

        // changing EMPLOYEE tab input
        wrapper.find('div div input').simulate('change', { target: { value: 10000 } });
        wrapper.find('div div button').simulate('click');
        expect(wrapper.state().employeeTab.value).toEqual(10000);
        expect(wrapper.state().employeeTab.isSubmitted).toEqual(true);

        // switching to EMPLOYER tab
        wrapper.find('div ul li').at(1).simulate('click');

        // changing EMPLOYER tab input
        wrapper.find('div div input').simulate('change', { target: { value: 20000 } });
        wrapper.find('div div button').simulate('click');
        expect(wrapper.state().employerTab.value).toEqual(20000);
        expect(wrapper.state().employerTab.isSubmitted).toEqual(true);
    });

});
