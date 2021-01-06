import React from 'react';
import Rating from './Rating'

function DriverCard(props) {
    return (
      <div className="driver-card">
        <img src={props.img} />
          <p>{props.name}</p>
          <p><Rating>{props.rating}</Rating></p>
          <p>{props.car.model} - {props.car.licensePlate}</p>
        </div>
    );
  }

  export default DriverCard