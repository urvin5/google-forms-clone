export const CREATE_FORM = "CREATE_FORM";
export const GET_FORM_LIST = "GET_FORM_LIST";
// export const GET_TIME_SLOTS = "GET_TIME_SLOTS";
// export const DETAILS_OF_TIME = "DETAILS_OF_TIME";
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

export { createForm, getFormList };
