import React from "react";
import "./ImageGalleryItem.css";
import PropTypes from "prop-types";

export const ImageGalleryItem = ({ url, modalUrl, onImgClick }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={url}
        alt="pic"
        className="ImageGalleryItem-image"
        onClick={() => onImgClick(modalUrl)}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  modalUrl: PropTypes.string.isRequired,
  onImgClick: PropTypes.func.isRequired,
};
