import React from 'react';

function CreditCard(props) {
    const hexColor = props.bgColor;
    const textColor = props.color;
    const number = props.number.replace(/\d(?=\d{4})/g, '*');
    const divStyle = {
      backgroundColor: hexColor,
      borderRadius: `5%`,
      color: textColor,
    };
    return (
      <div className="credit-card" style={divStyle}>
        <div className="bank-logo">
          <p>{props.type}</p>
        </div>
        <div className="number-container">
          <p className="number">{number}</p>
        </div>
  
        <div className="info">
          <p>
            Expires {props.expirationMonth}/{props.expirationYear}
          </p>
          <p>
            {props.owner} {props.bank}
          </p>
        </div>
      </div>
    );
  }

  export default CreditCard