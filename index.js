import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const myList = (
  <ul>
      <li>Learn React</li>
      <li>Hello, world</li>
      <li>Ahoy, planet</li>
  </ul>
);
 
ReactDOM.render(
  myList, 
  document.getElementById('app')
);
