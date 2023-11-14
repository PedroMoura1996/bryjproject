import Modal from "@mui/material/Modal";
import { useState } from "react";
import "./countrylistitem.scss";
import { ICountryListItemProps } from "./types";
import { useTheme } from "../../wrappers/ThemeProvider/ThemeProvider";
import { ModalListItem } from "../ModalListItem";

export const CountryListItem = ({ country }: ICountryListItemProps) => {
  const [openModal, setOpenModal] = useState(false);
  const { darkMode } = useTheme();
  return (
    <>
      <div
        className={`${darkMode ? "dark" : "light"} country-list-item-container`}
        onClick={() => setOpenModal(true)}
        role="button"
      >
        <img
          className="country-flag"
          src={country.flag}
          alt="country flag"
        ></img>
        <h4 className="start-item">{country.name}</h4>
        <div className="start-item">{country.capital}</div>
      </div>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <div className="modal-container">
          <ModalListItem country={country} />
        </div>
      </Modal>
    </>
  );
};

export default CountryListItem;
