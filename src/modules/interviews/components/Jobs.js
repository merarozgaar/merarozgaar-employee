// @flow
import React from 'react';
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Container,
  Row,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  formatCurrency,
  parseSalary,
  parseSalaryFrequency,
  resolveDynamicPath,
} from '../../../utils';
import { getAppRoutes } from '../../../utils/contentProviders';
import { useTranslation } from 'react-i18next';

type JobsType = ({ jobs: Array<Object>, updateStatus: Function }) => React$Node;

const Jobs: JobsType = ({ jobs, updateStatus }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          {jobs.map(({ id, job_id, company, status }) => (
            <Card key={id} className="mb-3 p-4">
              <Card.Body>
                <div className="media">
                  {/*<img*/}
                  {/*  className="mr-4 rounded-circle"*/}
                  {/*  src={company_logo_url}*/}
                  {/*  alt=""*/}
                  {/*  style={{ width: 100, height: 100, objectFit: 'cover' }}*/}
                  {/*/>*/}
                  <div className="media-body">
                    <h5>
                      <Link
                        to={resolveDynamicPath(
                          getAppRoutes().jobDetails,
                          job_id,
                        )}>
                        {company}
                      </Link>
                    </h5>
                    <p className="mb-0">{status}</p>
                    <p>
                      {t(
                        'To continue with this interview, please download our app.',
                      )}
                    </p>
                  </div>
                  {/*<div>*/}
                  {/*  {status === 'OPEN' && (*/}
                  {/*    <ButtonGroup className="" aria-label="Basic example">*/}
                  {/*      <Button*/}
                  {/*        variant="primary"*/}
                  {/*        onClick={updateStatus({ id, status: 'SHORTLISTED' })}>*/}
                  {/*        Shortlist*/}
                  {/*      </Button>*/}
                  {/*      <Button*/}
                  {/*        variant="danger"*/}
                  {/*        onClick={updateStatus({ id, status: 'SCREENING' })}>*/}
                  {/*        Reject*/}
                  {/*      </Button>*/}
                  {/*      /!*<Button variant="secondary">Right</Button>*!/*/}
                  {/*    </ButtonGroup>*/}
                  {/*  )}*/}
                  {/*  {status === 'SHORTLISTED' && (*/}
                  {/*    <ButtonGroup className="" aria-label="Basic example">*/}
                  {/*      <Button*/}
                  {/*        variant="primary"*/}
                  {/*        onClick={updateStatus({ id, status: 'SCREENING' })}>*/}
                  {/*        Schedule*/}
                  {/*      </Button>*/}
                  {/*      <Button*/}
                  {/*        variant="primary"*/}
                  {/*        onClick={updateStatus({ id, status: 'SCREENING' })}>*/}
                  {/*        Get details*/}
                  {/*      </Button>*/}
                  {/*      /!*<Button variant="secondary">Right</Button>*!/*/}
                  {/*    </ButtonGroup>*/}
                  {/*  )}*/}
                  {/*</div>*/}
                </div>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Jobs;
