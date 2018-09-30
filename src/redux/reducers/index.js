import { combineReducers } from 'redux';
// Imported employee reducer
import employeeReducer from './employeeReducer';

const rootReducer = combineReducers({
  employee: employeeReducer,
});

export default rootReducer;