import { combineReducers } from 'redux';
import counterReducer from './moudle/counter';
import userReducer from './moudle/user';
import boolReducer from './moudle/bool';

const rootReducer = combineReducers({
  counterData: counterReducer,
  userData: userReducer,
  boolData: boolReducer,
});

// combineReducers 将 counterReducer 和 userReducer 组合成一个 rootReducer。
// 这意味着它会将 counterReducer 和 userReducer 各自的状态和逻辑整合到一个大的状态树中，
// counterData 和 userData 成为最终状态中的两个属性，分别对应来自 counterReducer 和 userReducer 的状态。
// 这种组织方式有助于更好地管理和维护应用程序的状态
export default rootReducer;
