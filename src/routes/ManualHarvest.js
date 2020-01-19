import React from 'react';
import Layout from '../components/Layout3/';

function ManualHarvest(props) {
  return (
    <Layout>
      <div className="home">
        Manual Harvest
        {Object.keys(props).map(key =>
          <div>{key + ": " + props[key]}</div>
        )}
      </div>
    </Layout>
  );
}

export default ManualHarvest;
