import React from "react";
import styles from "./Home.module.css";
import Modal from "../../components/Modal/Modal";
import Tab from "./components/Tab/Tab";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: '',
            employeeValue: '',
            employerValue: '',
            showModal: false,
            modalTitle: '',
        }
        this.onModalClose = this.onModalClose.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        fetch("https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02")
            .then(response => {
                this.setState({ temperature: response?.data?.main?.temp })
            })
            .catch(error => {
                console.error(error);
            })
    }

    onModalClose() {
         this.setState({ showModal: false });
    }

    onSubmit({employeeValue, employerValue}) {
        if (employeeValue <= employerValue) {
            this.setState({
                employeeValue,
                employerValue,
                showModal: true,
                modalTitle: 'Success!',
            });
        } else {
            this.setState({
                employeeValue,
                employerValue,
                showModal: true,
                modalTitle: 'Failure!',
            });
        }
    }

    render() {
        const { showModal, modalTitle, employeeValue, employerValue, temperature } = this.state;
        return (
            <div>
                <Tab onSubmit={this.onSubmit} />
                {showModal && <Modal
                    temperature={temperature}
                    title={modalTitle}
                    onClose={this.onModalClose}>
                    <div className={styles.modal}>
                        <p className={styles.modal__text}>Maximum offer was: <strong>{employerValue}</strong></p>
                        <br/>
                        <p className={styles.modal__text}>Minimum expected salary was: <strong>{employeeValue}</strong></p>
                    </div>
                </Modal>}
            </div>
        )
    }
}
