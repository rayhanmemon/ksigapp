import firebase from 'firebase';

import {
  INITIALIZE_TOTALS,
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

export const initializeTotals = (organization) => {
  return (dispatch) => {
    firebase.database().ref(`${organization}/admin`)
      .on('value', snapshot => {
        dispatch({ type: INITIALIZE_TOTALS, payload: snapshot.val() });
    });
  };
};

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

export const goodStandingEdited = (text) => {
  return {
    type: EDIT_GOOD_STANDING,
    payload: text
  };
};

export const saveStats = (organization, rank, newStats) => {
  const { position, goodStanding, dues, communityService, chapters, mixers, brotherhoods } = newStats;
  return (dispatch) => {
    dispatch({ type: SAVE_NEW_STATS });
    const profileRef = firebase.database().ref(`${organization}/profiles/${rank}`);
    //update position
    if (position !== '') {
      const listRef = firebase.database().ref(`${organization}/activesList/${rank}`);
      listRef.child('position').set(position);
      profileRef.child('position').set(position);
    }
    //update GoodStanding
    profileRef.child('goodStanding').set(goodStanding);
    //update dues
    if (!isNaN(dues)) {
      profileRef.child('dues').set(dues);
    }
    //update communityService
    if (!isNaN(communityService)) {
      profileRef.child('communityService').set(communityService);
    }
    //update chapters
    if (!isNaN(chapters)) {
      profileRef.child('chapters').set(chapters);
    }
    //update mixers
    if (!isNaN(mixers)) {
      profileRef.child('mixers').set(mixers);
    }
    //update brotherhoods
    if (!isNaN(brotherhoods)) {
      profileRef.child('brotherhoods').set(brotherhoods);
    }
    dispatch({ type: SAVE_NEW_STATS_SUCCESS });
  };
};
