import React from 'react'
import firebase from 'firebase';

interface StateProps {
  firebase: firebase.app.App;
  database: firebase.firestore.Firestore;
  storage: firebase.storage.Storage;
  functions: firebase.functions.Functions;
  showModalConfirmation: {show: boolean, type: string};
  showModalRecommendation: boolean;
  registrationMsg: {status: boolean, form: string, message: string};
};

export type Actions =
  | { type: 'update_firebase'; payload: { firebase: any, db: any, storage: any, functions: any }}//firebase.firestore.Firestore
  | { type: 'update_message'; payload: {message: string, form?: string}}
  | { type: 'handle_modalConfirmation'; payload: string }
  | { type: 'handle_modalRecommendation' }

export const pageContextReducer = (state: StateProps, action: Actions): StateProps => {
  switch (action.type) {
    case 'update_firebase':
        return {
          ...state,
          firebase: action.payload.firebase,
          database: action.payload.db,
          storage: action.payload.storage,
          functions: action.payload.functions
        };
    case 'update_message':
      const {form, message} = action.payload
      if(message !== "") {
        return {
          ...state,
          registrationMsg: {status: true, form, message },
        };
      } else {
        return {
          ...state,
          registrationMsg: {status: false, form: "", message: "" },
        };
      };
    case 'handle_modalConfirmation':
      const type = action.payload
      return {
        ...state,
        showModalConfirmation: {show: !state.showModalConfirmation.show, type },
      };
    case 'handle_modalRecommendation':
      return {
        ...state,
        showModalRecommendation: !state.showModalRecommendation,
      };
    default:
      throw new Error();
  }
}
