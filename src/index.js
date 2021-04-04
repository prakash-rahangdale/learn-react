// immport the react and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//create a react component
const App = () => {
    const buttonText = 'click me';
    return (
    <div>
        <label className="label" for="name">Enter Name:</label>
        <input id="name" type="text"/>
        <button style={{backgroundColor: 'blue', color: 'white'}}>{buttonText}</button>
        {/* using {} we refrence diffrent js variable inside our jsx */}
    </div>
    );
};

//take a react component and show it on the screen
ReactDOM.render(
 <App />, document.querySelector('#root'));