import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import routes from '../../routes';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRandom } from '@fortawesome/free-solid-svg-icons';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.navRef = React.createRef();
    this.navToggleRef = React.createRef();
  }

  toggleMenu() {
    const navRef = this.navRef.current;
    const navToggleRef = this.navRef.current;
    navRef.classList.toggle('layout3-navbar--open');
    navToggleRef.classList.toggle('layout3-navToggle--open');
  }

  render() {
    const { pathname } = this.props.location;
    return (
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

        <div className="layout3-navbar" ref={this.navRef}>
          <div className="layout3-navbarHeader">
            {"Super Micro Greens"}
          </div>
          {routes().map(route =>
            route.id === "suppliers" ?
            ""
            :
            <Link
              to={route.pathname}
              className={route.pathname === pathname ? "layout3-navLink layout3-navLink--selected" : "layout3-navLink"}
            >
              <div>{route.name}</div>
              {route.pathname === pathname &&
                <div className="layout3-navlinkBottom">
                  <div className="layout3-navlinkBottomLeft" />
                  <div className="layout3-navlinkBottomRight" />
                </div>
              }
            </Link>
          )}
          <button className="layout3-navToggle" ref={this.navToggleRef}>
            <FontAwesomeIcon icon={faRandom} />
          </button>
        </div>

        <div className="layout3-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default withRouter(Layout);
