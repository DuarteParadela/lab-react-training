import React from 'react';

function Greetings(props) {
    let language = 'hello';
    switch (props.lang) {
      case 'de':
        language = 'Hallo';
        break;
      case 'fr':
        language = 'Bonjour';
        break;
      case 'es':
        language = 'Hola';
        break;
      default:
        language = 'Hello';
        break;
    }
    return (
      <div>
        <p>
          {language} {props.children}
        </p>
      </div>
    );
  }


  export default Greetings