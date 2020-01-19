import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import routes from '../../routes';
import './style.css';

function Layout2(props) {
  const { pathname } = props.location;
  return (
    <div className="layout2-container">
      <div className="layout2-header">
        <div className="layout2-titleRow">
          <h1 className="layout2-title">
            {"SUPER FARM SOFTWARE"}
          </h1>
          <div className="layout2-subtitle">
            {"by Super Micro Greens! Farm Management Software for Everyone!"}
          </div>
        </div>

        <div className="layout2-navbar">
          {routes().map(route =>
            route.id === "suppliers" ?
            ""
            :
            <Link
              to={route.pathname}
              className={route.pathname === pathname ? "layout2-navLink layout2-navLink--selected" : "layout2-navLink"}
            >
              <div>{route.name}</div>
              {route.pathname === pathname &&
                <div className="layout2-navlinkBottom">
                  <div className="layout2-navlinkBottomLeft" />
                  <div className="layout2-navlinkBottomRight" />
                </div>
              }
            </Link>
          )}
        </div>
      </div>
      <div className="layout2-body">
        {props.children}
      </div>
    </div>
  );
}

export default withRouter(Layout2);
