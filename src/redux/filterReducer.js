const { FILTERVALUE } = require("./actions");

const filterReducer = (state = "", { type, payload }) => {
  switch (type) {
    case FILTERVALUE:
      return (state = payload.filter);

    default:
      return state;
  }
};

export default filterReducer;
