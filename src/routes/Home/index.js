import React from 'react';
import { withRouter } from 'react-router-dom';
import Layout from '../../components/Layout/';
import './style.css';

function Home(props) {
  return (
    <Layout>
      <div className="home">
        <h2>HOEM</h2>
      </div>
    </Layout>
  );
}

export default withRouter(Home);
