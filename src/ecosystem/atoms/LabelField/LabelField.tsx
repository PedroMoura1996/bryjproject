import "./labelfield.scss";
import { ILabelFieldProps } from "./types";

const LabelField = ({ label, value }: ILabelFieldProps) => {
  return (
    <div className="label-field-container">
      <label className="bold" htmlFor={label}>
        {label}
      </label>
      <span id={label}>{value}</span>
    </div>
  );
};

export default LabelField;
