import { DATA_STATE } from '../enums/data-state.enum';
import clonedeep from 'lodash.clonedeep';

export const StoreUtil = {
  setResolving(state: any, key: string, payload: any) {
    const newSubState = Object.assign({}, state[key], {
      state: DATA_STATE.RESOLVING,
      data: payload,
      message: '',
    });

    return Object.assign({}, state, {
      [key]: newSubState,
    });
  },

  setResolved(state: any, key: string, payload: any) {
    const newSubState = Object.assign({}, state[key], {
      state: DATA_STATE.RESOLVED,
      data: clonedeep(payload),
      message: '',
    });

    return Object.assign({}, state, {
      [key]: newSubState,
    });
  },

  setError(state: any, key: string, error?: any) {
    const newSubState = Object.assign({}, state[key], {
      state: DATA_STATE.ERROR,
      data: getDefault(state[key].data),
      message: error || '',
    });
    return Object.assign({}, state, {
      [key]: newSubState,
    });
  },

  setEmpty(state: any, key: string, message?: any) {
    const newSubState = Object.assign({}, state[key], {
      state: DATA_STATE.EMPTY,
      data: getDefault(state[key].data),
      message: message || '',
    });
    return Object.assign({}, state, {
      [key]: newSubState,
    });
  },
};

function getDefault(data) {
  switch (typeof data) {
    case 'object':
      return Array.isArray(data) ? [] : {};

    default:
      return undefined;
  }
}
