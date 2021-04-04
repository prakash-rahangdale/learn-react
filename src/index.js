// immport the react and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//create a react component
const App = () => {
    const buttonText = { text:'click me'};
    return (
    <div>
        <label className="label" for="name">Enter Name:</label>
        <input id="name" type="text"/>
        <button style={{backgroundColor: 'blue', color: 'white'}}>{buttonText.text}</button>
    </div>
    );
};
//we cant show object as text

//take a react component and show it on the screen
ReactDOM.render(
 <App />, document.querySelector('#root'));