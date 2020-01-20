import React, { useState } from 'react';
import moment from 'moment';
import Layout from '../components/Layout3/';
import SFTable from '../components/SFTable/';

function removeItems(items, index) {
  let newItems = items.slice();
  delete newItems[index];
  return newItems;
}

function PlantingLog(props) {
  const columns = [
    {
      name: "Planting Count",
      keyName: "planting_count",
      type: "number",
    },
    {
      name: "Details",
      keyName: "details",
      type: "editString",
    },
    {
      name: "Name",
      keyName: "name",
      type: "editString",
    },
    {
      name: "Quantity",
      keyName: "quantity",
      type: "number",
    },
    {
      name: "Timeframe",
      keyName: "timeframe",
      type: "editNumber",
    },
    {
      name: "Timestamp",
      keyName: "timestamp",
      type: "editDate",
    },
    {
      name: "Seed Lots",
      keyName: "lots",
      type: "range",
    },
  ];

  const initialItems = [
    {
      planting_count: 24,
      details: "test thing",
      name: "Test Crop",
      quantity: 123,
      timeframe: 14,
      timestamp: moment().format("MM/DD/YY"),
      lots: "122-123",
    },
    {
      planting_count: 24,
      details: "test thing",
      name: "Test Crop",
      quantity: 123,
      timeframe: 14,
      timestamp: moment().format("MM/DD/YY"),
      lots: "122-123",
    },
    {
      planting_count: 24,
      details: "test thing",
      name: "Test Crop",
      quantity: 123,
      timeframe: 14,
      timestamp: moment().format("MM/DD/YY"),
      lots: "122-123",
    },
    {
      planting_count: 24,
      details: "test thing",
      name: "Test Crop",
      quantity: 123,
      timeframe: 14,
      timestamp: moment().format("MM/DD/YY"),
      lots: "122-123",
    },
    {
      planting_count: 24,
      details: "test thing",
      name: "Test Crop",
      quantity: 123,
      timeframe: 14,
      timestamp: moment().format("MM/DD/YY"),
      lots: "122-123",
    },
  ];

  const [items, setItems] = useState(initialItems);

  return (
    <Layout>
      <h2>{"Planting Log"}</h2>
      <SFTable
        items={items}
        columns={columns}
        canDelete
        onDelete={index => setItems(removeItems(items, index))}
      />
    </Layout>
  );
}

export default PlantingLog;
