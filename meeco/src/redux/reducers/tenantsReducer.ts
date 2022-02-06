const initialState = {
  tenantList: [],
};

export const tenantsReducer = (state: any = initialState, action: any) => {
  console.log("hello", state, action);
  if (action.type === "create") {
    return {
        ...state,
        tenantList:[...state.tenantList,action.data.tenant]
    };
  }
  return state;
};
