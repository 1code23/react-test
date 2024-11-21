const SET_USER = 'SET_USER';
const LOG_OUT = 'LOG_OUT';

// 动作创建者
export const setUser = (user) => ({ type: SET_USER, payload: user });
export const logOut = () => ({ type: LOG_OUT });

// 初始状态
const initialState = {
  user: '张三',
};

// reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case LOG_OUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default userReducer;
