import React, { useState } from 'react';
// import moment from 'moment';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
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
      timestamp: new Date(),
      lots: "122-123",
    },
    {
      planting_count: 24,
      details: "test thing",
      name: "Test Crop",
      quantity: 123,
      timeframe: 14,
      timestamp: new Date(),
      lots: "122-123",
    },
    {
      planting_count: 24,
      details: "test thing",
      name: "Test Crop",
      quantity: 123,
      timeframe: 14,
      timestamp: new Date(),
      lots: "122-123",
    },
    {
      planting_count: 24,
      details: "test thing",
      name: "Test Crop",
      quantity: 123,
      timeframe: 14,
      timestamp: new Date(),
      lots: "122-123",
    },
    {
      planting_count: 24,
      details: "test thing",
      name: "Test Crop",
      quantity: 123,
      timeframe: 14,
      timestamp: new Date(),
      lots: "122-123",
    },
  ];

  const [items, setItems] = useState(initialItems);
  const [date, setDate] = useState(new Date());

  return (
    <Layout>
      <h2>{"Planting Log"}</h2>
      <DatePicker
        selected={date}
        onChange={date => setDate(date)}
      />
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
