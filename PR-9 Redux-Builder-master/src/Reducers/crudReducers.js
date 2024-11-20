let intialState = {
  users: JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [],
  single: null,
};
const CrudReducer = (state = intialState, action) => {
  switch (action.type) {
    case "add-user":
      let old = [...state.users, action.payload];
      localStorage.setItem("users", JSON.stringify(old));
      return {
        ...state,
        users: old,
      };

    case "del-user":
      let d = action.payload;
      let delUser = state.users.filter((val) => val.id != d);
      localStorage.setItem("users", JSON.stringify(delUser));
      return {
        ...state,
        users: delUser,
      };

    case "edit-user":
      let edituser = state.users.find((val) => {
        return val.id == action.payload.editid;
      });
      console.log(edituser);
      return {
        ...state,
        single: edituser,
      };

    case "update-user":
      let update = state.users.map((val) => {
        if (val.id == action.payload.id) {
          (val.name = action.payload.name), (val.phone = action.payload.phone);
        }
        return val;
      });
      localStorage.setItem("users", JSON.stringify(update));

    default:
      return state;
  }
};
export default CrudReducer;