import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hidePopupMessage } from '../../store/slices/popup-message-slice';

function PopupMessage() {
  const {
    headerText,
    messageText,
    buttonText,
    active,
  } = useSelector((state) => state.popupMessage);
  const dispatch = useDispatch();

  const closePopup = () => {
    dispatch(hidePopupMessage());
  };

  if (!active) {
    return null;
  }

  return (
    <div className="popup-container">
      <div className="popup-content text-center">
        <h2 className="popup-header">{headerText}</h2>
        <p className="popup-text">{messageText}</p>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={closePopup}
          /* eslint-disable-next-line jsx-a11y/no-autofocus */
          autoFocus
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default PopupMessage;
