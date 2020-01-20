import React from 'react';
import Layout from '../components/Layout3/';

function ManualHarvest(props) {
  return (
    <Layout>
      <div className="home">
        <h2>{"Manual Harvest Log"}</h2>
        {Object.keys(props).map(key =>
          <div>{key + ": " + props[key]}</div>
        )}
      </div>
    </Layout>
  );
}

export default ManualHarvest;
