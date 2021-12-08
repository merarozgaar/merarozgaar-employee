// @flow
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import JobsContainer from '../modules/jobs';
import { useTranslation } from 'react-i18next';
import CategoriesContainer from '../modules/categories';

const Home = (): React$Node => {
  const { t } = useTranslation();

  return (
    <div className="min-vh-100 py-5 bg-light">
      <section className="py-5 bg-secondary">
        <CategoriesContainer />
      </section>
      <section className="py-5">
        <Container className="py-5">
          <Row>
            <Col>
              <JobsContainer />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
