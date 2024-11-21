const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// 动作创建者 
// 这两个函数用于创建一个描述增加计数的动作对象。它返回一个包含类型 INCREMENT 的对象，主要用于告诉 Redux store 需要执行一个增加计数的操作。
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

// 初始状态
const initialState = {
  count: 0,
};

// reducer函数 描述了如何改变state 
// counterReducer 是一个处理状态更新的函数，它根据传入的动作（action）类型来决定如何更新当前的状态。在这个函数中，当动作的类型为 INCREMENT 时，它会将 count 的值加 1；当类型为 DECREMENT 时，它会将 count 的值减 1
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// 因此，increment 和 counterReducer 之间的关联在于，
// 调用 increment 产生的动作会被 counterReducer 捕获，从而导致状态的变化。具体来说，
// 调用 increment() 会创建一个动作，传递给 counterReducer 后，会导致 count 的值增加。
export default counterReducer;
