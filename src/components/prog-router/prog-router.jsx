import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAction } from '../../store/epics';

function ProgRouter() {
  const { redirect, path } = useSelector((state) => state.popupMessage);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (redirect) {
      navigate(path);
      dispatch(getAction('popup-message/endRedirect'));
    }
  }, [redirect, path, dispatch, navigate]);

  return (
    <>
    </>
  );
}

export default ProgRouter;
