const toSave = [
  'cart',
  'catalogSearch',
  'cartOrder',
];

export const saveStateToLocal = (state) => {
  toSave.forEach((field) => {
    // eslint-disable-next-line no-undef
    localStorage.setItem(field, JSON.stringify(state[field]));
  });
};

export const loadStateFromLocalStorage = () => {
  const stateData = {};
  toSave.forEach((field) => {
    // eslint-disable-next-line no-undef
    const data = localStorage.getItem(field);
    const parsed = data ? JSON.parse(data) : null;
    if (parsed) stateData[field] = parsed;
  });
  if (Object.keys(stateData).length > 0) {
    return stateData;
  }
  return {};
};
