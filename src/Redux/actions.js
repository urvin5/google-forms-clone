export const CREATE_FORM = "CREATE_FORM";
export const GET_FORM_LIST = "GET_FORM_LIST";
export const DELETE_FORM = "DELETE_FORM";
export const VIEW_FORM = "VIEW_FORM";

function createForm(payload) {
  return {
    type: CREATE_FORM,
    payload,
  };
}
function getFormList() {
  return {
    type: GET_FORM_LIST,
  };
}
function deleteForm(id) {
  return {
    type: DELETE_FORM,
    payload: id,
  };
}
function viewForm(uuid) {
  return {
    type: VIEW_FORM,
    payload: uuid,
  };
}

export { createForm, getFormList, deleteForm, viewForm };
