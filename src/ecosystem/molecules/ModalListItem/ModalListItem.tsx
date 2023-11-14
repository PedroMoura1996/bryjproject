import { LabelField } from "../../atoms/LabelField";
import "./modallistitem.scss";
import { IModalListItemProps } from "./types";

const ModalListItem = ({ country }: IModalListItemProps) => {
  return (
    <div className="modal-list-item-container">
      <img className="country-flag" src={country.flag} alt="country flag"></img>
      <LabelField label="Name:" value={country.name} />
      <LabelField label="Capital:" value={country.capital} />
      <LabelField label="Population:" value={country.population.toString()} />
      <LabelField label="Region:" value={country.region} />
      <LabelField label="SubRegion:" value={country.subregion} />
    </div>
  );
};

export default ModalListItem;
