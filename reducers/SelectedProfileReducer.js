import {
  TOGGLE_ADMIN_MODE,
  EDIT_POSITION,
  EDIT_DUES,
  EDIT_COMMUNITYSERVICE,
  EDIT_CHAPTERS,
  EDIT_MIXERS,
  EDIT_BROTHERHOODS,
  EDIT_GOOD_STANDING,
  SAVE_NEW_STATS,
  SAVE_NEW_STATS_SUCCESS,
  SAVE_NEW_STATS_FAILED
} from '../constants/Types';

const INITIAL_STATE = {
  adminModeActive: false,
  brotherhoods: '',
  chapters: '',
  communityService: '',
  dues: '',
  firstName: '',
  lastName: '',
  mixers: '',
  position: '',
  goodStanding: 'true',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_ADMIN_MODE:
      return { ...state, adminModeActive: action.payload };
    case EDIT_POSITION:
      return { ...state, position: action.payload };
    case EDIT_DUES:
      return { ...state, dues: action.payload };
    case EDIT_COMMUNITYSERVICE:
      return { ...state, communityService: action.payload };
    case EDIT_CHAPTERS:
      return { ...state, chapters: action.payload };
    case EDIT_MIXERS:
      return { ...state, mixers: action.payload };
    case EDIT_BROTHERHOODS:
      return { ...state, brotherhoods: action.payload };
    case EDIT_GOOD_STANDING:
      return { ...state, goodStanding: action.payload };
    case SAVE_NEW_STATS:
      return { ...state, loading: true };
    case SAVE_NEW_STATS_SUCCESS:
      return INITIAL_STATE;
    case SAVE_NEW_STATS_FAILED:
      return { ...state, loading: false };
    default:
      return state;
  }
};
