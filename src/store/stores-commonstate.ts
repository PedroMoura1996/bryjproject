import { IMainState } from "./modules/main/types";

export const onInitializeMainStore = (
  initialState: IMainState = { isLoading: false, excepttion: false }
): IMainState => {
  const tempState: IMainState = {
    isLoading: false,
    excepttion: false,
  };
  return { ...initialState, ...tempState };
};
