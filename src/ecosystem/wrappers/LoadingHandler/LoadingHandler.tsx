import React, { ComponentType } from "react";
import { useAppSelector } from "../../../store/reduxTyping";
import main from "../../../store/modules/main";
import { BryjLoader } from "../../atoms/BryjLoader";

const withLoadingHandler =
  (WrappedComponent: ComponentType<any>) =>
  ({ ...props }: any) => {
    const isLoading = useAppSelector(main.selectors.isLoadingSelector);
    return (
      <>
        {isLoading ? <BryjLoader /> : null}
        <WrappedComponent {...props} />;
      </>
    );
  };

export default withLoadingHandler;
