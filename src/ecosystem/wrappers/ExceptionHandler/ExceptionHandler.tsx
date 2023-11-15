import { ComponentType } from "react";
import { useAppSelector } from "../../../store/reduxTyping";
import main from "../../../store/modules/main";
import { ServiceError } from "../../atoms/ServiceError";

const withExceptionHandler =
  (WrappedComponent: ComponentType<any>) =>
  ({ ...props }: any) => {
    const hasException = useAppSelector(main.selectors.hasExceptionSelector);
    return hasException ? <ServiceError /> : <WrappedComponent {...props} />;
  };

export default withExceptionHandler;
