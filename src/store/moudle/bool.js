const SET_BOOLEAN = 'SET_BOOLEAN';

// 动作创建者
export const setBool = (data) => ({ type: SET_BOOLEAN, payload: data });

// 初始状态
const initialState = {
  Boolean: false,
};

// reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOLEAN:
      return { ...state, Boolean: action.payload };
    default:
      return state;
  }
};

export default userReducer;
