import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "typeface-comfortaa";
import * as serviceWorker from './serviceWorker';
import FloorLayout from "./components/FloorLayout/FloorLayout";

ReactDOM.render(<FloorLayout />, document.getElementById('root'));

serviceWorker.unregister();
