import {GET_DATA, ERROR} from '../types';

const initialState = {
  listIndications: [],
  isFetching: true,
  error: false,
};

const reducer = (state = initialState, action) => {
  console.log('RESUCE---', action.type);
  console.log('RESUCE 22---', action.payload);

  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        isFetching: false,
        error: false,
        listIndications: action.payload,
      };
    case ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
export default reducer;
