interface StateProps {
  showModalConfirmation: {show: boolean, type: string};
};

export type Actions =
  | { type: 'handle_modalConfirmation'; payload: string };

export const pageContextReducer = (state: StateProps, action: Actions): StateProps => {
  switch (action.type) {
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
