import ActionCreator from 'Helpers/ActionCreator';

const actionCreator = new ActionCreator('Home');

//TODO DEFINE Typo of actions.
export default {
  UPDATE_STATE: (payload: any) => actionCreator.create('UPDATE_STATE', payload),
  GET_TEST: (payload?: any) => actionCreator.create('GET_TEST', payload),
  UPDATE_TEST: (payload?: any) => actionCreator.create('UPDATE_TEST', payload),
}