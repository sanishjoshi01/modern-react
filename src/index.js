import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { NavigationProvider } from './context/navigation';
import "bulma/css/bulma.css";

import { store } from './store';
import { Provider } from 'react-redux';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
    <NavigationProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </NavigationProvider>
);