import { combineReducers } from 'redux';

import LoginReducer from './LoginReducer';
import RegReducer from './RegReducer';
import ActivesReducer from './ActivesReducer';

export default combineReducers({
  auth: LoginReducer,
  register: RegReducer,
  actives: ActivesReducer,
});
