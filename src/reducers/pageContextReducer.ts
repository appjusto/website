import React from 'react'

interface StateProps {
  showModalConfirmation: {show: boolean, type: string}
  showModalRecommendation: boolean
  registrationMsg: {status: boolean, form: string, message: string}
  showCookiesBar: boolean
}

export type Actions =
  | { type: 'update_message'; payload: {message: string, form?: string}}
  | { type: 'handle_modalConfirmation'; payload: string }
  | { type: 'handle_modalRecommendation' }
  | { type: 'handle_cookiesBar', payload: { consent: boolean }}

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
    case 'handle_cookiesBar':
      if(action.payload.consent === false) {
        return {
          ...state,
          showCookiesBar: true,
        };
      } else {
        const item = { date: new Date().getTime(), policyVersion: "0", consentStatus: true }
        localStorage.setItem("appjusto_policy_consent", JSON.stringify(item))
        return {
          ...state,
          showCookiesBar: false,
        };
      }
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
