import React from 'react'

interface StateProps {
  showModalConfirmation: {show: boolean, type: string}
  showModalRecommendation: boolean
  showModalSharing: boolean
  registrationMsg: {status: boolean, form: string, message: string}
}

export type Actions = 
  | { type: 'update_message'; payload: {message: string, form?: string} }
  | { type: 'handle_modalConfirmation'; payload: string }
  | { type: 'handle_modalRecommendation' }
  | { type: 'handle_modalSharing' } 

export const pageContextReducer = (state: StateProps, action: Actions): StateProps => {
  switch (action.type) {
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
    case 'handle_modalSharing':
      return {
        ...state,
        showModalSharing: !state.showModalSharing,
      };
    default:
      throw new Error();
  }
}