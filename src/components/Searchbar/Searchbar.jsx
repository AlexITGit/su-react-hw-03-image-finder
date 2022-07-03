import React from "react";
import "./Searchbar.css";
import { SearchForm } from "./SearchForm/SearchForm";
import PropTypes from "prop-types";

export const Searchbar = ({ onSubmit }) => {
  return (
    <header className="Searchbar">
      <SearchForm onSubmit={onSubmit}></SearchForm>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
