import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import routes from '../../routes';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.navRef = React.createRef();
    this.navToggleRef = React.createRef();
  }

  toggleMenu() {
    const navRef = this.navRef.current;
    const navToggleRef = this.navToggleRef.current;
    navRef.classList.toggle('layout3-navbar--open');
    navToggleRef.classList.toggle('layout3-navToggle--open');
  }

  render() {
    const { pathname } = this.props.location;
    return (
      <div className="layout3">
        <div className="layout3-navbar" ref={this.navRef}>
          <div className="layout3-navbarHeader">
            {"Super Farm Software"}
            <div className="layout3-navbarSubheader">
              {"by Super Micro Greens"}
            </div>
          </div>
          {routes().map(route =>
            route.id === "suppliers" ?
            ""
            :
            <Link
              to={route.pathname}
              className={route.pathname === pathname ? "layout3-navLink layout3-navLink--selected" : "layout3-navLink"}
            >
              <div className="layout3-navLinkIconContainer">
                <FontAwesomeIcon className="layout3-navLinkIcon fa-2x" icon={route.icon} />
              </div>
              <div className="layout3-navLinkName">{route.name}</div>
            </Link>
          )}
          <button
            className="layout3-navToggle"
            ref={this.navToggleRef}
            onClick={() => this.toggleMenu()}
          >
            <FontAwesomeIcon className="layout3-navToggleOpen" icon={faChevronCircleRight} />
            <FontAwesomeIcon className="layout3-navToggleClosed" icon={faChevronCircleLeft} />
          </button>
        </div>

        <div className="layout3-container">
          <div className="layout3-header">
            <div className="layout3-titleBackdrop" />
            <div className="layout3-titleRow">
              <h1 className="layout3-title">
                {"SUPER FARM SOFTWARE"}
              </h1>
              <div className="layout3-subtitle">
                {"by Super Micro Greens! Farm Management Software for Everyone!"}
              </div>
            </div>
          </div>

          <div className="layout3-body">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Layout);
