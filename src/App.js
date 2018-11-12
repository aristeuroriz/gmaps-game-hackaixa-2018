import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Grid,
  Row,
  Col,
  Modal,
  Button,
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 0, show: true };
    this.initMap = this.initMap.bind(this);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleLevel = this.handleLevel.bind(this);
    this.getLevelName = this.getLevelName.bind(this);
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

  handleLevel(e) {
    this.setState({ level: e.target.value });
  }
  getLevelName() {
    switch (this.state.level) {
      case "1":
        return "Fácil";
        break;
      case "2":
        return "Médio";
        break;
      case "3":
        return "Difícil";
        break;
      default:
        return "Indefinido";
        break;
    }
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
    console.log(this.state);
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
          <Nav>
            {/* <NavItem eventKey={1} href="#" >
              Link
            </NavItem>
            <NavItem eventKey={2} href="#">
              Link
            </NavItem> */}
            <NavDropdown
              className="pull-right"
              eventKey={3}
              title={`Nível ${this.getLevelName()}`}
              id="basic-nav-dropdown"
            >
              <MenuItem eventKey={3.1} onClick={this.handleShow}>
                Mudar de Nível
              </MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
        <Grid>
          <Row>
            <Col>
              <div id="map" style={{ width: "100%", height: "600px" }} />
            </Col>
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Escolha o nível de dificuldade</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>Nível</ControlLabel>
                  <FormControl
                    componentClass="select"
                    placeholder="select"
                    onClick={this.handleLevel}
                  >
                    <option value="select">Selecione</option>
                    <option value="1">Fácil</option>
                    <option value="2">Médio</option>
                    <option value="3">Difícil</option>
                  </FormControl>
                </FormGroup>
              </Modal.Body>

              <Modal.Footer>
                <Button onClick={this.handleClose}>Cancelar</Button>
                <Button
                  onClick={this.state.level !== 0 ? this.handleClose : ""}
                  bsStyle="primary"
                >
                  Jogar
                </Button>
              </Modal.Footer>
            </Modal>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
