import { CREATE_FORM, DELETE_FORM, GET_FORM_LIST } from "./actions";
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
    case DELETE_FORM:
      const formList = JSON.parse(
        window.localStorage.getItem("formList") || "[]"
      );
      const updated = formList.filter(
        (item) => item.formSlug !== action.payload
      );
      window.localStorage.setItem("formList", JSON.stringify(updated));
      return {
        ...state,
        formList: updated,
      };
    default:
      return {
        ...state,
      };
  }
}
