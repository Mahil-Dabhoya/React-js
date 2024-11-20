export const ADD_user = (data) => {
  return {
    type: "add-user",
    payload: data,
  };
};

export const DELETE_USER = (id) => {
  return {
    type: "del-user",
    payload: id,
  };
};

export const EDIT_USER = (id) => {
  return {
    type: "edit-user",
    payload: id,
  };
};

export const UPDATE_USER = (data) => {
  return {
    type: "update-user",
    payload: data,
  };
};    