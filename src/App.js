import React, { Component } from "react";
import { Navbar, Grid, Row, Col } from "react-bootstrap";
class App extends Component {
  constructor(props) {
    super(props);
    this.initMap = this.initMap.bind(this);
  }
  componentDidMount() {
    this.initMap();
  }

  initMap() {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: -15.79, lng: -47.8929 },
      zoom: 4
    });
    console.log(map);
  }
  render() {
    return (
      <div className="container-fluid">
        <Navbar
          className="navbar-fixed-top"
          style={{
            backgroundImage:
              "linear-gradient(80deg,rgb(0, 92, 169) 30%,rgb(84, 187, 171))",
            border: "0px",
            height: "80px"
          }}
        >
          <Navbar.Header>
            <Navbar.Brand>
              <h1 style={{ color: "white" }}>GMaps Game - Hackaixa</h1>
            </Navbar.Brand>
          </Navbar.Header>
          {/* <Nav>
            <NavItem eventKey={1} href="#">
              Link
            </NavItem>
            <NavItem eventKey={2} href="#">
              Link
            </NavItem>
            <NavDropdown
              className="pull-right"
              eventKey={3}
              title="Dropdown"
              id="basic-nav-dropdown"
            >
              <MenuItem eventKey={3.1}>Action</MenuItem>
            </NavDropdown>
          </Nav> */}
        </Navbar>
        <Grid>
          <Row>
            <Col>
              <div id="map" style={{ width: "100%", height: "600px" }} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
