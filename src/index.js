import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
    // только для разработки, выдаёт ошибки
    <React.StrictMode >
    <App/>
    </React.StrictMode>,
    document.getElementById('root'),
);