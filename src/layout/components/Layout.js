// @flow1
import React, { Fragment } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useWindowScroll } from 'react-use';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getAppRoutes } from '../../utils/contentProviders';
import i18next from 'i18next';

type LayoutType = ({ children: React$Node }) => React$Node;

const Layout: LayoutType = ({ children, isLoggedIn, onSignOut }) => {
  const { y } = useWindowScroll();

  const selected = localStorage.getItem('i18nextLng') || 'en';

  console.log(selected);

  const { t } = useTranslation();

  const onChange = ({ target: { value } }) => {
    i18next.changeLanguage(value);
    localStorage.setItem('i18nextLng', value);

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <Fragment>
      <header>
        <Navbar
          fixed="top"
          expand="md"
          className={`bg-white ${y > 25 ? 'shadow-sm' : 0} shadow-sm`}>
          <Container fluid>
            <Navbar.Brand
              as={Link}
              to={getAppRoutes().home}
              className="d-flex align-items-center">
              <img src="/assets/logo.png" width="55px" className="mr-3" />
              {/*<span>{t('Mera Rozgaar')}</span>*/}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="align-items-md-center ml-auto">
                {isLoggedIn ? (
                  <Fragment>
                    <Nav.Item>
                      <Nav.Link
                        className="font-weight-bold text-primary"
                        as={Link}
                        to={getAppRoutes().applications}>
                        {t('Applications')}
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        className="font-weight-bold text-primary"
                        as={Link}
                        to={getAppRoutes().interviews}>
                        {t('Interviews')}
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        as="button"
                        className="font-weight-bold text-primary"
                        onClick={onSignOut}>
                        {t('Logout')}
                      </Nav.Link>
                    </Nav.Item>
                  </Fragment>
                ) : (
                  <Fragment>
                    <Nav.Item>
                      <Nav.Link
                        as={Link}
                        className="font-weight-bold text-primary"
                        to={getAppRoutes().signIn}>
                        {t('login')}
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        as={Link}
                        className="font-weight-bold text-primary"
                        to={getAppRoutes().signUp}>
                        {t('Sign up')}
                      </Nav.Link>
                    </Nav.Item>
                  </Fragment>
                )}
                <Nav.Item>
                  <div className="mb-0 form-group nav-link">
                    <select
                      onChange={onChange}
                      value={selected}
                      className="form-control form-control-sm">
                      <option value="hi">हिंदी</option>
                      <option value="en">English</option>
                    </select>
                  </div>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main className="min-vh-100 bg-light">{children}</main>
    </Fragment>
  );
};

export default Layout;
