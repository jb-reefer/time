import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './App.css';
import Mover from './Mover';

const App = () => (
  <div className="App">
    <Mover />
    <Grid fluid>
      <Row style={{ height: '100%!important' }}>
        <Col lg="1" md="1" style={{ backgroundColor: 'red' }}>counter</Col>
        <Col lg="3" md="3" style={{ backgroundColor: 'orange' }}>Exhibit Hour</Col>
        <Col lg="8" md="8" style={{ backgroundColor: 'blue' }}>Reception</Col>
      </Row>
    </Grid>
  </div>
  );

export default App;
