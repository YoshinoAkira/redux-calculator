import React from 'react';
import {render} from 'redux';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CalculatorContainer from './containers/CalculatorContainer';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><CalculatorContainer /></Provider>, document.getElementById('root'));
registerServiceWorker();
