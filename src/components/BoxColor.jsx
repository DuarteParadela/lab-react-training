import React from 'react';


function BoxColor(props) {
    const r = props.r;
    const g = props.g;
    const b = props.b;
  
    const divStyle = {
      backgroundColor: `rgb(${r},${g},${b})`,
      border: `1px solid black`,
    };
  
    function componentToHex(c) {
      var hex = c.toString(16);
      return hex.length == 1 ? '0' + hex : hex;
    }
  
    function rgbToHex(r, g, b) {
      return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
  
    return (
      <div>
        <p style={divStyle}>
          rgb({r},{g},{b}){rgbToHex(r, g, b)}
        </p>
      </div>
    );
  }

  export default BoxColor