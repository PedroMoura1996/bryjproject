export interface IRequests {
  _requests: { [key: string]: any };
}

export type ExtendRequests<T> = T & IRequests;

/**
 * @param {string[]} thunks
 */
export const onDefault =
  (thunks: string[] = []) =>
  <T>(state: T): ExtendRequests<T> => ({
    ...state,
    _requests: thunks
      .map((name) => ({
        [name]: { loading: false, exception: false, success: false },
      }))
      .reduce((prev, curr) => ({ ...prev, ...curr }), {}),
  });

/**
 * @param {string} thunk
 */
export const onSuccess =
  (thunk: string) =>
  (state: { [key: string]: any } = {}, { payload }: any = {}): any => ({
    ...state,
    ...payload,
    _requests: {
      ...state._requests,
      [thunk]: { loading: false, exception: false, success: true },
    },
  });

export const onSuccessGenericArray =
  (thunk: string, objectName: string) =>
  (state: { [key: string]: any } = {}, { payload }: any): any => {
    return {
      ...state,
      [objectName]: [...state[objectName], ...payload],
      _requests: {
        ...state._requests,
        [thunk]: { loading: false, exception: false, success: true },
      },
    };
  };

/**
 * @param {string} thunk
 */
export const onException =
  (thunk: string) =>
  (state: { [key: string]: any } = {}, { payload }: any): any => {
    return {
      ...state,
      _requests: {
        ...state._requests,
        [thunk]: {
          loading: false,
          exception: true,
          success: false,
          exceptionDetails: payload,
        },
      },
    };
  };

/**
 * @param {string} thunk
 */
export const onRequest =
  (thunk: string) =>
  (state: { [key: string]: any } = {}): any => ({
    ...state,
    _requests: {
      ...state._requests,
      [thunk]: { loading: true, exception: false, success: false },
    },
  });

/**
 * @param {string} thunk
 */
export const isLoadingThunk =
  (thunk: string) =>
  ({ _requests = {} }: { [key: string]: any } = {}): boolean =>
    ({ ..._requests[thunk] }.loading);

/**
 * @param {string} thunk
 */
export const hasExceptionThunk =
  (thunk: string) =>
  ({ _requests = {} }: { [key: string]: any } = {}): boolean =>
    _requests[thunk].exception;
