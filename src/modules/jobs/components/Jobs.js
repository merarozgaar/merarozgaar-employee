// @flow
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  formatCurrency,
  parseSalary,
  parseSalaryFrequency,
  resolveDynamicPath,
} from '../../../utils';
import { getAppRoutes } from '../../../utils/contentProviders';

type JobsType = ({ jobs: Array<Object> }) => React$Node;

const Jobs: JobsType = ({ jobs }) => {
  return (
    <Container>
      <Row>
        {jobs.map(
          ({
            id,
            profession,
            employer_name,
            locality,
            city,
            distance,
            salary,
            salary_frequency,
            avatar_url,
          }) => (
            <Col key={id} md={{ span: 6 }}>
              <Card className="mb-3 p-4 border-0 shadow-sm">
                <Card.Body>
                  <div className="media">
                    <img
                      className="mr-4 rounded-circle"
                      src={avatar_url}
                      alt=""
                      style={{ width: 50, height: 50, objectFit: 'cover' }}
                    />
                    <div className="media-body">
                      <h5>
                        <Link
                          to={resolveDynamicPath(
                            getAppRoutes().jobDetails,
                            id,
                          )}>
                          {profession}
                        </Link>
                      </h5>
                      <p className="mb-0">
                        {employer_name}, {locality}, {city},{' '}
                        {parseInt(distance)} km away
                      </p>
                      <small className="text-muted">
                        {formatCurrency(parseSalary(salary))}{' '}
                        {parseSalaryFrequency(salary_frequency)}
                      </small>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ),
        )}
      </Row>
    </Container>
  );
};

export default Jobs;
