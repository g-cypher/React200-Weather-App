import { combineReducers } from 'redux';
import entriesReducer from './components/CityEntries/entriesReducer';

const rootReducer = combineReducers({
    entries: entriesReducer
});

export default rootReducer;
