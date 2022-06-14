import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  headerText: '',
  messageText: '',
  buttonText: 'Закрыть',
  active: false,
  redirect: false,
  path: '',
};

const standardMessages = {
  orderSendingError: {
    headerText: 'Произошла ошибка',
    messageText: 'К сожалению, не удалось отправить заказ. Попробуйте повторить отправку позднее.',
    buttonText: 'Закрыть',
  },
  orderSendingSuccess: {
    headerText: 'Отлично!',
    messageText: 'Заказ успешно отправлен и в ближайшее время будет обработан менеджером.',
    buttonText: 'Закрыть',
  },
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
