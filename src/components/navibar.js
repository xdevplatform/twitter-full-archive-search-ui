import React, { Component } from "react";
import { Navbar } from 'react-bootstrap'

class NaviBar extends React.Component {
  render() {
    return (
      <div>

        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPB_pDGaTKHoQVE-76Dw57Wda-X6IWONmGJw&usqp=CAU"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
             &nbsp; Search &nbsp;
          </Navbar.Brand>
          <Navbar.Brand href="#analytics">
            <img
              alt=""
              src="https://cdn1.vectorstock.com/i/1000x1000/76/15/analytics-icon-on-transparent-analytics-sign-vector-20707615.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
             &nbsp; Analytics &nbsp;
          </Navbar.Brand>
          <Navbar.Brand href="#industryApps">
            <img
              alt=""
              src="https://www.pngarea.com/pngm/51/6152612_scarce-png-live-demo-png-transparent-png.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
             &nbsp; Example Industry Apps &nbsp;
          </Navbar.Brand>          
          <Navbar.Brand href="#readme">
            <img
              alt=""
              src="http://digitallearningtree2.com/wp-content/uploads/2014/11/read-me-app-icon.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
             &nbsp; Read Me &nbsp;
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default NaviBar;