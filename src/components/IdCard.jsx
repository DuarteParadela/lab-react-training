import React from 'react';

function IdCard(props) {
    return (
      <div className="id-container">
        <img src={props.picture} />
        <div className="id-list">
          {' '}
          <p>First name : {props.firstName}</p>
          <p>Last name : {props.lastName}</p>
          <p>Gender : {props.gender}</p>
          <p> Height: {props.height}</p>
          <p>Birth : {props.birth.toDateString()}</p>
        </div>
      </div>
    );
  }

  export default IdCard