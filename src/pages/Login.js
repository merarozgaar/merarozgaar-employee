// @flow
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import LoginContainer from '../modules/login';

const Login = (): React$Node => {
  return (
    <div className="d-flex align-items-center min-vh-100">
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Card className="p-4 border-0">
              <Card.Body>
                <h1 className="h3 text-primary">Login to continue</h1>
                <p>We will send you a 6 digit OTP on this mobile number.</p>
                <LoginContainer />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
