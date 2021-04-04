// immport the react and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//create a react component
const App = () => {
    return (

    //html styling
    // <div>
    //     <label class="label" for="name">Enter Name:</label>
    //     <input id="name" type="text"/>
    //     <button style="background-color: blue; color: white;">submit</button>
    // </div>
    
    <div>
        <label class="label" for="name">Enter Name:</label>
        <input id="name" type="text"/>
        <button style={{backgroundColor: 'blue', color: 'white'}}>submit</button>
    </div>
    );
};

//take a react component and show it on the screen
ReactDOM.render(
 <App />, document.querySelector('#root'));