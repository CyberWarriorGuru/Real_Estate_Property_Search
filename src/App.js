import React from "react";
import SearchPane from "./components/SearchPane";
import BulkSearchPane from "./components/BulkSearchPane";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import "./style.css";

import "bootstrap/dist/css/bootstrap.min.css";


function App() {

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row className="vh-100">
        <Col sm={2} className="border square bg-light bg-gradient text-dark">
          <Nav variant="pills" className="flex-column mt-5 text-center">
            <Nav.Item>
              <Nav.Link eventKey="first">Single Search</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Bulk Search</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={10} style={{ backgroundImage: "url('home-bg.jpg')"}} className="d-flex justify-content-center align-items-center">
          <Tab.Content className="d-flex justify-content-center align-items-center">
            <Tab.Pane eventKey="first" className="w-100">
              <SearchPane />
            </Tab.Pane>
            <Tab.Pane eventKey="second" className="w-100">
              <BulkSearchPane />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>

  );
}

export default App;
