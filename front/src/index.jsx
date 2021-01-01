import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Navigation from './components/Navigation/container';

import CalendarBoard from './components/CalendarBoard/container';

import rootReducer from './redux/rootReducer';
const store = createStore(rootReducer);

import dayjs from 'dayjs';
import 'dayjs/locale/ja';

dayjs.locale('ja');

const App = () => (
    <Provider store={store}>
        <Navigation />
        <CalendarBoard />
    </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
