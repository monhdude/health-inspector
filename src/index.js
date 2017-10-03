import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

//create first component
const App = () => {
    
    return (
        <div>
         <h1> Hello World! </h1>
         <p> I love saying hello world</p>
        </div>
)
}

//render the component
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
