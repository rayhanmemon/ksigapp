import { combineReducers } from 'redux';

import LoginReducer from './LoginReducer';
import RegReducer from './RegReducer';
import ActivesReducer from './ActivesReducer';
import FeedReducer from './FeedReducer';
import SelectedProfileReducer from './SelectedProfileReducer';

export default combineReducers({
  auth: LoginReducer,
  register: RegReducer,
  actives: ActivesReducer,
  feed: FeedReducer,
  selectedProfile: SelectedProfileReducer
});
