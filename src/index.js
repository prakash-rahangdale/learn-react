// immport the react and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//create a react component
const App = () => {
    return <div>hello world!</div>
};

//take a react component and show it on the screen
ReactDOM.render(
 <App />, document.querySelector('#root'));