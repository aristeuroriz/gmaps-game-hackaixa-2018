import React, { Component } from "react";
import { Navbar, Grid, Row, Col, Modal, Button } from "react-bootstrap";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 0, show: true };
    this.initMap = this.initMap.bind(this);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  componentDidMount() {
    this.initMap();
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  initMap() {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: -15.79, lng: -47.8929 },
      zoom: 2
    });
    let uluru = { lat: -25.344, lng: 131.036 };
    let marker = new window.google.maps.Marker({ position: uluru, map: map });
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
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
              </Modal.Header>

              <Modal.Body>One fine body...</Modal.Body>

              <Modal.Footer>
                <Button onClick={this.handleClose}>Close</Button>
                <Button bsStyle="primary">Save changes</Button>
              </Modal.Footer>
            </Modal>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
