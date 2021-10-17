import { CREATE_FORM, GET_FORM_LIST } from "./actions";
export function reducer(state = {}, action) {
  switch (action.type) {
    case CREATE_FORM:
      return {
        ...state,
        formList: [...(state.formList || []), { ...action.payload }],
      };
    case GET_FORM_LIST:
      return {
        ...state,
        formList: [
          ...(state.formList ||
            JSON.parse(localStorage.getItem("formList")) ||
            []),
        ],
      };
    default:
      return {
        ...state,
      };
  }
}
