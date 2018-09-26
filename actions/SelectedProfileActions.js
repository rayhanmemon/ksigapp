import firebase from 'firebase';

import {
  TOGGLE_ADMIN_MODE,
  EDIT_POSITION,
  EDIT_DUES,
  EDIT_COMMUNITYSERVICE,
  EDIT_CHAPTERS,
  EDIT_MIXERS,
  EDIT_BROTHERHOODS,
  SAVE_NEW_STATS,
  SAVE_NEW_STATS_SUCCESS,
  SAVE_NEW_STATS_FAILED
} from '../constants/Types';

export const toggleAdminMode = (adminModeActive) => {
  if (adminModeActive) {
    return {
      type: TOGGLE_ADMIN_MODE,
      payload: false
    };
  } return {
    type: TOGGLE_ADMIN_MODE,
    payload: true
  };
};

export const positionEdited = (text) => {
  return {
    type: EDIT_POSITION,
    payload: text
  };
};

export const duesEdited = (text) => {
  return {
    type: EDIT_DUES,
    payload: text
  };
};

export const communityServiceEdited = (text) => {
  return {
    type: EDIT_COMMUNITYSERVICE,
    payload: text
  };
};

export const chaptersEdited = (text) => {
  return {
    type: EDIT_CHAPTERS,
    payload: text
  };
};

export const mixersEdited = (text) => {
  return {
    type: EDIT_MIXERS,
    payload: text
  };
};

export const brotherhoodsEdited = (text) => {
  return {
    type: EDIT_BROTHERHOODS,
    payload: text
  };
};

export const saveStats = (organization, rank, newStats) => {
  const { position, dues, communityService, chapters, mixers, brotherhoods } = newStats;
  return (dispatch) => {
    dispatch({ type: SAVE_NEW_STATS });
    const profileRef = firebase.database().ref(`${organization}/profiles/${rank}`);
    console.log(newStats);
  };
};
