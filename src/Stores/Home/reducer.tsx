import actions from './actions';
import IAction from 'Models/action';
import IQuestions from 'Models/questions';
import IOptions from 'Models/options';
import tests from './tests';

export const initialState = {
  questions: tests,
  options: [],
  error: undefined,
  view: { showForm: false }
};

function updateState(state: IState, newProps: IState) {
  return { ...state, ...newProps };
}

function updateTest(state: IState, payload: IView){
   const newQuestion = {...state.questions, ...payload }
   const newState = {...state, view: newQuestion}
   return newState;
}


export default function reducer(state: IState = initialState, action: IAction) {
  const { payload } = action;
  switch (action.type) {
    case actions.UPDATE_STATE(payload).type:
      return updateState(state, payload);
    case actions.UPDATE_TEST(payload).type:
        return updateTest(state, payload);
    default:
      return state;
  }
}

interface IView {
  showForm: boolean
}

interface IState {
  questions: IQuestions[],
  options: IOptions[],
  error: any,
  view: IView
}