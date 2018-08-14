import React, { Component } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import moment from "moment";

import {
  DetailsCard,
  Input,
  Button,
  Header,
  SideNav,
  RadioButton
} from "../../../components";

import "../addFlight/addflight.css";

const flightNo = sessionStorage.getItem("flightNo");

class UpdateFlight extends Component {
  state = {
    selectValue: "",
    form: {},
    flightInformation: {}
  };
  componentDidMount() {
    const data = JSON.stringify({
      flightNo
    });
    fetch("/api/v1/updateflight_post", {
      credentials: "same-origin",
      headers: {
        "content-type": "application/json"
      },
      method: "POST",
      body: data
    })
      .then(response => response.json())
      .then(response => {
        this.setState({ flightInformation: response.data });
      })
      .catch(err => {
        console.log("There has been an error ", err);
      });
  }

  handleFlightUpdate = e => {
    e.preventDefault();
    const status = this.state.selectValue;
    const { departureTime, gateNo, terminalNo } = this.state.form;
    // const duration = Number(flightDuration);
    const data = JSON.stringify({
      departureTime,
      gateNo,
      terminalNo,
      flightNo,
      status
    });
    fetch("/api/v1/editFlightInformation_post", {
      credentials: "same-origin",
      headers: {
        "content-type": "application/json"
      },
      method: "POST",
      body: data
    });
    this.handleSuceessAddFlight();
  };

  handleSuceessAddFlight() {
    const getAlert = () => (
      <SweetAlert
        success
        title="Done!"
        confirmBtnBsStyle="success"
        cancelBtnBsStyle="success"
        onConfirm={() => (window.location = "/admin/flights")}
      >
        New Flight is Added
      </SweetAlert>
    );

    this.setState({
      alert: getAlert()
    });
  }

  hideAlert() {
    this.setState({
      alert: null
    });
  }

  handleRadioChange = value => {
    this.setState({ selectValue: value });
  };

  handleInputChange = e => {
    const { form } = this.state;
    const updatedForm = form;
    updatedForm[e.target.name] = e.target.value;
    this.setState({ form: updatedForm });
  };

  // handleDateChange = e => {
  //   const { selectedValue } = this.state;
  //   const updatedSelectedCity = { ...selectedValue };
  //   updatedSelectedCity[e.target.name] = e.target.value;
  //   this.setState({ selectedValue: updatedSelectedCity });
  // };

  render() {
    const { alert } = this.state;
    console.log("flight info", this.state.flightInformation);

    const {
      departure_time: departureTime,
      flight_duration: flightDuration
    } = this.state.flightInformation;
    return (
      <div className="addflight-container">
        <Header />
        <div className="container-content">
          <div className="sub-container-sidenav-form">
            <SideNav updateFlightTap={true} />
            <form
              className="sub-container-form"
              onSubmit={this.handleFlightUpdate}
            >
              <DetailsCard
                flightNo={this.state.flightInformation.flight_no}
                boardingTime={`${moment(this.state.form.departureTime)
                  .add(flightDuration, "hour")
                  .format("YYYY/MM/DD HH:mm")}`}
                destination={this.state.flightInformation.destination}
                origin={this.state.flightInformation.origin}
              />
              {/* <Input
                labelClassName="label-style"
                className="time-img"
                name="departureTime"
                onChange={this.handleInputChange}
                labelText="Departure time"
                placeholder={this.state.flightInformation.departure_time}
              /> */}
              {/* <Input
                labelClassName="label-style"
                className="departuretime-img"
                name="boardingTime"
                onChange={this.handleInputChange}
                labelText="Boarding time"
                placeholder={this.state.flightInformation.arrival_time}
              /> */}
              <Input
                labelClassName="label-style"
                className="departuretime-img"
                name="departureTime"
                // onChange={this.handleDateChange}
                labelText="Departure time"
                // type="datetime-local"
                // value={this.state.flightInformation.departure_time}
                onChange={this.handleInputChange}
                placeholder={this.state.flightInformation.departure_time}
              />
              {/* <Input
                labelClassName="label-style"
                className="time-img"
                type="number"
                name="flightDuration"
                onChange={this.handleInputChange}
                labelText="Flight Duration"
                placeholder={this.state.flightInformation.flightDuration}
              /> */}
              <Input
                labelClassName="label-style"
                className="gate-img"
                name="gateNo"
                onChange={this.handleInputChange}
                labelText="Gate no."
                placeholder={this.state.flightInformation.gate}
              />
              <Input
                labelClassName="label-style"
                className="terminalno-img"
                name="terminalNo"
                onChange={this.handleInputChange}
                labelText="Terminal no."
                placeholder="ex:1234"
              />
              <div className="width-div">
                <label className="label-style">Status</label>
                <RadioButton onRadioChange={this.handleRadioChange} />
              </div>
              <div className="center-btn">
                <Button className="btn-style">Update</Button>
              </div>
            </form>
            {alert}
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateFlight;

// import React, { Component } from "react";
// import SweetAlert from "react-bootstrap-sweetalert";
// import moment from "moment";

// import {
//   DetailsCard,
//   Input,
//   Button,
//   Header,
//   SideNav,
//   RadioButton
// } from "../../../components";
// import "../addFlight/addflight.css";

// const flightNo = sessionStorage.getItem("flightNo");

// class UpdateFlight extends Component {
//   state = {
//     selectValue: "",
//     form: {},
//     flightInformation: {}
//   };

//   componentDidMount() {
//     const data = JSON.stringify({
//       flightNo
//     });
//     fetch("api/v1/updateflight_post", {
//       credentials: "same-origin",
//       headers: {
//         "content-type": "application/json"
//       },
//       method: "POST",
//       body: data
//     })
//       .then(response => response.json())
//       .then(response => {
//         this.setState({ flightInformation: response.data });
//       })
//       .catch(err => {
//         console.log("There has been an error ", err);
//       });
//   }

//   handleFlightUpdate = e => {
//     e.preventDefault();
//     const status = this.state.selectValue;
//     const { departureTime, gateNo, terminalNo } = this.state.form;
//     // const duration = Number(flightDuration);
//     const data = JSON.stringify({
//       departureTime,
//       gateNo,
//       terminalNo,
//       flightNo,
//       status
//     });
//     fetch("api/v1/editFlightInformation_post", {
//       credentials: "same-origin",
//       headers: {
//         "content-type": "application/json"
//       },
//       method: "POST",
//       body: data
//     });
//     this.handleSuceessAddFlight();
//   };

//   handleSuceessAddFlight() {
//     const getAlert = () => (
//       <SweetAlert
//         success
//         title="Done!"
//         confirmBtnBsStyle="success"
//         cancelBtnBsStyle="success"
//         onConfirm={() => (window.location = "/admin/flights")}
//       >
//         New Flight is Added
//       </SweetAlert>
//     );

//     this.setState({
//       alert: getAlert()
//     });
//   }

//   hideAlert() {
//     this.setState({
//       alert: null
//     });
//   }

//   handleRadioChange = value => {
//     this.setState({ selectValue: value });
//   };

//   handleInputChange = e => {
//     const { form } = this.state;
//     const updatedForm = form;
//     updatedForm[e.target.name] = e.target.value;
//     this.setState({ form: updatedForm });
//   };

//   render() {
//     const { alert } = this.state;
//     console.log("flight info", this.state.flightInformation);

//     const {
//       departure_time: departureTime,
//       flight_duration: flightDuration
//     } = this.state.flightInformation;
//     return (
//       <div className="addflight-container">
//         <Header />
//         <div className="container-content">
//           <div className="sub-container-sidenav-form">
//             <SideNav updateFlightTap={true} />
//             <form
//               className="sub-container-form"
//               onSubmit={this.handleFlightUpdate}
//             >
//               <DetailsCard
//                 flight_no={this.state.flightInformation.flight_no}
//                 boarding_time={`${moment(this.state.form.departureTime)
//                   .add(flightDuration, "hour")
//                   .format("YYYY/MM/DD HH:mm")}`}
//                 destination={this.state.flightInformation.destination}
//                 origin={this.state.flightInformation.origin}
//               />
//               {/* <Input
//                 labelClassName="label-style"
//                 className="time-img"
//                 name="departureTime"
//                 onChange={this.handleInputChange}
//                 labelText="Departure time"
//                 placeholder={this.state.flightInformation.departure_time}
//               /> */}
//               {/* <Input
//                 labelClassName="label-style"
//                 className="departuretime-img"
//                 name="boardingTime"
//                 onChange={this.handleInputChange}
//                 labelText="Boarding time"
//                 placeholder={this.state.flightInformation.arrival_time}
//               /> */}
//               <Input
//                 labelClassName="label-style"
//                 className="departuretime-img"
//                 name="departureTime"
//                 // onChange={this.handleDateChange}
//                 labelText="Departure time"
//                 // type="datetime-local"
//                 // value={this.state.flightInformation.departure_time}
//                 onChange={this.handleInputChange}
//                 placeholder={this.state.flightInformation.departure_time}
//               />
//               {/* <Input
//                 labelClassName="label-style"
//                 className="time-img"
//                 type="number"
//                 name="flightDuration"
//                 onChange={this.handleInputChange}
//                 labelText="Flight Duration"
//                 placeholder={this.state.flightInformation.flightDuration}
//               /> */}
//               <Input
//                 labelClassName="label-style"
//                 className="gate-img"
//                 name="gateNo"
//                 onChange={this.handleInputChange}
//                 labelText="Gate no."
//                 placeholder={this.state.flightInformation.gate}
//               />
//               <Input
//                 labelClassName="label-style"
//                 className="terminalno-img"
//                 name="terminalNo"
//                 onChange={this.handleInputChange}
//                 labelText="Terminal no."
//                 placeholder="ex:1234"
//               />
//               <div className="width-div">
//                 <label className="label-style">Status</label>
//                 <RadioButton onRadioChange={this.handleRadioChange} />
//               </div>
//               <div className="center-btn">
//                 <Button className="btn-style">Update</Button>
//               </div>
//             </form>
//             {alert}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default UpdateFlight;
