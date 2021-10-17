import { CREATE_FORM, DELETE_FORM, GET_FORM_LIST, VIEW_FORM } from "./actions";
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

    case VIEW_FORM:
      const selectedForm = state?.formList?.filter(
        (form) => form.formSlug === action.payload
      );

      return {
        ...state,
        selectedForm,
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
