import React, { Component } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import Modal from "react-modal";

import {
  Input,
  Button,
  CustomerPageNavBar,
  CheckBox
} from "../../../components";
import "./home.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "300px",
    height: "400px",
    background: "#5A9389"
  }
};

Modal.setAppElement("#root");
class Home extends Component {
  state = {
    textInputValueFlightNo: "",
    textInputValuepPhone: "",
    checkboxValue: false,
    isAvailable: false,
    alert: null,
    modalIsOpen: false
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    const { textInputValuepPhone } = this.state;
    if (textInputValuepPhone !== "") {
      const data = JSON.stringify({
        textInputValuepPhone
      });
      fetch("/api/v1/check_phone", {
        credentials: "same-origin",
        headers: {
          "content-type": "application/json"
        },
        method: "POST",
        body: data
      })
        .then(response => response.json(data))
        .then(data => {
          if (data.isAvailable) {
            this.setState({ modalIsOpen: false });
          } else {
            this.invalidFlightNoAlert("Invalied Phone no.!");
          }
        })
        .catch(err => {
          console.log("There has been an error ", err);
        });
    } else {
      this.invalidFlightNoAlert("Invalied Phone no.!");
    }
  };

  handleNoInputChange = e => {
    this.setState({
      textInputValueFlightNo: e.target.value
    });
  };
  handlePhoneInputChange = e => {
    this.setState({
      textInputValuepPhone: e.target.value
    });
  };

  handlecheckboxChange = () => {
    this.setState({
      checkboxValue: !this.state.checkboxValue
    });
  };

  invalidFlightNoAlert = msg => {
    const getAlert = () => (
      <SweetAlert
        warning
        title="Wrong!"
        confirmBtnBsStyle="danger"
        cancelBtnBsStyle="danger"
        onConfirm={() => this.hideAlert()}
      >
        {msg}
      </SweetAlert>
    );

    this.setState({
      alert: getAlert()
    });
  };

  hideAlert() {
    this.setState({
      alert: null
    });
  }

  handleCheck = e => {
    e.preventDefault();
    const {
      textInputValueFlightNo,
      textInputValuepPhone,
      checkboxValue
    } = this.state;

    if (checkboxValue === false) {
      if (textInputValueFlightNo !== "") {
        const data = JSON.stringify({
          textInputValueFlightNo
        });
        fetch("/api/v1/check_flight", {
          credentials: "same-origin",
          headers: {
            "content-type": "application/json"
          },
          method: "POST",
          body: data
        })
          .then(response => response.json(data))
          .then(data => {
            sessionStorage.setItem("flight_no", data.flight_no);
            if (data.isAvailable) {
              this.setState({
                isAvailable: true
              });
              data.isAvailable && (window.location = "/flightinfo");
            } else {
              this.setState({
                isAvailable: false
              });
              this.invalidFlightNoAlert("Invalied Flight no.!");
            }
          })
          .catch(err => {
            console.log("There has been an error ", err);
          });
      } else {
        this.invalidFlightNoAlert("Invalied Flight no.!");
      }
    } else {
      if (textInputValuepPhone === "") {
        this.openModal();
      } else {
        const data1 = JSON.stringify({
          textInputValuepPhone
        });
        fetch("/api/v1/update_customer", {
          credentials: "same-origin",
          headers: {
            "content-type": "application/json"
          },
          method: "POST",
          body: data1
        })
          .then(response => response.json(data1))
          .then(data => {
            if (data.isAvailable) {
              if (textInputValueFlightNo !== "") {
                const data = JSON.stringify({
                  textInputValueFlightNo
                });
                fetch("/api/v1/check_flight", {
                  credentials: "same-origin",
                  headers: {
                    "content-type": "application/json"
                  },
                  method: "POST",
                  body: data
                })
                  .then(response => response.json(data))
                  .then(data => {
                    sessionStorage.setItem("flight_no", data.flight_no);
                    if (data.isAvailable) {
                      this.setState({
                        isAvailable: true
                      });
                      data.isAvailable && (window.location = "/flightinfo");
                    } else {
                      this.setState({
                        isAvailable: false
                      });
                      this.invalidFlightNoAlert("Invalied Flight no.!");
                    }
                  })
                  .catch(err => {
                    console.log("There has been an error ", err);
                  });
              } else {
                this.invalidFlightNoAlert("Invalied Flight no.!");
              }
            }
          });
      }
    }
  };

  render() {
    const { alert } = this.state;
    return (
      <div className="customer-container">
        <CustomerPageNavBar />
        <h1 className="customer-h1-style"> Track your flight </h1> {alert}{" "}
        <form onSubmit={this.handleCheck} className="customer-form-style">
          <div className="customer-inputs-group">
            <Input
              labelClassName="customer-label-style"
              className="customer-input-style calender-img"
              labelText="Your flight date"
              placeholder="Day DD/MM/Year"
              type="date"
              onChange={this.handledateInputChange}
            />
            <Input
              labelClassName="customer-label-style"
              className="customer-input-style flightno-img"
              labelText="Your flight Number"
              placeholder="ex: 1234"
              type="text"
              onChange={this.handleNoInputChange}
            />
          </div>
          <CheckBox
            className="checkbox-style"
            labelText="Keep me updated"
            type="checkbox"
            onTextInputChange={this.handlecheckboxChange}
          />
          <Button className="customer-btn-style">Check</Button>
        </form>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Get phone no"
        >
          <img
            src="/assets/imgs/update.png"
            className="update-image"
            alt="update"
          />
          <div className="customer-modal-subtitle">
            To be in update just <br /> enter your phone
          </div>
          <Input
            className="customer-input-style phone-img"
            placeholder="phone"
            type="text"
            onChange={this.handlePhoneInputChange}
          />
          <Button
            className="customer-btn-check-style"
            onClick={this.closeModal}
          >
            Check
          </Button>
        </Modal>
      </div>
    );
  }
}

export default Home;
