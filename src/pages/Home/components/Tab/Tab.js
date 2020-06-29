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
            },
            employerTab: {
                value: '',
                placeholder: 'Enter maximum offer',
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
                }
            });
        } else {
            this.setState({
                employerTab: {
                    ...this.state.employerTab,
                    value: event.target.value,
                }
            });
        }
    }

    onButtonClick() {
        const { employeeTab, employerTab } = this.state;
        if (employeeTab.value && employerTab.value) {
            this.props.onSubmit({
                employeeValue: employeeTab.value,
                employerValue: employerTab.value,
            });
        } else {
            if (!employeeTab.value) {
                this.setState({ activeTab: 'EMPLOYEE'});
                alert("Enter Employee's Minimum Salary");
            } else {
                this.setState({ activeTab: 'EMPLOYER'});
                alert("EnterEmployer's Maximum Offer");
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
                    <Button title="Submit" onClick={this.onButtonClick} />
                </div>
            </div>
        )
    }
}
