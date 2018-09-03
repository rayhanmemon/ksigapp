import {
  REQUEST_LIST_DATA,
  REQUEST_LIST_DATA_SUCCESS,
  REQUEST_LIST_DATA_FAILED,
  FETCH_SELECTED_PROFILE,
  FETCH_SELECTED_PROFILE_SUCCESS
} from '../constants/Types';

const INITIAL_STATE = {
  loadingList: false,
  loadingProfile: false,
  error: '',
  listData: [],
  //selectedProfileStats
  selectedAdmin: false,
  selectedBrotherhoods: 0,
  selectedChapters: 0,
  selectedCommunityService: 0,
  selectedDues: 0,
  selectedFirstName: '',
  selectedLastName: '',
  selectedMixers: 0,
  selectedPosition: '',
  selectedOrganization: '',
  selectedRank: '',
  selectedGoodStanding: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_LIST_DATA:
      return { ...state, loadingList: true };
    case REQUEST_LIST_DATA_SUCCESS:
      return { ...state, listData: action.payload, loadingList: false, error: '' };
    case REQUEST_LIST_DATA_FAILED:
      return { ...state, error: action.payload, loadingList: false };
    case FETCH_SELECTED_PROFILE:
      return { ...state, loadingProfile: true };
    case FETCH_SELECTED_PROFILE_SUCCESS:
      return {
        ...state,
        loadingProfile: false, 
        SelectedAdmin: action.payload.admin,
        SelectedBrotherhoods: action.payload.brotherhoods,
        SelectedChapters: action.payload.chapters,
        SelectedCommunityService: action.payload.communityService,
        SelectedDues: action.payload.dues,
        SelectedFirstName: action.payload.firstName,
        SelectedLastName: action.payload.lastName,
        SelectedMixers: action.payload.mixers,
        SelectedPosition: action.payload.position,
        SelectedGoodStanding: action.payload.goodStanding, };
    default:
      return state;
  }
};
