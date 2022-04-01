const initialState = {
  dataContact: [],
  selectedID: {},
  selectedContactById: {},
};
const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CONTACTREDUCER':
      return {
        ...state,
        dataContact: action.payload,
      };
    case 'SELECTED_ID_CONTACT':
      return {
        ...state,
        selectedID: action.payload,
      };
    case 'SELECTED_CONTACT_BY_ID':
      return {
        ...state,
        selectedContactById: action.payload,
      };

    default:
      return state;
  }
};

export default HomeReducer;
