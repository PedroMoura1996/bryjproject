export interface IMainState {
  isLoading: boolean;
  exception: boolean;
}

enum Etypes {
  SLICE_NAME = "main",
}

export default Etypes;
