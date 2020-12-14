import React from 'react'

interface StateProps {
  indicatorPhone?: string
  profile: string,
  phone: string,
  uf: string,
  city: string,
  isLoadingCities: boolean,
  citiesList: string[],
  isSubmiting: boolean,
  fixedHeader?: boolean,
  fieldAreValid: boolean
}

type Actions = 
  | { type: 'update_indicatorPhone'; payload: string }
  | { type: 'update_profile'; payload: string }
  | { type: 'update_phone'; payload: string }
  | { type: 'update_uf'; payload: string }
  | { type: 'populate_cities'; payload: string[] } 
  | { type: 'update_city'; payload: string } 
  | { type: 'update_isSubmiting'; payload: boolean }
  | { type: 'update_fixedHeader'; payload: boolean }
  | { type: 'clear_state', payload: StateProps }  
  | { type: 'validation', payload: boolean }      

export const registrationReducer = (state: StateProps, action: Actions): StateProps => {
  switch (action.type) {
    case 'update_indicatorPhone':
      return {
        ...state,
        indicatorPhone: action.payload,
      };
    case 'update_profile':
      return {
        ...state,
        profile: action.payload,
      };
    case 'update_phone':
      return {
        ...state,
        phone: action.payload,
      };
    case 'update_uf':
      return {
        ...state,
        uf: action.payload.toUpperCase(),
        city: "",
        isLoadingCities: true,
      };
    case 'populate_cities':
      return {
        ...state,
        isLoadingCities: false,
        citiesList: action.payload,
      };
    case 'update_city':
      return {
        ...state,
        city: action.payload,
      };
    case 'update_isSubmiting':
      return {
        ...state,
        isSubmiting: action.payload,
      };
    case 'update_fixedHeader':
      return {
        ...state,
        fixedHeader: action.payload,
      };
    case 'validation':
      console.log("action", action.payload)
      return {
        ...state,
        fieldAreValid: action.payload,
      };
    case 'clear_state':
      return {...action.payload};
    default:
      throw new Error();
  }
}