// @flow
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import JobsContainer from '../modules/interviews';
import { useTranslation } from 'react-i18next';

const Home = (): React$Node => {
  const { t } = useTranslation();

  return (
    <div className="min-vh-100 mt-5 py-5 bg-light">
      <Container>
        <Row>
          <Col className="pb-4">
            <h1 className="h3 text-center">{t('Interviews')}</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <JobsContainer />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
