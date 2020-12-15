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
  fieldsAreValid: {
    indicatorPhone?: boolean
    phone: boolean
    uf: boolean
    city: boolean
  }
}

export type Actions = 
  | { type: 'update_indicatorPhone'; payload: string }
  | { type: 'update_profile'; payload: string }
  | { type: 'update_phone'; payload: string }
  | { type: 'update_uf'; payload: string }
  | { type: 'fetch_cities' }
  | { type: 'populate_cities'; payload: string[] } 
  | { type: 'update_city'; payload: string } 
  | { type: 'update_isSubmiting'; payload: boolean }
  | { type: 'update_fixedHeader'; payload: boolean }
  | { type: 'clear_state', payload: StateProps }  
  | { type: 'validation', payload: { field: string, value: boolean }}     

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
        city: "",
        citiesList: [],
        uf: action.payload.toUpperCase(),
      };
    case 'fetch_cities':
      return {
        ...state,
        city: "",
        isLoadingCities: true
      }
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
      return {
        ...state,
        fieldsAreValid: {
          ...state.fieldsAreValid,
          [action.payload.field]: action.payload.value
        },
      };
    case 'clear_state':
      return {...action.payload};
    default:
      throw new Error();
  }
}