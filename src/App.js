import React from 'react';
import logo from './logo.svg';
import './App.css';

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

function Random(props) {
  const min = props.min;
  const max = props.max;
  const random = Math.floor(Math.random() * (max - min + 1) + min);

  return (
    <div>
      <p>
        Random value between {min} and {max} =>
        {random}
      </p>
    </div>
  );
}

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

function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="en">Virginie</Greetings>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />
    </div>
  );
}

export default App;
