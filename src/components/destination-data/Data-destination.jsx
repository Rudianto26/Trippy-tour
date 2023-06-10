import '../destination/destination.css';
import React from 'react';

const DataDestination = (props) => {
  return (
    <div>
      <h2>{props.heading}</h2>
      <p>{props.text}</p>
    </div>
  );
};

export default DataDestination;
