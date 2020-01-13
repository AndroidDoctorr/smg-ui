import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import routes from '../../routes';
import './style.css';

function Layout(props) {
  const { pathname } = props.location;
  return (
    <div className="layout-container">
      <div className="layout-header">
        <div className="layout-titleRow">
          <h1 className="layout-title">
            {"SUPER FARM SOFTWARE"}
          </h1>
          <div className="layout-subtitle">
            {"by Super Micro Greens! Farm Management Software for Everyone!"}
          </div>
        </div>

        <div className="layout-navbar">
          {routes().map(route =>
            <Link
              to={route.pathname}
              className={route.pathname === pathname ? "layout-navLink layout-navLink--selected" : "layout-navLink"}
            >
              <div>{route.name}</div>
              {route.pathname === pathname &&
                <div className="layout-navlinkBottom">
                  <div className="layout-navlinkBottomLeft" />
                  <div className="layout-navlinkBottomRight" />
                </div>
              }
            </Link>
          )}
        </div>
      </div>
      <div className="layout-body">
        {props.children}
      </div>
    </div>
  );
}

export default withRouter(Layout);
