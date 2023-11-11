import slice from "./slices";
import * as thunks from "./thunks";
import * as selectors from "./selectors";

const main = { slice, thunks, selectors, actions: slice.actions };

export default main;
