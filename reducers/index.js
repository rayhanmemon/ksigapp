import { combineReducers } from 'redux';

import LoginReducer from './LoginReducer';
import RegReducer from './RegReducer';
import ActivesReducer from './ActivesReducer';
import FeedReducer from './FeedReducer';

export default combineReducers({
  auth: LoginReducer,
  register: RegReducer,
  actives: ActivesReducer,
  feed: FeedReducer
});
