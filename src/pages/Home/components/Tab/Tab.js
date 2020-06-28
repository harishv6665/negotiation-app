import React from "react";
import styles from "./Tab.module.css";
import Button from "../../../../components/Button/Button";
import Input from "../../../../components/Input/Input";

export default class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'EMPLOYEE',
            employeeTab: {
                value: '',
                placeholder: 'Enter minimum salary',
                isSubmitted: false
            },
            employerTab: {
                value: '',
                placeholder: 'Enter maximum offer',
                isSubmitted: false
            },
        }
        this.onTabChange = this.onTabChange.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onTabChange(tab) {
        this.setState({ activeTab: tab });
    }

    onInputChange(event) {
        if (this.state.activeTab === 'EMPLOYEE') {
            this.setState({
                employeeTab: {
                    ...this.state.employeeTab,
                    value: event.target.value,
                    isSubmitted: false
                }
            });
        } else {
            this.setState({
                employerTab: {
                    ...this.state.employerTab,
                    value: event.target.value,
                    isSubmitted: false
                }
            });
        }
    }

    onButtonClick() {
        const { activeTab, employeeTab, employerTab } = this.state;
        if (activeTab === 'EMPLOYEE') {
            this.setState({
                employeeTab: {
                    ...this.state.employeeTab,
                    isSubmitted: true,
                }
            });
            if (employerTab.isSubmitted) {
                this.props.onSubmit({
                    employeeValue: employeeTab.value,
                    employerValue: employerTab.value,
                })
            }
        } else {
            this.setState({
                employerTab: {
                    ...this.state.employerTab,
                    isSubmitted: true,
                }
            });
            if (employeeTab.isSubmitted) {
                this.props.onSubmit({
                    employeeValue: employeeTab.value,
                    employerValue: employerTab.value,
                })
            }
        }
    }

    render() {
        const { activeTab, employeeTab, employerTab } = this.state;
        const tabData = activeTab === 'EMPLOYEE' ? employeeTab : employerTab;
        return (
            <div className={styles.wrapper}>
                <ul className={styles.head}>
                    <li
                        className={`${styles.head__tab} ${activeTab === 'EMPLOYEE' ? styles.active : ''}`}
                        onClick={() => this.onTabChange('EMPLOYEE')}
                    >EMPLOYEE</li>
                    <li
                        className={`${styles.head__tab} ${activeTab === 'EMPLOYER' ? styles.active : ''}`}
                        onClick={() => this.onTabChange('EMPLOYER')}
                    >EMPLOYER</li>
                </ul>

                <div className={styles.body}>
                    <Input
                        value={tabData.value}
                        placeholder={tabData.placeholder}
                        onChange={this.onInputChange}
                    />
                    <Button title="Submit" onClick={this.onButtonClick}/>
                </div>
            </div>
        )
    }
}
