import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Navigation from './components/Navigation/container';
import CalendarBoard from './components/CalendarBoard/container';
import AddScheduleDialog from './components/AddScheduleDialog/container';

import rootReducer from './redux/rootReducer';

import CurrentScheduleDialog from './components/CurrentScheduleDialog/container';

const store = createStore(rootReducer);

import DayjsUtils from '@date-io/dayjs';
import { MuiPickersUtilsProvider } from'@material-ui/pickers';

import dayjs from 'dayjs';
import 'dayjs/locale/ja';

dayjs.locale('ja');

const App = () => (
    <Provider store={store}>
        <MuiPickersUtilsProvider utils={DayjsUtils}>
            <Navigation />
            <CalendarBoard />
            <AddScheduleDialog />
            <CurrentScheduleDialog />
        </MuiPickersUtilsProvider>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
