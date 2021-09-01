import firebase from 'firebase';

interface StateProps {
  firebase: firebase.app.App;
  analytics: firebase.analytics.Analytics;
  showModalConfirmation: {show: boolean, type: string}
};

export type Actions =
  | { type: 'update_firebase'; payload: { firebase: any, analytics: any }}
  | { type: 'handle_modalConfirmation'; payload: string };

export const pageContextReducer = (state: StateProps, action: Actions): StateProps => {
  switch (action.type) {
    case 'update_firebase':
        return {
          ...state,
          firebase: action.payload.firebase,
          analytics: action.payload.analytics
        };
    case 'handle_modalConfirmation':
      const type = action.payload
      return {
        ...state,
        showModalConfirmation: {show: !state.showModalConfirmation.show, type },
      };
    default:
      throw new Error();
  };
};
