import { createSlice } from '@reduxjs/toolkit';
import { standardMessages } from '../../components/messages/standard-messages';

const initialState = {
  headerText: '',
  messageText: '',
  buttonText: 'Закрыть',
  active: false,
  redirect: false,
  path: '',
};

export const popupMessageSlice = createSlice({
  name: 'popup-message',
  initialState,
  reducers: {
    showPopupMessage: (state, action) => {
      const { messageName } = action.payload;
      return {
        ...state,
        ...standardMessages[messageName],
        active: true,
      };
    },
    hidePopupMessage: (state) => ({ ...state, active: false }),
    startRedirect: (state, action) => {
      const { redirect, path } = action.payload;
      return {
        ...state,
        redirect,
        path,
      };
    },
    endRedirect: (state) => ({ ...state, redirect: false, path: '' }),
  },
});

export const {
  showPopupMessage,
  hidePopupMessage,
  startRedirect,
  endRedirect,
} = popupMessageSlice.actions;

export default popupMessageSlice.reducer;
